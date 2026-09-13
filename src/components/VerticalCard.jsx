import { useState } from 'react'
import { motion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

export default function VerticalCard({ vertical, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      id={`vertical-${vertical.id}`}
      className="border border-navy/12 bg-paper hover:border-navy/30 transition-colors duration-300 scroll-mt-28"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full text-left p-6 md:p-8 flex items-start gap-5 group"
        aria-expanded={expanded}
      >
        <span className="font-mono text-xs text-gold mt-1.5 shrink-0 w-6">
          {String(vertical.id).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl text-navy leading-snug group-hover:text-navy/80 transition-colors">
            {vertical.name}
          </h3>
          <p className="text-sm text-charcoal-soft mt-2 eyebrow normal-case tracking-normal font-normal">
            {vertical.director}
          </p>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-navy/40 shrink-0 mt-1"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-8 pl-[3.75rem] md:pl-[4.25rem]">
          <p className="text-charcoal leading-relaxed text-justify-pretty mb-7">{vertical.summary}</p>

          {vertical.directorQuote && (
            <blockquote className="border-l-2 border-gold pl-5 mb-8 italic text-charcoal-soft leading-relaxed text-justify-pretty">
              &ldquo;{vertical.directorQuote}&rdquo;
            </blockquote>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="eyebrow text-navy/50 mb-3">Capabilities</p>
              <ul className="flex flex-col gap-2">
                {vertical.capabilities.map((cap) => (
                  <li key={cap} className="text-sm text-charcoal-soft flex gap-2">
                    <span className="text-gold mt-1.5 shrink-0">&middot;</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="eyebrow text-navy/50 mb-3">Industries</p>
                <div className="flex flex-wrap gap-2">
                  {vertical.industries.map((ind) => (
                    <span key={ind} className="text-xs px-3 py-1.5 bg-pale text-navy/80 border border-navy/5">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow text-navy/50 mb-3">Engagement Models</p>
                <div className="flex flex-wrap gap-2">
                  {vertical.engagementModels.map((model) => (
                    <span key={model} className="text-xs px-3 py-1.5 border border-gold/40 text-navy/80">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-navy/8 pt-7 flex flex-col sm:flex-row gap-6">
            {vertical.directorName ? (
              <>
                <ImagePlaceholder label="Director Photo" ratio="aspect-square" className="w-24 h-24 shrink-0" />
                <div className="flex-1">
                  <p className="font-display text-lg text-navy mb-0.5">
                    {vertical.directorName}
                    {vertical.directorCredentials ? `, ${vertical.directorCredentials}` : ''}
                  </p>
                  <p className="eyebrow text-charcoal-soft mb-1 tracking-normal normal-case font-normal">{vertical.director}</p>
                  {vertical.directorTagline && (
                    <p className="text-xs text-gold/90 eyebrow tracking-normal normal-case font-medium mb-3">
                      {vertical.directorTagline}
                    </p>
                  )}
                  {vertical.directorMantra && (
                    <p className="text-sm text-charcoal-soft italic mb-4">{vertical.directorMantra}</p>
                  )}
                  {vertical.directorBio && vertical.directorBio.length > 0 && (
                    <div className="flex flex-col gap-4">
                      {vertical.directorBio.map((para, i) => (
                        <p key={i} className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <ImagePlaceholder label="Vacant" ratio="aspect-square" className="w-24 h-24 shrink-0 opacity-60" />
                <div className="flex-1">
                  <p className="font-display text-lg text-navy/50 mb-0.5">To Be Appointed</p>
                  <p className="eyebrow text-charcoal-soft mb-3 tracking-normal normal-case font-normal">{vertical.director}</p>
                  <p className="text-sm text-charcoal-soft leading-relaxed text-justify-pretty">
                    This vertical is not yet led by a director. If your background fits this practice, we would welcome the conversation.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
