# Contributing to Pingo

Thanks for helping improve Pingo.

## Getting Started

Open the project in Xcode and run the `Pingo` scheme:

```sh
open Pingo.xcodeproj
```

## Guidelines

- Keep pull requests small and focused.
- For native app features, review the specifications in
  [`docs/features/`](docs/features/) and keep the relevant document aligned with
  user-visible behavior. Start new specifications from
  [`docs/features/_template.md`](docs/features/_template.md). Do not use this
  directory to document website-only changes.
- Follow the existing Swift and SwiftUI style.
- Be careful with network behavior. Pingo sends HTTP requests from the user's Mac.
- Keep the request session stateless: do not enable automatic cookies, response
  caching, or credential storage. Users can provide cookies and credentials
  explicitly as request headers when needed; local response caching remains
  disabled.
- Avoid logging or exposing sensitive headers, request bodies, or responses.
- Include clear manual test steps in your pull request.

## Issues

Use GitHub Issues for bugs and feature requests. Please include your Pingo version, macOS version, and steps to reproduce.

For security issues, follow [SECURITY.md](SECURITY.md).

## Releases

Maintainers should follow the canonical [release process](docs/release.md).
