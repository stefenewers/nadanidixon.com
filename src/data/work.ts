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

export type Art = 'neighborhood' | 'cost' | 'home' | 'discover' | 'divvy' | 'knovel' | 'mastercard';

// Accessible descriptions for the drawn visuals. They describe the concept,
// not a real product screen.
export const artAlt: Record<Art, string> = {
  neighborhood:
    'Conceptual map illustration: a search field that reads Search by neighborhood above a street map, with one neighborhood outlined and highlighted and rental pins inside it.',
  cost: 'Conceptual illustration comparing two bars: listed rent alone, and a longer total monthly cost made of rent plus other costs.',
  home: 'Conceptual illustration of a floor plan with a sun moving along an arc overhead and light falling into a room through a window.',
  discover:
    'Conceptual illustration of a stack of rental cards with the top card swiping away, skip and save buttons, and an email suggesting homes.',
  divvy:
    'Conceptual diagram of a home moving through an operational workflow. It goes from move-out to turnover, branches to winterization when needed, and reaches a ready state that opens buyer and realtor steps. A retry loop marks exceptions, and each step shows who acts on it. The workflow feeds an operations view with a chart and a list of homes by state.',
  knovel:
    'Conceptual diagram of author royalties. An author and a published work connect to a royalty contract inside an on-chain zone where transactions are immutable. An on-chain event crosses the boundary into backend services, which sync an application view showing a royalty received, while a royalty flows back to the author.',
  mastercard:
    'Conceptual diagram of one spending event moving through a financial system. A card event enters through a REST API, joins a busy event stream, and fans out to several services that each show in sync, some backed by databases. A rising step line underneath marks growth from Software Engineer I in 2020 to Senior Software Engineer in 2024.',
};

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
    href: '/work/knovel-protocol',
    span: { start: 2024 + 7 / 12, end: 2025 + 7 / 12 },
  },
  {
    id: 'divvy',
    company: 'Divvy Homes',
    mark: 'D',
    title: 'Senior Software Engineer',
    years: '2024–2025',
    href: '/work/divvy-homes',
    span: { start: 2024 + 3 / 12, end: 2025 + 1 / 12 },
  },
  {
    id: 'mastercard',
    company: 'Mastercard',
    mark: 'M',
    title: 'Software Engineer I to Senior Software Engineer',
    years: '2020–2024',
    href: '/work/mastercard',
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

// Work stories for the roles before Redfin. Every line here comes from the
// content brief; anything not yet confirmed for public use (metrics, the NFT
// marketplace, token features) is deliberately left out. See CONTENT-TODO.md.
export interface Story {
  id: string;
  art: Art;
  media?: Media;
  dates: string;
  intro: string;
  idea: string;
  work: string[];
  closing?: string;
  meta: { label: string; value: string }[];
}

export const stories: Record<string, Story> = {
  divvy: {
    id: 'divvy',
    art: 'divvy',
    dates: 'Apr 2024 to Jan 2025',
    intro:
      'At Divvy I worked on the internal side of the business: the systems operations teams relied on whenever a home changed hands.',
    idea: 'A home in transition is a small system of its own. It has states, dependencies, exceptions, and different people acting at different times. The software has to know where every home is and what can happen next, and it has to stay right when something unexpected comes up.',
    work: [
      'Internal systems for asset turnover, customer transitions and move-outs, and realtor and prospective-buyer workflows.',
      'Real-world operational rules modeled as Temporal-based workflows.',
      'A winterization workflow for asset management.',
      'SQL dashboards and reporting that helped operations teams look at property conditions, repair costs, and system performance.',
    ],
    closing: 'I worked across the whole path: requirements, architecture, TypeScript implementation, testing, and deployment.',
    meta: [
      { label: 'Role', value: 'Senior Software Engineer' },
      { label: 'Tools', value: 'Temporal, TypeScript, SQL' },
    ],
  },
  knovel: {
    id: 'knovel',
    art: 'knovel',
    dates: 'Aug 2024 to Jul 2025',
    intro:
      'Knovel was a Web3 literary publishing platform, built around a different relationship between authors and readers when it comes to publishing, ownership, and pay. I joined as a founding engineer, early in both the product and the infrastructure.',
    idea: 'A transaction on a blockchain can’t be taken back, but the product around it still has to feel responsive. A lot of my work lived on that boundary: keeping royalty behavior correct on-chain, and keeping the rest of the app in step with it.',
    work: [
      'Smart-contract infrastructure for author royalty distribution.',
      'Reasoning through transaction sequencing, state transitions, and failure conditions so royalty behavior stayed correct and reliable.',
      'Balancing security, gas efficiency, and maintainability in the contract architecture.',
      'Backend services that synchronized on-chain events with application systems, with a clear boundary between blockchain state and the rest of the product.',
    ],
    meta: [
      { label: 'Role', value: 'Founding Engineer' },
      { label: 'Focus', value: 'Smart contracts, event sync' },
    ],
  },
  mastercard: {
    id: 'mastercard',
    art: 'mastercard',
    dates: 'May 2020 to Apr 2024',
    intro:
      'I spent four years on the backend of a high-traffic expense-management platform that helps businesses manage company-card spending. I started as a Software Engineer I and left as a Senior Software Engineer.',
    idea: 'Every purchase on a company card is an event that several services need to agree on. The work was building the APIs that take those events in, and keeping the services behind them in sync in real time.',
    work: [
      'REST APIs in Java and Spring Boot.',
      'Relational data models behind the platform.',
      'Event-driven microservices, with Kafka messaging for real-time processing and communication between services.',
      'Leading backend work and mentoring junior engineers as I grew into a senior role.',
    ],
    meta: [
      { label: 'Platform', value: 'Expense management' },
      { label: 'Tools', value: 'Java, Spring Boot, Kafka' },
    ],
  },
};
