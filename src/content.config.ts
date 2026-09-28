import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Long-form case studies. Drafts render in `npm run dev` but are excluded
// from production builds (see src/pages/work/[slug].astro).
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    team: z.string(),
    role: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { work };
