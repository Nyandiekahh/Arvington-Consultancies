import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import VerticalCard from '../components/VerticalCard'
import { tiers, verticals } from '../data/verticals'
import useSEO from '../hooks/useSEO'

export default function ConsultingVerticals() {
  useSEO({
    title: 'Consulting Verticals',
    description: 'Twenty consulting verticals organised across three strategic tiers, each led by a director responsible for capabilities, quality and delivery.',
    path: '/consulting-verticals',
  })
  return (
    <div>
      <PageHero
        eyebrow="Consulting Verticals"
        title="Twenty Consulting Verticals. One Integrated Advisory Institution."
        description="Organised across three strategic tiers of activation. Select any vertical to see its capabilities, typical director and the institutions it most often serves."
        tall
      />

      {tiers.map((tier, tierIndex) => {
        const tierVerticals = verticals.filter((v) => v.tier === tier.id)
        return (
          <section
            key={tier.id}
            id={tier.id}
            className={`py-24 md:py-28 scroll-mt-24 ${tierIndex % 2 === 1 ? 'bg-pale/60 border-y border-navy/8' : ''}`}
          >
            <div className="container-institutional">
              <SectionHeading eyebrow={tier.tier} title={tier.label} description={tier.description} />
              <div className="mt-14 grid gap-5">
                {tierVerticals.map((v, i) => (
                  <VerticalCard key={v.id} vertical={v} index={i} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
