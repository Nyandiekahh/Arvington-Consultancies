import { motion } from 'framer-motion'
import NodeNetwork from './NodeNetwork'

export default function PageHero({ eyebrow, title, description, tall = false }) {
  return (
    <section className={`relative bg-paper overflow-hidden ${tall ? 'pt-40 pb-28' : 'pt-36 pb-20'}`}>
      <NodeNetwork
        className="absolute inset-0 w-full h-full opacity-70"
        density={0.00006}
        maxDistance={130}
        interactive={false}
      />
      <div className="container-institutional relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="eyebrow text-gold">{eyebrow}</span>
            </div>
          )}
          <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.1] w-full text-navy">
            {title}
          </h1>
          {description && (
            <p className="mt-7 text-lg md:text-xl text-charcoal-soft leading-relaxed text-justify-pretty w-full">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
