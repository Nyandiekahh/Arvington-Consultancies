import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSlideshow from '../components/HeroSlideshow'
import useSEO from '../hooks/useSEO'

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

const CAPABILITIES = [
  {
    number: '01',
    title: 'Strategy',
    text: 'Direction, priorities and choices grounded in what an institution can actually deliver.',
  },
  {
    number: '02',
    title: 'Intelligence',
    text: 'Research, data and analysis turned into evidence that decision makers can act on.',
  },
  {
    number: '03',
    title: 'Execution',
    text: 'Strategy translated into capability, programmes and institutional outcomes.',
  },
]

export default function Home() {
  useSEO({ path: '/' })

  const [heroIndex, setHeroIndex] = useState(0)

  const currentHero = HERO_SLIDES[heroIndex]

  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[680px] h-[88vh] flex items-end overflow-hidden">
        <HeroSlideshow
          images={HERO_SLIDES}
          onSlideChange={setHeroIndex}
        />

        {/* layered colour treatment */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />

        <div className="container-institutional relative z-10 pb-20 md:pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-gold" />

                <span className="eyebrow text-paper/75">
                  {currentHero.eyebrow}
                </span>
              </div>

              <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.04] text-paper max-w-4xl">
                {currentHero.title}
              </h1>

              <p className="mt-6 text-base md:text-lg text-paper/80 leading-relaxed max-w-2xl">
                {currentHero.description}
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-paper text-navy px-7 py-3.5 text-sm font-medium hover:bg-gold transition-colors duration-300"
                >
                  Engage Arvington
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* bottom slide indicator */}
        <div className="absolute bottom-7 right-8 md:right-12 z-10 flex items-center gap-3">
          <span className="text-xs tracking-widest text-paper/50">
            0{heroIndex + 1}
          </span>

          <span className="w-16 h-px bg-paper/30">
            <span
              className="block h-px bg-gold transition-all duration-500"
              style={{
                width: `${((heroIndex + 1) / HERO_SLIDES.length) * 100}%`,
              }}
            />
          </span>

          <span className="text-xs tracking-widest text-paper/40">
            0{HERO_SLIDES.length}
          </span>
        </div>
      </section>


      {/* =========================================================
          POSITION — DARK STATEMENT BAND
      ========================================================= */}
      <section className="relative bg-navy text-paper">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 pointer-events-none" />

        <div className="container-institutional relative py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">

            <div className="md:col-span-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />

                <span className="eyebrow text-paper/50">
                  Our perspective
                </span>
              </div>
            </div>

            <div className="md:col-span-9">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-tight font-medium">
                We help institutions make consequential decisions with
                <span className="text-gold"> greater clarity.</span>
              </h2>

              <p className="mt-5 max-w-3xl text-paper/65 leading-relaxed">
                Arvington brings strategy, evidence and execution together
                around the decision itself — helping leaders understand
                complexity, choose a direction and build the capability to
                deliver it.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="relative bg-paper py-16 md:py-20">
        <div className="container-institutional">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow text-charcoal-soft mb-3">
                What we do
              </p>

              <h2 className="font-display font-medium text-3xl md:text-4xl text-navy">
                From decision to delivery.
              </h2>
            </div>

            <p className="max-w-md text-sm md:text-base text-charcoal-soft leading-relaxed">
              Three connected capabilities that allow us to work across the
              full life of an institutional challenge.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-4">

            {CAPABILITIES.map((capability, index) => (
              <motion.div
                key={capability.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`relative overflow-hidden p-7 md:p-8 min-h-[245px] flex flex-col justify-between group ${
                  index === 1
                    ? 'bg-navy text-paper'
                    : 'bg-[#F0ECE3] text-navy'
                }`}
              >

                {/* decorative number */}
                <span
                  className={`absolute -right-3 -top-7 font-display text-[8rem] leading-none select-none ${
                    index === 1
                      ? 'text-paper/[0.04]'
                      : 'text-navy/[0.035]'
                  }`}
                >
                  {capability.number}
                </span>

                <div className="relative">
                  <span
                    className={`text-xs tracking-[0.25em] ${
                      index === 1
                        ? 'text-gold'
                        : 'text-charcoal-soft'
                    }`}
                  >
                    {capability.number}
                  </span>

                  <h3 className="font-display text-2xl md:text-3xl mt-5">
                    {capability.title}
                  </h3>
                </div>

                <p
                  className={`relative max-w-sm leading-relaxed text-sm ${
                    index === 1
                      ? 'text-paper/65'
                      : 'text-charcoal-soft'
                  }`}
                >
                  {capability.text}
                </p>

                {/* subtle bottom accent */}
                <span
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                    index === 1 ? 'bg-gold' : 'bg-navy'
                  }`}
                />
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          VISUAL STATEMENT
      ========================================================= */}
      <section className="relative bg-[#E7E0D3]">
        <div className="grid md:grid-cols-2 min-h-[420px]">

          {/* image */}
          <div
            className="min-h-[320px] md:min-h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/site/selected-engagement.jpg')",
            }}
          />

          {/* statement */}
          <div className="flex items-center px-8 py-14 md:px-12 lg:px-16">
            <div className="max-w-xl">

              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold" />

                <span className="eyebrow text-charcoal-soft">
                  The Arvington approach
                </span>
              </div>

              <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.4rem] leading-tight text-navy">
                “The quality of an institution is reflected in the quality of
                the decisions it is able to make.”
              </blockquote>

              <p className="mt-6 text-sm md:text-base text-charcoal-soft leading-relaxed max-w-lg">
                Our work begins by understanding the decision beneath the
                problem. From there, we bring together the evidence, strategic
                perspective and practical capability needed to move forward.
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          WHO WE WORK WITH
      ========================================================= */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-institutional">

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

            <div className="md:col-span-4">
              <p className="eyebrow text-charcoal-soft mb-4">
                Who we work with
              </p>

              <h2 className="font-display font-medium text-3xl md:text-4xl text-navy leading-tight">
                Institutions that shape public and economic life.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg text-charcoal-soft leading-relaxed">
                We work with boards, ministries, enterprises and other
                institutions facing decisions where strategy, evidence,
                resources and execution intersect.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.16em] uppercase text-navy/55">
                <span>Public Institutions</span>
                <span>•</span>
                <span>Enterprises</span>
                <span>•</span>
                <span>Boards &amp; Leadership</span>
                <span>•</span>
                <span>Development</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA — NAVY + GOLD
      ========================================================= */}
      <section className="relative bg-navy text-paper overflow-hidden">

        {/* decorative circles */}
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-gold/15" />
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-gold/10" />

        <div className="container-institutional relative py-20 md:py-24">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />

              <span className="eyebrow text-paper/50">
                Start a conversation
              </span>
            </div>

            <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              The right decision starts with understanding the problem.
            </h2>

            <p className="mt-6 text-paper/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Tell us what you are trying to solve. We will determine what
              expertise, evidence and approach the problem requires.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gold text-navy px-8 py-4 text-sm font-medium hover:bg-paper transition-colors duration-300"
              >
                Discuss an engagement

                <svg
                  className="ml-3"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}