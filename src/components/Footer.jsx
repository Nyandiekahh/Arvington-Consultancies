import { Link } from 'react-router-dom'
import { capabilities } from '../data/capabilities'

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Consulting Verticals', to: '/consulting-verticals' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Insights', to: '/insights' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
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

function Heading({ children }) {
  return (
    <h4 className="mb-5 text-lg font-extrabold text-white after:mt-3 after:block after:h-1 after:w-10 after:rounded-full after:bg-sky">
      {children}
    </h4>
  )
}

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="container-institutional pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/images/brand/arvington-mark.png"
                alt=""
                width={64}
                height={64}
                className="h-14 w-14 rounded-full bg-white object-contain p-1"
              />
              <span className="text-2xl font-extrabold tracking-wide text-white">
                ARVINGTON<span className="text-sky">.</span>
              </span>
            </Link>
            <p className="mt-5 text-sm font-bold uppercase tracking-wide text-sky">
              Consulting &middot; Analytics &middot; Strategic Advisory
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              A multidisciplinary institution built to strengthen organisations through superior
              decisions, integrating strategy, economics, artificial intelligence, data science,
              finance, research, technology and institutional expertise.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <Heading>Quick Links</Heading>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/80 transition-colors duration-200 hover:text-sky">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities (KEBS: "Our Services") */}
          <div className="lg:col-span-3">
            <Heading>Our Services</Heading>
            <ul className="flex flex-col gap-3">
              {capabilities.map((cap) => (
                <li key={cap.id}>
                  <Link
                    to={`/capabilities#${cap.id}`}
                    className="text-white/80 transition-colors duration-200 hover:text-sky"
                  >
                    {cap.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <Heading>Contact Us</Heading>
            <ul className="flex flex-col gap-3 text-white/80">
              <li>
                <a href="mailto:engage@arvington.com" className="transition-colors duration-200 hover:text-sky">
                  engage@arvington.com
                </a>
              </li>
              <li>Nairobi &middot; Global Advisory Network</li>
            </ul>
            <Link to="/contact" className="btn-pill btn-pill--light mt-6">
              Discuss an engagement <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Social */}
        <div className="border-b border-white/15 py-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-white/60">
            Connect With Arvington
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2.5" aria-label="Social media">
            {socialLinks.map((label) => (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sm text-white/70 transition-colors duration-200 hover:text-sky"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <p className="pt-8 text-sm text-white/60">
          Institutions rise or decline on the quality of their decisions.
        </p>
      </div>

      {/* Blue copyright strip */}
      <div className="bg-strip text-white">
        <div className="container-institutional flex flex-col items-start justify-between gap-1 py-3 text-sm md:flex-row md:items-center">
          <p>Copyright &copy; 2026 Arvington Ltd. All rights reserved.</p>
          <p className="text-white/80">Strengthening Institutions Through Superior Decisions</p>
        </div>
      </div>
    </footer>
  )
}
