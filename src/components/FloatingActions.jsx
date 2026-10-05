import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/*
 * KEBS floats two round blue buttons: an accessibility menu (bottom-left)
 * and a chat/contact launcher (bottom-right). Same here — the accessibility
 * panel adjusts text size, contrast, font and motion, and remembers the choice.
 */

const STORAGE_KEY = 'arvington-a11y'
const DEFAULTS = { size: 0, contrast: false, dyslexia: false, links: false, motion: false }

function load() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS
  } catch {
    return DEFAULTS
  }
}

function apply(state) {
  const root = document.documentElement
  root.classList.toggle('a11y-text-lg', state.size === 1)
  root.classList.toggle('a11y-text-xl', state.size === 2)
  root.classList.toggle('a11y-contrast', state.contrast)
  root.classList.toggle('a11y-dyslexia', state.dyslexia)
  root.classList.toggle('a11y-links', state.links)
  root.classList.toggle('a11y-nomotion', state.motion)
}

function Toggle({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-bold transition-colors duration-150 ${
        active ? 'border-gold bg-gold text-white' : 'border-black/15 bg-white text-ink hover:border-gold'
      }`}
    >
      {label}
      <span aria-hidden="true" className="text-xs">{active ? 'ON' : 'OFF'}</span>
    </button>
  )
}

export default function FloatingActions() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState(load)
  const location = useLocation()

  useEffect(() => {
    apply(state)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage unavailable — settings just won't persist */
    }
  }, [state])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const set = (patch) => setState((s) => ({ ...s, ...patch }))

  return (
    <>
      {/* Accessibility (bottom-left) */}
      <div className="fixed bottom-5 left-5 z-[60]">
        {open && (
          <div
            role="dialog"
            aria-label="Accessibility options"
            className="mb-3 w-72 rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-extrabold text-ink">Accessibility</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close accessibility options"
                className="text-xl leading-none text-charcoal-soft hover:text-ink"
              >
                &times;
              </button>
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-charcoal-soft">Text size</p>
            <div className="mb-4 grid grid-cols-3 gap-2">
              {['A', 'A+', 'A++'].map((l, i) => (
                <button
                  key={l}
                  onClick={() => set({ size: i })}
                  aria-pressed={state.size === i}
                  className={`rounded-xl border py-2.5 text-sm font-bold transition-colors duration-150 ${
                    state.size === i ? 'border-gold bg-gold text-white' : 'border-black/15 text-ink hover:border-gold'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <Toggle label="High contrast" active={state.contrast} onClick={() => set({ contrast: !state.contrast })} />
              <Toggle label="Readable font" active={state.dyslexia} onClick={() => set({ dyslexia: !state.dyslexia })} />
              <Toggle label="Underline links" active={state.links} onClick={() => set({ links: !state.links })} />
              <Toggle label="Pause motion" active={state.motion} onClick={() => set({ motion: !state.motion })} />
            </div>

            <button
              onClick={() => setState(DEFAULTS)}
              className="mt-4 w-full rounded-xl bg-pale py-2.5 text-sm font-bold text-gold hover:bg-pale-dim"
            >
              Reset all
            </button>
          </div>
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Accessibility options"
          aria-expanded={open}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2F6BFF] text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-105"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="4.5" r="2" />
            <path d="M5 8.5h14v2h-5.2v3.2l2.1 6.3-1.9.6L12 14.6l-2 6-1.9-.6 2.1-6.3v-3.2H5z" />
          </svg>
        </button>
      </div>

      {/* Contact launcher (bottom-right) */}
      {location.pathname !== '/contact' && (
        <Link
          to="/contact"
          aria-label="Contact Arvington"
          className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-[0_12px_36px_rgba(16,24,40,0.28)] transition-transform duration-200 hover:scale-105"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.3A8.5 8.5 0 1 1 21 11.5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </>
  )
}
