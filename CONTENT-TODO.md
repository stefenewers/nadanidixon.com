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
- [ ] Knovel, Divvy, and Mastercard now have their own pages. See section 6.

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

## 6. Divvy, Knovel, Mastercard stories
Where: `stories` in `src/data/work.ts`, illustrations in `src/components/art/DivvyArt.astro`, `KnovelArt.astro`, `MastercardArt.astro`. Pages: `/work/divvy-homes`, `/work/knovel-protocol`, `/work/mastercard`.

Everything below is written from the content brief. Please confirm each line before a wider launch.

### Divvy Homes
- [ ] Dates shown as Apr 2024 to Jan 2025, title Senior Software Engineer.
- [ ] Copy says she built internal systems for asset turnover, customer transitions and move-outs, and realtor and prospective-buyer workflows. Is "built" accurate, or should it be "worked on" or "helped build" for any of these?
- [ ] "I modeled those operational rules as Temporal workflows" (implied in the idea paragraph and listed in the bullets). Was this her design, shared, or a team pattern she worked within?
- [ ] "A winterization workflow for asset management": did she build it end to end?
- [ ] SQL dashboards "helped operations teams look at property conditions, repair costs, and system performance."
- [ ] "I worked across the whole path: requirements, architecture, TypeScript implementation, testing, and deployment."
- [ ] Illustration: the states **Move-out, Turnover, Winterize, Ready, Buyers**, the actors **Resident, Ops team, Realtor**, the "when needed" branch, and the "retry" loop are illustrative. Are they a fair simplification, or misleading about how Divvy actually worked? Rename anything that would read as wrong to a former colleague.
- [ ] Not on the site, pending her OK: 20% fewer unexpected move-outs, 5% faster transactions, $3.75M lower repair costs. If she wants them, we need how each was measured, her share of the credit, and permission to share.

### Knovel Protocol
- [ ] Dates shown as Aug 2024 to Jul 2025, title Founding Engineer. (Overlaps Redfin until Jul 2025.)
- [ ] Product description: "a Web3 literary publishing platform, built around a different relationship between authors and readers when it comes to publishing, ownership, and pay." Accurate and OK to say publicly? Is the company still operating (the site uses past tense "was")?
- [ ] "Architected smart-contract infrastructure for author royalty distribution": is "architected" hers alone?
- [ ] Transaction sequencing, state transitions, failure conditions; security, gas efficiency, maintainability; backend services syncing on-chain events with a clear boundary. All from the brief; confirm wording.
- [ ] Illustration: the **royalty split** bar (author gets the largest share), the "**Royalty received**" notification in the app, "**Immutable once confirmed**", and the generic "**state transition**" row are conceptual. Does the split visual misstate how royalties worked?
- [ ] Not on the site, pending her OK: the Ethereum/IPFS NFT marketplace, and any token incentives or digital-rights features. The site also avoids naming a specific chain.

### Mastercard
- [ ] Dates shown as May 2020 to Apr 2024, with SWE I from May 2020, SWE II from Feb 2022, Senior from Jan 2024.
- [ ] "A high-traffic expense-management platform that helps businesses manage company-card spending." OK to describe it this way? Should the product be named?
- [ ] REST APIs in Java and Spring Boot; relational data models; event-driven microservices with Kafka; leading backend work and mentoring junior engineers.
- [ ] "Every purchase on a company card is an event that several services need to agree on" is our framing of the system. Is it accurate?
- [ ] Illustration: one **spend event → REST API → Kafka event stream → three services "in sync"**, some with databases. Service boxes are intentionally unnamed. The card drawing is generic (no Mastercard branding).
- [ ] Not on the site, pending verification: 50+ banks, 500K+ users, 99.99% uptime, leading five engineers, and any revenue figures (the résumé's "revenue potential" should not become realized revenue).

### Visual colors
- [ ] The role hues (indigo for Knovel, teal for Divvy, orange for Mastercard) are ours, not the companies' brand colors. Fine as is?

## 7. Thinketh (first project)
Where: `projects` and `projectStories.thinketh` in `src/data/work.ts`, illustration in `src/components/art/ThinkethArt.astro`, screenshots in `public/projects/thinketh/`. Page: `/projects/thinketh`.

Sources: the team repo (github.com/stefenewers/thinketh), its commit history, and Stefen's case study. "What I built" was separated from Stefen's work using commit authorship: Nadani authored the first intelligence/API commit (engine, update rule, diagnostic selection, delta, daily brief, Hono API, service adapters with fallbacks, 56 tests), the live integrations (MongoDB Atlas, Tiger Data, Backboard, Supabase), Visualize this, deploy readiness, and several UI passes. Stefen authored most of the mobile app, the Playground, Mindprint, the contracts, and most tests.

- [ ] Is Nadani comfortable with "What I built" as written, especially "the first version of the intelligence layer" (Stefen extended the engine afterwards)?
- [ ] "Stefen built most of the mobile app, the Playground, and the Mindprint layout engine." OK with both of them?
- [ ] Headline: "A personal learning system that teaches you only what you don't already know." In her voice?
- [ ] Screenshots used: Today, Development, Check, Mind changes, Visualize this. The Playground screens show "Nadani" as a seeded demo persona and were left out on purpose.
- [ ] The demo video is embedded from Vimeo (1230766511). Confirm it should stay public on her site.
- [ ] The site says nothing about placing at HackGT, because it didn't. Keep it that way.
- [ ] Illustration uses real Thinketh concepts (the delta, the check, the update rule Δm = 0.35·U·w·(target − m), books shaded by evidence, change labels like Stronger evidence). Confirm it reads as her engine.

## 8. Portrait and logos
- [ ] Portrait (`public/nadani.jpg`, cropped from `assets/originals/nadani.PNG`) is used on the homepage and as the social preview image. Confirm she's happy with the crop and with it appearing in link previews.
- [ ] Company logos appear next to each role, and the Thinketh logo next to the project, only to identify each one.
