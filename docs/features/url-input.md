---
status: implemented
area: request-composer
platforms:
  - macos
---

# URL Input

## Purpose

Provide a direct way to enter the endpoint for a request.

## User Story

As a user, I want to paste an endpoint URL so that I can send a request immediately.

## Acceptance Criteria

- The scratchpad provides an editable URL field.
- Pingo accepts HTTP and HTTPS URLs with a host.
- An invalid URL is rejected before a request is sent.
