---
name: sanity
description: Repo-local Sanity guidance for schemas, singletons, Studio structure, and Astro query projections.
---

# Sanity Guide

- The embedded Studio lives at `/studio`.
- `sanity.config.ts` must stay at the repo root for `@sanity/astro`.
- Actual schema source files live under `studio/`.

## Modeling Rules

- Use singletons for page-level content.
- Use documents for repeatable content.
- Keep editor fields constrained and obvious.
- Match GROQ query projections to the frontend TypeScript shapes in `src/data/fallbackContent.ts`.

## Current Schema Groups

- `studio/schemaTypes/singletons/*`
- `studio/schemaTypes/documents/*`
- `studio/schemaTypes/objects/*`

## Current Repeatable Documents

- `service`
- `faqItem`
- `testimonial`

## Studio Rules

- Keep the desk structure easy for non-technical editors.
- Hide singleton duplication and delete actions.
- Do not add a visual page builder.
