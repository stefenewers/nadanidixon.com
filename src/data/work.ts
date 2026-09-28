// All work content lives here.
//
// Visuals: until approved screenshots exist, each Redfin area uses a drawn
// abstract composition (`art`, see src/components/art). Adding a screenshot or
// video: put the file in /public/work/ and set `media` on the featured project
// or a Redfin item. Media always wins over art.
//
// Adding a case study: write src/content/work/<slug>.md, set `draft: false`,
// and set `caseStudy: '<slug>'` on the featured project. The Redfin page links
// to it.
//
// Copy notes: keep it in Nadani's voice, no em dashes, and no metrics or
// ownership claims she hasn't confirmed. See CONTENT-TODO.md.

export type Art = 'neighborhood' | 'cost' | 'home' | 'discover';

export interface Media {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Set for video files (mp4/webm). Images omit it. */
  kind?: 'image' | 'video';
}

export interface Role {
  id: string;
  company: string;
  /** Monogram shown in the index. Typographic, not a logo. */
  mark: string;
  title: string;
  years: string;
  /** Only roles with a real detail page get one. */
  href?: string;
  featured?: { name: string; summary: string };
  /** Tenure as fractional years (month / 12), from LinkedIn. `end: null` = current. */
  span: { start: number; end: number | null };
  /** Title changes within the role, from LinkedIn. */
  steps?: { title: string; from: string }[];
}

// The homepage work index, newest first.
export const roles: Role[] = [
  {
    id: 'redfin',
    company: 'Redfin',
    mark: 'R',
    title: 'Software Engineer II, Rentals Consumer',
    years: '2025–Now',
    href: '/work/redfin',
    featured: {
      name: 'Neighborhood Search',
      summary: 'Helping renters start from the neighborhood they already have in mind.',
    },
    span: { start: 2025 + 3 / 12, end: null },
  },
  {
    id: 'knovel',
    company: 'Knovel Protocol',
    mark: 'K',
    title: 'Founding Engineer',
    years: '2024–2025',
    span: { start: 2024 + 7 / 12, end: 2025 + 7 / 12 },
  },
  {
    id: 'divvy',
    company: 'Divvy Homes',
    mark: 'D',
    title: 'Senior Software Engineer',
    years: '2024–2025',
    span: { start: 2024 + 3 / 12, end: 2025 + 1 / 12 },
  },
  {
    id: 'mastercard',
    company: 'Mastercard',
    mark: 'M',
    title: 'Software Engineer I to Senior Software Engineer',
    years: '2020–2024',
    span: { start: 2020 + 4 / 12, end: 2024 + 4 / 12 },
    steps: [
      { title: 'Software Engineer I', from: 'May 2020' },
      { title: 'Software Engineer II', from: 'Feb 2022' },
      { title: 'Senior Software Engineer', from: 'Jan 2024' },
    ],
  },
];

export interface RedfinItem {
  name: string;
  summary: string;
  media?: Media;
}

// Content for /work/redfin.
export const redfin = {
  intro:
    'I work with product and design on the experience renters use to find a place to live.',
  featured: {
    name: 'Neighborhood Search',
    lede: 'Most people know the neighborhood they want long before they know the address.',
    body: 'Neighborhood Search helps renters start from the part of town they already have in mind and explore rentals from there. It’s the work I’d most like you to see.',
    meta: [
      { label: 'Role', value: 'Software engineer' },
      { label: 'Partners', value: 'Product and design' },
    ],
    art: 'neighborhood' as Art,
    media: undefined as Media | undefined,
    caseStudy: undefined as string | undefined,
  },
  groups: [
    {
      label: 'On the listing',
      art: ['cost', 'home'],
      items: [
        { name: 'Total Cost of Renting', summary: 'More of the monthly cost, beyond rent, up front.' },
        { name: 'About the Home', summary: 'Clearer details about the home itself.' },
        { name: 'Floor plans', summary: 'Ways to explore a unit’s layout.' },
        { name: 'Sun Exposure', summary: 'Sun exposure details, now on rentals.' },
        { name: 'Media gallery footer', summary: 'Key actions stay in reach while browsing photos on mobile.' },
      ],
    },
    {
      label: 'Discovery',
      art: ['discover'],
      items: [
        { name: 'Swipey Recs', summary: 'A quick, swipe-based way to browse recommended rentals.' },
        { name: 'Marketing emails', summary: 'Rental emails that point people back to homes worth a look.' },
      ],
    },
    {
      label: 'Platform',
      items: [
        { name: 'Swagger and OpenAPI', summary: 'API documentation other engineers can build against.' },
      ],
    },
  ] as { label: string; art?: Art[]; items: RedfinItem[] }[],
};

export const education = [
  { place: 'Georgia Tech', detail: 'M.S. Computer Science, in progress' },
  { place: 'Middlebury College', detail: 'Computer Science' },
];
