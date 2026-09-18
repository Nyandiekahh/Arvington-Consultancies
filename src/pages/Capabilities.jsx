import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { capabilities } from '../data/capabilities'

export default function Capabilities() {
  return (
    <div>
      <PageHero
        eyebrow="Capabilities"
        title="Six Capability Areas, Deployed Together."
        description="Strategy, analytics and artificial intelligence, economics and finance, research, technology, and institutional advisory. Each is a genuine specialism in its own right. Almost none of our engagements draw on only one."
      />

      <section className="py-24 md:py-32">
        <div className="container-institutional flex flex-col gap-24 md:gap-32">
          {capabilities.map((cap, i) => (
            <div
              key={cap.id}
              id={cap.id}
              className={`grid lg:grid-cols-2 gap-14 items-center scroll-mt-28 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, '0')} / 06</span>
                <h2 className="font-display text-3xl md:text-4xl text-navy mt-5 mb-3 leading-tight">{cap.name}</h2>
                <p className="text-charcoal-soft italic mb-6">{cap.short}</p>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{cap.description}</p>
                {cap.strapline && (
                  <p className="mt-5 text-navy font-display text-lg leading-snug">{cap.strapline}</p>
                )}
                <Link
                  to="/consulting-verticals"
                  className="inline-flex items-center gap-2 mt-7 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
                >
                  Related Consulting Verticals <span aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
              <Reveal direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <ImagePlaceholder label={cap.name} ratio="aspect-[4/3]" src={`/images/capabilities/${cap.id}.jpg`} alt={cap.name} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
