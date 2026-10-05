import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import PipelineDiagram from '../components/PipelineDiagram'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { pillars } from '../data/capabilities'
import { csr } from '../data/csr'
import { governanceCategories } from '../data/governance'
import { trackRecord } from '../data/trackRecord'
import useSEO from '../hooks/useSEO'

const VALUES = [
  {
    name: 'Rigour',
    description:
      'Conclusions earned through evidence and method, not asserted by confidence.',
  },
  {
    name: 'Independence',
    description:
      'Judgement free of the outcome a client hopes to hear.',
  },
  {
    name: 'Stewardship',
    description:
      'Advice given as though we were accountable for what it becomes.',
  },
  {
    name: 'Excellence',
    description:
      'Work worthy of the institutions entrusted to our judgement.',
  },
]

export default function About() {
  useSEO({
    title: 'About',
    description:
      'Arvington’s institutional purpose, philosophy, decision intelligence approach and the five principles that govern our work.',
    path: '/about',
  })

  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="About Arvington"
        title="Architecting Institutions. Building What Endures."
        description="Institutions are humanity's most consequential instruments for organising capital, knowledge, authority, capability and ambition. Their strength is not given; it is conceived, architected, built, governed and renewed. Arvington operates at this level of institutional consequence."
        tall
      />


      {/* =========================================================
          PURPOSE
      ========================================================= */}
      <section
        id="purpose"
        className="relative py-20 md:py-28 scroll-mt-24 bg-paper"
      >
        <div className="container-institutional">

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

            <Reveal direction="right" className="lg:col-span-7">
              <div className="h-full flex flex-col justify-center">

                <span className="eyebrow text-gold">
                  Our Purpose
                </span>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink mt-5 mb-7 leading-tight">
                  To Shape Institutions Capable of What the Future Demands.
                </h2>

                <div className="space-y-5 text-charcoal-soft leading-relaxed text-justify-pretty">
                  <p>
                    We work with Boards, leaders, owners and principals to shape
                    the institutions entrusted to their stewardship, defining
                    purpose, architecture, strategy, governance, capability and
                    the systems required for enduring performance. We integrate
                    strategy, intelligence, science, technology, economics,
                    finance, governance and human capability into one coherent
                    institutional architecture.
                  </p>

                  <p>
                    Institutions determine what economies, societies and
                    organisations are capable of becoming. Their trajectory is
                    shaped by the architecture they establish, the decisions
                    they make, the capabilities they cultivate and the systems
                    through which those capabilities become performance.
                    Arvington works with Boards, leaders, owners and those
                    entrusted with stewardship to conceive what must become,
                    architect what must be built, align the systems that make
                    it possible and develop the capabilities required to
                    perform, evolve and endure.
                  </p>
                </div>

                <div className="mt-8 border-l-2 border-gold pl-6">
                  <p className="font-display text-ink text-xl md:text-2xl leading-snug">
                    We turn ambition into capability, and capability into
                    enduring consequence.
                  </p>
                </div>

              </div>
            </Reveal>


            <Reveal
              direction="left"
              delay={0.1}
              className="lg:col-span-5"
            >
              <div className="relative h-full min-h-[460px] overflow-hidden bg-navy">

                <ImagePlaceholder
                  label="Institutional Purpose"
                  ratio="h-full"
                  src="/images/site/about-purpose.jpg"
                  alt="Institutional Purpose"
                />

                {/* image colour treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs tracking-[0.2em] uppercase text-paper/60">
                    ARVINGTON
                  </span>

                  <div className="mt-2 h-px w-12 bg-gold" />
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* =========================================================
          VISION / MISSION / VALUES
      ========================================================= */}
      <section
        id="vision-mission-values"
        className="relative py-20 md:py-28 bg-[#E9E3D7] border-y border-navy/10 scroll-mt-24"
      >
        <div className="container-institutional">

          <SectionHeading
            eyebrow="Vision, Mission & Values"
            title="What We Are Working Toward, and How We Hold Ourselves to It."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-5">

            <Reveal direction="up">
              <div className="relative bg-navy text-paper p-8 md:p-10 h-full overflow-hidden">

                <span className="absolute right-5 top-0 font-display text-[8rem] leading-none text-paper/[0.035]">
                  01
                </span>

                <span className="eyebrow text-gold">
                  Our Vision
                </span>

                <h3 className="font-display text-2xl text-paper mt-5 mb-5">
                  Institutions capable of their consequence.
                </h3>

                <p className="text-paper/65 leading-relaxed text-justify-pretty">
                  Institutions across Africa and beyond capable of the
                  decisions their consequence demands: governed with
                  integrity, built on evidence, and equipped to perform,
                  adapt and endure.
                </p>
              </div>
            </Reveal>


            <Reveal direction="up" delay={0.1}>
              <div className="relative bg-paper p-8 md:p-10 h-full border border-navy/10 overflow-hidden">

                <span className="absolute right-5 top-0 font-display text-[8rem] leading-none text-ink/[0.035]">
                  02
                </span>

                <span className="eyebrow text-gold">
                  Our Mission
                </span>

                <h3 className="font-display text-2xl text-ink mt-5 mb-5">
                  Better decisions. Stronger capability.
                </h3>

                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                  To integrate strategy, evidence, technology and institutional
                  expertise into the discipline of better decisions, and to
                  build the institutional capability required to act on them.
                </p>
              </div>
            </Reveal>

          </div>


          {/* VALUES */}
          <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-1 bg-navy/10">

            {VALUES.map((value, i) => (
              <Reveal
                key={value.name}
                direction="up"
                delay={i * 0.08}
              >
                <div className="bg-paper p-7 h-full group hover:bg-navy transition-colors duration-300">

                  <span className="text-xs tracking-[0.2em] text-gold">
                    0{i + 1}
                  </span>

                  <h4 className="font-display text-xl text-ink group-hover:text-paper mt-5 mb-3 transition-colors duration-300">
                    {value.name}
                  </h4>

                  <p className="text-sm text-charcoal-soft group-hover:text-paper/60 leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section
        id="philosophy"
        className="py-20 md:py-28 bg-paper scroll-mt-24"
      >
        <div className="container-institutional">

          <SectionHeading
            eyebrow="Institutional Philosophy"
            title="The Institution Is Greater Than the Disciplines That Serve It."
            description="Institutions of consequence are built by integrating knowledge, judgement and capability around purpose, ambition and what must become. Arvington brings strategy, economics, intelligence, science, technology, finance, governance and human capability into one coherent institutional architecture; creating the depth, breadth and synthesis required to shape complex institutions and consequential decisions."
          />


          <div className="mt-14 grid md:grid-cols-3 gap-5">

            {[
              {
                number: '01',
                title: 'Twenty Verticals, One Architecture',
                text: 'Our twenty Consulting Verticals form an interconnected architecture of expertise, enabling the right capabilities to converge around each institution, strategic imperative and opportunity.',
              },
              {
                number: '02',
                title: 'Knowledge Organised Around the Institution',
                text: 'We organise knowledge around the institution, integrate expertise around consequence, and build capability around what must endure, rather than organising ourselves around a fixed set of disciplines and asking the client to fit inside them.',
              },
              {
                number: '03',
                title: 'One Institution',
                text: 'Twenty Verticals. One Institution. One architecture. Built for consequence, led by directors who trust one another’s judgement across disciplines.',
              },
            ].map((item, i) => (
              <Reveal
                key={item.number}
                direction="up"
                delay={i * 0.1}
              >
                <div
                  className={`relative min-h-[290px] p-8 md:p-9 overflow-hidden ${
                    i === 1
                      ? 'bg-navy text-paper'
                      : 'bg-[#F0ECE3] text-ink'
                  }`}
                >

                  <span
                    className={`absolute -right-3 -top-8 font-display text-[8rem] leading-none ${
                      i === 1
                        ? 'text-paper/[0.04]'
                        : 'text-ink/[0.04]'
                    }`}
                  >
                    {item.number}
                  </span>

                  <div className="relative h-full flex flex-col">

                    <span className="text-xs tracking-[0.2em] text-gold">
                      {item.number}
                    </span>

                    <h3
                      className={`font-display text-xl md:text-2xl mt-6 mb-5 ${
                        i === 1 ? 'text-paper' : 'text-ink'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`leading-relaxed text-sm ${
                        i === 1
                          ? 'text-paper/65'
                          : 'text-charcoal-soft'
                      }`}
                    >
                      {item.text}
                    </p>

                  </div>
                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          DECISION INTELLIGENCE
      ========================================================= */}
      <section
        id="decision-intelligence"
        className="relative py-20 md:py-28 bg-navy text-paper scroll-mt-24 overflow-hidden"
      >

        {/* decorative geometry */}
        <div className="absolute right-[-120px] top-[-120px] w-[360px] h-[360px] rounded-full border border-gold/10" />
        <div className="absolute right-[-60px] top-[-60px] w-[240px] h-[240px] rounded-full border border-gold/10" />

        <div className="container-institutional relative">

          <SectionHeading
            eyebrow="Decision Intelligence"
            title="The Discipline of Turning Knowledge Into Consequence."
            description="Consequential decisions demand more than information. They require evidence, intelligence, judgement, context and institutional capability to converge before action is taken. Arvington's Decision Intelligence brings these elements into one coherent decision architecture connecting data, analysis, research, expertise, strategy, technology and institutional judgement from the point of inquiry to the point of consequence."
            light
          />

          <div className="mt-14 rounded-sm border border-paper/10 bg-paper/[0.035] p-5 md:p-8">
            <PipelineDiagram />
          </div>


          <div className="mt-12 grid md:grid-cols-2 gap-8">

            <Reveal direction="up">
              <div className="border-l border-gold pl-6">
                <p className="text-paper/65 leading-relaxed text-justify-pretty">
                  It is how evidence becomes intelligence, intelligence
                  informs judgement, judgement becomes decision, and decision
                  becomes institutional action, capability and enduring value.
                  Decision Intelligence is the architecture through which
                  better knowledge becomes better decisions and better
                  decisions become stronger institutions.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <div className="border-l border-paper/20 pl-6">
                <p className="text-paper/65 leading-relaxed text-justify-pretty">
                  Arvington's engagements are structured to move deliberately
                  through each of these stages, rather than jumping straight
                  from a data request to a recommendation slide. It takes
                  longer at the outset. It is, in our experience,
                  considerably faster overall, because a decision that has
                  genuinely been through this process rarely needs to be
                  revisited eighteen months later.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>


      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section
        id="approach"
        className="py-20 md:py-28 bg-[#E9E3D7] scroll-mt-24"
      >
        <div className="container-institutional">

          <SectionHeading
            eyebrow="Our Approach"
            title="Five Principles That Govern Our Work."
          />

          <div className="mt-14 grid md:grid-cols-5 gap-3">

            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.id}
                direction="up"
                delay={i * 0.08}
              >
                <div className="relative bg-paper p-7 min-h-[275px] group hover:bg-navy transition-colors duration-300">

                  <span className="font-display text-4xl text-gold/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-display text-lg mt-5 mb-3 text-ink group-hover:text-paper transition-colors duration-300">
                    {pillar.name}
                  </h3>

                  <p className="text-sm text-charcoal-soft group-hover:text-paper/60 leading-relaxed text-justify-pretty transition-colors duration-300">
                    {pillar.description}
                  </p>

                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-500" />

                </div>
              </Reveal>
            ))}

          </div>

          <Reveal direction="up" delay={0.3}>
            <div className="mt-12 bg-navy p-8 md:p-10 text-center">

              <p className="font-display text-xl md:text-2xl text-paper leading-snug max-w-2xl mx-auto">
                Five principles. One standard:
                <span className="text-gold">
                  {' '}work worthy of the institutions we are entrusted to shape.
                </span>
              </p>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =========================================================
          EXPERTISE
      ========================================================= */}
      <section
        id="expertise"
        className="py-20 md:py-28 bg-paper scroll-mt-24"
      >
        <div className="container-institutional">

          <SectionHeading
            eyebrow="Our Expertise"
            title="Four Domains, Twenty Verticals, One Capability."
            description="Our expertise is organised into four broad domains, each drawing on multiple Consulting Verticals rather than sitting inside a single one."
          />

          <div className="mt-14 grid sm:grid-cols-2 gap-4">

            {[
              {
                name: 'Advisory & Consulting',
                text: 'Strategic, institutional and technical advisory across the full range of our Consulting Verticals.',
              },
              {
                name: 'Strategy & Transformation',
                text: 'Corporate strategy, business transformation, operating model design and executive advisory.',
              },
              {
                name: 'Data & Decision Intelligence',
                text: 'AI, analytics, data science and the evidence architecture behind consequential decisions.',
              },
              {
                name: 'Research & Analytics',
                text: 'Economic, statistical and policy research that grounds advice in evidence rather than opinion.',
              },
            ].map((item, i) => (
              <Reveal
                key={item.name}
                direction="up"
                delay={i * 0.08}
              >
                <div className="relative bg-[#F0ECE3] p-8 md:p-9 min-h-[190px] group overflow-hidden">

                  <span className="absolute right-5 top-2 font-display text-7xl text-ink/[0.035]">
                    0{i + 1}
                  </span>

                  <div className="relative">

                    <span className="text-xs tracking-[0.2em] text-gold">
                      0{i + 1}
                    </span>

                    <h3 className="font-display text-xl text-ink mt-4 mb-3">
                      {item.name}
                    </h3>

                    <p className="text-charcoal-soft leading-relaxed">
                      {item.text}
                    </p>

                  </div>

                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

                </div>
              </Reveal>
            ))}

          </div>

          <div className="mt-10">
            <Link
              to="/capabilities"
              className="inline-flex items-center text-ink border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm font-medium"
            >
              Explore all capabilities

              <svg
                className="ml-2"
                width="16"
                height="16"
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
      </section>


      {/* =========================================================
          CSR
      ========================================================= */}
      <section
        id="csr"
        className="py-20 md:py-28 bg-[#E9E3D7] scroll-mt-24"
      >
        <div className="container-institutional">

          <SectionHeading
            eyebrow="Corporate Social Responsibility"
            title="Institutional Advisory Carries a Wider Obligation."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-4">

            {csr.map((item, i) => (
              <Reveal
                key={item.name}
                direction="up"
                delay={i * 0.1}
              >
                <div className="bg-paper p-8 min-h-[220px] h-full">

                  <span className="text-xs tracking-[0.2em] text-gold">
                    0{i + 1}
                  </span>

                  <h3 className="font-display text-xl text-ink mt-5 mb-4">
                    {item.name}
                  </h3>

                  <p className="text-charcoal-soft leading-relaxed text-justify-pretty">
                    {item.description}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          GOVERNANCE
      ========================================================= */}
      <section
        id="governance"
        className="py-20 md:py-28 bg-navy text-paper scroll-mt-24"
      >
        <div className="container-institutional">

          <SectionHeading
            eyebrow="Governance & Credibility"
            title="The Standards We Hold Ourselves To."
            light
          />

          <div className="mt-14 grid sm:grid-cols-2 gap-4">

            {governanceCategories.map((item, i) => (
              <Reveal
                key={item.name}
                direction="up"
                delay={i * 0.08}
              >
                <div className="bg-paper/[0.045] border border-paper/10 p-8 h-full">

                  <span className="text-xs tracking-[0.2em] text-gold">
                    0{i + 1}
                  </span>

                  <h3 className="font-display text-lg text-paper mt-5 mb-3">
                    {item.name}
                  </h3>

                  <p className="text-sm text-paper/60 leading-relaxed text-justify-pretty">
                    {item.description}
                  </p>

                  {item.items && item.items.length > 0 && (
                    <ul className="mt-5 space-y-2">

                      {item.items.map((entry) => (
                        <li
                          key={entry}
                          className="text-sm text-paper/60 flex items-start gap-2"
                        >
                          <span className="text-gold mt-1.5">
                            &bull;
                          </span>

                          <span>{entry}</span>
                        </li>
                      ))}

                    </ul>
                  )}

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          TRACK RECORD
      ========================================================= */}
      <section
        id="track-record"
        className="py-20 md:py-28 bg-[#E9E3D7] scroll-mt-24"
      >
        <div className="container-institutional">

          <SectionHeading
            eyebrow="Our Track Record"
            title="Selected Projects, Outcomes and Institutions Advised."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-4">

            {trackRecord.map((entry, i) => (
              <Reveal
                key={entry.title}
                direction="up"
                delay={i * 0.08}
              >
                <div className="bg-paper p-8 min-h-[230px] h-full group hover:bg-navy transition-colors duration-300">

                  <p className="text-xs uppercase tracking-[0.16em] text-gold mb-4">
                    {entry.category}
                  </p>

                  <h3 className="font-display text-xl text-ink group-hover:text-paper mb-3 leading-snug transition-colors duration-300">
                    {entry.title}
                  </h3>

                  <p className="text-sm text-charcoal-soft group-hover:text-paper/60 leading-relaxed transition-colors duration-300">
                    {entry.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-gold group-hover:w-16 transition-all duration-300" />

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CLOSING STATEMENT
      ========================================================= */}
      <section className="relative bg-navy text-paper py-20 md:py-24 overflow-hidden">

        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-gold/10" />
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full border border-gold/10" />

        <div className="container-institutional relative">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold" />

              <span className="eyebrow text-paper/50">
                Arvington
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Built for consequence.
              <span className="text-gold">
                {' '}Designed to endure.
              </span>
            </h2>

            <p className="mt-5 text-paper/60 max-w-2xl leading-relaxed">
              We work at the intersection of institutional purpose,
              strategic choice, evidence and execution — helping organisations
              become capable of what their future demands.
            </p>

          </div>

        </div>
      </section>

    </div>
  )
}