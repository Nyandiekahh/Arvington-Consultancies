import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { board, boardMandate, cSuite, cSuiteMandate } from '../data/leadership'
import { verticals } from '../data/verticals'

function ExecCard({ exec, index }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Reveal direction="up" delay={(index % 3) * 0.07}>
      <div className="border border-navy/12 bg-paper hover:border-gold/60 transition-colors duration-300">
        <button onClick={() => setExpanded((e) => !e)} className="w-full text-left p-7" aria-expanded={expanded}>
          <ImagePlaceholder label="Photo" ratio="aspect-square" className="mb-5" />
          <span className="font-mono text-xs text-gold">{exec.code}</span>
          <h3 className="font-display text-lg text-navy mt-2 mb-0.5">
            {exec.name}
            {exec.credentials ? `, ${exec.credentials}` : ''}
          </h3>
          <p className="text-sm text-charcoal-soft">{exec.title}</p>
          {exec.tagline && <p className="text-xs text-gold/90 eyebrow tracking-normal normal-case font-medium mt-3">{exec.tagline}</p>}
          <span className="inline-block mt-4 text-xs uppercase tracking-wide font-medium text-navy border-b border-navy/30">
            {expanded ? 'Hide Full Profile' : 'Read Full Profile'}
          </span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-7 pb-7 border-t border-navy/8 pt-6">
            {exec.mantra && <p className="text-sm text-charcoal-soft italic mb-4">{exec.mantra}</p>}
            <div className="flex flex-col gap-4">
              {exec.bio.map((para, i) => (
                <p key={i} className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Reveal>
  )
}

export default function Leadership() {
  return (
    <div>
      <PageHero
        eyebrow="Institutional Leadership"
        title="Stewardship. Executive Authority. Professional Leadership."
        description="At Arvington, we architect leadership as a system of stewardship, authority and professional accountability. The Board provides independent oversight, governance and strategic direction; the C-Suite leads enterprise strategy, integration and performance; and Consulting Directors lead the twenty Verticals with defined professional authority and accountability."
        tall
      />

      <section id="board" className="py-24 md:py-28 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow={boardMandate.eyebrow}
            title={boardMandate.title}
            description={boardMandate.intro}
          />
          <Reveal direction="up" delay={0.1}>
            <p className="mt-6 eyebrow text-gold/80">{boardMandate.strapline}</p>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {board.map((member, i) => (
              <Reveal key={member.name + i} direction="up" delay={(i % 2) * 0.08}>
                <div className="flex gap-6 p-7 h-full border border-navy/10">
                  <ImagePlaceholder label="Photo" ratio="aspect-square" className="w-28 h-28 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg text-navy">
                      {member.name}
                      {member.credentials ? `, ${member.credentials}` : ''}
                    </h3>
                    <p className="eyebrow text-gold mt-1 mb-1 tracking-normal normal-case font-normal text-charcoal-soft">
                      {member.role}
                    </p>
                    {member.portfolio && (
                      <p className="text-sm text-charcoal-soft mb-2">{member.portfolio}</p>
                    )}
                    {member.affiliation && (
                      <p className="text-xs text-charcoal-soft/80 leading-relaxed">{member.affiliation}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="c-suite" className="py-24 md:py-28 bg-pale/60 border-y border-navy/8 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow={cSuiteMandate.eyebrow}
            title={cSuiteMandate.title}
            description={cSuiteMandate.intro}
          />
          <Reveal direction="up" delay={0.1}>
            <p className="mt-6 eyebrow text-gold/80">{cSuiteMandate.strapline}</p>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cSuite.map((exec, i) => (
              <ExecCard key={exec.code} exec={exec} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="directors" className="py-24 md:py-28 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Consulting Leadership"
            title="Directors of the Twenty Consulting Verticals."
            description="Each vertical is led by a director responsible for the professional standards, technical quality and staffing of that specialist practice. Several verticals are being progressively activated and do not yet have a director in place. Select a director to read their full profile on the Consulting Verticals page."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v, i) => (
              <Reveal key={v.id} direction="up" delay={(i % 6) * 0.04}>
                <Link
                  to={`/consulting-verticals#vertical-${v.id}`}
                  className={`block p-6 h-full flex gap-5 transition-colors duration-300 ${
                    v.directorName
                      ? 'border border-navy/10 bg-paper hover:border-gold/60'
                      : 'border border-dashed border-navy/15 bg-paper/60'
                  }`}
                >
                  <ImagePlaceholder
                    label={v.directorName ? 'Photo' : 'Vacant'}
                    ratio="aspect-square"
                    className={`w-20 h-20 shrink-0 ${v.directorName ? '' : 'opacity-60'}`}
                  />
                  <div>
                    <span className="font-mono text-xs text-gold">{String(v.id).padStart(2, '0')}</span>
                    <h3 className={`font-display text-base mt-1 mb-0.5 leading-snug ${v.directorName ? 'text-navy' : 'text-navy/50'}`}>
                      {v.directorName ? `${v.directorName}${v.directorCredentials ? `, ${v.directorCredentials}` : ''}` : 'To Be Appointed'}
                    </h3>
                    <p className="text-xs text-charcoal-soft eyebrow tracking-normal normal-case font-normal">
                      {v.director}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
