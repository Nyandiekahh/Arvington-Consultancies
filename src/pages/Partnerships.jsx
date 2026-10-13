import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import useSEO from '../hooks/useSEO'
import { partners } from '../data/partners'
import { industries } from '../data/capabilities'

// Areas of collaboration. These describe the kinds of organisation Arvington
// is open to working with — they do not claim any existing partnership.
const COLLABORATIONS = [
  {
    title: 'Research & Academic Institutions',
    text: 'Joint research, methodological collaboration, student and early-career researcher programmes, and shared publication.',
  },
  {
    title: 'Development Partners',
    text: 'Collaboration with development agencies, international organisations and NGOs on programme design, evaluation and institutional strengthening.',
  },
  {
    title: 'Industry & Technology Partners',
    text: 'Working alongside organisations whose products, platforms or specialist capability complement our advisory work.',
  },
  {
    title: 'Professional & Sector Bodies',
    text: 'Affiliations with professional bodies, associations and networks that advance standards and practice in our fields.',
  },
]

const STEPS = [
  { n: '01', title: 'Tell us about your organisation', text: 'Share who you are, what you do and the kind of collaboration you have in mind.' },
  { n: '02', title: 'We review the fit', text: 'The relevant Consulting Vertical looks at where our expertise and yours complement each other.' },
  { n: '03', title: 'We agree the next step', text: 'If there is a fit, we arrange a conversation to shape the collaboration together.' },
]

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Partnerships() {
  useSEO({
    title: 'Partnerships',
    description:
      'Explore collaboration with Arvington Ltd. across research, development, industry and professional bodies.',
    path: '/partnerships',
  })

  const audiences = industries.slice(0, 8)

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Partnerships"
        title="Better Institutions Are Built Together."
        description="Arvington welcomes conversations with organisations whose work complements ours. Partnerships extend the depth of expertise we can bring to the institutions we serve."
        tall
      />

      {/* Collaboration areas */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-institutional">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-ink md:text-[2.4rem]">Where We Collaborate</h2>
            <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-gold" />
            <p className="mt-5 text-lg leading-relaxed text-charcoal-soft">
              The kinds of organisation we are open to working with.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {COLLABORATIONS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-base font-extrabold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold leading-snug text-ink">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal-soft">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process (blue band) */}
      <section className="bg-navy text-white">
        <div className="container-institutional py-16 md:py-20">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wide text-sky">How it works</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-[2.4rem]">From a first conversation to a shared plan.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-white/20 bg-white/10 p-7">
                  <span className="text-sm font-bold tracking-wide text-sky">{s.n}</span>
                  <h3 className="mt-2 text-xl font-extrabold text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/partnership-enquiry" className="btn-pill btn-pill--light mt-10">
            Start a partnership enquiry <Arrow />
          </Link>
        </div>
      </section>

      {/* Institutions we work with (from existing data) */}
      <section className="bg-pale py-16 md:py-24">
        <div className="container-institutional">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-ink md:text-[2.2rem]">Institutions We Serve</h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.id} delay={(i % 4) * 0.05} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
                  <h3 className="text-lg font-extrabold text-ink">{a.name}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-charcoal-soft">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos (hidden until real partners are added in data/partners.js) */}
      {partners.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="container-institutional">
            <Reveal className="text-center">
              <h2 className="text-3xl font-extrabold text-ink">Our Partners</h2>
              <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-gold" />
            </Reveal>
            <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {partners.map((p) => {
                const inner = p.logo ? (
                  <img src={p.logo} alt={p.name} loading="lazy" className="mx-auto max-h-16 w-auto object-contain" />
                ) : (
                  <span className="text-center font-bold text-charcoal-soft">{p.name}</span>
                )
                return p.href ? (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                    {inner}
                  </a>
                ) : (
                  <div key={p.name} className="flex justify-center">{inner}</div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-institutional">
          <div className="rounded-3xl rounded-br-[96px] bg-gold p-10 text-white md:p-14">
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Let&rsquo;s explore what we can build together.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/partnership-enquiry" className="btn-pill btn-pill--light">
                Partnership enquiry <Arrow />
              </Link>
              <Link to="/faqs" className="btn-pill btn-pill--light">
                Read the FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
