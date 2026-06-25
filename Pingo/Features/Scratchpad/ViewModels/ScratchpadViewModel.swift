import Foundation
import Observation

@Observable
final class ScratchpadViewModel {
    var urlText = "https://httpbin.org/get"
    var method: HTTPMethod = .get
    var headersText = ""
    var bodyText = ""
    var responseText = ""
    var statusText = "Bereit"
    var isSending = false

    private let service: APIRequestServicing

    init(service: APIRequestServicing) {
        self.service = service
    }

    func sendRequest() async {
        guard let url = URL(string: urlText), url.scheme != nil, url.host != nil else {
            statusText = "Ungueltige URL"
            return
        }

        isSending = true
        statusText = "Sende..."

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
            responseText = response.body
        } catch {
            statusText = "Fehler"
            responseText = error.localizedDescription
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
}
