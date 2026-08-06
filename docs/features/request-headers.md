---
status: implemented
area: request-composer
platforms:
  - macos
---

# Request Headers

## Purpose

Allow requests to include custom metadata such as authorization and content type.

## User Story

As a user, I want to add request headers so that I can call endpoints with their required metadata.

## Acceptance Criteria

- The scratchpad provides a multiline header editor.
- Valid `Name: Value` entries are included in the outgoing request.
- Empty or malformed lines do not prevent valid headers from being sent.
