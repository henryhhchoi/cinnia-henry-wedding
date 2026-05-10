# Design Review — Cinnia & Henry Wedding Site

*Mobile-first. Evaluated at 390px, 430px, 1440px.*

---

## The site is afraid of its own kitsch above the fold

Start with the home page on a 390px screen, because that's the question everything else hinges on. A guest taps a link shared via text message. What do they see before scrolling?

Two names in a medium sage-green script font, a small italic "and," a date, and a location. Then they scroll into the hero photo. Then a wave. Then an RSVP button.

This is structurally identical to every wedding website template. The names in Pinyon Script are lovely, but Pinyon Script alone isn't a design idea — it's a font choice. The canola flowers and hareubang that give this site its character are invisible on mobile above the fold: they're at screen edges in a fixed background layer, and the content column on a 390px screen fills nearly the entire width, so the motifs are cropped to near-nothing. The personality of the site — the whole Jeju identity, the kitsch, the wink — is happening behind the content, partially off-screen, and below the fold. The first thing a guest sees is the most generic part of the design.

The motif system is good. The instinct to use canola, tangerine, and hareubang is exactly right — these are specific, earned, and the hareubang at the corner is genuinely charming when you find it. But the system is applied as wallpaper: the content layer doesn't acknowledge the background layer. Nothing in the layout bends toward or responds to the florals. The foreground content and the background motifs exist in complete isolation. When a design element only appears behind everything else at the edges of the screen, it becomes decorative rather than constitutive — it's dressing, not structure.

---

## The palette has a color it's afraid to use

Gold is defined in the design system and used nowhere in the live site. The wave divider — the one recurring ornamental element on every page — is sage. The brief describes gold as for "fine ornamental details." The wave divider is an ornament. A pale golden-wheat wave divider would do three things the current sage version can't: it would read as warm and celebratory rather than brand-colored, it would introduce the palette's most festive note into the rhythm of every page, and it would break the sage monotony that currently makes the site feel like it has four colors instead of six.

Coral is doing too much of one thing. Every CTA is coral, which is correct — CTAs should be coral. But coral never appears as an accent in any other form. The brief envisions it for "small kitsch accents" alongside CTAs. The deeper issue is that sage is carrying almost everything: text, headings, nav links, the active underline, divider lines, the wave SVG fill, the section labels. Sage-deep carries the body copy. The site is de facto monochromatic with coral punctuation.

The cream background is flat. `--color-cream-deep`, a warmer, toastier cream, exists in the design system and has never been used. It belongs somewhere. The schedule event zones, the travel sections, or a subtle section band on the FAQs page — using the richer cream in at least one context would add depth and make the lighter cream feel intentional rather than default.

---

## Typography is being used mechanically, not expressively

The typographic system has enormous range that isn't being explored. Cormorant Garamond is one of the most expressive display serifs available, with deeply beautiful italics and strong range from light to semibold. Currently it's used at body weight for most text and semibold for event titles. The italic registers once on the home page ("and") and on the travel tagline. That's it.

The site has established exactly two registers — Pinyon Script for important headings, Cormorant serif for everything else. This binary is too simple for the emotional range a wedding site needs to cover. There's no moment where the typography surprises you. No place where a large, thin Cormorant italic does something the script couldn't, or where a single word in the script appears unexpectedly mid-text.

The wave divider creates a false visual pause between every section on every page. The divider on the FAQs page appears eight times. By the third Q&A pair, it's invisible — the eye learns to skip it. An ornament that appears this frequently isn't a wink; it's punctuation. And punctuation at this scale stops reading as deliberate and starts reading as a template checkbox.

---

## Structural recommendation 1: The home page needs a new structure

The current home page is: names stacked → date → photo → wave → RSVP. This is a vertical list of information. It's correct information in a logical sequence, but it's a sequence, not a composition.

The names and the photo are the two most compelling elements on the page. They should be in relationship with each other, not separated by date text and stacked sequentially. A full-bleed hero image with the couple's names set as an overlay transforms the opening from a list into a cover — image and text composited together, which is how editorial wedding content works. It also solves the above-the-fold problem on mobile: the image is visible immediately, and the names over the image create a more arresting first impression than names above a separated photo.

The RSVP button is currently below the fold on every mobile device — you have to scroll past the names, the photo, and a wave divider to reach the one interactive element on the page. Whichever layout direction the home page takes, the RSVP CTA needs to be visible earlier.

---

## Structural recommendation 2: The Things To Do page should be redesigned for mobile entirely

Eight cards in a single column at mobile is a catalogue, not a recommendation. This is the most content-rich page on the site, and it currently has the least visual variation. Every card is the same weight, the same size, the same composition. There's no signal about what the couple actually loves versus what they felt obligated to include.

Real editorial travel content has hierarchy. The marquee pick in a category gets more space, more presence. The supporting picks are subordinate. If Jeongbang Waterfall or a specific restaurant is the couple's actual top recommendation, it should feel that way typographically and spatially. A single full-width "hero" pick per category — larger image area, larger name, description more prominent — followed by smaller supporting cards would transform this page from a list to a curated guide.

---

## Structural recommendation 3: The motif system should enter the content layer at least once

The background motifs need at least one moment where they cross the threshold from wallpaper into the foreground of the design. Not everywhere — the restraint of the background treatment is correct for most of the site. But there should be one deliberate, specific moment where a motif element is part of the content layout rather than behind it.

The best candidate is the travel page. The three-section structure (Flight, Hotel, Shuttle) is formal and centered. A canola illustration appearing as a content-level element — not behind everything, but in the composition — would make the page feel designed rather than built. On mobile, this would solve the motif-invisibility problem: since the background florals are barely visible on a 390px screen, a canola element inside the content flow gives mobile guests the character that desktop users get from the border treatment.

---

## What the site is doing right and should not change

The EventBlock flat layout on the schedule page — no card background, no border, just text on the cream surface — is a real design decision, and it's correct. It communicates confidence.

The stacked Q&A format on FAQs, no accordion, is also right. It's a slower, more intimate way to read.

The Pinyon Script attraction names on the Things To Do cards are exactly where script type belongs in unexpected places — not at the top of a content hierarchy but as a midlevel flourish naming something specific. Keep this.

The typographic pairing itself is strong. The problem isn't Pinyon Script and Cormorant — they work together well. The problem is that the system is being used too mechanically. The bones are right.

The hareubang in the corner is the single best moment on the site. It's exactly the right scale of wink — you find it rather than it announcing itself. Everything else in the motif system should aspire to feel the way the hareubang feels.

---

## The central design challenge

The site is currently elegant without being specific, and kitschy without committing to it. Elegance plus restrained kitsch is the goal — but right now the two qualities are in separate layers and never actually meet. The content layer is elegant and safe. The background layer is kitschy and invisible on mobile. A guest scrolling on their phone sees a well-made, tasteful, centered wedding site with a few nice font choices.

The version of this site that lands where it should — editorial, Jeju-specific, by a couple with strong taste — is one where the motifs and the content have a relationship, where the palette's full range is audible, where the typography takes at least one risk per page, and where the home page opening has a visual idea rather than a visual structure.
