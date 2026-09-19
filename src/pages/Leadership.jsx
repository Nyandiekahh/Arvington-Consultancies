import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import useSEO from '../hooks/useSEO'
import { personPhoto, slugify } from '../utils/media'
import { board, boardMandate, cSuite, cSuiteMandate } from '../data/leadership'
import { verticals } from '../data/verticals'

function SealBanner({ image, eyebrow, title, description, strapline }) {
  return (
    <div className="relative overflow-hidden bg-[#0b0b09] py-20 md:py-28">
      <div
        className="absolute inset-0 bg-no-repeat opacity-95"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: 'right center', backgroundSize: 'contain' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b09] via-[#0b0b09]/85 to-[#0b0b09]/20" />
      <div className="container-institutional relative">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} light />
        {strapline && <p className="mt-6 eyebrow text-gold/80">{strapline}</p>}
      </div>
    </div>
  )
}

function ExecCard({ exec, index }) {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()
  const anchorId = `csuite-${slugify(exec.name)}`

  useEffect(() => {
    if (location.hash === `#${anchorId}`) {
      setExpanded(true)
    }
  }, [location.hash, anchorId])

  return (
    <Reveal direction="up" delay={(index % 3) * 0.07}>
      <div id={anchorId} className="border border-navy/12 bg-paper hover:border-gold/60 transition-colors duration-300 scroll-mt-28">
        <button onClick={() => setExpanded((e) => !e)} className="w-full text-left p-7" aria-expanded={expanded}>
          <ImagePlaceholder label="Photo" ratio="aspect-square" className="mb-5" src={personPhoto(exec.name)} alt={exec.name} />
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
  useSEO({
    title: 'Leadership',
    description:
      'The Arvington Board of Directors, C-Suite executive leadership and the Directors of our twenty Consulting Verticals.',
    path: '/leadership',
  })

  return (
    <div>
      <PageHero
        eyebrow="Institutional Leadership"
        title="Stewardship. Executive Authority. Professional Leadership."
        description="At Arvington, we architect leadership as a system of stewardship, authority and professional accountability. The Board provides independent oversight, governance and strategic direction; the C-Suite leads enterprise strategy, integration and performance; and Consulting Directors lead the twenty Verticals with defined professional authority and accountability."
        tall
      />

      <section id="board" className="scroll-mt-24">
        <SealBanner
          image="/images/leadership/board-seal.webp"
          eyebrow={boardMandate.eyebrow}
          title={boardMandate.title}
          description={boardMandate.intro}
          strapline={boardMandate.strapline}
        />
        <div className="py-24 md:py-28">
          <div className="container-institutional">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {board.map((member, i) => (
                <Reveal key={member.name + i} direction="up" delay={(i % 2) * 0.08}>
                  <div
                    id={`board-${slugify(member.name)}`}
                    className="p-7 h-full border border-navy/12 bg-paper hover:border-gold/60 transition-colors duration-300 scroll-mt-28"
                  >
                    <ImagePlaceholder label="Photo" ratio="aspect-square" className="mb-5" src={personPhoto(member.name)} alt={member.name} />
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="c-suite" className="scroll-mt-24">
        <SealBanner
          image="/images/leadership/csuite-seal.webp"
          eyebrow={cSuiteMandate.eyebrow}
          title={cSuiteMandate.title}
          description={cSuiteMandate.intro}
          strapline={cSuiteMandate.strapline}
        />
        <div className="py-24 md:py-28 bg-pale/60 border-b border-navy/8">
          <div className="container-institutional">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cSuite.map((exec, i) => (
                <ExecCard key={exec.code} exec={exec} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="directors" className="scroll-mt-24">
        <SealBanner
          image="/images/leadership/directorate-seal.webp"
          eyebrow="Consulting Leadership"
          title="Directors of the Twenty Consulting Verticals."
          description="Each vertical is led by a director responsible for the professional standards, technical quality and staffing of that specialist practice. Several verticals are being progressively activated and do not yet have a director in place. Select a director to read their full profile on the Consulting Verticals page."
        />
        <div className="py-24 md:py-28">
          <div className="container-institutional">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {verticals.map((v, i) => (
                <Reveal key={v.id} direction="up" delay={(i % 6) * 0.04}>
                  <Link
                    to={`/consulting-verticals#vertical-${v.id}`}
                    className={`block p-7 h-full transition-colors duration-300 ${
                      v.directorName
                        ? 'border border-navy/12 bg-paper hover:border-gold/60'
                        : 'border border-dashed border-navy/15 bg-paper/60'
                    }`}
                  >
                    <ImagePlaceholder
                      label={v.directorName ? 'Photo' : 'Vacant'}
                      ratio="aspect-square"
                      className={`mb-5 ${v.directorName ? '' : 'opacity-60'}`}
                      src={personPhoto(v.directorName)}
                      alt={v.directorName}
                    />
                    <span className="font-mono text-xs text-gold">{String(v.id).padStart(2, '0')}</span>
                    <h3 className={`font-display text-lg mt-2 mb-0.5 leading-snug ${v.directorName ? 'text-navy' : 'text-navy/50'}`}>
                      {v.directorName ? `${v.directorName}${v.directorCredentials ? `, ${v.directorCredentials}` : ''}` : 'To Be Appointed'}
                    </h3>
                    <p className="text-sm text-charcoal-soft eyebrow tracking-normal normal-case font-normal">
                      {v.director}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
