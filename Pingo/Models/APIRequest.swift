import Foundation

enum HTTPMethod: String, CaseIterable, Identifiable {
    case get = "GET"
    case post = "POST"
    case put = "PUT"
    case patch = "PATCH"
    case delete = "DELETE"

    var id: String { rawValue }
}

struct APIRequest {
    var url: URL
    var method: HTTPMethod
    var headers: [String: String]
    var body: String
}
