import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import InsightCard from '../components/InsightCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { verticals } from '../data/verticals'
import {
  insights,
  insightCategories,
  journalIntro,
  publicationTypes,
  editorialBoard,
  perspectives,
  volumesArchive,
  featuredResearch,
} from '../data/insights'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return insights
    return insights.filter((i) => i.category === activeCategory)
  }, [activeCategory])

  const featuredInsight = insights.find((i) => i.id === featuredResearch.insightId)

  return (
    <div>
      <PageHero
        eyebrow={journalIntro.eyebrow}
        title={journalIntro.strapline}
        description={journalIntro.description}
        tall
      />

      <section id="latest" className="py-20 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading eyebrow="Explore the Journal" title="Latest Publications" description="The most recent articles and papers published across the journal." />
          <div className="flex flex-wrap gap-3 my-12">
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
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
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

      {featuredInsight && (
        <section className="py-24 bg-navy text-paper">
          <div className="container-institutional grid lg:grid-cols-2 gap-14 items-center">
            <Reveal direction="right">
              <span className="eyebrow text-gold">Featured Research</span>
              <p className="mt-5 text-xs uppercase tracking-wide text-paper/60">{featuredResearch.type} &middot; {featuredResearch.category}</p>
              <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6 leading-tight">{featuredResearch.title}</h2>
              <p className="text-paper/70 mb-8">{featuredResearch.volumeLabel}</p>
              <Link
                to={`/insights/${featuredInsight.id}`}
                className="inline-flex items-center gap-2 border border-gold text-gold px-7 py-3.5 text-sm font-medium uppercase tracking-wide hover:bg-gold hover:text-navy transition-colors duration-300"
              >
                Read Research <span aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <ImagePlaceholder label="Featured Research" ratio="aspect-[16/10]" className="!bg-paper/5 !border-paper/15" src={`/images/insights/${featuredResearch.insightId}.jpg`} alt={featuredResearch.title} />
            </Reveal>
          </div>
        </section>
      )}

      <section id="perspectives" className="py-24 bg-pale/60 border-y border-navy/8 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading eyebrow="The Journal" title="Three Institutional Perspectives" />
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {perspectives.map((p, i) => (
              <Reveal key={p.id} direction="up" delay={i * 0.08}>
                <Link to={p.to} className="block border border-navy/10 bg-paper p-8 h-full hover:border-gold/60 transition-colors duration-300">
                  <h3 className="font-display text-xl text-navy mb-1">{p.name}</h3>
                  <p className="eyebrow text-gold/80 mb-4">{p.strapline}</p>
                  <p className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty mb-6">{p.description}</p>
                  <span className="text-xs uppercase tracking-wide font-medium text-navy border-b border-navy/30">
                    Explore Publications &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="verticals-index" className="py-24 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading eyebrow="Twenty Fields" title="Twenty Fields. One Intellectual Architecture." description="Each Consulting Vertical opens into its own publication section, with the corresponding Vertical Director identified as the section leader." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verticals.map((v) => (
              <Link
                key={v.id}
                to={`/consulting-verticals#vertical-${v.id}`}
                className="flex items-center gap-4 p-4 border border-navy/10 hover:border-gold/60 bg-paper transition-colors duration-200"
              >
                <span className="font-mono text-xs text-gold shrink-0">{String(v.id).padStart(2, '0')}</span>
                <span className="text-sm text-navy leading-snug">{v.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="publication-types" className="py-24 bg-pale/60 border-y border-navy/8">
        <div className="container-institutional">
          <SectionHeading eyebrow="Editorial Taxonomy" title="Publication Types" description="A journal needs a clear editorial taxonomy." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {publicationTypes.map((t, i) => (
              <Reveal key={t.name} direction="up" delay={(i % 4) * 0.06}>
                <div className="border-t border-gold/40 pt-5">
                  <h3 className="font-display text-base text-navy mb-2">{t.name}</h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="editorial-board" className="py-24 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading
            eyebrow="Editorial Leadership"
            title="Editorial Board"
            description="The journal has its own Editorial Board, separate from the corporate Board of Directors in function, even where some individuals serve on both."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {editorialBoard.map((e, i) => (
              <Reveal key={e.role} direction="up" delay={(i % 2) * 0.08}>
                <div className="border border-navy/10 p-7 h-full">
                  <p className="eyebrow text-gold mb-2">{e.role}</p>
                  <p className="text-sm text-charcoal-soft leading-relaxed mb-4">{e.description}</p>
                  <p className="font-display text-navy">{e.name}</p>
                  <p className="text-xs text-charcoal-soft/70 mt-0.5">{e.position}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="archive" className="py-24 bg-pale/60 border-y border-navy/8 scroll-mt-24">
        <div className="container-institutional">
          <SectionHeading eyebrow="Journal Archive" title="Volumes & Issues" description="This is where the journal builds a permanent historical record, with every publication indexed." />
          <div className="mt-14 flex flex-col gap-10">
            {volumesArchive.map((vol) => (
              <div key={vol.volume}>
                <p className="font-display text-xl text-navy mb-5">{vol.volume}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {vol.issues.map((issue) => (
                    <div key={issue} className="border border-navy/10 bg-paper px-5 py-4 text-sm text-charcoal-soft">
                      {issue}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-sm text-charcoal-soft/70 italic">Volume 02 — 2027 · Volume 03 — 2028, with every future publication permanently indexed.</p>
          </div>
        </div>
      </section>

      <section id="about-journal" className="py-24">
        <div className="container-institutional max-w-3xl">
          <SectionHeading eyebrow="About the Journal" title="Knowledge in Service of Consequence." />
          <div className="mt-8 space-y-5 text-charcoal-soft leading-relaxed text-justify-pretty">
            <p>
              Arvington Insights exists to advance understanding of the forces shaping
              institutions, economies, organisations and societies. It brings together
              multidisciplinary knowledge around consequential questions, connecting research,
              evidence, professional expertise and institutional judgement.
            </p>
            <p className="font-display text-navy text-lg leading-snug">
              The journal is where Arvington's intellectual work becomes part of the
              institutional record.
            </p>
            <p className="italic">{journalIntro.closing}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
