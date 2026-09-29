import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useReducedMotion from '../hooks/useReducedMotion'

const DEFAULT_INTERVAL = 6500

export default function HeroSlideshow({
  images,
  interval = DEFAULT_INTERVAL,
  onSlideChange,
}) {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const goTo = useCallback(
    (i) => {
      if (!images || images.length === 0) return

      const nextIndex =
        ((i % images.length) + images.length) % images.length

      setIndex(nextIndex)
    },
    [images]
  )

  useEffect(() => {
    if (!images || images.length === 0) return

    onSlideChange?.(index)
  }, [index, images, onSlideChange])

  useEffect(() => {
    if (
      prefersReducedMotion ||
      !images ||
      images.length <= 1
    ) {
      return
    }

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, interval)

    return () => clearInterval(id)
  }, [images, interval, prefersReducedMotion])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
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
          style={{
            backgroundImage: `url('${images[index].src}')`,
          }}
          role="img"
          aria-label={images[index].alt || ''}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-paper/60 hover:text-paper transition-colors duration-200"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-paper/60 hover:text-paper transition-colors duration-200"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-paper'
                    : 'w-1.5 bg-paper/40 hover:bg-paper/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}