# Alura Property Public Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the mobile-first public land-sales website for Alura Property, including its catalog, WhatsApp inquiry flow, and scroll-driven hero.

**Architecture:** Use Astro static output with TypeScript and Tailwind CSS v4. Keep listing data in a typed local data module for this stage, with utility boundaries that can later be adapted to a managed admin/CMS without changing the public components. Preserve original files in `Asset/`; derive optimized site assets and video frames in new project-owned paths.

**Tech Stack:** Astro, TypeScript, Tailwind CSS v4 via Vite, Inter via Fontsource, sharp/Astro image processing, Vitest, Node.js `.mjs` scripts, ffmpeg.

**Spec:** User-provided Alura Property website brief in conversation; no separate design-system files were found in the project directory.

## Global Constraints

- Work directly in `D:\Yoga Work\GooyStudio\Alura Property`; do not create a nested project folder.
- Never move, overwrite, or delete existing logo, image, or video source assets.
- Public UI copy is Indonesian; all brand-name display reads `SITE_NAME` from `src/config/site.ts`.
- Use Astro + TypeScript + Tailwind CSS v4; do not add a heavy animation library.
- Listings are local static data in this stage; no admin/backend or credentials are added.
- Use the combined token map in `src/styles/theme.css`; do not import raw Sonos/Airbnb themes.
- Keep the existing hero source videos under `Asset/Video`; generate frame output only under `public/frames`.
- Use `--color-accent*` aliases for accent actions; land cards have no border or shadow.
- Respect reduced motion, keyboard access, mobile safe areas, and visible focus states.

## Review Focus

- Missing or malformed listing fields: rendering must remain understandable and must not produce broken WhatsApp links.
- Sold/reserved status: sold land must not appear available; reserved listings must clearly disclose their status.
- Long Indonesian text and narrow screens: cards, filters, navigation, and detail layouts must not overflow.
- Slow or missing frame loads: the hero must show a poster/nearest loaded frame and never go blank.
- Reduced-motion or JavaScript-disabled users: show a static poster and readable chapter content without sticky pinning.

---

### Task 1: Safe Astro foundation and asset boundaries

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- Create: `src/env.d.ts`, `src/pages/` and required Astro project entry files
- Test: project type-check and production build

**Interfaces:**
- Keep the project root at the existing directory.
- Leave `Asset/Gambar`, `Asset/Video`, and `Alura Propery - Asset Logo` untouched.
- Configure Astro for static output and Tailwind v4; install only dependencies needed for the public site and tests.

- [ ] Check for existing files immediately before writing; preserve any newly added user files.
- [ ] Create the minimal project configuration and package scripts (`dev`, `build`, `preview`, `check`, `test`).
- [ ] Run the initial check/build and record the expected pre-feature result.
- [ ] Verify Git ignore rules cover dependencies, build output, plan workspace/cache, and local environment files while retaining source assets and generated public frame assets.

### Task 2: Typed land data and tested utilities

**Files:**
- Create: `src/data/lands.ts`
- Create: `src/lib/format.ts`, `src/lib/whatsapp.ts`, `src/lib/catalog.ts`
- Test: `src/lib/*.test.ts`
- Create: `src/config/site.ts`

**Interfaces:**
- `Land` defines the fields from the brief, including category, status, photos, and optional custom WhatsApp text.
- `formatRupiah(value: number): string` formats Indonesian Rupiah.
- `buildWhatsAppLink(land?: Land): string` creates an encoded `wa.me` URL using the configured number and canonical site URL.
- Catalog helpers filter/sort the same typed data used by landing, catalog, and detail pages.

- [ ] Write tests for Rupiah formatting, WhatsApp URL encoding, sold status behavior, category filtering, and sorting; run them to verify expected failures.
- [ ] Implement only enough types/utilities and 6–8 clearly marked fictional example listings to pass.
- [ ] Re-run focused tests and the full test suite.

### Task 3: Brand shell, merged tokens, and shared layout

