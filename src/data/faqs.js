// FAQs — drafted from copy that already exists elsewhere on the site
// (About, Contact, Sectors, Verticals). Review the wording and add or edit
// questions freely: each group is { title, items: [{ q, a, link? }] }.
// `link` is optional: { to: '/route', label: 'Link text' }.
export const faqGroups = [
  {
    title: 'About Arvington',
    items: [
      {
        q: 'What does Arvington do?',
        a: 'Arvington Ltd. is a multidisciplinary consulting, analytics and strategic advisory firm. We bring strategy, economics, artificial intelligence, data science, finance, research, technology and institutional expertise together to help institutions make superior decisions.',
        link: { to: '/about', label: 'Read about Arvington' },
      },
      {
        q: 'What is a Consulting Vertical?',
        a: 'Our expertise is organised into twenty Consulting Verticals across three tiers. Each Vertical is a specialist practice, led by a director who is accountable for its professional standards, technical quality and staffing. Some Verticals are still being activated and do not yet have a director in place.',
        link: { to: '/consulting-verticals', label: 'Explore the Consulting Verticals' },
      },
      {
        q: 'Where is Arvington based?',
        a: 'Arvington is based in Nairobi, Kenya, and works through a global advisory network.',
        link: { to: '/contact', label: 'Contact us' },
      },
    ],
  },
  {
    title: 'Working with us',
    items: [
      {
        q: 'Which sectors do you work in?',
        a: 'We work across Government & Public Sector, Financial Services, Health & Life Sciences, Development & Humanitarian, Energy & Infrastructure, and Academia & Research, assembling the Verticals each institution needs.',
        link: { to: '/sectors', label: 'View our sectors' },
      },
      {
        q: 'How do I start an engagement?',
        a: 'Use the consultation request form: you share your contact details, choose the relevant Consulting Vertical, describe the project and, if you wish, propose a time to talk. Your request is sent to our team through WhatsApp. You can also contact us directly.',
        link: { to: '/request-consultancy', label: 'Request consultancy' },
      },
      {
        q: 'What is the difference between Request Consultancy, Request a Proposal and Executive Consultation?',
        a: 'Request Consultancy is for describing a challenge and letting us determine the expertise it needs. Request a Proposal is for when you already know what you need and want a scoped advisory proposal. Executive Consultation is a consultation request directed to Arvington’s executive leadership.',
      },
      {
        q: 'My challenge spans several disciplines. Can you help?',
        a: 'Yes. That is what the multidisciplinary model is for. When you submit a request you can choose an Integrated / Multidisciplinary Engagement, and we will assemble the appropriate Verticals around the problem.',
      },
      {
        q: 'How soon will I hear back?',
        a: 'A member of the relevant Consulting Vertical reviews each enquiry, and we respond within two business days to confirm the next step.',
      },
    ],
  },
  {
    title: 'Collaboration and careers',
    items: [
      {
        q: 'Can we partner with Arvington?',
        a: 'We welcome conversations with research institutions, development partners, professional bodies and other organisations whose work complements ours.',
        link: { to: '/partnerships', label: 'Explore partnerships' },
      },
      {
        q: 'Are you recruiting?',
        a: 'Our Careers page describes how we work and how to get in touch if your background fits one of our practices.',
        link: { to: '/careers', label: 'View careers' },
      },
    ],
  },
]
