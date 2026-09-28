// All homepage work content lives here.
//
// Adding a screenshot: put the file in /public/work/ and set `media` on the
// entry. It replaces the drawn illustration automatically.
//
// Adding a case study: write src/content/work/<slug>.md, set `draft: false`,
// and set `caseStudy: '<slug>'` on the entry. The homepage links to it.
//
// Copy notes: keep it in Nadani's voice, no em dashes, and no metrics or
// ownership claims she hasn't confirmed. See CONTENT-TODO.md.

export type Art = 'neighborhood' | 'cost' | 'home' | 'discover';

export interface Media {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Feature {
  name: string;
  summary: string;
}

export interface WorkEntry {
  id: string;
  /** The renter question this work answers. Shown as a small label. */
  question: string;
  title: string;
  summary: string;
  art: Art;
  layout: 'half' | 'wide';
  media?: Media;
  caseStudy?: string;
  features?: Feature[];
}

export const featured = {
  id: 'neighborhood-search',
  title: 'Neighborhood Search',
  lede: 'Most people know the neighborhood they want long before they know the address.',
  body: [
    'Neighborhood Search helps renters start from the part of town they already have in mind and explore rentals from there.',
    'It’s the work I’d most like you to see. I built it as an engineer on the Rentals Consumer team, working closely with product and design.',
  ],
  meta: [
    { label: 'Team', value: 'Redfin Rentals Consumer' },
    { label: 'My role', value: 'Software engineer' },
    { label: 'Partners', value: 'Product and design' },
  ],
  art: 'neighborhood' as Art,
  media: undefined as Media | undefined,
  caseStudy: undefined as string | undefined,
};

export const work: WorkEntry[] = [
  {
    id: 'total-cost',
    question: 'What will this place really cost?',
    title: 'Total Cost of Renting',
    summary:
      'The rent on a listing is rarely the whole monthly bill. This work helps renters see more of what a place will cost before they reach out.',
    art: 'cost',
    layout: 'half',
  },
  {
    id: 'the-home',
    question: 'What’s it like inside?',
    title: 'Getting to know a home',
    summary:
      'A set of listing page improvements that help someone picture a place before they ever tour it.',
    art: 'home',
    layout: 'half',
    features: [
      { name: 'About the Home', summary: 'Clearer details about the home itself.' },
      { name: 'Floor plans', summary: 'Ways to explore a unit’s layout.' },
      { name: 'Sun Exposure', summary: 'Bringing sun exposure details to rentals.' },
      { name: 'Media gallery footer', summary: 'Key actions stay in reach while browsing photos on mobile.' },
    ],
  },
  {
    id: 'discovery',
    question: 'What else might I like?',
    title: 'Finding the next place',
    summary:
      'Not every search ends with the first listing. This work gives renters lighter ways to discover places they might not have searched for.',
    art: 'discover',
    layout: 'wide',
    features: [
      { name: 'Swipey Recs', summary: 'A quick, swipe-based way to browse recommended rentals.' },
      { name: 'Marketing emails', summary: 'Rental emails that point people back to homes worth a look.' },
    ],
  },
];

// Quieter work that matters but doesn't need a big visual.
export const alsoWork: Feature[] = [
  {
    name: 'Swagger and OpenAPI',
    summary:
      'Documenting our APIs so other engineers can understand them and build against them with less guesswork.',
  },
];

export const background = {
  intro: [
    'I studied computer science at Middlebury College, and I’m now working toward an M.S. in Computer Science at Georgia Tech.',
    'Before Redfin, I worked at Mastercard and Divvy Homes. The thread through all of it is the same: I like building things where it’s easy to picture the person on the other side of the screen.',
  ],
  timeline: [
    { label: 'Now', place: 'Redfin', detail: 'Software Engineer II, Rentals Consumer' },
    { label: 'Before', place: 'Divvy Homes', detail: null },
    { label: 'Before', place: 'Mastercard', detail: null },
    { label: 'Studying', place: 'Georgia Tech', detail: 'M.S. Computer Science' },
    { label: 'Studied', place: 'Middlebury College', detail: 'Computer Science' },
  ] as { label: string; place: string; detail: string | null }[],
};
