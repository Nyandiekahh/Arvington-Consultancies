import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { personPhoto } from '../utils/media'
import InsightCard from '../components/InsightCard'
import { insights } from '../data/insights'

export default function InsightArticle() {
  const { id } = useParams()
  const insight = insights.find((i) => i.id === id)
  const related = insights.filter((i) => i.id !== id).slice(0, 3)

  if (!insight) {
    return (
      <div className="container-institutional pt-40 pb-32 text-center">
        <h1 className="font-display text-3xl text-navy mb-4">Article Not Found</h1>
        <p className="text-charcoal-soft mb-8">This piece may have been moved or is no longer published.</p>
        <Link to="/insights" className="text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold">
          Return to Insights
        </Link>
      </div>
    )
  }

  return (
    <article>
      <header className="bg-pale/60 border-b border-navy/8 pt-40 pb-20">
        <div className="container-institutional max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="eyebrow text-gold">Arvington Insights &middot; The Journal of Institutional Intelligence</span>
            </div>
            {insight.publicationType && (
              <p className="text-xs uppercase tracking-widest text-charcoal-soft/60 mb-4">{insight.publicationType}</p>
            )}
            <h1 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl leading-[1.12] text-navy">
              {insight.title}
            </h1>
            <p className="mt-6 text-lg text-charcoal-soft leading-relaxed text-justify-pretty">{insight.dek}</p>

            {insight.author && (
              <div className="mt-8 flex items-center gap-4">
                <ImagePlaceholder label="Author" ratio="aspect-square" className="w-14 h-14 shrink-0" src={personPhoto(insight.author)} alt={insight.author} />
                <div>
                  <p className="text-navy font-medium">{insight.author}</p>
                  <p className="text-xs text-charcoal-soft/70">{insight.authorRole}</p>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs eyebrow text-charcoal-soft/70">
              <span>{insight.category}</span>
              <span className="w-1 h-1 rounded-full bg-navy/20" />
              <span>{insight.date}</span>
              <span className="w-1 h-1 rounded-full bg-navy/20" />
              <span>{insight.readTime}</span>
              {insight.volume && (
                <>
                  <span className="w-1 h-1 rounded-full bg-navy/20" />
                  <span>Vol. {insight.volume}, Issue {insight.issue}</span>
                </>
              )}
              {insight.vertical && (
                <>
                  <span className="w-1 h-1 rounded-full bg-navy/20" />
                  <span>{insight.vertical}</span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      <div className="container-institutional max-w-3xl py-20">
        <ImagePlaceholder label={insight.category} ratio="aspect-[16/9]" className="mb-14" src={`/images/insights/${insight.id}.jpg`} alt={insight.title} />

        <div className="prose-arvington">
          {insight.body.map((para, i) => (
            <p
              key={i}
              className={`text-charcoal leading-[1.85] text-justify-pretty mb-7 text-[1.05rem] ${
                i === 0 ? 'first-letter:font-display first-letter:text-6xl first-letter:text-navy first-letter:float-left first-letter:pr-3 first-letter:leading-[0.85] first-letter:mt-1' : ''
              }`}
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-navy/10 flex items-center justify-between flex-wrap gap-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-navy border-b border-navy/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
          >
            &larr; All Insights
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy text-paper px-7 py-3.5 text-sm font-medium uppercase tracking-wide hover:bg-navy-light transition-colors duration-300"
          >
            Discuss This With Arvington
          </Link>
        </div>
      </div>

      <section className="py-24 bg-pale/60 border-t border-navy/8">
        <div className="container-institutional">
          <p className="eyebrow text-gold mb-10">Further Reading</p>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {related.map((item, i) => (
              <InsightCard key={item.id} insight={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
