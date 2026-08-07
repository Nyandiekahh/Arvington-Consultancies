import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { board, cSuite } from '../data/leadership'
import { verticals } from '../data/verticals'

export default function Leadership() {
  return (
    <div>
      <PageHero
        eyebrow="Institutional Leadership"
        title="Governance, Executive Leadership & Consulting Leadership."
        description="Arvington's leadership architecture mirrors the way the institution actually works: stewardship and independence at the Board level, enterprise leadership at the executive level, and specialist practice leadership across the twenty consulting verticals."
      />

      <section id="board" className="py-24 md:py-28 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Board of Directors"
            title="Stewardship, Oversight and Strategic Direction."
            description="The Board is responsible for the long term stewardship of the institution, including safeguarding the independence that our advisory work depends on. Several seats are currently open as the institution completes its founding governance structure."
          />
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {board.map((member, i) => (
              <Reveal key={member.role + i} direction="up" delay={(i % 2) * 0.08}>
                <div
                  className={`flex gap-6 p-7 h-full border ${
                    member.status === 'vacant' ? 'border-dashed border-navy/20' : 'border-navy/10'
                  }`}
                >
                  <ImagePlaceholder
                    label={member.status === 'vacant' ? 'Vacant' : 'Photo'}
                    ratio="aspect-square"
                    className={`w-28 h-28 shrink-0 ${member.status === 'vacant' ? 'opacity-60' : ''}`}
                  />
                  <div>
                    {member.status === 'vacant' ? (
                      <>
                        <h3 className="font-display text-lg text-navy/50">To Be Appointed</h3>
                        <p className="eyebrow text-gold/70 mt-1 mb-1 tracking-normal normal-case font-normal text-charcoal-soft">
                          {member.role}
                        </p>
                        <p className="text-sm text-charcoal-soft mb-3">{member.portfolio}</p>
                        <Link
                          to="/contact"
                          className="text-xs uppercase tracking-wide font-medium text-navy border-b border-navy/30 hover:border-gold hover:text-gold transition-colors duration-300"
                        >
                          Enquire About This Seat
                        </Link>
                      </>
                    ) : (
                      <>
                        <h3 className="font-display text-lg text-navy">{member.name}</h3>
                        <p className="eyebrow text-gold mt-1 mb-1 tracking-normal normal-case font-normal text-charcoal-soft">
                          {member.role}
                        </p>
                        {member.portfolio && (
                          <p className="text-sm text-charcoal-soft mb-2">{member.portfolio}</p>
                        )}
                        {member.affiliation && (
                          <p className="text-xs text-charcoal-soft/80 leading-relaxed">{member.affiliation}</p>
                        )}
                      </>
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
            eyebrow="Executive Leadership"
            title="Executive Management and Institutional Execution."
            description="Nine executive roles hold responsibility for the day to day running of Arvington as an enterprise, distinct from the delivery of individual client engagements."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cSuite.map((exec, i) => (
              <Reveal key={exec.code} direction="up" delay={(i % 3) * 0.07}>
                <div className="border border-navy/12 bg-paper p-7 h-full hover:border-gold/60 transition-colors duration-300">
                  <ImagePlaceholder label="Photo" ratio="aspect-square" className="mb-5" />
                  <span className="font-mono text-xs text-gold">{exec.code}</span>
                  <h3 className="font-display text-lg text-navy mt-2 mb-0.5">{exec.name}</h3>
                  <p className="text-sm text-charcoal-soft">{exec.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="directors" className="py-24 md:py-28 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Consulting Leadership"
            title="Directors of the Twenty Consulting Verticals."
            description="Each vertical is led by a director responsible for the professional standards, technical quality and staffing of that specialist practice. Several verticals are being progressively activated and do not yet have a director in place."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v, i) => (
              <Reveal key={v.id} direction="up" delay={(i % 6) * 0.04}>
                <div
                  className={`p-6 h-full flex gap-5 transition-colors duration-300 ${
                    v.directorName
                      ? 'border border-navy/10 bg-paper hover:border-navy/25'
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
                      {v.directorName || 'To Be Appointed'}
                    </h3>
                    <p className="text-xs text-charcoal-soft eyebrow tracking-normal normal-case font-normal">
                      {v.director}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
