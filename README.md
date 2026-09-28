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
| All homepage work copy | `src/data/work.ts` |
| Case studies (Markdown) | `src/content/work/*.md` |
| Drawn illustrations | `src/components/art/` |
| Design tokens | `src/styles/global.css` |

**Add a screenshot:** put it in `public/work/` and set `media` on the entry in `src/data/work.ts`. It replaces the illustration.

**Publish a case study:** fill in `src/content/work/<slug>.md`, set `draft: false`, and set `caseStudy: '<slug>'` on the entry. Drafts show in `npm run dev` only.

**Add a résumé:** drop the PDF in `public/` and set `resume` in `src/data/site.ts`. The nav and contact links appear automatically.

See `CONTENT-TODO.md` for what's still needed before launch.

## Deploy

Push to GitHub and import the repo in Vercel. It detects Astro automatically (build `npm run build`, output `dist`). Requires Node 22.12+.
