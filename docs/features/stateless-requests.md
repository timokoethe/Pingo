---
status: implemented
area: request-lifecycle
platforms:
  - macos
---

# Stateless Requests

## Purpose

Keep quick API checks isolated and predictable between sends.

## User Story

As a user, I want requests to avoid implicit session state so that each result reflects the request I entered.

## Acceptance Criteria

- Pingo does not automatically reuse cookies, cached responses, or stored credentials.
- Users can still provide authorization, cookies, and cache directives through request headers.
