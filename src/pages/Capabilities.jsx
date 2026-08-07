import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { capabilities } from '../data/capabilities'

const detailCopy = {
  strategy:
    'Our strategy work begins with a deliberately unglamorous question: what, specifically, is preventing this institution from executing the plan it already has. Only once that is answered honestly do we move to the more familiar territory of direction setting, competitive positioning and growth planning. Engagements typically combine corporate and business strategy with organisational design, since a direction that the current structure cannot support is not really a strategy yet.',
  'ai-data':
    'Analytics and artificial intelligence work at Arvington is scoped around a specific institutional decision, not a general ambition to adopt the technology. We build the data infrastructure, the models and the visualisation layer required to genuinely improve one identified decision, and we spend as much time on how that model will be trusted and used inside the organisation as we do on its technical accuracy.',
  'economics-finance':
    'Our economists and financial analysts build the quantitative backbone beneath a recommendation, from econometric forecasting to investment appraisal and cost benefit analysis. The work is meant to survive being challenged by a sceptical board member, which shapes how conservatively we treat assumptions and how transparently we present the uncertainty in any given projection.',
  research:
    'Research at Arvington ranges from formal experimental design to large scale monitoring and evaluation frameworks for development programmes. We treat research integrity as non negotiable, including in the uncomfortable cases where the evidence does not support the conclusion a client initially expected, because a research function willing to say so is the only kind actually worth commissioning.',
  technology:
    'Technology engagements cover digital transformation strategy, systems architecture and technical delivery, always grounded in the operational reality of the institution adopting them. A well designed system that nobody in the organisation is prepared to actually use is not a successful delivery, regardless of how the initial build went.',
  'institutional-advisory':
    'Institutional advisory sits closest to governance, organisational design and long term capability. This is often the quietest part of an engagement and frequently the most consequential, since incentive structures and reporting lines tend to determine whether a strategy survives its second year as reliably as the strategy itself does.',
}

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
                <p className="text-charcoal-soft leading-relaxed text-justify-pretty">{detailCopy[cap.id]}</p>
                <Link
                  to="/consulting-verticals"
                  className="inline-flex items-center gap-2 mt-7 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
                >
                  Related Consulting Verticals <span aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
              <Reveal direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <ImagePlaceholder label={cap.name} ratio="aspect-[4/3]" />
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
