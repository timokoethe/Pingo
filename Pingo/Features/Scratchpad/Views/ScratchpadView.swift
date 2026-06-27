import SwiftUI

struct ScratchpadView: View {
    @Bindable var viewModel: ScratchpadViewModel

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Picker("Method", selection: $viewModel.method) {
                    ForEach(HTTPMethod.allCases) { method in
                        Text(method.rawValue).tag(method)
                    }
                }
                .labelsHidden()
                .frame(width: 96)

                TextField("URL", text: $viewModel.urlText)
                    .textFieldStyle(.roundedBorder)
            }

            VStack(alignment: .leading, spacing: 6) {
                Text("Headers")
                    .font(.caption)
                    .foregroundStyle(.secondary)

                TextEditor(text: $viewModel.headersText)
                    .font(.system(.body, design: .monospaced))
                    .frame(height: 72)
                    .overlay(RoundedRectangle(cornerRadius: 6).stroke(.quaternary))
            }

            VStack(alignment: .leading, spacing: 6) {
                Text("Body")
                    .font(.caption)
                    .foregroundStyle(.secondary)

                TextEditor(text: $viewModel.bodyText)
                    .font(.system(.body, design: .monospaced))
                    .frame(height: 96)
                    .overlay(RoundedRectangle(cornerRadius: 6).stroke(.quaternary))
            }

            HStack {
                Button {
                    Task { await viewModel.sendRequest() }
                } label: {
                    if viewModel.isSending {
                        ProgressView()
                            .controlSize(.small)
                    } else {
                        Text("Send")
                    }
                }
                .disabled(viewModel.isSending)

                Text(viewModel.statusText)
                    .foregroundStyle(.secondary)

                Spacer()
            }

            VStack(alignment: .leading, spacing: 6) {
                Text("Response")
                    .font(.caption)
                    .foregroundStyle(.secondary)

                Text(viewModel.responseSummaryText)
                    .font(.caption)
                    .foregroundStyle(.secondary)

                Text("Response Headers")
                    .font(.caption)
                    .foregroundStyle(.secondary)

                TextEditor(text: $viewModel.responseHeadersText)
                    .font(.system(.body, design: .monospaced))
                    .frame(height: 84)
                    .overlay(RoundedRectangle(cornerRadius: 6).stroke(.quaternary))

                Text("Response Body")
                    .font(.caption)
                    .foregroundStyle(.secondary)

                TextEditor(text: $viewModel.responseBodyText)
                    .font(.system(.body, design: .monospaced))
                    .frame(height: 160)
                    .overlay(RoundedRectangle(cornerRadius: 6).stroke(.quaternary))
            }
        }
        .padding(14)
        .frame(width: 460)
    }
}

#Preview {
    ScratchpadView(viewModel: ScratchpadViewModel(service: URLSessionAPIRequestService()))
}
