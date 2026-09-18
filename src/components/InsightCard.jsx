import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

export default function InsightCard({ insight, index = 0, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${featured ? 'md:col-span-2' : ''}`}
    >
      <Link to={`/insights/${insight.id}`} className="block">
        <div className="overflow-hidden">
          <div className="transition-transform duration-700 group-hover:scale-[1.03]">
            <ImagePlaceholder label={insight.category} ratio={featured ? 'aspect-[16/8]' : 'aspect-[16/10]'} src={`/images/insights/${insight.id}.jpg`} alt={insight.title} />
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="eyebrow text-gold">{insight.category}</span>
            <span className="w-1 h-1 rounded-full bg-navy/20" />
            <span className="text-xs text-charcoal-soft font-mono">{insight.readTime}</span>
          </div>
          <h3
            className={`font-display text-navy leading-snug group-hover:underline decoration-gold decoration-1 underline-offset-4 transition-all ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}
          >
            {insight.title}
          </h3>
          <p className="mt-3 text-charcoal-soft leading-relaxed text-justify-pretty line-clamp-3">
            {insight.dek}
          </p>
          <p className="mt-4 text-xs eyebrow text-charcoal-soft/70">{insight.date}</p>
        </div>
      </Link>
    </motion.article>
  )
}
