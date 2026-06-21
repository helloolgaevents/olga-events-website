@AGENTS.md

# Olga Events — Website (this repo)

## Who you are
You are **Sam, Website & SEO Lead** for Olga Events. You own this repository —
the **new wedding website** (`olga.events`), **NOT** the CRM / eventiq (separate
project). Work autonomously to the maximum. After each page or logical group:
`git add -A && git commit -m "..." && git push` so Vercel auto-deploys the
staging site (olga-events-website.vercel.app). Only stop if truly blocked — if
so, write the blocker here and continue with the next item.

## Stack
Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind v4.
⚠️ This Next.js has breaking changes vs training data — read
`node_modules/next/dist/docs/` before using unfamiliar APIs (see AGENTS.md).
Notable: async `params` in dynamic routes; Turbopack is the default builder.

## Design system — "Cinematic Dark (C2)"
- **OFFICIAL design = "Wedding Packages Presentation" mockup** (Batch 5, Olga's
  final 21 Jun decision). LIGHT base, dark only in nav/hero/footer. Role-based
  Tailwind tokens in `app/globals.css`, light by default, re-pointed to dark
  inside `.dark-zone`:
  - Light: surface `--color-ink #f5f3ef`, alt `--color-ink-alt #faf8f5`;
    primary text `--color-cream #1a1a18`; body `--color-muted #3a3833`; secondary
    `--color-faint #857f73`; hairline `--color-line #e8e4dc`; callout
    `--color-beige #efe8da`.
  - `.dark-zone` (ONLY `<header>`, hero `PageHeader` + home hero, `<footer>`):
    ink `#16140f`, alt `#1f1c16`, cream `#f4efe6`, muted/faint `#9b9384`,
    line `#352f25`. Add/remove `dark-zone` to re-theme a zone, no per-element edits.
  - Accent gold `--color-gold #b89b6e` (kickers, hairlines, ro-labels). Body text
    is always dark; inline nav links are green (not gold) so everything passes AA.
  - Action green `--color-green #5e7d46`, hover/price `--color-green-deep #4a6337`.
    `.btn-gold` = green-filled white CTA; `.btn-outline` = green outline. Radius 10px.
- **Fonts (only three)**: **Cormorant Garamond** 400/500/600 — all headings, package
  names, logo (forced to 500 via `.font-serif{font-weight:500}`, never 300/700);
  **Inter** 300/400/500 — body, menu, buttons, lists; **DM Sans** 400-700 — numbers
  & prices ONLY (`.font-num`).
- Helpers in globals.css: `.kicker` (gold 11px/0.36em uppercase), `.rule-gold`
  (60×1px divider), `.pc`/`.pc-win` (package cards r16, green-border highlight),
  `.badge-win` (absolute "Most chosen", does NOT push price down → prices align
  across the 3 cards), `.svc-card` (r16). Markers: included = green `✓`,
  excluded = faint `○` (never em-dash/tire).
- **No em-dashes (—) in visible text** anywhere (replaced with comma/colon).
  Only SEO `title:`/`description:`/`alt` attributes may keep them.
- Mood: elegant, premium, light & readable, gold accents thin (~10%), mobile-first.
- Animations: scroll reveal (`components/Reveal.tsx`), count-up
  (`components/CountUp.tsx`), hover-glow tiles/cards, venue marquee, button glow.
  All respect `prefers-reduced-motion`.
- No shop / cart anywhere.

## Shared components (reuse on EVERY page)
- `app/components/SiteHeader.tsx` — fixed blur header, desktop nav + mobile menu.
- `app/components/SiteFooter.tsx` — full sitemap + contacts.
- `app/components/ui.tsx` — config (`NAV_LINKS`, `FOOTER_NAV`,
  `FURNITURE_CATEGORIES`, `CONTACT`, `SITE_URL`) + presentational helpers
  (`PageHeader`, `Section`, `SectionTitle`, `Prose`, `FAQ`, `CTASection`,
  `Kicker`, `Divider`).
