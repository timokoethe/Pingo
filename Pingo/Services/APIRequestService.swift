import Foundation

protocol APIRequestServicing {
    func send(_ request: APIRequest) async throws -> APIResponse
}

struct URLSessionAPIRequestService: APIRequestServicing {
    func send(_ request: APIRequest) async throws -> APIResponse {
        var urlRequest = URLRequest(url: request.url)
        urlRequest.httpMethod = request.method.rawValue

        for (field, value) in request.headers {
            urlRequest.setValue(value, forHTTPHeaderField: field)
        }

        if !request.body.isEmpty {
            urlRequest.httpBody = Data(request.body.utf8)
        }

        let startDate = Date()
        let (data, response) = try await URLSession.shared.data(for: urlRequest)
        let duration = Date().timeIntervalSince(startDate)
        let httpResponse = response as? HTTPURLResponse

        return APIResponse(
            statusCode: httpResponse?.statusCode ?? 0,
            headers: httpResponse?.allHeaderFields ?? [:],
            body: String(data: data, encoding: .utf8) ?? "",
            duration: duration
        )
    }
}
