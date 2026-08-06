# Repository guidance

## Feature documentation

- Feature specifications for the native macOS app live in `docs/features/`.
- This directory is exclusively for changes to the macOS app. Do not create or
  update feature specifications there for website-only changes.
- Before implementing or changing an app feature, review the relevant specification
  in that directory and keep it aligned with the resulting user-visible behavior.
- Start new feature specifications from `docs/features/_template.md`. Replace the
  placeholder front matter and sections, and keep acceptance criteria observable,
  concise, and implementation-independent.
- The guidance in `website/AGENTS.md` also applies to work inside `website/`.
