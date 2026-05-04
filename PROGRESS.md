# Wedding Site — Build Progress

## Phase 1 — Foundation ✅ Complete

### What was built

- **Next.js 16 scaffold** with TypeScript, Tailwind CSS v4, App Router, `src/` layout
- **Design tokens** defined as CSS custom properties in `globals.css` (cream, sage, coral, gold, ink palette)
- **Fonts** wired via `next/font/google`:
  - Pinyon Script → `--font-pinyon-script` → `font-script` Tailwind utility
  - Cormorant Garamond (weights 400/500/600, normal + italic) → `--font-cormorant` → `font-serif` Tailwind utility
- **`Nav` component** (`src/components/layout/Nav.tsx`):
  - "Cinnia & Henry" wordmark in Pinyon Script, sage colored, fluid size (`clamp(2rem, 5vw, 3rem)`)
  - Horizontal links in Cormorant — Home, Schedule, Travel, Things To Do, Lodging, FAQs, RSVP
  - Active page underlined with thin sage line (detected via `usePathname`)
  - Mobile: animated hamburger → full-screen cream overlay nav
- **`Footer` component** (`src/components/layout/Footer.tsx`):
  - Simple tagline: "Cinnia & Henry · May 14, 2027 · Jeju, South Korea"
- **`PageHeader` component** (`src/components/layout/PageHeader.tsx`): reusable Pinyon Script title + optional serif tagline
- **`Button` component** (`src/components/ui/Button.tsx`): coral solid + outline variants, renders as `<button>` or `<a>`
- **`robots.txt`**: disallow all indexing
- **`.env.local`** placeholder for Airtable credentials (gitignored)
- **Home page** (`src/app/page.tsx`): hero names in oversized Pinyon Script, date, location, RSVP CTA
- **GitHub repo** created and connected: https://github.com/henryhhchoi/cinnia-henry-wedding

### Corrections made during Phase 1

| What | Original | Corrected |
|---|---|---|
| Script font | Allura | Pinyon Script |
| Ceremony date | Saturday, May 15, 2027 | Friday, May 14, 2027 |
| Dinner date | Friday, May 14, 2027 | Thursday, May 13, 2027 |
| Year (both events) | 2026 (mistake) | 2027 |
| Ceremony venue | Greenery Village | Seaes Hotel & Resort |
| Dinner venue | Podowon Restaurant | TBD |
| Footer | Live countdown timer | Static tagline (countdown removed per request) |

### Node / tooling notes

- System had Node 16; installed **Node 22 LTS** via Homebrew (`/usr/local/opt/node@22/bin`)
- To run dev server: `export PATH="/usr/local/opt/node@22/bin:$PATH" && npm run dev`
- GitHub CLI (`gh`) installed and authenticated as `henryhhchoi`
- Git credentials configured via `gh auth setup-git`

---

## Phase 2 — Static Pages ✅ Complete

### What was built

- **Home** (`/`) — hero names in Pinyon Script, date/location, hero image (dog photo, `public/images/hero.jpeg`, rendered via `next/image` with `fill` + `object-cover`), RSVP CTA button
- **Schedule** (`/schedule`) — Pinyon Script day headers, `EventBlock` component, "Add to Calendar" buttons stub-linked to `/api/calendar?event=X`
  - Thu May 13: Welcome Dinner (venue TBD)
  - Fri May 14: Ceremony & Reception at Seaes Hotel & Resort
- **Travel** (`/travel`) — three vertically-stacked sections (Flight, Hotel, Shuttle), each with a line-drawing SVG icon, small serif label, Pinyon Script name, and centered prose description
  - Hotel: Yak Maeul, 162 Saekdaljungang-ro, 특별자치도, Seogwipo-si
  - Shuttle: Yak Maeul → Seaes, May 15 2027 4:30 pm
- **Things To Do** (`/things-to-do`) — `AttractionCard` component; 8 cards across 4 labeled categories (Scenic Spots, Food & Drink, Beaches, Cultural Sites); circular sage-light placeholder images ready to swap
- **FAQs** (`/faqs`) — 9 Q&A pairs; questions in Pinyon Script, answers in serif; stacked, no accordion
- **`/api/calendar` stub** — returns 501 JSON; keeps "Add to Calendar" buttons from 404ing; shape ready for Phase 4

