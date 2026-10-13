import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import useSEO from '../hooks/useSEO'
import { faqGroups } from '../data/faqs'

function Item({ item, open, onToggle, id }) {
  return (
    <div className="border-b border-black/10 last:border-b-0">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className={`text-lg font-bold leading-snug transition-colors duration-200 ${open ? 'text-gold' : 'text-ink'}`}>
            {item.q}
          </span>
          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-bold leading-none transition-colors duration-200 ${
              open ? 'bg-gold text-white' : 'bg-pale text-gold'
            }`}
          >
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="leading-relaxed text-charcoal-soft">{item.a}</p>
              {item.link && (
                <Link to={item.link.to} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline underline-offset-4">
                  {item.link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faqs() {
  useSEO({
    title: 'FAQs',
    description:
      'Answers to common questions about working with Arvington Ltd., our Consulting Verticals, how to request consultancy or a proposal, and how we respond.',
    path: '/faqs',
  })

  const [openId, setOpenId] = useState('g0-i0')
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const groups = faqGroups
    .map((g, gi) => ({
      ...g,
      gi,
      items: g.items
        .map((item, ii) => ({ item, ii }))
        .filter(({ item }) => !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)),
    }))
    .filter((g) => g.items.length)

  return (
    <div>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions."
        description="Answers to the questions we are asked most often about working with Arvington."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-institutional grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <label htmlFor="faq-search" className="text-sm font-bold text-ink">
                Search the FAQs
              </label>
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a keyword…"
                className="mt-2 w-full rounded-full border border-black/15 bg-white px-5 py-3 text-ink outline-none transition-colors focus:border-gold"
              />

              <nav className="mt-8 flex flex-col gap-2" aria-label="FAQ groups">
                {faqGroups.map((g, gi) => (
                  <a key={g.title} href={`#faq-group-${gi}`} className="text-[0.95rem] font-bold text-charcoal-soft hover:text-gold">
                    {g.title}
                  </a>
                ))}
              </nav>

              <div className="mt-10 rounded-2xl rounded-br-[56px] bg-gold p-7 text-white">
                <h2 className="text-xl font-extrabold text-white">Still have a question?</h2>
                <p className="mt-2 text-white/85">Speak with our team and we will point you to the right expertise.</p>
                <Link to="/contact" className="btn-pill btn-pill--light mt-5">
                  Contact Us <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            {groups.length === 0 && (
              <p className="rounded-2xl border border-dashed border-black/20 px-6 py-10 text-center text-charcoal-soft">
                No questions match &ldquo;{query}&rdquo;. Try a different keyword or contact us directly.
              </p>
            )}
            {groups.map((g) => (
              <Reveal key={g.title} className="mb-12 scroll-mt-32">
                <div id={`faq-group-${g.gi}`} className="scroll-mt-32">
                  <h2 className="mb-2 text-2xl font-extrabold text-ink">{g.title}</h2>
                  <span className="mb-4 block h-1 w-12 rounded-full bg-gold" />
                  <div className="rounded-2xl border border-black/10 bg-white px-6 shadow-[0_2px_14px_rgba(0,0,0,0.04)]">
                    {g.items.map(({ item, ii }) => {
                      const id = `g${g.gi}-i${ii}`
                      return (
                        <Item
                          key={id}
                          id={id}
                          item={item}
                          open={openId === id || Boolean(q)}
                          onToggle={() => setOpenId(openId === id ? null : id)}
                        />
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
