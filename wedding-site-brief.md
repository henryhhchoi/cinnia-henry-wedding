# Cinnia & Henry — Wedding Website Brief

## Project overview

Build a wedding website for a destination wedding in South Korea (Jeju), with guests traveling primarily from North America. Approximately 75 guests, summer 2027. The site needs to be elegant, easy to navigate on mobile (most guests will view on phone), and mildly kitschy in its decorative flourishes.

---

## Tech stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts via `next/font` (Pinyon Script for script, Cormorant Garamond for serif)
- **Hosting:** Vercel (free tier)
- **RSVP / Guest List backend:** Airtable
  - One base, two tables: `Guests` and `RSVPs`
  - Server-side API routes in Next.js will hit Airtable using the official JS SDK
  - Airtable API key stored in `.env.local`, never exposed client-side
- **Forms:** React Hook Form + Zod validation
- **Calendar exports:** Generate `.ics` files server-side for "Add to calendar" buttons
- **Image optimization:** `next/image`

---

## Design system

### Color palette

```
--color-cream:        #F7F1E5  /* primary background */
--color-cream-deep:   #EFE6D0  /* card backgrounds, subtle sections */
--color-sage:         #8FA68C  /* primary brand color, headings, nav */
--color-sage-deep:    #6B8068  /* hover states, body text on cream */
--color-sage-light:   #C4D0BD  /* dividers, subtle accents */
--color-coral:        #D97757  /* CTA buttons, accent pops (kitsch) */
--color-coral-deep:   #B85D40  /* button hover */
--color-gold:         #C9A961  /* fine ornamental details */
--color-ink:          #2D3A2C  /* darkest text, sparingly used */
```

The cream is the primary background everywhere. Sage is the dominant brand color (script names, headings, nav, dividers). Coral is reserved for CTAs and small kitsch accents — buttons like "RSVP," "Add to calendar," "Continue." Gold is for ornamental flourishes only (border details, small icons).

### Typography

- **Script (display):** Pinyon Script — used for the couple's names, page hero headers, and major decorative headlines. Always sage colored. Generous letter spacing and line height.
- **Serif (body + nav):** Cormorant Garamond — used for navigation, body copy, section labels, button text, form labels. Weight 400 for body, 500–600 for headings.
- Set body text at ~17px on mobile, 18–19px on desktop, line-height 1.7.

### Layout principles

- Centered, single-column layouts on every page
- Maximum content width ~640–720px (text feels intimate, not stretched)
- Generous vertical whitespace between sections (96–128px on desktop, 64–80px on mobile)
- Page headers feel airy: large script title, lots of space above and below
- Active nav item underlined with a thin sage line beneath

### Buttons

- Solid coral fill, white serif text, ~6px border radius, 14px vertical padding, 32px horizontal padding
- Hover: darker coral, no transform
- Outline variant: cream background, coral border, coral text (use for secondary actions)

### Decorative motifs ("kitsch")

Add tasteful Jeju-inspired decorative SVG elements as section dividers and accents:

