import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/*
 * Inner-page title banner. Follows the KEBS inner pages: a solid blue band
 * with a large rounded bottom-right corner, breadcrumb and bold white title.
 */
export default function PageHero({ eyebrow, title, description, tall = false }) {
  return (
    <section
      className={`relative overflow-hidden bg-navy corner-br ${
        tall ? 'pt-40 pb-24 md:pb-28' : 'pt-36 pb-16 md:pb-20'
      }`}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/5" />

      <div className="container-institutional relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-white/75">
            <Link to="/" className="hover:text-white hover:underline underline-offset-4">
              Home
            </Link>
            {eyebrow && (
              <>
                <span aria-hidden="true">/</span>
                <span className="font-bold text-sky">{eyebrow}</span>
              </>
            )}
          </nav>

          <h1 className="w-full text-3xl font-extrabold leading-[1.12] text-white md:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <span className="mt-6 block h-1 w-16 rounded-full bg-sky" />
          {description && (
            <p className="mt-6 w-full max-w-4xl text-lg leading-relaxed text-white/85 md:text-xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
