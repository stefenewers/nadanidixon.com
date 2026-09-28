// Page-level animation for Astro view transitions. Shared elements (company
// monogram and name) morph on their own; this handles the rest of the page.
const out = { name: 'vt-out', duration: '130ms', easing: 'cubic-bezier(0.4, 0, 1, 1)', fillMode: 'both' };
const into = { name: 'vt-in', duration: '380ms', delay: '120ms', easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fillMode: 'both' };

export const pageAnim = {
  forwards: { old: out, new: into },
  backwards: { old: out, new: into },
};
