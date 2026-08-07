import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { sectors } from '../data/sectors'

export default function Sectors() {
  return (
    <div>
      <PageHero
        eyebrow="Sectors"
        title="Government, Corporate, Finance, Development, Health, Research and Industry."
        description="Arvington works across sectors deliberately rather than by accident, because many of the problems worth solving, in energy, health or public finance, require exactly the multidisciplinary view a single-sector firm rarely has reason to build."
      />

      <section className="py-24 md:py-32">
        <div className="container-institutional flex flex-col gap-24 md:gap-28">
          {sectors.map((sector, i) => (
            <div
              key={sector.id}
              className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, '0')} / {String(sectors.length).padStart(2, '0')}</span>
                <h2 className="font-display text-3xl md:text-4xl text-navy mt-5 mb-6 leading-tight">{sector.name}</h2>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty mb-7">{sector.description}</p>
                <p className="eyebrow text-navy/50 mb-3">Related Consulting Verticals</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {sector.relatedVerticals.map((v) => (
                    <span key={v} className="text-xs px-3 py-1.5 bg-pale text-navy/80 border border-navy/5">
                      {v}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
                >
                  Discuss This Sector <span aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
              <Reveal direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <ImagePlaceholder label={sector.name} ratio="aspect-[4/3]" />
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
