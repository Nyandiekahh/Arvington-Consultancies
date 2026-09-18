// Shared primary-navigation structure. Used by both the Navbar (desktop
// dropdowns + mobile menu) and the search index, so the two never drift
// out of sync with each other.
export const NAV_ITEMS = [
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Our Purpose', to: '/about#purpose' },
      { label: 'Institutional Philosophy', to: '/about#philosophy' },
      { label: 'Decision Intelligence', to: '/about#decision-intelligence' },
      { label: 'Our Approach', to: '/about#approach' },
    ],
  },
  {
    label: 'Capabilities',
    to: '/capabilities',
    children: [
      { label: 'Strategy', to: '/capabilities#strategy' },
      { label: 'Analytics & AI', to: '/capabilities#ai-data' },
      { label: 'Economics & Finance', to: '/capabilities#economics-finance' },
      { label: 'Research', to: '/capabilities#research' },
      { label: 'Technology', to: '/capabilities#technology' },
      { label: 'Institutional Advisory', to: '/capabilities#institutional-advisory' },
    ],
  },
  {
    label: 'Consulting Verticals',
    to: '/consulting-verticals',
    children: [
      { label: 'Tier I — Core Business', to: '/consulting-verticals#tier-1' },
      { label: 'Tier II — Specialist', to: '/consulting-verticals#tier-2' },
      { label: 'Tier III — Future Activation', to: '/consulting-verticals#tier-3' },
    ],
  },
  {
    label: 'Leadership',
    to: '/leadership',
    children: [
      { label: 'Board', to: '/leadership#board' },
      { label: 'C-Suite', to: '/leadership#c-suite' },
      { label: 'Consulting Directors', to: '/leadership#directors' },
    ],
  },
  {
    label: 'Insights',
    to: '/insights',
    children: [
      { label: 'Latest Publications', to: '/insights#latest' },
      { label: 'Three Perspectives', to: '/insights#perspectives' },
      { label: 'Twenty Fields', to: '/insights#verticals-index' },
      { label: 'Editorial Board', to: '/insights#editorial-board' },
      { label: 'Volumes & Issues', to: '/insights#archive' },
    ],
  },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Careers', to: '/careers' },
]