### New components

| Component | Path |
|---|---|
| `EventBlock` | `src/components/schedule/EventBlock.tsx` |
| `AttractionCard` | `src/components/things-to-do/AttractionCard.tsx` |
| `TravelSection` | inline in `src/app/travel/page.tsx` |

### Refinements after initial build

| What | Change |
|---|---|
| Background color | `#F7F1E5` → `#fcf8f5` → `#f9f9f9` (user wanted flatter white) |
| Button color | `#D97757` → `#e68543` |
| Home hero | Placeholder box replaced with real photo (`IMG_2701.jpeg`) |
| Home blurb | "We're so glad you're here…" paragraph removed |
| Schedule tagline | "We can't wait to celebrate with you." → "What to expect. Weeee." |
| Schedule event cards | Removed `bg-cream-deep` background box; events sit flat on page |
| Schedule event titles | Color changed from `text-ink` to `text-sage` (matches script font) |
| Travel page | Fully redesigned: old multi-section prose layout replaced with 3-section icon+script layout matching screenshot |
| Travel tagline | Updated to "Eek, thank you so much for making the 10+ hour journey to celebrate with us. Heart." |
| Things To Do tagline | Updated to "Eat, see, eat again. Our favourite restaurants, sights and more." |
| Metadata year | Fixed `2026` → `2027` in `layout.tsx` description |

---

## Phase 3 — Decorative SVGs ✅ Complete

### SVG asset files (`public/decorative/`)

To replace any motif, drop a new file with the same name — no code changes needed.

| File | Source | viewBox |
|---|---|---|
| `wave-divider.svg` | Generated | 160×24 |
| `tangerine.svg` | Generated | 40×44 |
| `canola-flower-1.svg` | User-supplied | 91×139 |
| `canola-flower-2.svg` | User-supplied | 87×196 |
| `canola-flower-3.svg` | User-supplied | 100×155 |
| `dol-hareubang.svg` | User-supplied | 980×980 |

### React wrapper components (`src/components/decorative/`)

| Component | Props | Notes |
|---|---|---|
| `WaveDivider` | `size`, `className` | `size` = width; height auto-scales |
| `Tangerine` | `size`, `className` | |
| `CanolaFlower` | `variant` (1\|2\|3), `size`, `className` | Routes to the correct numbered SVG |
| `DolHareubang` | `size`, `className` | |
| `index.ts` | — | Re-exports all four |

### Fixed background composition (`src/components/layout/SiteBackground.tsx`)

A **Server Component** that reads all five SVG files at render time via `fs.readFileSync`, strips XML preamble, normalises each SVG to `width="100%"`, and renders them inline into a `fixed inset-0 z-[-1] pointer-events-none overflow-hidden` container. Page content scrolls over it.

**Desktop composition (14 florals + hareubang):**

| Motif | Position | Size |
|---|---|---|
| canola-3 | top-left corner, cut off | 90px |
| canola-1 | inner top-left | 78px |
| tangerine | nestled top-left | 36px |
| canola-1 | top-right corner, cut off | 95px |
| canola-3 | inner top-right | 75px |
| canola-1 | left side mid | 80px |
| tangerine | left side lower | 34px |
| canola-2 | right side upper | 80px |
| tangerine | right side mid | 34px |
| canola-2 | right side lower | 72px |
| canola-3 | right lower-right | 70px |
| canola-3 | bottom-left | 78px |
| tangerine | bottom-left | 34px |
| canola-1 | bottom-left, partially cropped | 85px |
| dol-hareubang | bottom-right, partially cropped, 70% opacity | 140px |

Mobile reduces to ~7 florals at smaller sizes; desktop-only elements use `hidden md:block`.

### WaveDivider placements (content separators, not background)

| Page | Where |
|---|---|
| Home | Between hero image and RSVP CTA |
| Schedule | Between Thursday and Friday day sections |
| Travel | Between each of the three travel sections |
| Things To Do | Below each category label (`CategoryDivider`) |
| FAQs | Between each Q&A pair |
| Footer | Above the tagline on every page |

