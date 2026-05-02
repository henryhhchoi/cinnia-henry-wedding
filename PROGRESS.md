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

## Queued: Phase 2 — Static Pages

All content pages with placeholder copy (easy to swap for real content later).

- **Home** — flesh out: add hero image placeholder, intro paragraph, finalize hero layout
- **Schedule** (`/schedule`) — day headers in Pinyon Script, EventBlock components per event, "Add to calendar" coral buttons
  - Thu May 13: Welcome Dinner (venue TBD)
  - Fri May 14: The Actual Wedding at Seaes Hotel & Resort (+ any other events)
- **Travel** (`/travel`) — two-column flight layout, ICN/GMP → CJU routing, accommodation overview, taxi/rental car, passport/visa, currency tips
- **Things To Do** (`/things-to-do`) — AttractionCard components (circular photo, Pinyon Script name, serif description, View button)
  - Seogwipo Jeongbang Waterfall (confirmed)
  - Additional cards TBD
- **FAQs** (`/faqs`) — stacked Pinyon Script question / serif answer pairs, no accordion
  - RSVP by: December 1, 2026
  - Dress code: Semi-formal
  - Food allergies: Yes, of course
  - Additional Q&A TBD

**Review gate:** all pages render with placeholder content; Travel two-col stacks on mobile; FAQ pairs look clean.

---

## Queued: Phase 3 — Decorative SVGs

Jeju-inspired motif library, each as a React component with `size` + `className` props:

- **Wave divider** — sage/gold, centered between sections
- **Tangerine** — coral-orange accent, corner flourish or bullet substitute
- **Canola flower** — gold blossoms, botanical line-drawing style, section breaks
- **Dol Hareubang** — appears **once only** on the site (Home page corner accent)

Style target: organic/textured line-drawing feel, not flat icons.

---

## Queued: Phase 4 — Airtable Integration

- `src/lib/airtable.ts` — typed wrappers for Guests + RSVPs tables
- `POST /api/guest-lookup` — normalize name → Levenshtein fuzzy match (≤ 2 edits) → return party or 404
- `POST /api/rsvp` — Zod validation → write RSVPs row (timestamp, source IP, guest ref, meal choices, dietary, special requests)
- `GET /api/calendar?event=X` — stream `.ics` file (custom generator, no library)
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
- On success: Seaes Hotel & Resort overview + guest's room assignment + roommates
- "Reset" clears state back to the prompt
- State in React only (ephemeral by design — no cookie/localStorage)

---

## Queued: Phase 7 — Polish

- Mobile QA: touch targets ≥ 44px, hamburger nav, stacked layouts, font sizes
- Accessibility: `alt` on all images, visible focus rings (sage outline), keyboard nav through RSVP steps, `aria-label` on icon-only elements
- Open Graph meta tags: `og:title`, `og:description`, `og:image`
- Favicon + apple-touch-icon
- `next/image` sizing + priority on hero
- Lighthouse ≥ 90 mobile performance; zero axe violations

---

## Queued: Phase 8 — Deploy

- Connect repo to Vercel; add `AIRTABLE_API_KEY` + `AIRTABLE_BASE_ID` env vars
- Configure custom domain (DNS → Vercel)
- Smoke-test full RSVP flow against live Airtable with a real guest record

---

## Still needed from you

- Real copy for each page (Travel, Things To Do, FAQs, etc.)
- Hero photos and attraction images
- Final guest list uploaded to Airtable
- Airtable base ID + API key (for `.env.local` and Vercel)
- Custom domain name
- Dinner venue (currently TBD)
- Any additional schedule events beyond the welcome dinner and ceremony
