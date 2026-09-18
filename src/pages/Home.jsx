import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import NodeNetwork from '../components/NodeNetwork'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import PipelineDiagram from '../components/PipelineDiagram'
import StatCounter from '../components/StatCounter'
import InsightCard from '../components/InsightCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { personPhoto } from '../utils/media'
import { capabilities, industries, pillars } from '../data/capabilities'
import { insights } from '../data/insights'
import { tiers, verticals } from '../data/verticals'
import { testimonials } from '../data/testimonials'
import useSEO from '../hooks/useSEO'

export default function Home() {
  useSEO({ path: '/' })
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-paper pt-20">
        <NodeNetwork className="absolute inset-0 w-full h-full" />
        <div className="container-institutional relative py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-gold" />
              <span className="eyebrow text-navy/60">Consulting &middot; Analytics &middot; Strategic Advisory</span>
            </div>
            <h1 className="font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.04] text-navy">
              Strengthening Institutions Through Superior Decisions.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-charcoal-soft leading-relaxed max-w-2xl text-justify-pretty">
              Arvington Ltd. is a multidisciplinary consulting, analytics and strategic advisory
              firm. We integrate strategy, economics, artificial intelligence, data science,
              finance, research, technology and institutional expertise to address the complex
              organisational and societal challenges our clients are actually facing, not the
              simplified version of them.
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-5">
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 bg-navy text-paper px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-navy-light transition-colors duration-300"
              >
                Explore Our Capabilities
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-navy/25 text-navy px-8 py-4 text-sm font-medium uppercase tracking-wide hover:border-navy transition-colors duration-300"
              >
                Engage Arvington
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-navy/40">
            <span className="eyebrow text-[0.62rem]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-px h-8 bg-navy/30"
            />
          </div>
        </motion.div>
      </section>

      {/* INSTITUTIONAL POSITION */}
      <section className="bg-pale/60 border-y border-navy/8 py-28 md:py-36">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="The Arvington Position"
            title="Institutions Rise or Decline on the Quality of Their Decisions."
          />
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 mt-16">
            {[
              {
                label: 'Strategy',
                text: 'Clarity on direction, priorities, competitive positioning and institutional growth, built from an honest read of what an organisation can actually execute.',
              },
              {
                label: 'Intelligence',
                text: 'Transformation of data, evidence and expertise into intelligence that a decision maker can actually act on with confidence.',
              },
              {
                label: 'Execution',
                text: 'Translation of strategy into organisational capability, programmes and measurable outcomes that survive contact with the institution.',
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1} direction="up">
                <div className="border-t border-gold pt-6">
                  <h3 className="font-display text-2xl mb-4 text-navy">{item.label}</h3>
                  <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-20 flex flex-wrap items-center gap-3 md:gap-4 justify-center">
            {['Strategy', 'Intelligence', 'Decision', 'Execution', 'Institutional Value'].map((word, i, arr) => (
              <div key={word} className="flex items-center gap-3 md:gap-4">
                <span className="eyebrow text-navy/70">{word}</span>
                {i < arr.length - 1 && <span className="text-gold text-sm">&rarr;</span>}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHAT ARVINGTON DOES */}
      <section className="py-28 md:py-36">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Multidisciplinary Expertise"
            title="Integrated for Decision-Making, Not Divided Into Silos."
            description="The twenty consulting verticals that follow are not twenty disconnected businesses operating under a shared name. They are one institutional capability system, organised around the decisions our clients actually need to make."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.id} direction="up" delay={(i % 3) * 0.08}>
                <div
                  id={cap.id}
                  className="group relative border border-navy/10 p-8 h-full hover:border-navy/30 hover:bg-pale/50 transition-all duration-400"
                >
                  <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-xl md:text-2xl text-navy mt-4 mb-3">{cap.name}</h3>
                  <p className="text-sm text-charcoal-soft italic mb-3">{cap.short}</p>
                  <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{cap.description}</p>
                  <span className="absolute bottom-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 flex justify-center">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
            >
              View All Capabilities
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DECISION INTELLIGENCE / PIPELINE */}
      <section className="py-28 md:py-36 bg-pale/60 border-y border-navy/8">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Decision Intelligence"
            title="The Integrating Institutional Capability."
            description="Arvington does not treat disciplines as isolated services. We integrate multidisciplinary expertise around the decision itself, connecting evidence, analysis, strategy, technology, finance, governance and execution into a single continuous process."
          />
          <div className="mt-16 md:mt-20">
            <PipelineDiagram />
          </div>
        </div>
      </section>

      {/* CONSULTING VERTICALS PREVIEW */}
      <section className="py-28 md:py-36">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Consulting Verticals"
            title="Twenty Verticals. One Integrated Advisory Institution."
            description="Organised across three strategic tiers, from the core practices most engagements draw on first, to the specialist and future-facing verticals we are building deliberately."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => {
              const count = verticals.filter((v) => v.tier === tier.id).length
              return (
                <Reveal key={tier.id} direction="up" delay={i * 0.1}>
                  <Link
                    to={`/consulting-verticals#${tier.id}`}
                    className="block h-full border border-navy/10 hover:border-navy/40 p-8 group transition-colors duration-300 bg-paper"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="eyebrow text-gold">{tier.tier}</span>
                      <span className="font-display text-3xl text-navy/20 group-hover:text-gold/50 transition-colors">
                        {String(count).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-navy mb-4 leading-snug">{tier.label}</h3>
                    <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{tier.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm text-navy group-hover:text-gold transition-colors">
                      View Verticals <span aria-hidden="true">&rarr;</span>
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 border-y border-navy/8">
        <div className="container-institutional">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            <StatCounter value={20} label="Consulting Verticals" />
            <StatCounter value={7} label="Institutions Served" />
            <StatCounter value={5} label="Capability Teams" />
            <StatCounter value={9} label="Executive Leadership Roles" />
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-28 md:py-36">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Institutions We Serve"
            title="Built to Work Across the Institutions That Shape Public and Economic Life."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} direction="up" delay={(i % 4) * 0.06}>
                <div className="bg-paper p-8 h-full hover:bg-pale/60 transition-colors duration-300">
                  <h3 className="font-display text-lg text-navy mb-3">{ind.name}</h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty">{ind.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ARVINGTON / PILLARS */}
      <section className="py-28 md:py-36 bg-pale/60 border-y border-navy/8">
        <div className="container-institutional">
          <SectionHeading eyebrow="The Arvington Difference" title="Five Pillars, Held to Consistently." />
          <div className="mt-16 grid md:grid-cols-5 gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} direction="up" delay={i * 0.08}>
                <div className="flex flex-col items-start gap-4">
                  <span className="font-display text-4xl text-gold/70">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-lg text-navy">{pillar.name}</h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ENGAGEMENT / IMAGE */}
      <section className="py-28 md:py-36">
        <div className="container-institutional grid lg:grid-cols-2 gap-14 items-center">
          <Reveal direction="right">
            <ImagePlaceholder label="Selected Engagement" ratio="aspect-[4/3]" src="/images/site/selected-engagement.jpg" alt="Selected Engagement" />
          </Reveal>
          <Reveal direction="left">
            <span className="eyebrow text-gold">Selected Engagement</span>
            <h3 className="font-display text-3xl md:text-4xl text-navy mt-5 mb-6 leading-tight">
              Health Economics & Pharmaceutical Strategy
            </h3>
            <p className="text-charcoal-soft leading-relaxed text-justify-pretty mb-6">
              Market assessment, economic modelling and strategic decision support for a
              pharmaceutical enterprise entering a new regulatory environment, where the
              commercial case depended entirely on getting the underlying health economics
              right before a single unit was sold.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="eyebrow text-navy/50 mb-1">Sector</p>
                <p className="text-navy">Health & Life Sciences</p>
              </div>
              <div>
                <p className="eyebrow text-navy/50 mb-1">Approach</p>
                <p className="text-navy">Economic Modelling</p>
              </div>
            </div>
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
            >
              Explore Sectors We Serve <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-pale/60 border-y border-navy/8">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Institutions Speaking From Their Own Engagements."
            description="We do not publish testimonials that could not survive the client reading them again a year later. These are drawn directly from post-engagement conversations."
          />
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} direction="up" delay={i * 0.1}>
                <div className="bg-paper border border-navy/10 p-8 h-full flex flex-col">
                  <span className="font-display text-4xl text-gold/60 leading-none mb-4">&ldquo;</span>
                  <p className="text-charcoal leading-relaxed text-justify-pretty flex-1 mb-8">{t.quote}</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-navy/8">
                    <ImagePlaceholder label="Photo" ratio="aspect-square" className="w-14 h-14 shrink-0" src={personPhoto(t.name)} alt={t.name} />
                    <div>
                      <p className="font-display text-base text-navy leading-tight">{t.name}</p>
                      <p className="text-xs text-charcoal-soft mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS TEASER */}
      <section className="py-28 md:py-36 bg-pale/60 border-t border-navy/8">
        <div className="container-institutional">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading eyebrow="Arvington Insights" title="Executive Perspective and Institutional Intelligence." />
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium whitespace-nowrap shrink-0"
            >
              All Insights <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {insights.slice(0, 3).map((insight, i) => (
              <InsightCard key={insight.id} insight={insight} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 relative overflow-hidden">
        <div className="container-institutional relative text-center max-w-3xl mx-auto border-t-2 border-b-2 border-gold/40 py-20">
          <Reveal direction="up">
            <span className="eyebrow text-gold">Engage Arvington</span>
            <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 leading-[1.1] text-navy">
              Whatever the Challenge, Arvington Can Assemble the Right Expertise.
            </h2>
            <p className="text-charcoal-soft text-lg leading-relaxed mb-10 text-justify-pretty">
              Whether the question concerns strategy, transformation, investment, analytics,
              institutional performance, research or a genuinely multidisciplinary problem that
              does not fit neatly into one practice area, we would welcome the conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy text-paper px-9 py-4 text-sm font-medium uppercase tracking-wide hover:bg-navy-light transition-colors duration-300"
            >
              Discuss an Engagement <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
