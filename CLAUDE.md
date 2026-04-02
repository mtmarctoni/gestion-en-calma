# Claude Notes

## What This Project Does

`Gestión en Calma` is the first client site built on top of a reusable Astro + Sanity template for Spanish service businesses.

The real promise is operational relief: helping small businesses delegate administrative and digital work so they can focus on their core business.

## Architecture

- `astro.config.mjs`: Astro config, Vercel adapter, Tailwind, sitemap, Sanity integration, `/studio` route.
- `sanity.config.ts`: root Sanity config required by `@sanity/astro`.
- `studio/schemaTypes/**`: content model.
- `src/data/fallbackContent.ts`: local fallback content used when Sanity is not configured.
- `src/lib/sanity/queries.ts`: all GROQ queries.
- `src/lib/sanity/loaders.ts`: fetch-or-fallback layer for page data.
- `src/layouts/BaseLayout.astro`: global layout, metadata, header, footer.
- `src/pages/index.astro`: homepage.
- `src/pages/servicios/index.astro`: service overview page.
- `src/pages/servicios/[slug].astro`: service detail pages.
- `src/pages/sobre-mi/index.astro`: founder story page.
- `src/pages/contacto/index.astro`: contact page.
- `src/pages/api/contact.ts`: JSON contact endpoint.

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

## Conventions

- Copy should sound close, clear, specific, and trustworthy.
- Avoid fake proof. If testimonials are not real yet, leave them out.
- Use arrays of strings or small structured objects when they are enough. Do not turn everything into rich text.
- Keep sections reusable for future service-business projects.
- `/studio` is part of the product surface, but it is still an editor tool, not a public marketing page.
- **For UI/UX changes**: Always read `.agents/instructions/brand.md` first for color palette and typography rules.
- **For visual implementation**: Check `.agents/instructions/design-system.md` for CSS tokens and component patterns.
- **Default color palette**: Amarillo Girasol (#F7BC1E) is the primary action color. See brand.md for full palette.

## Local Workflow

1. `pnpm install`
2. `pnpm dev`
3. Make the smallest correct change.
4. `pnpm check`
5. If changing schemas, test `/studio` and the consuming pages.

## Review Baseline

- Prioritize real regressions, broken content paths, missing fallbacks, and broken mobile layouts.
- Do not nitpick style-only issues unless they conflict with this repo's calm, natural design language.
- Check that new CMS fields are actually consumed in the frontend or intentionally deferred.

## Known Notes

- The site renders with fallback content before Sanity env vars are configured.
- The contact endpoint intentionally fails loudly if email delivery env vars are missing.
- Legal pages are starter templates and should not ship without final legal review.