### Refinements made during Phase 3

| What | Change |
|---|---|
| Canola SVGs | Replaced generated SVG with 3 user-supplied variants (canola-flower-1/2/3) |
| Dol-hareubang SVG | Replaced generated silhouette with user-supplied illustration |
| Inline → background | Replaced all per-page inline CanolaFlower clusters with the fixed SiteBackground; WaveDividers kept as content dividers |
| Hareubang position | Moved from bottom-left to bottom-right; halved size (280px → 140px desktop) |
| Top-centre canola | Removed (was overlapping with "Cinnia & Henry" wordmark in nav) |
| Bottom florals | Moved from bottom-right to bottom-left to clear hareubang corner |
| Density | Increased ~1.25× by adding 3 new background elements |
| Home "and" | Removed inline tangerines flanking the word |
| FAQs questions | Changed font from Pinyon Script → Cormorant Garamond |

---

## Phase 3 Refinements ✅ Complete

| What | Change |
|---|---|
| Shuttle date | Fixed typo: May 15 → May 14 in `travel/page.tsx` |
| Left-side tangerine | Added `canola-2` above it in `SiteBackground.tsx` so the tangerine isn't isolated |
| Wave dividers | Standardized all to `size={120}` — Home was 180, Schedule was default (160), FAQs was 100; Travel/Things To Do/Footer were already 120 |
| Hareubang alignment | SVG viewBox cropped from `0 0 980 980` → `0 0 980 885` to trim ~106 units of internal whitespace below the figure; combined with `lineHeight: 0` on the container so `bottom: 0` now sits flush with the viewport bottom |

---

## Queued: Phase 4 — Airtable Integration

- `src/lib/airtable.ts` — typed wrappers for Guests + RSVPs tables
- `POST /api/guest-lookup` — normalize name → Levenshtein fuzzy match (≤ 2 edits) → return party or 404
- `POST /api/rsvp` — Zod validation → write RSVPs row (timestamp, source IP, guest ref, meal choices, dietary, special requests)
- `GET /api/calendar?event=X` — replace 501 stub with real `.ics` file generator (no library)
- All secrets server-side only — zero Airtable key in client bundle

---

## Queued: Phase 5 — RSVP Flow

Multi-step client shell (`app/rsvp/page.tsx`):

1. **Lookup** — name input → `POST /api/guest-lookup` → "not found" error or proceed
2. **Party** — per-member rows: Accept/Decline toggle, meal dropdown, dietary text field
3. **Additional info** — special requests textarea
4. **Confirmation** — Pinyon Script "Thank you!", recap, link home

---

## Queued: Phase 6 — Lodging Gate

- Name-lookup gate (reuses `/api/guest-lookup`)
- On success: Yak Maeul overview + guest's room assignment + roommates
- "Reset" clears state back to the prompt
- State in React only (ephemeral by design — no cookie/localStorage)

---

## Queued: Phase 7 — Polish

- Mobile QA: touch targets ≥ 44px, hamburger nav, stacked layouts, font sizes
- Accessibility: `alt` on all images, visible focus rings (sage outline), keyboard nav through RSVP steps, `aria-label` on icon-only elements
- Open Graph meta tags: `og:title`, `og:description`, `og:image`
- Favicon + apple-touch-icon
- Lighthouse ≥ 90 mobile performance; zero axe violations

---

## Queued: Phase 8 — Deploy

- Connect repo to Vercel; add `AIRTABLE_API_KEY` + `AIRTABLE_BASE_ID` env vars
- Configure custom domain (DNS → Vercel)
- Smoke-test full RSVP flow against live Airtable with a real guest record

---

## Still needed from you

- Attraction photos for Things To Do cards (currently gray placeholder circles)
- Dinner venue name and time (currently TBD on Schedule page)
- Ceremony and dinner start times (currently TBD)
- Final guest list uploaded to Airtable
- Airtable base ID + API key (for `.env.local` and Vercel)
- Custom domain name
- Any additional schedule events beyond the welcome dinner and ceremony
