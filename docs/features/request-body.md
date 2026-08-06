---
status: implemented
area: request-composer
platforms:
  - macos
---

# Request Body

## Purpose

Allow users to send a plain-text payload with a request.

## User Story

As a user, I want to enter a request body so that I can test endpoints that accept payloads.

## Acceptance Criteria

- The scratchpad provides a multiline body editor.
- Non-empty body text is sent as the request payload.
- An empty body does not add a payload to the request.
