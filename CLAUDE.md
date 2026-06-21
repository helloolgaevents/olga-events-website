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
- Colors (Tailwind theme tokens in `app/globals.css`):
  bg `--color-ink #16140f`, alt `--color-ink-alt #1f1c16`,
  text `--color-cream #f4efe6`, `--color-muted #9b9384`,
  accent `--color-gold #c2a36b`, hairline `--color-line #352f25`.
- Fonts (next/font, `app/layout.tsx`): **Cormorant Garamond** (serif) for
  headings + logo; **Inter** (300/400) for body.
- Mood: elegant, premium, dramatic, soft gold glow, lots of air, mobile-first.
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
- [x] `/gallery` ← collections/designed-packages (cdn photos)
- [x] `/our-work` ← pages/our-work
- [x] `/wedding-decoration-dubai` ← pages/wedding-decoration-dubai
- [x] `/wedding-cost-dubai` ← pages/wedding-cost-dubai
- [x] `/wedding-planner-dubai` ← pages/wedding-planner-dubai
- [x] `/wedding-packages-dubai` ← pages/wedding-packages-dubai
- [x] `/packages` — planning (Essential/Classic/Luxe) + décor (Bloom/Signature/
      Elegance). **Calculator slot is built & marked** (`#calculator`) — GM will
      provide the interactive price calculator next; drop it into that section.
- [x] `/contact` — enquiry form (name, date, location, guests, budget) → mailto
      hello@olga.events + WhatsApp/Call buttons. CRM integration pending.
- [x] `/corporate-events`, `/private-events`, `/seasonal-events`,
      `/av-production` — carried from homepage service sections. Off the wedding
      homepage; linked in footer "More services".
- [x] `/furniture` overview + `/furniture/[category]` (bridal-sofa,
      dining-tables, dining-chairs, lounge-sofa, accent-chairs, ottomans).
      Off homepage; footer-linked.
- [x] `sitemap.xml` (`app/sitemap.ts`) + `robots.txt` (`app/robots.ts`).

## Pending imports (GM will provide)
1. **Interactive price calculator** for `/packages` → place in the `#calculator`
   section (currently a styled "coming soon" placeholder).
2. **Full furniture catalog** (Shopify export). Structure is ready: add per-
   category products to `SAMPLE_PRODUCTS` in `app/furniture/[category]/page.tsx`
   (or move to a data file) — bridal-sofa has a representative preview; other
   categories show a "catalog being imported" placeholder. Product images live
   on the olga.events CDN (`/cdn/shop/...`).
3. **CRM integration** for the contact form (currently mailto).

## Notes
- Remote images: olga.events CDN allowed in `next.config.ts`
  (`images.remotePatterns`, `/cdn/shop/files/**`).
- `SITE_URL` (ui.tsx) defaults to `https://olga.events` (override with
  `NEXT_PUBLIC_SITE_URL`) — used by sitemap/robots/metadataBase.
