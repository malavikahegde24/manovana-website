# Manovana Website — Technical, Functional & SEO/GEO Overview

_Last updated: 2026-07-19 · Phase 1 (static website) build_

A quick reference of everything the current build includes: what it's built with, what
a visitor can actually do on it, and how it's set up to be found by search engines and
AI answer engines.

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 5** (static output, `output: 'static'`) | Ships zero JS by default; only interactive bits ("islands") hydrate. Fastest possible baseline. |
| UI islands | **React 18** (`@astrojs/react`) | Used sparingly, only where interactivity is required. |
| Styling | **Tailwind CSS 3** + custom design tokens (`global.css`) | Utility-first, consistent spacing/typography/brand color system. |
| Fonts | `@fontsource` self-hosted variable fonts (Playfair Display, Cormorant, Fraunces, Inter) | No third-party font CDN request; faster, privacy-friendly. |
| Motion | **GSAP** (ScrollTrigger) + **Lenis** (smooth scroll) | Cinematic scroll-driven reveals, synced to one smooth-scroll engine. |
| Content | **Astro Content Collections** (type-safe Markdown/JSON, schema-validated in `src/content/config.ts`) | Techniques, concerns, testimonials, articles — all statically generated. |
| Forms | **Netlify Forms** (no backend/server needed) | Contact form, free-meditation email capture, Mind Detox Scorecard lead capture. |
| Booking | Native **UPI deep links** + build-time **QR generation** (`qrcode` package) + external Google Form | No payment gateway integration required for Phase 1. |
| Hosting | **Netlify** (static `dist/` publish, `netlify.toml`) | CDN-delivered, immutable caching for hashed assets/media, security headers. |
| Language | **TypeScript** throughout (`.astro`, `.ts` files, typed content schemas) | Compile-time safety for data shapes (site config, offers, certifications). |
| Sitemap | `@astrojs/sitemap` (auto-generated `sitemap-index.xml`) | Every static + dynamic route included automatically at build time. |
| QA tooling | `scripts/check-seo.mjs` — custom post-build audit | Fails the build check if any page is missing a unique title/description, an image lacks `alt`, or an internal link is broken. |

**No 3rd-party trackers, no client-side framework runtime beyond what a given
interactive component needs, no CMS/server** — the whole site is pre-rendered HTML at
build time.

---

## 2. Site Structure & Stats

| Metric | Count |
|---|---|
| Total pages generated at build | **36** (static routes + dynamic slugs) |
| Static route files (`src/pages`) | 16 |
| Techniques (pSEO detail pages, `/techniques/[slug]`) | 12 |
| Concerns (pSEO detail pages, `/concerns/[slug]`) | 7 |
| Articles (`/articles/[slug]`) | 3 |
| Testimonials (real client quotes) | 10 |
| Reusable Astro components | 12 |
| FAQ question/answer pairs (feeding FAQPage schema) | 38, across 19 pages |
| npm dependencies (runtime) | 18 |

### Pages at a glance
- `/` — immersive homepage (hero, meaning, mind-truths, about, credentials, who-this-is-for,
  concerns "path", approach/techniques grid, services, testimonials, how-we-begin, free
  gifts, CTA band)
- `/about` — founder story, milestones, certifications (auto-scrolling + swipeable)
- `/approach` — the full technique library
- `/services` — 1-to-1 coaching & group programs
- `/book` — paid session booking (sales-page style)
- `/assessment` — Mind Detox Scorecard (interactive quiz + booking CTA)
- `/schedule` — booking fallback / Cal.com-ready page
- `/contact` (+ `/contact/success`) — enquiry form
- `/testimonials`, `/articles` (+ `/articles/[slug]`) — social proof & AEO content
- `/techniques/[slug]` × 12, `/concerns/[slug]` × 7 — programmatic SEO detail pages
- `/thank-you`, `/404`

---

## 3. Functional Features (what a visitor can do)

- **Free Mind Detox Scorecard** (`/assessment`) — a 5-question, client-side-scored quiz
  with a live progress bar, animated star ratings, and a personalised result (score +
  tiered persuasive copy) that flows straight into the booking widget.
- **Book a session** (`/book`, shared `BookingPlans` component) — plan/price display →
  Google Form (payment + details) confirmation flow; also embedded inline in the
  scorecard result so booking never requires leaving the quiz.
- **Free guided meditation download** (homepage) — leave an email → instant same-origin
  audio download (no email round-trip wait) + a confirmation popup, with Netlify Forms
  lead capture running in the background.
- **Contact form** (`/contact`) — Netlify Forms, spam-protected via an invisible
  honeypot field, routes to a dedicated `/contact/success` page.
- **Certifications carousel** (`/about`) — desktop prev/next arrows, native swipe on
  mobile, and a continuous auto-scrolling loop that pauses on hover/touch/focus.
- **Founder video** (`/about`) — custom play-button overlay over the poster image;
  native controls take over once playback starts (fixed for correct mobile play/pause).
- **Persistent scorecard nudge** (`ScorecardCta`) — a dismissible floating pill
  (desktop) / sticky bar (mobile) that appears after a little scroll, site-wide.
