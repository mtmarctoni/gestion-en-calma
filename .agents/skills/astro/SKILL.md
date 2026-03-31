---
name: astro
description: Repo-local Astro guidance for this project. Use when changing pages, layouts, routes, static generation, or API endpoints.
---

# Astro Guide

- Public pages should stay prerendered whenever possible.
- `/studio` and `/api/contact` are the main dynamic routes.
- Shared page chrome belongs in `src/layouts/BaseLayout.astro`.
- Keep routes simple and content-driven.
- Prefer small Astro components over framework islands.

## Commands

- `pnpm dev`
- `pnpm typecheck`
- `pnpm build`

## File Map

- `src/pages/**`: routes
- `src/layouts/**`: shared shells
- `src/components/**`: reusable UI and sections
- `src/lib/sanity/**`: frontend content fetching

## Rules

- Do not move content fetching into random page-local helpers when a shared loader already exists.
- Keep canonical URLs and metadata accurate.
- If a route needs server behavior, make that explicit and keep the rest static.
