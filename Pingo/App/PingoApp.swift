import SwiftUI

@main
struct PingoApp: App {
    @State private var viewModel = ScratchpadViewModel(service: URLSessionAPIRequestService())

    var body: some Scene {
        MenuBarExtra {
            ScratchpadView(viewModel: viewModel)
        } label: {
            Image("MenuBarIcon")
                .resizable()
                .scaledToFit()
                .frame(width: 18, height: 18)
        }
        .menuBarExtraStyle(.window)
    }
}
