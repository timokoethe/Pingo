---
status: implemented
area: request-lifecycle
platforms:
  - macos
---

# Request Control

## Purpose

Give users clear control over requests that are in progress.

## User Story

As a user, I want to cancel a running request so that I do not have to wait for an unresponsive endpoint.

## Acceptance Criteria

- Send is unavailable while a request is running.
- Cancel is available only while a request is running.
- Cancelling stops the request and reports that it was cancelled.
- A request that takes too long ends with timeout feedback.
