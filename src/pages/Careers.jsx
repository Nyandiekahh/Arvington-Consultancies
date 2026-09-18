import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'

const openings = [
  { title: 'Consultant — Artificial Intelligence & Data Science', location: 'Nairobi', type: 'Full Time' },
  { title: 'Analyst — Economics & Policy', location: 'Nairobi', type: 'Full Time' },
  { title: 'Senior Consultant — Health & Life Sciences', location: 'Nairobi / Remote', type: 'Full Time' },
  { title: 'Research Associate — Monitoring, Evaluation & Learning', location: 'Nairobi', type: 'Full Time' },
  { title: 'Specialist — GIS & Geospatial Intelligence', location: 'Nairobi', type: 'Contract' },
]

const values = [
  {
    title: 'Intellectual Rigour',
    text: 'We value professionals who question assumptions, examine evidence, develop sound judgement and communicate conclusions with precision.',
  },
  {
    title: 'Ownership',
    text: 'Every professional contributes to the quality of the work. We encourage initiative, accountability, independent judgement and responsibility for outcomes at every level.',
  },
  {
    title: 'Multidisciplinary Depth',
    text: 'Complex institutional questions require professionals who can understand their own discipline deeply and engage constructively across adjacent fields.',
  },
  {
    title: 'Institutional Thinking',
    text: 'We value professionals who see the system around the assignment; connecting decisions, capabilities, governance, technology, people and long-term institutional performance.',
  },
  {
    title: 'Continuous Development',
    text: 'Arvington invests in professional growth, knowledge exchange, mentorship, research and cross-disciplinary learning, enabling people to deepen expertise while expanding their institutional perspective.',
  },
  {
    title: 'Consequential Work',
    text: 'Our people contribute to work connected to institutions, economies, public policy, science, technology, markets and society. Every assignment is an opportunity to strengthen decision quality and institutional capability.',
  },
]

export default function Careers() {
  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title="Build What Matters. Shape What Endures."
        description="Arvington brings together consultants, specialists, analysts, researchers, scientists, engineers and institutional thinkers who apply their expertise to consequential questions. Our teams work across disciplines, sectors and levels of institutional decision-making, contributing knowledge, judgement, analytical capability and professional expertise to the institutions and decisions entrusted to Arvington."
        tall
      />

      <section className="py-24 md:py-32">
        <div className="container-institutional grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <ImagePlaceholder label="Life at Arvington" ratio="aspect-[4/3]" src="/images/site/careers-life.jpg" alt="Life at Arvington" />
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <SectionHeading
              eyebrow="Life at Arvington"
              title="A Culture of Intellectual Excellence."
              description="Arvington brings together people who value rigour, curiosity, responsibility, collaboration and continuous development. Our environment is designed for professionals who want their expertise to contribute to consequential institutional work."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-pale/60 border-y border-navy/8">
        <div className="container-institutional">
          <SectionHeading eyebrow="Why Arvington" title="What We Value in Our People." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {values.map((v, i) => (
              <Reveal key={v.title} direction="up" delay={(i % 3) * 0.07}>
                <div className="flex gap-5">
                  <span className="font-display text-3xl text-gold/70 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-lg text-navy mb-2">{v.title}</h3>
                    <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Current Opportunities"
            title="Join Arvington's Consulting & Advisory Architecture."
            description="Opportunities arise across our Consulting Verticals, Executive Functions and institutional programmes."
          />
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
            <span className="eyebrow text-gold">General Applications</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy mt-5 mb-6 leading-tight">
              Bring Your Expertise to Arvington.
            </h2>
            <p className="text-charcoal-soft leading-relaxed text-justify-pretty mb-4">
              Arvington welcomes professionals whose expertise contributes to its
              multidisciplinary consulting architecture. Candidates may come from a single
              discipline or from combinations of fields spanning strategy, science, technology,
              economics, finance, research, engineering, governance and other areas of
              institutional consequence.
            </p>
            <p className="text-charcoal-soft leading-relaxed text-justify-pretty mb-8">
              A career at Arvington is an opportunity to develop expertise, exercise judgement
              and contribute to institutions capable of what the future demands.
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
