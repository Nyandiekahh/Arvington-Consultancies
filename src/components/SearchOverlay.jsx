import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { searchSite } from '../data/searchIndex'

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const results = useMemo(() => searchSite(query), [query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      // Wait for the mount/animation to start before focusing.
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const chosen = results[activeIndex]
        if (chosen) goTo(chosen.path)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, results, activeIndex])

  function goTo(path) {
    onClose()
    navigate(path)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-navy/70 backdrop-blur-sm flex items-start justify-center px-4 pt-24 md:pt-32"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl bg-paper border border-navy/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-6 py-5 border-b border-navy/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-navy/50 shrink-0">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search people, verticals, capabilities, insights…"
                className="flex-1 bg-transparent outline-none text-navy placeholder:text-charcoal-soft/60 text-base md:text-lg font-body"
                aria-label="Search Arvington"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="text-charcoal-soft hover:text-navy transition-colors duration-200 text-xs uppercase tracking-wide eyebrow"
              >
                Esc
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() === '' && (
                <p className="px-6 py-8 text-sm text-charcoal-soft">
                  Try “Board”, “Isaac Waluke”, “Analytics & AI”, or “climate finance”.
                </p>
              )}

              {query.trim() !== '' && results.length === 0 && (
                <p className="px-6 py-8 text-sm text-charcoal-soft">No results for “{query}”.</p>
              )}

              {results.length > 0 && (
                <ul>
                  {results.map((result, i) => (
                    <li key={`${result.path}-${result.title}`}>
                      <button
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => goTo(result.path)}
                        className={`w-full text-left px-6 py-3.5 flex items-baseline justify-between gap-4 transition-colors duration-100 ${
                          i === activeIndex ? 'bg-pale' : ''
                        }`}
                      >
                        <span className="min-w-0">
                          <span className="block text-navy font-display text-base truncate">{result.title}</span>
                          {result.subtitle && (
                            <span className="block text-xs text-charcoal-soft mt-0.5 truncate">{result.subtitle}</span>
                          )}
                        </span>
                        <span className="shrink-0 text-[0.65rem] uppercase tracking-wide text-gold eyebrow">
                          {result.category}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
