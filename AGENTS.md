# Repository guidance

## Feature documentation

- Feature specifications for the native macOS app live in `docs/features/`.
- This directory is exclusively for changes to the macOS app. Do not create or
  update feature specifications there for website-only changes.
- Every change to user-visible macOS app behavior must add, update, or remove the
  corresponding specification in the same change.
- Before completing a macOS app change, compare `docs/features/` with the current
  user-visible app behavior. Verify that every app feature has exactly one current
  specification and that no specification describes removed behavior or website-only
  functionality.
- Start new feature specifications from `docs/features/_template.md`. Replace the
  placeholder front matter and sections, and keep acceptance criteria observable,
  concise, and implementation-independent.
- The guidance in `website/AGENTS.md` also applies to work inside `website/`.
