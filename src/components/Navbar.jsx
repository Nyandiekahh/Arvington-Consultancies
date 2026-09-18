import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../data/navigation'
import SearchOverlay from './SearchOverlay'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        const tag = document.activeElement?.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA') return
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(11,31,58,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="container-institutional flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/images/brand/arvington-mark.png"
            alt="Arvington"
            width={56}
            height={56}
            className="h-11 w-11 md:h-14 md:w-14 object-contain"
          />
          <span className="font-display text-xl md:text-2xl tracking-wide text-navy">
            ARVINGTON<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[0.82rem] font-medium tracking-wide uppercase text-charcoal hover:text-navy transition-colors duration-200 inline-flex items-center gap-1 ${
                    isActive ? 'text-navy' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-[1.5px] bg-gold origin-left transition-transform duration-300 ${
                        isActive || openMenu === item.label ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-0 pt-3 w-64"
                  >
                    <div className="bg-paper border border-navy/10 shadow-xl py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block px-5 py-2.5 text-sm text-charcoal hover:bg-pale hover:text-navy transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            title="Search (Ctrl+K)"
            className="p-2.5 text-navy/70 hover:text-navy border border-transparent hover:border-navy/15 transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-navy px-6 py-2.5 text-[0.78rem] font-medium uppercase tracking-wide text-navy hover:bg-navy hover:text-paper transition-colors duration-300"
          >
            Engage Arvington
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            className="p-2.5 text-navy/70 hover:text-navy transition-colors duration-200"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-7 h-px bg-navy transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-7 h-px bg-navy transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-px bg-navy transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-paper border-t border-navy/10 overflow-hidden"
          >
            <div className="container-institutional py-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-navy/5 py-2">
                  <Link to={item.to} className="block py-2 text-base font-medium text-navy">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.to} className="py-1.5 text-sm text-charcoal-soft">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-navy text-paper px-6 py-3 text-sm font-medium uppercase tracking-wide"
              >
                Engage Arvington &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
