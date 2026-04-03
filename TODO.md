# TODO.md — Improvements & Technical Debt

> **Project:** Gestión en Calma  
> **Last Updated:** 2026-04-03  
> **Status:** Active — Pre-Launch Phase

---

## Priority Legend

- **P0 (Critical)** — Must fix before launch. Security, legal, or breaking issues.
- **P1 (High)** — Should fix within 2 weeks of launch. Performance, SEO, UX gaps.
- **P2 (Medium)** — Fix within 1 month. Nice-to-have improvements.
- **P3 (Low)** — Enhancement backlog. Future iterations.

---

## P0 — CRITICAL (Pre-Launch Blockers)

### LEGAL-01 — Finalize Legal Pages Content
- **What:** Aviso legal, Política de privacidad, and Política de cookies are placeholders
- **Why:** AGENTS.md explicitly states "legal pages are starter templates and must be reviewed with final business details before launch"
- **Impact:** Legal liability, non-compliance with Spanish/EU regulations
- **Effort:** S (human: 2h / CC: 15min)
- **Depends on:** Final details from Yolanda (business registration, fiscal data, DPO contact)
- **Action:** 
  1. Collect final legal details from client
  2. Update `/src/pages/aviso-legal.astro`
  3. Update `/src/pages/politica-privacidad.astro`
  4. Update `/src/pages/politica-cookies.astro`

### SEC-01 — Add Rate Limiting to Contact Form
- **What:** No rate limiting on `/api/contact.ts` POST endpoint
- **Why:** Vulnerable to spam, abuse, and email flooding attacks
- **Impact:** Email service abuse, potential blacklisting
- **Effort:** M (human: 4h / CC: 30min)
- **Options:** 
  - Vercel KV + `@upstash/ratelimit` (serverless-friendly)
  - In-memory Map with IP tracking (simpler, but resets on deploy)
- **Implementation:** Add IP-based rate limit (3 submissions per 15 min per IP)

### SEC-02 — Add Security Headers
- **What:** Missing CSP, X-Frame-Options, HSTS, etc.
- **Why:** XSS protection, clickjacking prevention, secure transport
- **Impact:** Security vulnerabilities flagged by scanners
- **Effort:** S (human: 2h / CC: 20min)
- **Action:** Configure in `astro.config.mjs` via Vercel adapter headers or `vercel.json`
- **Headers to add:**
  ```
  Content-Security-Policy
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security (HSTS)
  ```

### OBS-01 — Add Error Logging & Observability
- **What:** No visibility into production errors
- **Why:** Silent failures in contact form, Sanity fetch errors, etc.
- **Impact:** Can't debug issues reported by users
- **Effort:** M (human: 4h / CC: 30min)
- **Options:**
  - Sentry (free tier, good for Astro/Vercel)
  - Logtail/Vercel Log Drains
  - Custom error boundary components
- **Implementation:** 
  - Add Sentry integration
  - Wrap API routes with error handlers
  - Log Sanity fetch failures with context

### CONTENT-01 — Remove or Fix Placeholder Testimonials
- **What:** Testimonials section shows placeholder content marked `isPlaceholder: true`
- **Why:** "Avoid fake proof. If testimonials are not real yet, leave them out." — CLAUDE.md
- **Impact:** Trust erosion, appears inauthentic
- **Effort:** XS (human: 30min / CC: 5min)
- **Action:** Either:
  - Hide testimonials section until real ones are available
  - Or remove the placeholder from `fallbackContent.ts`

---

## P1 — HIGH PRIORITY (Post-Launch, Week 1-2)

### PERF-01 — Add Sanity CDN Caching
- **What:** `useCdn: false` in `astro.config.mjs` and no request caching
- **Why:** Every page load fetches from Sanity API directly
- **Impact:** Slower page loads, unnecessary API calls, costs
- **Effort:** S (human: 2h / CC: 15min)
- **Implementation:**
  - Enable CDN for production: `useCdn: import.meta.env.PROD`
  - Add Astro cache directive for Sanity fetches
  - Consider ISR (Incremental Static Regeneration) for dynamic content

