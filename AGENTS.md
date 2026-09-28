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
- Illustrations are abstract and labeled; never mock up Redfin UI as if it were a screenshot.
- Every animation must respect `prefers-reduced-motion` (global override in `global.css`).
