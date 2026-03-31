# Gestion en Calma Agent Guide

## Project Overview

- Stack: Astro 6, TypeScript, Tailwind CSS v4, Sanity Studio, Vercel adapter.
- Purpose: reusable Spanish-first website template for service businesses, starting with `Gestión en Calma`.
- Main runtime paths:
  - `src/pages/index.astro` renders the homepage.
  - `src/pages/servicios/[slug].astro` renders individual service pages.
  - `src/pages/contacto/index.astro` owns the contact flow.
  - `src/pages/api/contact.ts` handles contact form delivery.
  - `sanity.config.ts` and `studio/**` define the embedded Studio at `/studio`.

## First Files To Read

- `AGENTS.md` for repo guardrails.
- `CLAUDE.md` for architecture and content map.
- `src/data/fallbackContent.ts` before changing copy or content shapes.
- `src/lib/sanity/loaders.ts` and `src/lib/sanity/queries.ts` before changing content fetching.
- `studio/schemaTypes/**` before changing the CMS model.

## Working Rules

- User-facing copy is Spanish unless a file is clearly internal-only.
- Preserve the current visual language: calm, natural, warm, modern, professional.
- Prefer constrained CMS fields over open-ended layout freedom.
- Keep Astro pages static or prerendered whenever possible. Use server behavior only where needed, like `/studio` and `/api/contact`.
- Reuse existing content shapes instead of introducing parallel models for the same page.

## Commands

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Typecheck: `pnpm typecheck`
- Lint + format check: `pnpm lint`
- Full local quality gate: `pnpm check`
- Production build: `pnpm build`
- Sanity CLI: `pnpm sanity`

## Environment

- Public site URL: `PUBLIC_SITE_URL`
- Sanity frontend config: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`
- Sanity Studio config: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`
- Optional authenticated reads: `SANITY_API_READ_TOKEN`
- Contact form delivery: `RESEND_API_KEY`, `CONTACT_FORM_TO_EMAIL`, `CONTACT_FORM_FROM_EMAIL`

## Validation

- Verify desktop and mobile layouts after meaningful UI changes.
- Run `pnpm check` before handing off substantial changes.
- For form changes, test `/contacto/` and the `/api/contact` response path.
- For schema changes, test `/studio` and at least one frontend query that consumes the changed fields.

## Repo Notes

- The frontend intentionally falls back to local content when Sanity is not configured.
- The legal pages are placeholders and must be reviewed with final business details before launch.
- Keep `/studio` embedded. Do not move the Studio to a separate repo unless there is a strong operational reason.
