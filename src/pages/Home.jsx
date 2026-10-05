import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSlideshow from '../components/HeroSlideshow'
import InsightCard from '../components/InsightCard'
import Reveal from '../components/Reveal'
import useSEO from '../hooks/useSEO'
import { capabilities } from '../data/capabilities'
import { tiers } from '../data/verticals'
import { sectors } from '../data/sectors'
import { insights } from '../data/insights'

const HERO_SLIDES = [
  {
    src: '/images/hero/slide-1.jpg',
    alt: 'Arvington client engagement',
    eyebrow: 'Consulting · Strategic Advisory',
    title: 'Institutions rise or fall on the quality of their decisions.',
    description:
      'Arvington advises boards, ministries and enterprises on the decisions that determine what an institution becomes.',
  },
  {
    src: '/images/hero/slide-2.jpg',
    alt: 'Arvington advisory session',
    eyebrow: 'Advisory · Decision Intelligence',
    title: 'Better decisions begin with better questions.',
    description:
      'We bring strategy, evidence and institutional understanding together to clarify the decisions that matter most.',
  },
  {
    src: '/images/hero/slide-3.jpg',
    alt: 'Arvington strategy workshop',
    eyebrow: 'Strategy · Transformation',
    title: 'Strategy matters only when it can be executed.',
    description:
      'We translate ambition into priorities, capabilities and programmes that institutions can carry forward.',
  },
  {
    src: '/images/hero/slide-4.jpg',
    alt: 'Arvington research and analytics',
    eyebrow: 'Analytics · Research',
    title: 'Evidence turns complexity into something decision makers can act on.',
    description:
      'We turn research, data and analysis into practical decision intelligence.',
  },
  {
    src: '/images/hero/slide-5.jpg',
    alt: 'Arvington institutional leadership',
    eyebrow: 'Leadership · Institutional Performance',
    title: 'Strong institutions are built for decisions that outlast individuals.',
    description:
      'We help leadership teams strengthen governance, capability and execution around long-term purpose.',
  },
]

// Three call-to-action banners directly under the hero (KEBS: verification /
// conference / awards banners). Each points at a real route.
const PROMOS = [
  {
    eyebrow: 'Insights',
    title: 'Arvington Executive Perspective',
    text: 'Read the latest publications from our leadership and editorial board.',
    cta: 'Read insights',
    to: '/insights',
    bg: 'bg-gold',
  },
  {
    eyebrow: 'Careers',
    title: 'Build your career with Arvington',
    text: 'Join a multidisciplinary team strengthening institutions through superior decisions.',
    cta: 'View careers',
    to: '/careers',
    bg: 'bg-navy',
  },
  {
    eyebrow: 'Engage',
    title: 'Start a conversation',
    text: 'Tell us what you are trying to solve and we will shape the right team around it.',
    cta: 'Contact us',
    to: '/contact',
    bg: 'bg-strip',
  },
]

