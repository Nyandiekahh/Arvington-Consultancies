import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import InsightCard from '../components/InsightCard'
import { insights, insightCategories } from '../data/insights'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return insights
    return insights.filter((i) => i.category === activeCategory)
  }, [activeCategory])

  return (
    <div>
      <PageHero
        eyebrow="Arvington Insights"
        title="Executive Perspective, Research and Institutional Intelligence."
        description="A permanent publication series covering strategy, artificial intelligence, economics, governance, research, health, climate and the other disciplines Arvington practices in. Written by the directors leading the work, not by a separate content function."
      />

      <section id="executive-perspective" className="py-20 scroll-mt-24">
        <div className="container-institutional">
          <div className="flex flex-wrap gap-3 mb-16">
            {['All', ...insightCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wide font-medium border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy text-paper border-navy'
                    : 'border-navy/15 text-charcoal-soft hover:border-navy/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div id="research" className="grid md:grid-cols-3 gap-10 md:gap-8">
              {filtered[0] && (
                <div className="md:col-span-3">
                  <InsightCard insight={filtered[0]} index={0} featured />
                </div>
              )}
              {filtered.slice(1).map((insight, i) => (
                <InsightCard key={insight.id} insight={insight} index={i + 1} />
              ))}
            </div>
          ) : (
            <p className="text-charcoal-soft">No articles currently published in this category.</p>
          )}
        </div>
      </section>

      <section id="publications" className="py-24 bg-pale/60 border-t border-navy/8">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Publications"
            title="Working Papers and Technical Publications."
            description="Beyond the Executive Perspective series, Arvington's consulting directors publish working papers, policy briefs and technical notes arising from client engagements, cleared of confidential detail and shared in the interest of the broader institutional community we work within."
          />
        </div>
      </section>
    </div>
  )
}