### SEO-01 — Generate Dynamic Sitemap.xml
- **What:** `astro.config.mjs` has `@astrojs/sitemap` but no dynamic service pages
- **Why:** Service detail pages (`/servicios/[slug].astro`) are not in sitemap
- **Impact:** Search engines may miss service pages
- **Effort:** S (human: 2h / CC: 20min)
- **Action:** 
  - Create `/src/pages/sitemap.xml.ts` endpoint
  - Query services from Sanity and include in sitemap
  - Reference: https://docs.astro.build/en/guides/integrations-guide/sitemap/

### SEO-02 — Add robots.txt
- **What:** No `/public/robots.txt` file
- **Why:** Crawler guidance, sitemap reference
- **Impact:** SEO best practice
- **Effort:** XS (human: 15min / CC: 2min)
- **Content:**
  ```
  User-agent: *
  Allow: /
  Disallow: /studio/
  Sitemap: https://gestion-en-calma.vercel.app/sitemap.xml
  ```

### UX-01 — Add Form Validation Feedback
- **What:** Contact form submits but doesn't show inline validation errors
- **Why:** Users only see errors after page redirect (poor UX)
- **Impact:** Form abandonment, confusion
- **Effort:** M (human: 4h / CC: 30min)
- **Implementation:**
  - Add client-side validation with visual feedback
  - Show field-level error messages
  - Preserve form data on error redirect

### UX-02 — Create Custom 404 Page
- **What:** No `/src/pages/404.astro` exists
- **Why:** Default Vercel 404 is generic and off-brand
- **Impact:** User experience, brand consistency
- **Effort:** XS (human: 1h / CC: 10min)
- **Design:** Match brand styling, helpful navigation links

### ANALYTICS-01 — Add Privacy-First Analytics
- **What:** No visitor analytics
- **Why:** Need to understand user behavior without GDPR complications
- **Impact:** Flying blind on what content works
- **Effort:** S (human: 1h / CC: 10min)
- **Options:**
  - Plausible Analytics (privacy-first, EU-hosted)
  - Fathom (simple, privacy-focused)
  - Umami (self-hostable)
  - Skip Google Analytics (cookie consent complexity)

### TEST-01 — Add Core Test Suite
- **What:** Zero test coverage (no test files in project)
- **Why:** No safety net for refactors or dependencies updates
- **Impact:** Regressions, deployment anxiety
- **Effort:** L (human: 8h / CC: 1h)
- **Implementation:**
  - Add Vitest (already in Astro ecosystem)
  - Unit tests: `env.ts`, `url.ts`, `buildMetadata.ts`
  - Component tests: ContactForm validation
  - API tests: Contact endpoint with mocked Resend
  - Add `pnpm test` script to CI

---

## P2 — MEDIUM PRIORITY (Month 1)

### SEO-03 — Add Structured Data (JSON-LD)
- **What:** No Schema.org markup for LocalBusiness, Services, FAQ
- **Why:** Rich snippets in search results, better SEO
- **Impact:** Search visibility, click-through rates
- **Effort:** M (human: 4h / CC: 30min)
- **Schemas to add:**
  - LocalBusiness (on homepage)
  - Service schema (on service pages)
  - FAQPage schema (on FAQ section)
  - BreadcrumbList

### IMAGE-01 — Implement Sanity Image Pipeline
- **What:** Images served directly without optimization
- **Why:** Performance, Core Web Vitals
- **Impact:** LCP scores, bandwidth
- **Effort:** M (human: 4h / CC: 30min)
- **Implementation:**
  - Create `<SanityImage />` component using `@sanity/image-url`
  - Add responsive `srcset` generation
  - Implement lazy loading
  - Add blur-up placeholders

### LEGAL-02 — Add Cookie Consent Banner
- **What:** No cookie consent for analytics (when added)
- **Why:** GDPR/ePrivacy compliance
- **Impact:** Legal requirement once analytics added
- **Effort:** S (human: 2h / CC: 20min)
- **Options:**
  - `vanilla-cookieconsent` (lightweight)
  - Custom implementation
  - Only needed if adding tracking cookies

### PERF-02 — Add Service Worker (PWA)
- **What:** No offline capability or asset caching
- **Why:** Better perceived performance, offline access
- **Impact:** UX improvement for repeat visitors
- **Effort:** M (human: 4h / CC: 30min)
- **Implementation:**
  - Add `astrojs-service-worker` or Workbox
  - Cache static assets
  - Offline fallback page

