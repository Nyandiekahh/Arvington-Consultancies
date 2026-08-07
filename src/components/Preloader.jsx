import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const WORDS = ['DATA', 'ANALYTICS', 'INTELLIGENCE', 'STRATEGY', 'DECISION', 'EXECUTION']

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (index >= WORDS.length) {
      const finalTimer = setTimeout(() => {
        setDone(true)
        setTimeout(onComplete, 650)
      }, 380)
      return () => clearTimeout(finalTimer)
    }
    const timer = setTimeout(() => setIndex((i) => i + 1), 220)
    return () => clearTimeout(timer)
  }, [index, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <div className="h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {index < WORDS.length ? (
                  <motion.span
                    key={WORDS[index]}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="eyebrow text-navy/60 text-sm tracking-[0.35em]"
                  >
                    {WORDS[index]}
                  </motion.span>
                ) : (
                  <motion.span
                    key="wordmark"
                    initial={{ opacity: 0, letterSpacing: '0.5em' }}
                    animate={{ opacity: 1, letterSpacing: '0.08em' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-3xl md:text-4xl text-navy"
                  >
                    ARVINGTON
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div className="w-56 h-px bg-navy/10 overflow-hidden">
              <motion.div
                className="h-full bg-gold"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(100, (index / WORDS.length) * 100)}%` }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