- A small **wave** motif (a stylized rolling wave, hand-drawn feel) as a horizontal section divider — tiny, sage or gold, centered between sections
- **Tangerines** (Jeju is famous for hallabong/Jeju mandarins) as a small coral-orange accent — used sparingly as a corner flourish or in lieu of a bullet point
- **Canola flowers** (yuchae, Jeju's iconic spring bloom) as botanical line illustrations at section breaks — small clustered yellow-gold blossoms, hand-drawn style
- **Dol Hareubang** (the basalt grandfather statues) — used very sparingly, ideally just once on the site (maybe as a small corner accent on the Home page or a tiny icon in the Travel page intro). It's a strong visual; one appearance is the wink, two would be too much.
- All decorative SVGs should be small, restrained, and used sparingly — the kitsch should feel like a wink, not a costume

---

## Site structure

Six top-level pages, all reachable from a centered horizontal nav under the wordmark.

```
/              Home
/schedule      Day-by-day events
/travel        Getting to and around Korea
/things-to-do  Attractions and recommendations
/lodging       Property + room assignments (RSVP-gated)
/faqs          Frequently asked questions
/rsvp          Guest lookup → RSVP form
```

### Wordmark + nav (every page)

- Top: "Cinnia & Henry" in Pinyon Script, sage colored, ~48px on desktop / ~36px on mobile
- Below: horizontal nav with seven items in Cormorant: Home, Schedule, Travel, Things To Do, Lodging, FAQs, RSVP
- Active page underlined with thin sage line
- On mobile: hamburger menu opening a centered overlay nav

---

## Page-by-page specs

### 1. Home (`/`)

- Hero: "Cinnia Lee" / "and" / "Henry Choi" stacked vertically, large Pinyon Script script
- Below: wedding date and Jeju, South Korea, in serif
- A single hero image (engagement photo or scenic Jeju landscape — placeholder for now)
- Short introductory paragraph below the image
- A single coral CTA button: "RSVP"

### 2. Schedule (`/schedule`)

- Page header: "Schedule" in Pinyon Script
- A short tagline below in serif italic
- For each day (Thursday → Friday), a date header in Pinyon Script
- Under each date, one or more event blocks. Each event block contains:
  - Event name (serif, semibold, ~24px)
  - Time range (serif regular)
  - Venue name (serif italic)
  - "Add to calendar" coral button generating an .ics download
- Vertical sage divider line between event blocks

### 3. Travel (`/travel`)

- Page header: "Travel" in Pinyon Script
- Warm welcome sentence acknowledging the long journey
- Two-column layout (stacks on mobile) with a thin vertical sage divider between columns:
  - Left column: small line-icon (plane), label in serif, then airport/destination names in Pinyon Script
  - Right column: prose explaining the routing, in serif
- Sections to include: flights (ICN/GMP → CJU), ground transport on Jeju (rental car, taxi), accommodation overview (links to /lodging), passport/visa notes for US/Canadian travelers, currency tips
- Optional: a small static map of Jeju with the venue pinned

### 4. Things to Do (`/things-to-do`)

- Page header: "Things To Do" in Pinyon Script
- Tagline in serif italic
- Stacked cards, each centered with:
  - Circular cropped photo (~240px diameter)
  - Attraction name in Pinyon Script below the photo
  - Location in serif italic
  - One-sentence description in serif
  - Coral "View" button linking to Google Maps
- Categories: scenic spots, restaurants, beaches, cultural sites — separated by small decorative SVG dividers (the wave motif)

### 5. Lodging (`/lodging`)

- **This page is gated.** Guests must enter their first + last name (same as RSVP lookup) before seeing room assignments.
- Before unlock: prompt looks like the RSVP page — name input, "Continue" button
- After unlock: show the property overview (name, photos, amenities) AND the specific room assignment for that guest's party (e.g., "You're staying in Room X, with [partner/family names]")
- Include a "Reset" link that clears the lookup and returns to the prompt

### 6. FAQs (`/faqs`)

- Page header in Pinyon Script
- Short intro paragraph in serif
- Each question in Pinyon Script (centered)
- Each answer in serif, brief, friendly
- **No accordion** — just stacked question/answer pairs
- Suggested questions to seed:
  - When should I RSVP by?
  - What's the dress code?
  - I have a food allergy / dietary restriction — can you accommodate?
  - Is the venue accessible?
  - What's the best way to get from the airport?
  - Will there be wifi at the venue?
  - What's the weather like in Jeju in May?
  - Are there activities for kids?
  - What if I'm jet-lagged and need to rest?

### 7. RSVP (`/rsvp`)

Multi-step flow:

**Step 1: Lookup**
- Centered card with sage-deep border on cream-deep background
- Prompt: "Please enter the first and last name of one member of your party below."
- Single text input with helper text (e.g., "Ex. Sarah Fortune (not The Fortune Family or Dr. & Mr. Fortune)")
- Coral "Continue" button
- On submit, fuzzy-match against the Airtable `Guests` table (case-insensitive, trim whitespace, tolerate small typos)

**Step 2: Party confirmation**
- Show all members of the party associated with that guest record
- For each member: a row with name, attendance toggle (Accept / Decline), meal preference dropdown, dietary restrictions text field

**Step 3: Additional info**
- Free-text field for special requests
- Submit button

**Step 4: Confirmation**
- Show a styled confirmation message in Pinyon Script ("Thank you!")
- Recap of submitted RSVP
- Link back to home

All RSVP submissions write to the Airtable `RSVPs` table with a timestamp and a reference to the guest record.

---

## Data model (Airtable)

### `Guests` table

| Field | Type | Notes |
|---|---|---|
| Name | Single line text | "First Last" — the lookup field |
| Party ID | Single line text | Groups multiple guests into one party (e.g., a family) |
| Party Members | Long text | Comma-separated names in the party (denormalized for ease) |
| Email | Email | Optional |
| Room Assignment | Single line text | e.g., "Room 12" |
| Roommates | Long text | Names of others in the same room |
| Notes | Long text | Internal notes for couple |

### `RSVPs` table

| Field | Type | Notes |
|---|---|---|
| Guest Record | Link to `Guests` | |
| Submitted At | Created time | |
| Attending | Single select | Accept / Decline / Partial |
| Meal Choices | Long text | JSON or formatted text per attendee |
| Dietary Restrictions | Long text | |
| Special Requests | Long text | |
| Source IP | Single line text | Light spam protection |

---

## Privacy & access

- Lightweight: no full password gate on the site (most guests would find it annoying)
- Lodging page is name-gated as described above
- RSVP submissions require name match — no walk-up RSVPs from random visitors
- `robots.txt` set to disallow indexing

---

## Build phases

1. **Foundation:** Next.js scaffold, Tailwind setup, fonts wired up, design tokens defined as CSS variables, base layout with wordmark + nav
2. **Static pages:** Home, Schedule, Travel, Things To Do, FAQs — all with placeholder content
3. **Decorative SVGs:** Create the Jeju motif library (wave divider, tangerine accent, canola flower flourish, dol hareubang)
4. **Airtable integration:** Set up the API routes for guest lookup and RSVP submission, with proper error handling
5. **RSVP flow:** Build the multi-step form
6. **Lodging gate:** Implement the name-gated lodging reveal
7. **Polish:** mobile QA, accessibility pass (alt text, focus states, keyboard nav), Open Graph meta tags, favicon, performance audit
8. **Deploy:** push to GitHub, connect to Vercel, configure custom domain

---

## Things to provide as we go

- Real copy for each page
- Hero photos and gallery images
- Final guest list (in Airtable)
- Custom domain
- Final color/font tweaks once v1 is in the browser

---

## Confirmed details

- **Ceremony:** Friday, May 14, 2027 at Seaes Hotel & Resort, Jeju, South Korea
- **Welcome dinner:** Thursday, May 13, 2027 — venue TBD
- **RSVP deadline:** December 1, 2026
- **Dress code:** Semi-formal
- **Language:** English only (v1)
- **Guests:** ~75, primarily from North America
- **Lodging:** All guests at Seaes Hotel & Resort; room assignments tracked in Airtable
- **Reference copy (Travel page):** "Eek, thank you so much for making the 10+ hour journey to celebrate with us."
