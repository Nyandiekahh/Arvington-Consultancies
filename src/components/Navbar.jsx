import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../data/navigation'
import SearchOverlay from './SearchOverlay'

const TOP_LINKS = [
  { label: 'Insights', to: '/insights' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

function SearchIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_5px_30px_rgba(0,0,0,0.16)]' : 'shadow-none'
      }`}
    >
      {/* ---------- Utility top bar (blue) ---------- */}
      <div
        className={`hidden md:block bg-gold text-white overflow-hidden transition-all duration-300 ${
          scrolled ? 'max-h-0' : 'max-h-8'
        }`}
      >
        <div className="container-institutional flex items-center justify-between h-8 text-[0.8125rem]">
          <div className="flex items-center gap-6">
            <a href="mailto:engage@arvington.com" className="font-bold hover:underline">
              engage@arvington.com
            </a>
            <span className="hidden lg:inline">
              <span className="font-bold">Office:</span> Nairobi &middot; Global Advisory Network
            </span>
          </div>
          <nav className="flex items-center gap-5" aria-label="Utility">
            {TOP_LINKS.map((l) => (
              <Link key={l.label} to={l.to} className="hover:underline underline-offset-4">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ---------- Main bar (white) ---------- */}
      <div
        className={`container-institutional flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-[4.25rem]' : 'h-20 lg:h-24'
        }`}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Arvington Ltd. home">
          <img
            src="/images/brand/arvington-mark.png"
            alt=""
            width={56}
            height={56}
            className={`object-contain transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-12 w-12 md:h-14 md:w-14'}`}
          />
          <span className="leading-tight">
            <span className="block font-display font-extrabold text-xl md:text-2xl tracking-wide text-ink">
              ARVINGTON<span className="text-gold">.</span>
            </span>
            <span className="hidden sm:block text-[0.68rem] font-semibold text-gold tracking-wide">
              Strengthening Institutions Through Superior Decisions
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-stretch gap-1 self-stretch" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative flex items-stretch"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => {
                setOpenMenu(null)
                setOpenSubmenu(null)
              }}
            >
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative px-3.5 inline-flex items-center gap-1 text-[0.9375rem] font-medium transition-colors duration-200 ${
                    isActive || openMenu === item.label ? 'text-gold' : 'text-ink hover:text-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {item.children && (
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-60">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {/* KEBS-style 4px active underline */}
                    <span
                      className={`absolute left-3.5 right-3.5 bottom-0 h-1 bg-gold transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
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
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute top-full left-0 w-72 z-10"
                  >
                    <div className="bg-white shadow-[0_5px_30px_rgba(0,0,0,0.2)] border-t-4 border-gold py-2">
                      {item.children.map((child) => (
                        <div
                          key={child.label}
                          className="relative"
                          onMouseEnter={() => child.children && setOpenSubmenu(child.label)}
                          onMouseLeave={() => child.children && setOpenSubmenu(null)}
                        >
                          <Link
                            to={child.to}
                            className="flex items-center justify-between gap-2 px-5 py-2.5 text-sm text-charcoal-soft hover:bg-pale hover:text-gold transition-colors duration-150"
                          >
                            {child.label}
                            {child.children && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="shrink-0">
                                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </Link>

                          <AnimatePresence>
                            {child.children && openSubmenu === child.label && (
                              <motion.div
                                initial={{ opacity: 0, x: 6 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 6 }}
                                transition={{ duration: 0.14, ease: 'easeOut' }}
                                className="absolute top-0 left-full w-72"
                              >
                                <div className="bg-white shadow-[0_5px_30px_rgba(0,0,0,0.2)] py-2">
                                  {child.children.map((grandchild) => (
                                    <Link
                                      key={grandchild.label}
                                      to={grandchild.to}
                                      className="block px-5 py-2.5 text-sm text-charcoal-soft hover:bg-pale hover:text-gold transition-colors duration-150"
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

        <div className="hidden xl:flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            title="Search (Ctrl+K)"
            className="p-2.5 text-gold hover:text-navy transition-colors duration-200"
          >
            <SearchIcon />
          </button>
          <Link to="/contact" className="btn-pill">
            Engage Arvington
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="xl:hidden flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search the site"
            className="p-2.5 text-gold"
          >
            <SearchIcon size={21} />
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-7 h-0.5 bg-ink transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`block w-7 h-0.5 bg-ink transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-ink transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ---------- Mobile menu ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden bg-white border-t-4 border-gold overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="container-institutional py-4 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-black/10 py-1">
                  <Link to={item.to} className="block py-3 text-base font-bold text-ink">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 flex flex-col pb-2">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          <Link to={child.to} className="block py-1.5 text-sm text-charcoal-soft">
                            {child.label}
                          </Link>
                          {child.children && (
                            <div className="pl-4 flex flex-col">
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
              <div className="flex flex-wrap gap-x-5 gap-y-1 pt-4 text-sm text-gold font-semibold">
                {TOP_LINKS.map((l) => (
                  <Link key={l.label} to={l.to}>{l.label}</Link>
                ))}
              </div>
              <Link to="/contact" className="btn-pill mt-5 justify-center">
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
