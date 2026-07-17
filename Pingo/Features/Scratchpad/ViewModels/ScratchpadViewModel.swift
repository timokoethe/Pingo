import Foundation
import Observation

@Observable
final class ScratchpadViewModel {
    var urlText = "https://httpbin.org/get"
    var method: HTTPMethod = .get
    var headersText = ""
    var bodyText = ""
    var responseBodyText = ""
    var responseHeadersText = ""
    var statusText = "Ready"
    var responseSummaryText = "No response yet"
    var isSending = false

    private let service: APIRequestServicing
    @ObservationIgnored private var requestTask: Task<Void, Never>?

    init(service: APIRequestServicing) {
        self.service = service
    }

    func sendRequest() {
        guard !isSending else { return }

        guard let url = URL(string: urlText),
              let scheme = url.scheme?.lowercased(),
              ["http", "https"].contains(scheme),
              url.host != nil else {
            statusText = "Invalid URL"
            responseSummaryText = "Request not sent"
            responseHeadersText = ""
            responseBodyText = ""
            return
        }

        isSending = true
        statusText = "Sending..."
        responseSummaryText = "Waiting for response"
        responseHeadersText = ""
        responseBodyText = ""

        let apiRequest = APIRequest(
            url: url,
            method: method,
            headers: parseHeaders(headersText),
            body: bodyText
        )

        requestTask = Task {
            do {
                let response = try await service.send(apiRequest)
                try Task.checkCancellation()

                statusText = "Status \(response.statusCode)"
                responseSummaryText = summaryText(for: response)
                responseHeadersText = headersText(for: response.headers)
                responseBodyText = bodyText(for: response)
            } catch {
                responseHeadersText = ""

                if Self.isCancellationError(error) {
                    statusText = "Cancelled"
                    responseSummaryText = "Request cancelled"
                } else if Self.isTimeoutError(error) {
                    statusText = "Timed out"
                    responseSummaryText = "Request timed out"
                    responseBodyText = error.localizedDescription
                } else {
                    statusText = "Error"
                    responseSummaryText = "Request failed"
                    responseBodyText = error.localizedDescription
                }
            }

            isSending = false
            requestTask = nil
        }
    }

    func cancelRequest() {
        guard isSending else { return }

        statusText = "Cancelling..."
        responseSummaryText = "Stopping request"
        requestTask?.cancel()
    }

    private static func isCancellationError(_ error: Error) -> Bool {
        if error is CancellationError {
            return true
        }

        if let urlError = error as? URLError {
            return urlError.code == .cancelled
        }

        return false
    }

    private static func isTimeoutError(_ error: Error) -> Bool {
        guard let urlError = error as? URLError else {
            return false
        }

        return urlError.code == .timedOut
    }

    private func parseHeaders(_ text: String) -> [String: String] {
        text
            .split(separator: "\n")
            .reduce(into: [String: String]()) { headers, line in
                let parts = line.split(separator: ":", maxSplits: 1)

                guard parts.count == 2 else { return }

                let key = parts[0].trimmingCharacters(in: .whitespacesAndNewlines)
                let value = parts[1].trimmingCharacters(in: .whitespacesAndNewlines)

                if !key.isEmpty {
                    headers[key] = value
                }
            }
    }

    private func summaryText(for response: APIResponse) -> String {
        let contentType = response.headers.first { key, _ in
            String(describing: key).caseInsensitiveCompare("Content-Type") == .orderedSame
        }?.value

        let formattedDuration = String(format: "%.0f ms", response.duration * 1000)
        let contentTypeText = contentType.map { String(describing: $0) } ?? "Unknown content type"

        return "Status \(response.statusCode) | \(formattedDuration) | \(contentTypeText)"
    }

    private func bodyText(for response: APIResponse) -> String {
        if !response.isBodyText {
            let byteCount = response.bodyByteCount.map { "\($0) bytes" } ?? "\(response.displayedBodyByteCount)+ bytes"
            return "Response body is not valid UTF-8 text (\(byteCount))."
        }

        guard response.isBodyTruncated else {
            return response.body
        }

        return """
        \(response.body)

        \(truncationText(for: response))
        """
    }

    private func truncationText(for response: APIResponse) -> String {
        if let bodyByteCount = response.bodyByteCount {
            return "Response body truncated. Showing \(response.displayedBodyByteCount) of \(bodyByteCount) bytes."
        }

        return "Response body truncated. Showing first \(response.displayedBodyByteCount) bytes."
    }

    private func headersText(for headers: [AnyHashable: Any]) -> String {
        headers
            .map { key, value in
                "\(String(describing: key)): \(String(describing: value))"
            }
            .sorted()
            .joined(separator: "\n")
    }
}
