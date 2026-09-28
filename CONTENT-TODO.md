# What we need from Nadani before publishing

The site's copy is written from project names and her LinkedIn. The visuals are abstract drawings standing in for approved screenshots; each one is replaced automatically when `media` is set. Each item below says exactly where the answer goes.

## 1. Voice and introduction
Where: `src/components/Intro.astro`
- [ ] Her LinkedIn About section (it's behind a sign-in, so we couldn't read it). The intro line "building the parts of a product people actually touch" and the "search boxes, listing pages, the email that brings you back" sentence are placeholders for her own personality. Rewrite from her About section.
- [ ] Is "Software engineer in Atlanta" how she wants to be introduced?

## 2. Work index facts
Where: `roles` in `src/data/work.ts`
- [ ] Redfin title: LinkedIn says "Software Engineer", the original brief said "Software Engineer II". The site uses II. Which is right?
- [ ] Knovel overlaps Redfin until July 2025. Fine to show years only?
- [ ] Knovel, Divvy, Mastercard: is there a verified project story for any of them? If so, it can get its own detail page like Redfin (add `href` to that role and a page under `src/pages/work/`).

## 3. Neighborhood Search (featured)
Where: `redfin.featured` in `src/data/work.ts`
- [ ] Confirm the description: "helps renters start from the part of town they already have in mind and explore rentals from there."
- [ ] Her exact role: lead engineer, one of several, front end, back end, full stack? Replaces `meta` → Role.
- [ ] **Hero screenshot or screen recording**: public, launched UI, cleared by Redfin. At least 2400px wide. Put it in `public/work/` and set `redfin.featured.media` (`{ src, alt, width, height }`, plus `kind: 'video'` for mp4). It replaces the map drawing as the hero of `/work/redfin` and the preview in the mobile Redfin card.
- [ ] Case study: the problem, what she owned, one engineering decision worth explaining, and any result she's allowed to share. Goes in `src/content/work/neighborhood-search.md`. When ready, set `draft: false` there and `caseStudy: 'neighborhood-search'` on `redfin.featured`. A "Read the case study" link appears on the Redfin page. Until then the case study stays unpublished.

## 4. Other Redfin work
Where: `redfin.groups` in `src/data/work.ts`
- [ ] Confirm each one-line summary, especially Sun Exposure (the brief called it "parity"; parity with what?), Total Cost of Renting (what costs are included?), and the media gallery footer (what's in it?).
- [ ] Web, iOS, Android, or all three for each.
- [ ] Screenshots per group replace the drawings in `redfin.groups[].art` (cost, floor plan, swipe cards). Per-item screenshots: set `media` on the item and it renders under that item's summary.
- [ ] The homepage hover collage (`src/components/Stage.astro`) uses the same drawings. Swap them for screenshots there too once approved. Most wanted: Total Cost of Renting, a floor plan view, Swipey Recs (a short recording is ideal), one marketing email.

## 5. Links
Where: `src/data/site.ts`
- [ ] Résumé PDF. Put it in `public/` and set `resume`.
- [ ] Whether she wants a public email address. Set `email`.
  Neither link renders until it's set.
