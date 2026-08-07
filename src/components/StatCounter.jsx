import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label, duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const from = 0
    const to = value

    function tick(timestamp) {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col"
    >
      <span className="font-display text-4xl md:text-5xl text-navy tabular-nums">
        {display}
        {suffix}
      </span>
      <span className="eyebrow text-charcoal-soft mt-3">{label}</span>
    </motion.div>
  )
}