- **Responsive navigation** — desktop nav bar + a mobile drawer with a dedicated
  "Free gifts" section (Scorecard + Meditation) above the primary CTA.
- **Scroll-driven motion** — GSAP `ScrollTrigger` reveals synced to Lenis smooth scroll,
  a magnetic-button micro-interaction, animated count-up stats in the hero.
- **Reduced-motion & accessibility fallbacks** — every animation respects
  `prefers-reduced-motion`; every image has descriptive `alt` text (audited, see §5).

---

## 4. Design System

- Brand palette + typography tokens centralised in `tailwind.config.mjs` /
  `global.css` (serif display font for headings, Inter for body).
- Reusable content-driven sections: `PageHeader`, `SectionHeading`, `CtaBand`,
  `TestimonialCard`, `FaqList`, `Ornament`, `Icon` (inline SVG set — no icon-font
  request), `Avatar`.
- Single source of truth for site-wide facts in `src/data/site.ts` (`SITE`, `LINKS`,
  `NAV`, `OFFERS`, `FREEBIES`, `SCHEDULING`, `SOCIAL`) — no hardcoded copy duplicated
  across pages.

---

## 5. SEO (Search Engine Optimization)

- **Unique `<title>` and meta description on every page** — enforced by the
  `check-seo.mjs` build audit (36/36 pages: zero duplicate or missing titles/descriptions).
- **Canonical URLs** on every page (`lib/seo.ts` → `canonical()`), built from a single
  `SITE.url`.
- **Open Graph + Twitter Card meta** wired through `BaseLayout` for rich social
  previews.
- **`sitemap-index.xml`** auto-generated at build time by `@astrojs/sitemap` — every
  route (including all 19 programmatic pSEO pages) is included with no manual upkeep.
- **`robots.txt`** allows full crawl and points crawlers to the sitemap.
- **Every `<img>` has descriptive alt text** (decorative images use empty
  `alt=""` + `aria-hidden`, correctly excluded from the audit) — audited on every build.
- **Zero broken internal links** — audited on every build (the only "errors" the
  checker currently reports are known false positives: it can't resolve non-HTML asset
  paths like images/audio, or the `upi://` custom URI scheme — not real broken links).
- **Programmatic SEO (pSEO)**: 12 technique pages + 7 concern pages, each independently
  optimized (unique title/description/schema), targeting long-tail intent
  ("hypnotherapy", "stress & anxiety", "past life regression", etc.) without thin/duplicate
  content — each page has real, distinct body copy and its own FAQ block.
- **Security headers** (`netlify.toml`): `X-Frame-Options: DENY`,
  `X-Content-Type-Options: nosniff`, `Strict-Transport-Security` (HSTS, 2yr +
  preload), `Referrer-Policy: strict-origin-when-cross-origin`, and a locked-down
  `Content-Security-Policy` — all of which factor into modern ranking/trust signals.
- **Performance-first delivery**: immutable long-term caching for hashed
  `/_astro/*` assets and heavy media (`.mp4`, `.webm`, `.glb`, `.woff2`), `max-age=0,
  must-revalidate` on HTML so a fresh deploy is never served stale.

## 6. AEO / GEO (Answer Engine / Generative Engine Optimization)

The site is deliberately structured to be **quotable and citable by AI answer engines**
(ChatGPT, Perplexity, Google AI Overviews, etc.) — not just ranked by traditional
search:

- **`FAQPage` JSON-LD on every technique and concern page** — 38 real question/answer
  pairs total, marked up in the exact schema.org shape answer engines parse to lift
  direct answers (e.g. "Is Reiki safe?", "How is mind coaching different from
  therapy?").
- **`Article` + dedicated FAQ-style articles** (`/articles`) written explicitly to
  answer common natural-language questions people ask ("What is a Mind Coach?", "Mind
  coaching vs therapy — what's the difference?", "Signs you need inner healing") — the
  exact question-shaped phrasing AI engines look to extract and cite.
- **`Person` schema** for Malavika Hegde (credentials, role, languages) and
  **`ProfessionalService`/`Organization`** schema for Manovana — gives answer engines a
  structured, unambiguous entity to attribute answers to, rather than guessing from
  prose.
- **`BreadcrumbList` schema** on every inner page — reinforces site hierarchy and
  topical relationships for both crawlers and LLM retrieval.
- **`Service` schema** describing the coaching offerings in structured form (name,
  description, provider, area served, languages).
- **Direct-answer-first content structure**: every technique/concern page opens with a
  plain-language definition before any marketing copy — the pattern most consistently
  extracted verbatim by generative engines.
- **Real, first-person testimonials** (not fabricated) with attributed context — used
  as trust/citation signals rather than generic marketing claims.

---

## 7. Content & Editorial Integrity

- **No fabricated data.** Every stat (21,000+ lives impacted, 30+ years, 12+
  modalities), every certification, and every testimonial is sourced from the client's
  real material (see `documents/` — not part of the public site).
- Certifications and their display order are maintained as structured data
  (`src/data/certifications.ts`), reused identically across the homepage badge strip
  and the `/about` carousel — one source of truth, no drift.
