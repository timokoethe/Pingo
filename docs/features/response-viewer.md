---
status: implemented
area: response-viewer
platforms:
  - macos
---

# Response Viewer

## Purpose

Show the essential result of an API call directly in the scratchpad.

## User Story

As a user, I want to inspect a response so that I can quickly understand how an endpoint behaved.

## Acceptance Criteria

- The response shows its HTTP status, duration, content type, and headers.
- UTF-8 response bodies are displayed as text.
- Large response bodies are truncated with a visible notice.
- A non-text response is identified without displaying corrupted content.
- The displayed response can be selected and copied, but not edited.
