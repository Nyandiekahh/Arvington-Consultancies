// Shared primary-navigation structure. Used by both the Navbar (desktop
// dropdowns + mobile menu) and the search index, so the two never drift
// out of sync with each other.
export const NAV_ITEMS = [
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Our Purpose', to: '/about#purpose' },
      { label: 'Vision, Mission & Values', to: '/about#vision-mission-values' },
      { label: 'Institutional Philosophy', to: '/about#philosophy' },
      { label: 'Decision Intelligence', to: '/about#decision-intelligence' },
      { label: 'Our Approach', to: '/about#approach' },
      { label: 'Our Expertise', to: '/about#expertise' },
      { label: 'Corporate Social Responsibility', to: '/about#csr' },
      { label: 'Governance & Credibility', to: '/about#governance' },
      { label: 'Our Track Record', to: '/about#track-record' },
    ],
  },
  {
    label: 'Capabilities',
    to: '/capabilities',
    children: [
      { label: 'Strategy & Business Transformation', to: '/capabilities#strategy-transformation' },
      { label: 'AI, Data & Digital Transformation', to: '/capabilities#ai-digital' },
      { label: 'Investment, Finance & Risk Advisory', to: '/capabilities#investment-finance-risk' },
      { label: 'Research, Economics & Policy Advisory', to: '/capabilities#research-economics-policy' },
      { label: 'Technology, Engineering & Innovation', to: '/capabilities#technology-engineering-innovation' },
      { label: 'Government, Development & Institutional Advisory', to: '/capabilities#government-development' },
      { label: 'Sector, Infrastructure & Sustainability Advisory', to: '/capabilities#sector-infrastructure-sustainability' },
      { label: 'Projects, Training & Institutional Capability', to: '/capabilities#projects-training-capability' },
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