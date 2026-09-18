import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      let attempts = 0
      let cancelled = false

      // The target element (a card that just auto-expanded, or content on
      // a page we just navigated to) may not exist in the DOM yet on the
      // very first frame, so retry briefly instead of giving up after one
      // lookup.
      const tryScroll = () => {
        if (cancelled) return
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        attempts += 1
        if (attempts < 20) {
          setTimeout(tryScroll, 60)
        }
      }

      const initialDelay = setTimeout(tryScroll, 80)
      return () => {
        cancelled = true
        clearTimeout(initialDelay)
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}
