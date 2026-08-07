import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { pipelineStages } from '../data/capabilities'

gsap.registerPlugin(ScrollTrigger)

export default function PipelineDiagram({ orientation = 'horizontal' }) {
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const nodesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(nodesRef.current, { opacity: 0.25, scale: 0.85 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      })

      tl.to(lineRef.current, { scaleX: 1, ease: 'none', duration: 1 }, 0)

      nodesRef.current.forEach((node, i) => {
        tl.to(
          node,
          { opacity: 1, scale: 1, ease: 'power2.out', duration: 0.4 },
          i / (pipelineStages.length + 1)
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full py-10">
      <div className="relative flex items-start justify-between gap-2 md:gap-4 overflow-x-auto md:overflow-visible pb-6 md:pb-0">
        <div className="absolute top-[22px] left-0 right-0 h-px bg-navy/10" />
        <div ref={lineRef} className="absolute top-[22px] left-0 right-0 h-px bg-gold" />

        {pipelineStages.map((stage, i) => (
          <div
            key={stage.id}
            ref={(el) => (nodesRef.current[i] = el)}
            className="relative flex flex-col items-center min-w-[92px] md:min-w-0 flex-1 text-center"
          >
            <div className="w-11 h-11 rounded-full border-2 border-navy bg-paper flex items-center justify-center relative z-10 mb-4">
              <span className="w-2 h-2 rounded-full bg-gold" />
            </div>
            <span className="font-display text-base md:text-lg text-navy mb-1">{stage.label}</span>
            <span className="eyebrow text-charcoal-soft text-[0.62rem] tracking-widest">{stage.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