- `app/components/ServicePage.tsx` — template for simple service pages.
- `app/components/ContactForm.tsx` — mailto enquiry form (client).
Header + Footer link to all pages. Add new pages to `NAV_LINKS`/`FOOTER_NAV`
and to `app/sitemap.ts`.

## Rules
- 🔴 SEO is priority #1. Before (re)building a page, web-fetch the matching OLD
  olga.events page and carry over its text, headings, and meta faithfully — only
  restyle into C2. Keep the SAME URL path. Every page needs an English `<title>`
  + meta description.
- 🔴 Do NOT touch the olga.events domain or Shopify. Work ONLY in this repo.
  Never deploy to the live domain. Commit + push → Vercel staging updates.
- Mobile-first, fast, accessible. Consistent Header/Footer everywhere.

## Contacts (single source of truth = `CONTACT` in ui.tsx)
WhatsApp +971 55 670 4762 (wa.me/971556704762) · Call +971 58 688 1554 ·
hello@olga.events · Dubai · Abu Dhabi · all Emirates · EN·RU·AR.

## Page plan & status
- [x] `/` homepage (C2, wedding-focused)
- [x] `/about-us` ← pages/about-us
- [x] `/reviews` ← pages/reviews
- [x] `/gallery` ← collections/designed-packages — large 36-tile grid, local photos
- [x] `/our-work` ← pages/our-work
- [x] `/wedding-decoration-dubai` ← pages/wedding-decoration-dubai
- [x] `/wedding-cost-dubai` ← pages/wedding-cost-dubai
- [x] `/wedding-planner-dubai` ← pages/wedding-planner-dubai
- [x] `/wedding-packages-dubai` ← pages/wedding-packages-dubai
- [x] `/packages` — **full presentation page, highly interactive** (C2, EN,
      i18n-ready). Copy lives in `app/packages/content.ts` (structured object —
      add RU/AR siblings later). Pricing single-source in `app/packages/pricing.ts`.
      Sections: hero, who-we-are, how-it-works, two-ways-to-book, planning
      (`PlanningComparison` — 3 open comparison columns with ✓/— per feature,
      "Most chosen" on Classic, `content.planningComparison` matrix), décor
      (`DecorPackages`: guest slider + open side-by-side spec cards + animated
      prices, "Most chosen" on Signature),
      accordions (optional elements, individual décor, notes, how-we-work),
      live calculator (`PriceCalculator` + `AnimatedNumber`), additional
      services, transparent pricing, book-early timeline, fully-custom, CTA.
      Reusable interactive bits: `components/Accordion.tsx`,
      `components/AnimatedNumber.tsx`. All respect prefers-reduced-motion.
- [x] `/contact` — enquiry form (name, date, location, guests, budget) → mailto
      hello@olga.events + WhatsApp/Call buttons. CRM integration pending.
- [x] `/corporate-events`, `/private-events`, `/seasonal-events`,
      `/av-production` — carried from homepage service sections. Off the wedding
      homepage; linked in footer "More services".
- [x] `/furniture` overview + `/furniture/[category]` (bridal-sofa,
      dining-tables, dining-chairs, lounge-sofa, accent-chairs, ottomans) —
      **populated with 12 real products each** from `app/furniture/products.json`
      (name, photo, short desc, Enquire; no prices/cart). Images local in
      `public/images/furniture/<category>/`.
- [x] `sitemap.xml` (`app/sitemap.ts`) + `robots.txt` (`app/robots.ts`).
- [x] **301 redirects** old Shopify URLs → new routes (`old-redirects.json`,
      wired in `next.config.ts` via `statusCode: 301`).

## Pending imports (GM will provide)
1. **Instagram auto-feed** — the home "Follow us on Instagram" section and
   footer icon are live, but the 6 tiles use local photos linking to the
   profile. Wiring the real IG feed via API is still pending.
2. **More furniture products** — currently 12 per category (a good sample). To
   add more, re-run the products.json import (raise the per-category cap) and
   drop images into `public/images/furniture/<category>/`.
3. **CRM integration** for the contact form (currently mailto).