### PERF-03 — Add Web Manifest
- **What:** No `/public/manifest.json`
- **Why:** PWA installability
- **Impact:** Can be added to home screen on mobile
- **Effort:** XS (human: 30min / CC: 5min)
- **Include:** Icons, theme color, app name, display mode

### CONTENT-02 — Add Blog/Articles Section
- **What:** No content marketing capability
- **Why:** SEO, establishing authority
- **Impact:** Long-term organic traffic
- **Effort:** L (human: 1-2 days / CC: 2-3h)
- **Schema changes needed:**
  - New `article` document type in Sanity
  - New `blog` singleton for settings
  - New pages: `/blog/`, `/blog/[slug].astro`
  - RSS feed generation

---

## P3 — LOW PRIORITY (Backlog / Future)

### UX-03 — Add Search Functionality
- **What:** No site search
- **Why:** Help users find content on larger sites
- **Impact:** UX for content-heavy future state
- **Effort:** L (human: 1-2 days / CC: 2h)
- **Options:** Pagefind (static), Fuse.js (client-side), Algolia (if blog grows)

### UX-04 — Add Dark Mode Toggle
- **What:** Single color scheme only
- **Why:** Accessibility, user preference
- **Impact:** Nice-to-have feature
- **Effort:** M (human: 4h / CC: 30min)
- **Implementation:** Tailwind dark mode classes, localStorage preference

### OPS-01 — Set Up Sanity Data Backup
- **What:** No automated backup of CMS content
- **Why:** Disaster recovery
- **Impact:** Business continuity
- **Effort:** S (human: 2h / CC: 20min)
- **Options:** Sanity's built-in export, GitHub Actions scheduled backup

### OPS-02 — Add Health Check Endpoint
- **What:** No `/api/health` endpoint
- **Why:** Monitoring, uptime checks
- **Impact:** Ops visibility
- **Effort:** XS (human: 30min / CC: 5min)
- **Check:** Sanity connection, environment variables present

### DEV-01 — Add Storybook for Components
- **What:** No component documentation or isolated development
- **Why:** Reusable template needs component visibility
- **Impact:** Developer experience for future clients
- **Effort:** L (human: 1 day / CC: 2h)
- **Note:** Lower priority since this is a single-client site currently

### DEV-02 — Add Lighthouse CI
- **What:** No automated performance regression detection
- **Why:** Catch performance issues in CI
- **Impact:** Prevent performance degradation
- **Effort:** S (human: 2h / CC: 15min)
- **Integration:** Add to GitHub Actions workflow

---

## Summary Table

| Priority | Count | Key Items |
|----------|-------|-----------|
| P0 (Critical) | 5 | Legal pages, rate limiting, security headers, error logging, testimonials |
| P1 (High) | 7 | CDN caching, sitemap, robots.txt, form validation, 404 page, analytics, tests |
| P2 (Medium) | 6 | Structured data, image optimization, cookie consent, PWA features, blog |
| P3 (Low) | 6 | Search, dark mode, backups, health check, Storybook, Lighthouse CI |

---

## Quick Wins (Do These First)

Items marked with **⚡** are high-impact, low-effort wins:

1. ⚡ **LEGAL-01** — Get final legal details and update pages (S effort)
2. ⚡ **CONTENT-01** — Hide placeholder testimonials (XS effort)
3. ⚡ **SEO-02** — Add robots.txt (XS effort)
4. ⚡ **UX-02** — Create 404 page (XS effort)
5. ⚡ **SEC-02** — Add security headers (S effort)
6. ⚡ **PERF-01** — Enable Sanity CDN (S effort)

---

## Notes

- **Template vs. Single Site:** Some items (like Storybook, blog) make more sense if this truly becomes a reusable template. If it's staying single-client, deprioritize template-focused work.
- **Sanity Growth:** If Sanity content grows significantly, consider:
  - ISR (Incremental Static Regeneration)
  - On-demand revalidation webhooks
  - More aggressive caching strategies
- **Monitoring:** Once error logging is in place, review actual error patterns and adjust priorities based on real issues.

---

*This document is a living reference. Update it as items are completed or priorities shift.*
