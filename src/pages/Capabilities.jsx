import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { capabilities } from '../data/capabilities'
import { verticals } from '../data/verticals'
import useSEO from '../hooks/useSEO'

export default function Capabilities() {
  useSEO({
    title: 'Capabilities',
    description:
      'Eight advisory domains \u2014 strategy, AI & digital, investment & risk, research & policy, engineering & innovation, government & development, sector & infrastructure, and projects & training \u2014 deployed together across Arvington\u2019s twenty Consulting Verticals.',
    path: '/capabilities',
  })

  const verticalById = (id) => verticals.find((v) => v.id === id)

  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        title="Eight Advisory Domains, Deployed Together."
        description="Strategy and transformation, AI and digital, investment and risk, research and policy, engineering and innovation, government and development, sector and infrastructure, and projects and training. Each is a genuine specialism in its own right. Almost none of our engagements draw on only one."
      />

      <section className="py-24 md:py-32">
        <div className="container-institutional flex flex-col gap-24 md:gap-32">
          {capabilities.map((cap, i) => (
            <div
              key={cap.id}
              id={cap.id}
              className={`grid lg:grid-cols-2 gap-14 items-start scroll-mt-28 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal direction={i % 2 === 0 ? 'right' : 'left'}>
                <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, '0')} / 08</span>
                <h2 className="font-display text-3xl md:text-4xl text-ink mt-5 mb-3 leading-tight">{cap.name}</h2>
                <p className="text-charcoal-soft italic mb-6">{cap.short}</p>
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{cap.description}</p>
                {cap.strapline && (
                  <p className="mt-5 text-ink font-display text-lg leading-snug">{cap.strapline}</p>
                )}

                {cap.subServices && cap.subServices.length > 0 && (
                  <div className="mt-8">
                    <p className="eyebrow text-ink/50 mb-3">What This Covers</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {cap.subServices.map((service) => (
                        <li key={service} className="text-sm text-charcoal-soft flex items-start gap-2">
                          <span className="text-gold mt-1.5 shrink-0">&middot;</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {cap.relatedVerticalIds && cap.relatedVerticalIds.length > 0 && (
                  <div className="mt-8">
                    <p className="eyebrow text-ink/50 mb-3">Related Consulting Verticals</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.relatedVerticalIds.map((id) => {
                        const v = verticalById(id)
                        if (!v) return null
                        return (
                          <Link
                            key={id}
                            to={`/consulting-verticals#vertical-${id}`}
                            className="text-xs px-3 py-1.5 border border-navy/15 text-ink/80 hover:border-gold hover:text-gold transition-colors duration-200"
                          >
                            {v.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
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