const sectorSlice = sectors.slice(0, 6)
const latestInsights = insights.slice(-3).reverse()

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  useSEO({ path: '/' })

  const [heroIndex, setHeroIndex] = useState(0)
  const currentHero = HERO_SLIDES[heroIndex]

  return (
    <div className="overflow-hidden">
      {/* =========================================================
          HERO — full-width slider, big rounded bottom-right corner
      ========================================================= */}
      <section className="relative corner-br overflow-hidden bg-black min-h-[600px] h-[88vh] flex items-end pt-20 md:pt-32">
        <HeroSlideshow images={HERO_SLIDES} onSlideChange={setHeroIndex} />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="container-institutional relative z-10 pb-20 md:pb-28 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                {currentHero.eyebrow}
              </span>

              <h1 className="mt-5 font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] leading-[1.1] text-white">
                {currentHero.title}
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
                {currentHero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-pill">
                  Engage Arvington <Arrow />
                </Link>
                <Link to="/capabilities" className="btn-pill btn-pill--light">
                  Our capabilities
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================
          PROMO BANNERS
      ========================================================= */}
      <section className="bg-white py-10 md:py-14">
        <div className="container-institutional">
          <div className="grid md:grid-cols-3 gap-5">
            {PROMOS.map((promo, i) => (
              <Reveal key={promo.title} delay={i * 0.08} className="h-full">
                <div
                  className={`${promo.bg} h-full rounded-2xl rounded-br-[72px] p-8 md:p-9 text-white flex flex-col`}
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-sky">
                    {promo.eyebrow}
                  </span>
                  <h2 className="mt-3 text-2xl md:text-[1.9rem] font-extrabold leading-tight text-white">
                    {promo.title}
                  </h2>
                  <p className="mt-3 text-white/85 leading-relaxed">{promo.text}</p>
                  <div className="mt-auto pt-7">
                    <Link to={promo.to} className="btn-pill btn-pill--light">
                      {promo.cta} <Arrow />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO — 8 service cards
      ========================================================= */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-institutional">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-[2.4rem] font-extrabold text-ink">What We Do</h2>
            <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-gold" />
            <p className="mt-5 text-lg text-charcoal-soft leading-relaxed">
              Eight connected advisory capabilities that let us work across the full life of an
              institutional challenge — from decision to delivery.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.id} delay={(i % 4) * 0.06} className="h-full">
                <Link
                  to={`/capabilities#${cap.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-7 shadow-[0_2px_14px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(1,102,177,0.18)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-base font-extrabold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-[1.3rem] font-extrabold leading-snug text-ink">
                    {cap.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal-soft">
                    {cap.short}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
                    More <Arrow />
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONSULTING VERTICALS — blue band with tiles
      ========================================================= */}
      <section className="relative bg-navy text-white">
        <div className="container-institutional relative py-16 md:py-20">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wide text-sky">
              Consulting Verticals
            </span>
            <h2 className="mt-3 text-3xl md:text-[2.4rem] font-extrabold leading-tight text-white">
              Twenty verticals, one integrated architecture.
            </h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Our verticals are organised in three tiers so that the right depth of expertise is
              assembled around each institution and decision.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
                  <span className="text-sm font-bold uppercase tracking-wide text-sky">{t.tier}</span>
                  <h3 className="mt-2 text-xl font-extrabold leading-snug text-white">{t.label}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-white/80 line-clamp-4">
                    {t.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      to={`/consulting-verticals#${t.id}`}
                      className="btn-pill btn-pill--light"
                    >
                      Explore {t.tier} <Arrow />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTORS WE SERVE — image tiles
      ========================================================= */}
      <section className="bg-pale py-16 md:py-24">
        <div className="container-institutional">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <Reveal>
              <h2 className="text-3xl md:text-[2.4rem] font-extrabold text-ink">Sectors We Serve</h2>
              <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
            </Reveal>
            <Link to="/sectors" className="btn-pill self-start md:self-auto">
              View all sectors <Arrow />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectorSlice.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.06}>
                <Link
                  to={`/sectors#${s.id}`}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl rounded-br-[56px] bg-black"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('/images/sectors/${s.id}.jpg')` }}
                    role="img"
                    aria-label={s.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-xl font-extrabold text-white">{s.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-sky">
                      Learn more <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INSIGHTS — "News Center" equivalent
      ========================================================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-institutional">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <Reveal>
              <h2 className="text-3xl md:text-[2.4rem] font-extrabold text-ink">Insights</h2>
              <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
              <p className="mt-4 max-w-xl text-lg text-charcoal-soft">
                Latest thinking on strategy, economics, AI, governance and institutional performance.
              </p>
            </Reveal>
            <Link to="/insights" className="btn-pill self-start md:self-auto">
              Visit our insights <Arrow />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {latestInsights.map((insight, i) => (
              <InsightCard key={insight.id} insight={insight} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH — image + statement
      ========================================================= */}
      <section className="bg-pale">
        <div className="grid md:grid-cols-2 min-h-[420px]">
          <div
            className="min-h-[320px] md:min-h-full bg-cover bg-center md:rounded-br-[120px]"
            style={{ backgroundImage: "url('/images/site/selected-engagement.jpg')" }}
            role="img"
            aria-label="Arvington engagement"
          />
          <div className="flex items-center px-8 py-14 md:px-12 lg:px-16">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wide text-gold">
                The Arvington approach
              </span>
              <blockquote className="mt-4 text-2xl md:text-3xl lg:text-[2.2rem] font-extrabold leading-tight text-ink">
                &ldquo;The quality of an institution is reflected in the quality of the decisions it
                is able to make.&rdquo;
              </blockquote>
              <p className="mt-5 text-base text-charcoal-soft leading-relaxed">
                Our work begins by understanding the decision beneath the problem. From there, we
                bring together the evidence, strategic perspective and practical capability needed
                to move forward.
              </p>
              <Link to="/about" className="btn-pill mt-7">
                About Arvington <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — blue band
      ========================================================= */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

        <div className="container-institutional relative py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wide text-sky">
              Start a conversation
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-[1.1] text-white">
              The right decision starts with understanding the problem.
            </h2>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl">
              Tell us what you are trying to solve. We will determine what expertise, evidence and
              approach the problem requires.
            </p>
            <Link to="/contact" className="btn-pill btn-pill--light mt-8">
              Discuss an engagement <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
