# nadanidixon.com

Personal portfolio for Nadani Dixon. Built with [Astro](https://astro.build), static output, no client framework.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Where things live

| What | Where |
| --- | --- |
| Name, links, résumé, email | `src/data/site.ts` |
| Homepage intro | `src/components/Intro.astro` |
| Work index, Redfin page copy, education | `src/data/work.ts` |
| Redfin detail page | `src/pages/work/redfin.astro` |
| Projects (Thinketh) | `src/pages/projects/*.astro` → `src/components/ProjectStory.astro`, copy in `projectStories`, screenshots in `public/projects/` |
| Divvy, Knovel, Mastercard pages | `src/pages/work/*.astro` → `src/components/RoleStory.astro`, copy in `stories` in `src/data/work.ts` |
| Case studies (Markdown) | `src/content/work/*.md` |
| Homepage hover stage | `src/components/Stage.astro` |
| Drawn visuals | `src/components/art/` |
| Portrait, company logos | `public/nadani.jpg`, `public/logos/` (optimized); full-size originals in `assets/originals/` (not served) |
| Page transitions | `src/lib/transitions.ts` |
| Design tokens | `src/styles/global.css` |

**Add a screenshot or video:** put it in `public/work/` and set `media` on the featured project or a Redfin item in `src/data/work.ts`. It replaces the drawn visual.

**Publish a case study:** fill in `src/content/work/<slug>.md`, set `draft: false`, and set `caseStudy: '<slug>'` on `redfin.featured`. Drafts show in `npm run dev` only.

**Add a résumé or email:** set `resume` or `email` in `src/data/site.ts`.

See `CONTENT-TODO.md` for what's still needed before launch.

## Deploy

Pushes to `main` deploy on Vercel. Astro is detected automatically (build `npm run build`, output `dist`). Requires Node 22.12+.
