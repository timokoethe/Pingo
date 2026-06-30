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

    init(service: APIRequestServicing) {
        self.service = service
    }

    func sendRequest() async {
        guard let url = URL(string: urlText), url.scheme != nil, url.host != nil else {
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

        do {
            let response = try await service.send(
                APIRequest(
                    url: url,
                    method: method,
                    headers: parseHeaders(headersText),
                    body: bodyText
                )
            )

            statusText = "Status \(response.statusCode)"
            responseSummaryText = summaryText(for: response)
            responseHeadersText = headersText(for: response.headers)
            responseBodyText = bodyText(for: response)
        } catch {
            statusText = "Error"
            responseSummaryText = "Request failed"
            responseHeadersText = ""
            responseBodyText = error.localizedDescription
        }

        isSending = false
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
