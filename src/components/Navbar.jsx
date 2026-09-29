import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../data/navigation'
import SearchOverlay from './SearchOverlay'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  // Transparent-over-image treatment only applies on the homepage hero,
  // and only until the user scrolls (or opens the mobile menu/search,
  // where we always want a solid, legible bar).
  const transparent = isHome && !scrolled && !mobileOpen && !searchOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setOpenSubmenu(null)
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
        transparent ? 'bg-transparent' : 'bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(11,31,58,0.08)]'
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
          <span className={`font-display text-xl md:text-2xl tracking-wide transition-colors duration-300 ${
            transparent ? 'text-paper' : 'text-navy'
          }`}>
            ARVINGTON<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => {
                setOpenMenu(null)
                setOpenSubmenu(null)
              }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[0.82rem] font-medium tracking-wide uppercase transition-colors duration-200 inline-flex items-center gap-1 ${
                    transparent
                      ? `text-paper/85 hover:text-paper ${isActive ? 'text-paper' : ''}`
                      : `text-charcoal hover:text-navy ${isActive ? 'text-navy' : ''}`
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
                        <div
                          key={child.label}
                          className="relative"
                          onMouseEnter={() => child.children && setOpenSubmenu(child.label)}
                          onMouseLeave={() => child.children && setOpenSubmenu(null)}
                        >
                          <Link
                            to={child.to}
                            className="flex items-center justify-between gap-2 px-5 py-2.5 text-sm text-charcoal hover:bg-pale hover:text-navy transition-colors duration-150"
                          >
                            {child.label}
                            {child.children && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="shrink-0 text-charcoal-soft">
                                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </Link>

                          {/* Flyout: opens to the right of the dropdown on hover */}
                          <AnimatePresence>
                            {child.children && openSubmenu === child.label && (
                              <motion.div
                                initial={{ opacity: 0, x: 6 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 6 }}
                                transition={{ duration: 0.16, ease: 'easeOut' }}
                                className="absolute top-0 left-full pl-2 w-64"
                              >
                                <div className="bg-paper border border-navy/10 shadow-xl py-2">
                                  {child.children.map((grandchild) => (
                                    <Link
                                      key={grandchild.label}
                                      to={grandchild.to}
                                      className="block px-5 py-2.5 text-sm text-charcoal hover:bg-pale hover:text-navy transition-colors duration-150"
                                    >
                                      {grandchild.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
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
            className={`p-2.5 border border-transparent transition-colors duration-200 ${
              transparent ? 'text-paper/80 hover:text-paper hover:border-paper/25' : 'text-navy/70 hover:text-navy hover:border-navy/15'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 border px-6 py-2.5 text-[0.78rem] font-medium uppercase tracking-wide transition-colors duration-300 ${
              transparent
                ? 'border-paper text-paper hover:bg-paper hover:text-navy'
                : 'border-navy text-navy hover:bg-navy hover:text-paper'
            }`}
          >
            Engage Arvington
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            className={`p-2.5 transition-colors duration-200 ${
              transparent ? 'text-paper/80 hover:text-paper' : 'text-navy/70 hover:text-navy'
            }`}
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
            <span className={`block w-7 h-px transition-transform duration-300 ${transparent ? 'bg-paper' : 'bg-navy'} ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-7 h-px transition-opacity duration-300 ${transparent ? 'bg-paper' : 'bg-navy'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-px transition-transform duration-300 ${transparent ? 'bg-paper' : 'bg-navy'} ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
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
                        <div key={child.label}>
                          <Link to={child.to} className="block py-1.5 text-sm text-charcoal-soft">
                            {child.label}
                          </Link>
                          {child.children && (
                            <div className="pl-4 flex flex-col gap-1">
                              {child.children.map((grandchild) => (
                                <Link key={grandchild.label} to={grandchild.to} className="block py-1.5 text-sm text-charcoal-soft/80">
                                  {grandchild.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
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