import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useReducedMotion from '../hooks/useReducedMotion'

const DEFAULT_INTERVAL = 6500

/*
 * Full-bleed background slider. Controls follow the KEBS homepage:
 * numbered round pagination (1 2 3 …) plus previous / next arrows.
 */
export default function HeroSlideshow({
  images,
  interval = DEFAULT_INTERVAL,
  onSlideChange,
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const rootRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const goTo = useCallback(
    (i) => {
      if (!images || images.length === 0) return
      const nextIndex = ((i % images.length) + images.length) % images.length
      setIndex(nextIndex)
    },
    [images]
  )

  useEffect(() => {
    if (!images || images.length === 0) return
    onSlideChange?.(index)
  }, [index, images, onSlideChange])

  useEffect(() => {
    if (prefersReducedMotion || paused || !images || images.length <= 1) return
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images, interval, prefersReducedMotion, paused])

  // Pause on hover/focus and support touch swipe. Listeners go on the hero
  // section (this component's parent) because the headline and buttons sit on
  // top of the slideshow layer and would otherwise swallow the events.
  const count = images ? images.length : 0
  useEffect(() => {
    const host = rootRef.current?.parentElement
    if (!host || count <= 1) return
    let startX = null
    let startY = null
    const pause = () => setPaused(true)
    const resume = () => setPaused(false)
    const onStart = (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      setPaused(true)
    }
    const onEnd = (e) => {
      if (startX !== null) {
        const dx = e.changedTouches[0].clientX - startX
        const dy = e.changedTouches[0].clientY - startY
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          setIndex((cur) => (cur + (dx < 0 ? 1 : -1) + count) % count)
        }
      }
      startX = null
      startY = null
      setPaused(false)
    }
    host.addEventListener('mouseenter', pause)
    host.addEventListener('mouseleave', resume)
    host.addEventListener('focusin', pause)
    host.addEventListener('focusout', resume)
    host.addEventListener('touchstart', onStart, { passive: true })
    host.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      host.removeEventListener('mouseenter', pause)
      host.removeEventListener('mouseleave', resume)
      host.removeEventListener('focusin', pause)
      host.removeEventListener('focusout', resume)
      host.removeEventListener('touchstart', onStart)
      host.removeEventListener('touchend', onEnd)
    }
  }, [count])

  if (!images || images.length === 0) return null

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1.3,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[index].src}')` }}
          role="img"
          aria-label={images[index].alt || ''}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white hover:text-gold transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white hover:text-gold transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Numbered pagination */}
          <div className="absolute bottom-6 right-6 md:right-12 z-10 flex items-center gap-2" role="tablist" aria-label="Slides">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => goTo(i)}
                role="tab"
                aria-label={`Show slide ${i + 1}`}
                aria-selected={i === index}
                className={`h-9 w-9 rounded-full text-sm font-bold transition-colors duration-200 ${
                  i === index
                    ? 'bg-gold text-white'
                    : 'bg-white/85 text-ink hover:bg-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
