# Gestion en Calma

Astro + Sanity starter for high-performance Spanish service-business websites.

This repo is not a one-off brochure site. It is the reusable baseline for building fast, calm, editable websites for small businesses, solo operators, wellness brands, and service professionals.

## Stack

- `Astro 6` for the frontend
- `Sanity Studio` embedded at `/studio`
- `Tailwind v4` for the design system
- `TypeScript` throughout
- `Biome` for formatting and linting
- `Vercel` adapter for deploys and API routes

## What Ships In This Repo

- Multi-page marketing site structure
- Embedded Sanity Studio at `/studio`
- Constrained content model, not a page builder
- Fallback content so the site still renders before Sanity is configured
- Contact form API route ready for Resend
- Reusable section system for future service-business clients

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm check
pnpm format
pnpm sanity
```

## Environment

Copy `.env.example` to `.env.local` and fill the real values before production.

Important notes:

- If `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` are missing, the public site uses local fallback content.
- The embedded Studio still exists at `/studio`, but it will not connect to a real Sanity project until those variables are set.
- The contact form requires the Resend variables to actually deliver email.

## Sanity Workflow

- Public site content lives in singletons and documents under `/studio/schemaTypes`
- Frontend queries project Sanity content at build time or falls back to local seed content
- The Studio route is `/studio`
- Keep schemas constrained so editors can change content without breaking layout quality

## Content Model

Singletons:

- `siteSettings`
- `homePage`
- `aboutPage`
- `servicesPage`
- `contactPage`

Documents:

- `service`
- `faqItem`
- `testimonial`

## Deployment

Recommended target: `Vercel`

Key env vars for production:

- `PUBLIC_SITE_URL`
- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN` if you later need authenticated reads
- `RESEND_API_KEY`
- `CONTACT_FORM_TO_EMAIL`
- `CONTACT_FORM_FROM_EMAIL`

## Repo Guides

Read these before making changes:

- `AGENTS.md`
- `CLAUDE.md`
- `SKILLS.md`
- `.agents/instructions/*.md`

## Legal Pages

The legal pages included here are structured placeholders. They must be reviewed and completed with Yolanda's final legal and fiscal details before launch.
