import { Link } from 'react-router-dom'

const columns = [
  {
    heading: 'Institution',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Capabilities', to: '/capabilities' },
      { label: 'Consulting Verticals', to: '/consulting-verticals' },
      { label: 'Leadership', to: '/leadership' },
    ],
  },
  {
    heading: 'Perspective',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'Sectors', to: '/sectors' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const socialLinks = [
  'LinkedIn',
  'X (Twitter)',
  'YouTube',
  'Facebook',
  'Instagram',
  'TikTok',
  'Threads',
  'ResearchGate',
  'Google Scholar',
  'ORCID',
  'GitHub',
  'Medium',
  'Substack',
  'WhatsApp',
  'Telegram',
  'Vimeo',
  'Kaggle',
  'Academia.edu',
  'Spotify',
]

export default function Footer() {
  return (
    <footer className="bg-pale/70 border-t-2 border-gold/50">
      <div className="container-institutional pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-navy/10">
          <div className="lg:col-span-5">
            <span className="font-display text-2xl tracking-wide text-navy">
              ARVINGTON<span className="text-gold">.</span>
            </span>
            <p className="eyebrow text-gold/80 mt-4 mb-6">Consulting &middot; Analytics &middot; Strategic Advisory</p>
            <p className="text-charcoal-soft leading-relaxed max-w-md text-justify-pretty">
              A multidisciplinary institution built to strengthen organisations through superior
              decisions, integrating strategy, economics, artificial intelligence, data science,
              finance, research, technology and institutional expertise.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-navy/50 mb-5">{col.heading}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-charcoal-soft hover:text-navy transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-navy/50 mb-5">Correspondence</p>
            <ul className="flex flex-col gap-3 text-sm text-charcoal-soft">
              <li>engage@arvington.com</li>
              <li>Nairobi &middot; Global Advisory Network</li>
              <li>
                <Link to="/contact" className="underline underline-offset-4 decoration-navy/20 hover:decoration-gold hover:text-navy transition-colors duration-200">
                  Discuss an engagement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-10 border-b border-navy/10">
          <p className="eyebrow text-navy/50 mb-5">Connect With Arvington</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2.5" aria-label="Social media">
            {socialLinks.map((label) => (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-xs uppercase tracking-wide text-charcoal-soft/80 hover:text-gold transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display italic text-charcoal-soft text-sm md:text-base">
            Institutions rise or decline on the quality of their decisions.
          </p>
          <p className="text-xs text-charcoal-soft/70 eyebrow tracking-widest">
            &copy; 2026 Arvington Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
