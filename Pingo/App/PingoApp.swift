import AppKit
import SwiftUI
import Sparkle

@main
struct PingoApp: App {
    @State private var viewModel = ScratchpadViewModel(service: URLSessionAPIRequestService())
    private let updaterController: SPUStandardUpdaterController
    @StateObject private var checkForUpdatesViewModel: CheckForUpdatesViewModel

    init() {
        let updaterController = SPUStandardUpdaterController(
            startingUpdater: true,
            updaterDelegate: nil,
            userDriverDelegate: nil
        )

        self.updaterController = updaterController
        _checkForUpdatesViewModel = StateObject(
            wrappedValue: CheckForUpdatesViewModel(updater: updaterController.updater)
        )
    }

    var body: some Scene {
        MenuBarExtra {
            VStack(spacing: 0) {
                ScratchpadView(viewModel: viewModel)

                Divider()

                HStack {
                    Button {
                        NSApp.terminate(nil)
                    } label: {
                        Label("Quit", systemImage: "power")
                    }
                    .keyboardShortcut("q", modifiers: .command)

                    Spacer()

                    Button("Check for Updates...") {
                        updaterController.checkForUpdates(nil)
                    }
                    .disabled(!checkForUpdatesViewModel.canCheckForUpdates)
                }
                .padding(.horizontal, 14)
                .padding(.vertical, 10)
                .frame(width: 460)
            }
        } label: {
            Image("MenuBarIcon")
                .resizable()
                .scaledToFit()
                .frame(width: 18, height: 18)
        }
        .menuBarExtraStyle(.window)
        .commands {
            CommandGroup(replacing: .appTermination) {
                Button("Quit Pingo") {
                    NSApp.terminate(nil)
                }
                .keyboardShortcut("q", modifiers: .command)
            }
        }
    }
}