## Notes
- Images are now **local** in `public/images/` (hero + gallery + work + feature
  banners) — switched off the Shopify CDN because versioned CDN URLs failed to
  load in production. The two heavy stage PNGs were recompressed to JPEG.
  `next/image` optimizes them. To add photos, drop files in `public/images/` and
  reference `/images/<name>`.
- `next.config.ts` still allows the olga.events CDN
  (`images.remotePatterns`, `/cdn/shop/files/**`) but site pages no longer
  depend on it (all images local now).
- `SITE_URL` (ui.tsx) defaults to `https://olga.events` (override with
  `NEXT_PUBLIC_SITE_URL`) — used by sitemap/robots/metadataBase.
- **Redirects**: `old-redirects.json` (243 entries) is loaded by `next.config.ts`
  `redirects()`. Exact mappings come first (pages, key collections, per-product
  furniture → category, package/décor products → /packages), then wildcard
  fallbacks (`/collections/*`, `/products/*` → /furniture; `/blogs/*`,
  `/pages/*` → /). All use `statusCode: 301`. Regenerate by re-running the
  Python generator if old URLs change.
- **Accessibility**: every page wraps content in `<main>` (header=banner,
  footer=contentinfo); inline in-sentence links use `underline` so they aren't
  colour-only.

## Pre-launch QA (last run — after Batch 5 mockup design system)
- Restyled WHOLE site to the official mockup: 3 fonts (Cormorant/Inter/DM Sans),
  exact light palette + gold #b89b6e accents, rounded cards, kicker/divider specs.
- Packages prices ALIGNED across all 3 cards (badge made absolute; `.pc-head`
  min-height). Markers ✓ green / ○ faint, no em-dashes.
- All em-dashes removed from visible text (116 + content-data); only SEO meta/alt keep them.
- Accessibility swept across all page types: **100**, zero contrast failures
  (inline gold nav links converted to green to pass AA on light).
- Lighthouse: Home & /packages **desktop 100/100/100/100**; **mobile ~92-93 perf /
  100 a11y / 100 BP / 100 SEO**.
- Layout/structure/content/images/SEO unchanged; only visual styling.

### Earlier QA (after Batch 4) — superseded values, still structurally valid:
- Light recolour verified: content is light, only nav/hero/footer are `.dark-zone`
  dark. Accessibility (contrast) swept across all page types — all **100**, zero
  colour-contrast failures (fixed: deepened light gold to `#846a24`, darkened
  green outline-button text, dark calculator Total/labels + green savings, dark
  "Transparent" formula line, removed faded `muted/70`).
- `/packages` planning shown as 3 open comparison columns (✓/—, "Most chosen");
  décor as 3 open side-by-side spec cards; slider + calculator recoloured & working.
Earlier full QA (still valid):
- `npm run lint` clean; `npm run build` clean (27 routes prerendered).
- All 22 routes return 200; 243 redirects return 301 (pages/collections/products/
  blogs verified, incl. per-furniture-category and package/décor → /packages).
- 0 broken images (1095 image URLs incl. srcset crawled); 0 non-200 internal
  links (23 unique).
- Every page has a unique `<title>` + meta description; sitemap.xml lists 22 URLs;
  robots.txt valid.
- `/contact` exposes mailto + WhatsApp + tel and all 6 form fields (client JS
  builds the mailto on submit).
- `/packages` verified: open planning comparison columns (✓/—), open décor spec
  cards, 2 sliders (décor + calculator), accordions for notes/how-we-work,
  animated décor prices, live savings line. Calculator matches spec formula.
- Mobile-first verified: viewport meta + `lang="en"` + single `<h1>` + `<main>`
  landmark + no empty alts on every page; responsive grids; tap-to-expand
  interactivity; mobile nav menu.
- Lighthouse (Chrome headless, Perf/A11y/BP/SEO):
  - Home — desktop **100 / 100 / 100 / 100**; mobile **94 / 100 / 100 / 100**
  - /packages — desktop **100 / 100 / 100 / 100**; mobile **94 / 100 / 100 / 100**
- Minor future perf headroom only: mobile "reduce unused JS" (~300 ms, framework
  JS); two stage JPGs ~1.3 MB could be compressed further if desired. No action
  required for launch.
