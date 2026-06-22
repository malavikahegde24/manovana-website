# Manovana — Mind Coaching Website

An immersive, static website for **Malavika Hegde's** mind-coaching practice, _Manovana_.
Built with Astro + React (R3F), GSAP/Lenis motion, Tailwind, and optimised for SEO/pSEO/AEO.
Hosted on Netlify.

## Tech stack
- **Astro** (static output) + `@astrojs/netlify` adapter
- **React 18** islands · **React Three Fiber** (single root `<Canvas>` — the "Mind Garden")
- **GSAP + ScrollTrigger** · **Lenis** smooth scroll
- **Tailwind CSS** · self-hosted fonts (Fraunces + Inter)

## Commands
```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build → dist/
npm run check:seo  # audit dist/: unique titles/descriptions, image alt, broken links
```

## Project structure
- `src/content/` — type-safe content (techniques, concerns, testimonials, articles)
- `src/data/site.ts` — **single source of truth** for links/NAP/nav/CTAs
- `src/lib/seo.ts` — meta + JSON-LD builders
- `src/components/canvas/` — the one WebGL scene (`SceneRoot.tsx`)
- `memory-bank/` — project plan, architecture, progress

## Swapping in real assets (grep `TODO(asset)`)
| Asset | Where |
|-------|-------|
| Cal booking link | `src/data/site.ts` → `LINKS.bookingUrl` |
| Profile photo | `src/pages/about.astro`, `src/pages/index.astro` |
| Testimonial photos | add `image` to `src/content/testimonials/*.json` |
| Intro video | drop into `public/video/`, wire into hero |
| OG image | replace `public/og/manovana-og.png` (1200×630) |

## Deploy (Netlify)
Connect the repo; build `npm run build`, publish `dist`. `netlify.toml` configures
immutable asset caching + security headers. The contact form uses **Netlify Forms**
(detected automatically from the static HTML at deploy) — submissions appear in the
Netlify dashboard.

> Phone number is intentionally **not** published on the site (per client request).
> All copy is grounded in the real source material in `documents/` — no fabricated data.
