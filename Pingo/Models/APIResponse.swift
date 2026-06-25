import Foundation

struct APIResponse {
    var statusCode: Int
    var headers: [AnyHashable: Any]
    var body: String
}
