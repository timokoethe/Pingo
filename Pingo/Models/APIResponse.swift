import Foundation

struct APIResponse {
    var statusCode: Int
    var headers: [AnyHashable: Any]
    var body: String
    var bodyByteCount: Int?
    var displayedBodyByteCount: Int
    var isBodyTruncated: Bool
    var isBodyText: Bool
    var duration: TimeInterval
}
