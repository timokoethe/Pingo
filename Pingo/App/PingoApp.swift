import SwiftUI

@main
struct PingoApp: App {
    @State private var viewModel = ScratchpadViewModel(service: URLSessionAPIRequestService())

    var body: some Scene {
        MenuBarExtra("Pingo", systemImage: "terminal") {
            ScratchpadView(viewModel: viewModel)
        }
        .menuBarExtraStyle(.window)
    }
}
