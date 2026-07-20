import Foundation

protocol APIRequestServicing {
    func send(_ request: APIRequest) async throws -> APIResponse
}

struct URLSessionAPIRequestService: APIRequestServicing {
    private let maxDisplayedBodyBytes = 512 * 1024
    private let requestTimeout: TimeInterval = 30
    private let resourceTimeout: TimeInterval = 60
    private let session: URLSession

    init() {
        let configuration = URLSessionConfiguration.ephemeral
        configuration.requestCachePolicy = .reloadIgnoringLocalCacheData
        configuration.urlCache = nil
        configuration.httpShouldSetCookies = false
        configuration.httpCookieStorage = nil
        configuration.urlCredentialStorage = nil
        configuration.timeoutIntervalForRequest = requestTimeout
        configuration.timeoutIntervalForResource = resourceTimeout
        self.session = URLSession(configuration: configuration)
    }

    func send(_ request: APIRequest) async throws -> APIResponse {
        var urlRequest = URLRequest(url: request.url)
        urlRequest.httpMethod = request.method.rawValue
        urlRequest.timeoutInterval = requestTimeout

        for (field, value) in request.headers {
            urlRequest.setValue(value, forHTTPHeaderField: field)
        }

        if !request.body.isEmpty {
            urlRequest.httpBody = Data(request.body.utf8)
        }

        let startDate = Date()
        let (bytes, response) = try await session.bytes(for: urlRequest)
        let httpResponse = response as? HTTPURLResponse
        let bodyByteCount = httpResponse.flatMap(Self.contentLength)
        let bodyData = try await displayedBodyData(from: bytes)
        let duration = Date().timeIntervalSince(startDate)
        let body = Self.utf8String(from: bodyData.data, repairingTruncatedData: bodyData.isTruncated)
        let isBodyTruncated = bodyData.isTruncated || bodyByteCount.map { $0 > bodyData.data.count } == true

        return APIResponse(
            statusCode: httpResponse?.statusCode ?? 0,
            headers: httpResponse?.allHeaderFields ?? [:],
            body: body ?? "",
            bodyByteCount: bodyByteCount,
            displayedBodyByteCount: bodyData.data.count,
            isBodyTruncated: isBodyTruncated,
            isBodyText: body != nil,
            duration: duration
        )
    }

    private func displayedBodyData(
        from bytes: URLSession.AsyncBytes
    ) async throws -> (data: Data, isTruncated: Bool) {
        var data = Data()
        data.reserveCapacity(maxDisplayedBodyBytes)

        for try await byte in bytes {
            guard data.count < maxDisplayedBodyBytes else {
                return (data, true)
            }

            data.append(byte)
        }

        return (data, false)
    }

    private static func contentLength(from response: HTTPURLResponse) -> Int? {
        guard let value = response.value(forHTTPHeaderField: "Content-Length") else {
            return nil
        }

        return Int(value)
    }

    private static func utf8String(from data: Data, repairingTruncatedData: Bool) -> String? {
        guard repairingTruncatedData else {
            return String(data: data, encoding: .utf8)
        }

        var textData = data

        for _ in 0...3 {
            if let string = String(data: textData, encoding: .utf8) {
                return string
            }

            guard !textData.isEmpty else {
                break
            }

            textData.removeLast()
        }

        return nil
    }
}
