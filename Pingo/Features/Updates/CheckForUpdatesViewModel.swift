//
//  CheckForUpdatesViewModel.swift
//  Pingo
//
//  Created by Timo Köthe on 27.06.26.
//

import Combine
import Sparkle

@MainActor
final class CheckForUpdatesViewModel: ObservableObject {
    @Published private(set) var canCheckForUpdates = false

    private var canCheckForUpdatesCancellable: AnyCancellable?

    init(updater: SPUUpdater) {
        canCheckForUpdatesCancellable = updater.publisher(for: \.canCheckForUpdates)
            .receive(on: DispatchQueue.main)
            .assign(to: \.canCheckForUpdates, on: self)
    }
}
