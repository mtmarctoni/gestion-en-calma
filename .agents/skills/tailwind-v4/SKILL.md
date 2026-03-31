---
name: tailwind-v4
description: Repo-local Tailwind v4 guidance for tokens, utilities, and layout styling in this project.
---

# Tailwind v4 Guide

- This repo uses Tailwind v4 via the Vite plugin.
- Design tokens live in `src/styles/global.css` using `@theme`.
- Build with semantic combinations, not giant one-off utility soup.
- Use plain CSS for shared patterns when that is clearer than repeating the same utility stack everywhere.

## Rules

- Reuse the earthy, calm palette already defined in the theme.
- Keep spacing generous and readable.
- Prefer composable wrappers and section shells over deeply nested layout tricks.
- Avoid trendy visual noise: glass, harsh gradients, neon accents, fake luxury chrome.
