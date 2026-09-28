## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project conventions

- Content lives in `src/data/` and `src/content/`; components stay content-free.
- Copy rules: Nadani's first-person voice, no em dashes, no invented metrics, dates, or ownership claims. Open questions go in `CONTENT-TODO.md`.
- Site chrome matches maxbos.ch exactly (monochrome tokens in `global.css`). Don't add accent hues to the UI.
- Project visuals carry their own palettes, defined locally on each art root (and per-role `hues` in `Stage.astro`), with dark variants. Keep those colors inside the visual.
- Drawn art in `src/components/art/` is abstract and unbranded: no Redfin logos, prices, or real listings. Approved screenshots or video (`media` in `src/data/work.ts`) always replace it.
- The homepage Stage (`src/components/Stage.astro`) is decorative and aria-hidden; every fact it shows must also be in the work index.
- Page transitions use Astro's ClientRouter. Shared elements use `transition:name` (`mark-<id>`, `company-<id>`); page bodies use `pageAnim` from `src/lib/transitions.ts`. Scripts must listen for `astro:page-load`, not run once.
- Every animation must respect `prefers-reduced-motion` (global override in `global.css`).