**Files:**
- Create: `src/styles/theme.css`, `src/layouts/SiteLayout.astro`
- Create: `src/components/Logo.astro`, `SiteNav.astro`, `SiteFooter.astro`, `WhatsAppButton.astro`
- Create: `public/brand/` web copies and `public/brand/favicon.svg`
- Test: Astro check/build and component accessibility smoke checks

**Interfaces:**
- `Logo` accepts `variant="mark" | "full"` and reads `SITE_NAME`; retain supplied original logo files unchanged.
- Shared layout supplies metadata, favicon, font preload, viewport/safe-area settings, and page title/description.
- Merged theme maps non-colliding tokens as specified and prefixes colliding catalog tokens with `cat-`.

- [ ] Add token mapping and tests/checks for the required accent aliases and catalog-prefixed token names.
- [ ] Create the shared layout and logo fallback behavior; derive any light-background logo copy without modifying originals.
- [ ] Build the fixed responsive navigation, mobile menu, footer, and generic WhatsApp action.
- [ ] Verify keyboard focus, target size, reduced-motion behavior, and mobile input sizing.

### Task 4: Catalog surfaces and WhatsApp journey

**Files:**
- Create: `src/components/LandCard.astro`, `LandCarousel.astro`, `CatalogFilters.astro`, `LandGallery.astro`
- Create: `src/pages/index.astro`, `src/pages/katalog/index.astro`, `src/pages/katalog/[slug].astro`
- Test: utility tests plus static route/build checks

**Interfaces:**
- Landing and catalog use the same `Land` model and card.
- Detail pages are generated from slugs and display gallery, location, legal/status details, facilities, map link, and WhatsApp action.
- Status `terjual` replaces contact actions with a clear sold label; `dipesan` remains queryable with its status disclosed.

- [ ] Implement card/category/filter/sort and empty-result behavior using the tested catalog helpers.
- [ ] Implement landing sections, catalog grid, and static detail routes from local data.
- [ ] Add responsive gallery/lightbox and mobile fixed contact bar for detail pages.
- [ ] Verify all routes render, data examples are visibly marked, and no card text overflows at narrow widths.

### Task 5: Hero frame pipeline and scroll-driven canvas

**Files:**
- Create: `scripts/extract-frames.mjs`, `scripts/make-placeholder-frames.mjs`
- Create: `src/config/hero-scroll.ts`, `src/lib/scroll-video.ts`
- Create: `src/components/HeroScroll.astro`
- Create: `public/frames/manifest.json` and generated frame/poster assets
- Test: `src/lib/scroll-video.test.ts`, Node script tests, browser smoke checks

**Interfaces:**
- Frame count/dimensions/pattern come only from the generated manifest.
- `getFrameIndex(progress: number, count: number): number` clamps progress and maps it to a frame.
- The canvas renders the selected desktop/mobile frame with cover sizing and DPR capped at 2.
- Frame loading uses a bounded queue, a nearby-frame window, poster/nearest-frame fallback, and a progress indicator.

- [ ] Write tests for progress clamping, frame index mapping, aspect-ratio cover calculations, and manifest validation; verify failures first.
- [ ] Implement frame extraction for both source videos, poster, dimensions/count manifest, and actionable ffmpeg-not-found guidance.
- [ ] Implement canvas rendering, responsive frame-set selection, progressive loading, and reduced-motion/no-JS fallback.
- [ ] Extract frame sets from current source videos into `public/frames` and confirm generated file counts match the manifest.

### Task 6: Content polish, metadata, and release verification

**Files:**
- Create/modify: `public/robots.txt`, sitemap configuration, README
- Modify: shared metadata and image references as required
- Test: full test suite, Astro check, production build

**Interfaces:**
- Each route has a unique title/description, canonical URL, and Open Graph metadata.
- README documents Windows setup, replacing brand assets, editing sample listings, WhatsApp configuration, frame generation, token mapping, and deployment.

- [ ] Add sitemap/robots and route-specific metadata.
- [ ] Optimize derived images without replacing source files; keep poster as the LCP candidate.
- [ ] Run tests, type checks, production build, and manual responsive/reduced-motion checks.
- [ ] Report real-device checks still needed; do not claim Lighthouse or device verification without running them.
