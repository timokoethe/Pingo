---
status: implemented
area: request-lifecycle
platforms:
  - macos
---

# Request Status Feedback

## Purpose

Make the current request state and outcome clear at a glance.

## User Story

As a user, I want concise request feedback so that I know whether Pingo is waiting, finished, or needs attention.

## Acceptance Criteria

- The scratchpad indicates when a request is being sent.
- Completed requests show their HTTP status code.
- Invalid URLs, cancellations, timeouts, and other failures show distinct feedback.
