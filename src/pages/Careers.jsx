import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'

const openings = [
  { title: 'Consultant, Artificial Intelligence & Data Science', location: 'Nairobi', type: 'Full Time' },
  { title: 'Analyst, Economics & Policy', location: 'Nairobi', type: 'Full Time' },
  { title: 'Senior Consultant, Health & Life Sciences', location: 'Nairobi / Remote', type: 'Full Time' },
  { title: 'Research Associate, Monitoring & Evaluation', location: 'Nairobi', type: 'Full Time' },
  { title: 'Specialist, GIS & Geospatial Intelligence', location: 'Nairobi', type: 'Contract' },
]

const values = [
  {
    title: 'Rigour Over Comfort',
    text: 'We would rather deliver an uncomfortable, well evidenced finding than a comfortable one we cannot defend.',
  },
  {
    title: 'Ownership at Every Level',
    text: 'Analysts are expected to have a defensible point of view, not simply to execute a senior consultant\u2019s instructions.',
  },
  {
    title: 'Depth Across Disciplines',
    text: 'We hire people willing to genuinely understand an adjacent discipline well enough to work alongside it, not just alongside its acronyms.',
  },
]

export default function Careers() {
  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title="For Consultants, Specialists, Analysts and Institutional Thinkers."
        description="Arvington is built around people willing to sit with a difficult problem long enough to actually understand it, across whichever combination of disciplines that requires."
      />

      <section className="py-24 md:py-32">
        <div className="container-institutional grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <ImagePlaceholder label="Life at Arvington" ratio="aspect-[4/3]" />
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <SectionHeading eyebrow="Why Arvington" title="What We Actually Look For." />
            <div className="mt-10 flex flex-col gap-8">
              {values.map((v, i) => (
                <div key={v.title} className="flex gap-5">
                  <span className="font-display text-3xl text-gold/70 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-lg text-navy mb-2">{v.title}</h3>
                    <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-pale/60 border-y border-navy/8">
        <div className="container-institutional">
          <SectionHeading eyebrow="Current Openings" title="Roles Currently Open Across Our Practices." />
          <div className="mt-14 flex flex-col divide-y divide-navy/10 border-t border-b border-navy/10">
            {openings.map((role, i) => (
              <Reveal key={role.title} direction="up" delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 group">
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-navy group-hover:text-navy/70 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-charcoal-soft mt-1">
                      {role.location} &middot; {role.type}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-wide font-medium text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 whitespace-nowrap"
                  >
                    Apply <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 text-center">
        <div className="container-institutional max-w-2xl mx-auto">
          <Reveal direction="up">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-6 leading-tight">
              Do Not See the Right Role Listed?
            </h2>
            <p className="text-charcoal-soft leading-relaxed text-justify-pretty mb-8">
              We regularly meet strong candidates before we have an open position that fits them.
              If your background sits across two or three of our consulting verticals, we would
              still like to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy text-paper px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-navy-light transition-colors duration-300"
            >
              Send a General Application <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
