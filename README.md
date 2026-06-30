# Pingo for macOS

[![License: MIT](https://img.shields.io/badge/license-MIT-orange)](https://opensource.org/license/mit)
![Framework](https://img.shields.io/badge/SwiftUI-orange)
![Platform](https://img.shields.io/badge/Platforms-macOS-orange)
![Xcode](https://img.shields.io/badge/Xcode-26-orange)
![macOS](https://img.shields.io/badge/macOS-26-orange)
![Apple](https://img.shields.io/badge/Apple-000000?style=flat&logo=apple)

Pingo is a lightning-fast API scratchpad built for the macOS menu bar. It gives
you a focused place to fire off small HTTP requests without opening a full API
client.

Designed for quick checks while building, debugging, or exploring APIs, Pingo
keeps the essential request flow close at hand: choose a method, paste a URL,
add headers or a body when needed, send the request, and inspect the response
directly from a compact scratchpad window.

The app keeps the workflow intentionally lightweight. It is not meant to replace
large API workspaces or team collections; it is a fast companion for the small
requests developers make throughout the day.

## Features

- Menu bar first: open Pingo from the macOS menu bar whenever you need it.
- Common HTTP methods: send `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`
  requests.
- Quick URL input: paste an endpoint and run it immediately.
- Header editor: add request headers in a simple `Name: Value` format.
- Body editor: write plain request payloads for methods that need a body.
- Response viewer: inspect status, duration, content type, headers, and text
  response previews, with large bodies truncated for responsiveness.
- Status feedback: see request progress, URL validation errors, and HTTP
  status codes at a glance.

## Development

### macOS app

Open the project in Xcode and run the `Pingo` scheme:

```sh
open Pingo.xcodeproj
```

The native SwiftUI app is located in [`Pingo/`](Pingo/).

### Website

The Pingo website is developed separately in [`website/`](website/). 
Its
Next.js application code is located in [`website/app/`](website/app/), with the
landing page in [`website/app/page.tsx`](website/app/page.tsx).

To run the website locally:

```sh
cd website
npm install
npm run dev
```

The development server is available at
[http://localhost:3000](http://localhost:3000). 
See the
[website README](website/README.md) for the available scripts and deployment
details.

## Contributing

Contributions are welcome. Please keep changes focused and see [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

Report security issues privately as described in [SECURITY.md](SECURITY.md).

## License

Pingo is released under the MIT License. See [LICENSE](LICENSE).
