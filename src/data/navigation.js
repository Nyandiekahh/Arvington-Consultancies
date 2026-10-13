// Shared primary-navigation structure. Used by both the Navbar (desktop
// dropdowns + mobile menu) and the search index, so the two never drift
// out of sync with each other.
//
// Structure follows the site outline:
//   Who We Are  ·  What We Do  ·  Engage Arvington
// (plus Home, Sectors and Insights). Items can nest two levels deep
// (menu -> group -> page/section), the same pattern the KEBS site uses.
import { capabilities } from './capabilities'

export const NAV_ITEMS = [
  { label: 'Home', to: '/' },

  {
    label: 'Who We Are',
    to: '/about',
    children: [
      {
        label: 'About Arvington',
        to: '/about',
        children: [
          { label: 'Who We Are', to: '/about#who-we-are' },
          { label: 'Our Purpose', to: '/about#purpose' },
          { label: 'Our Vision', to: '/about#vision' },
          { label: 'Our Mission', to: '/about#mission' },
          { label: 'Our Values', to: '/about#values' },
        ],
      },
      {
        label: 'Institutional Philosophy',
        to: '/about#philosophy',
        children: [
          { label: 'Our Philosophy', to: '/about#philosophy' },
          { label: 'Decision Intelligence', to: '/about#decision-intelligence' },
          { label: 'Evidence-Based Advisory', to: '/about#evidence-based-advisory' },
          { label: 'Our Approach', to: '/about#approach' },
        ],
      },
      {
        label: 'Leadership',
        to: '/leadership',
        children: [
          { label: 'Executive', to: '/leadership#c-suite' },
          { label: 'Directorate', to: '/leadership#directors' },
          { label: 'Board', to: '/leadership#board' },
        ],
      },
      {
        label: 'Our Expertise',
        to: '/about#expertise',
        children: [
          { label: 'Advisory & Consulting', to: '/about#expertise' },
          { label: 'Strategy & Transformation', to: '/about#expertise' },
          { label: 'Data & Decision Intelligence', to: '/about#expertise' },
          { label: 'Research & Analytics', to: '/about#expertise' },
        ],
      },
      {
        label: 'Corporate Social Responsibility',
        to: '/about#csr',
        children: [
          { label: 'Community Impact', to: '/about#csr' },
          { label: 'Sustainability', to: '/about#csr' },
          { label: 'Social Investment', to: '/about#csr' },
        ],
      },
      {
        label: 'Governance & Credibility',
        to: '/about#governance',
        children: [
          { label: 'Corporate Governance', to: '/about#governance' },
          { label: 'Professional Standards', to: '/about#governance' },
          { label: 'Partnerships & Affiliations', to: '/about#governance' },
          { label: 'Certifications & Accreditations', to: '/about#governance' },
        ],
      },
      {
        label: 'Our Track Record',
        to: '/about#track-record',
        children: [
          { label: 'Selected Projects', to: '/about#track-record' },
          { label: 'Client Success Stories', to: '/about#track-record' },
          { label: 'Case Studies', to: '/about#track-record' },
          { label: 'Impact & Results', to: '/about#track-record' },
        ],
      },
    ],
  },

  {
    label: 'What We Do',
    to: '/capabilities',
    children: [
      {
        label: 'Advisory Services',
        to: '/capabilities',
        children: capabilities.map((c) => ({ label: c.name, to: `/capabilities#${c.id}` })),
      },
      {
        label: 'Selected Consulting Experience',
        to: '/experience',
        children: [
          { label: 'Featured Consulting Experience', to: '/experience#featured' },
          { label: 'Consultant Experience', to: '/experience#consultants' },
          { label: 'Consulting Delivery Gallery', to: '/experience#gallery' },
        ],
      },
      {
        label: 'Consulting Verticals',
        to: '/consulting-verticals',
        children: [
          { label: 'Explore All 20 Consulting Verticals', to: '/consulting-verticals' },
          { label: 'Tier I — Strategic & Enterprise', to: '/consulting-verticals#tier-1' },
          { label: 'Tier II — Technical & Sectoral', to: '/consulting-verticals#tier-2' },
          { label: 'Tier III — Sectoral & Emerging', to: '/consulting-verticals#tier-3' },
        ],
      },
    ],
  },

  { label: 'Sectors', to: '/sectors' },

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

  {
    label: 'Engage Arvington',
    to: '/contact',
    children: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'WhatsApp', to: '/contact#whatsapp' },
      { label: 'Request Consultancy', to: '/request-consultancy' },
      { label: 'Request a Proposal', to: '/request-proposal' },
      { label: 'Executive Consultation', to: '/executive-consultation' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Partnerships', to: '/partnerships' },
    ],
  },
]

// Quick links shown in the blue utility bar above the header (KEBS pattern).
export const UTILITY_LINKS = [
  { label: 'Leadership', to: '/leadership' },
  { label: 'Careers', to: '/careers' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

// "Engage Arvington" quick-link tiles (home page band + reused elsewhere).
export const ENGAGE_LINKS = [
  { label: 'Contact Us', to: '/contact', text: 'Speak with our team about your institution’s challenge.' },
  { label: 'WhatsApp', to: '/contact#whatsapp', text: 'Start a quick conversation with a member of the team.' },
  { label: 'Request Consultancy', to: '/request-consultancy', text: 'Describe the challenge and we will assemble the expertise.' },
  { label: 'Request a Proposal', to: '/request-proposal', text: 'Ask for a scoped advisory proposal for a defined need.' },
  { label: 'Executive Consultation', to: '/executive-consultation', text: 'Request a consultation directed to Arvington’s executive leadership.' },
  { label: 'Partnerships', to: '/partnerships', text: 'Explore collaboration with Arvington.' },
  { label: 'FAQs', to: '/faqs', text: 'Answers to common questions about working with us.' },
  { label: 'Careers', to: '/careers', text: 'Build your career with Arvington.' },
]
