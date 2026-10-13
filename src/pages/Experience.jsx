import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import useSEO from '../hooks/useSEO'
import { personPhoto, slugify } from '../utils/media'
import { cSuite } from '../data/leadership'
import { verticals } from '../data/verticals'
import {
  strategicAssignments,
  selectedProjects,
  advisoryOutcomes,
  advisoryEngagements,
  institutionsAdvised,
  advisoryDelivery,
  engagementPhotographs,
  assignmentHighlights,
} from '../data/experience'

/* ------------------------------------------------------------------ */
/* Linking helpers: entries link to a consultant profile / vertical.   */
/* ------------------------------------------------------------------ */
const verticalById = Object.fromEntries(verticals.map((v) => [String(v.id), v]))

function consultantTarget(name) {
  if (!name) return null
  const exec = cSuite.find((e) => e.name === name)
  if (exec) return `/leadership#csuite-${slugify(exec.name)}`
  const dir = verticals.find((v) => v.directorName === name)
  if (dir) return `/consulting-verticals#vertical-${dir.id}`
  return null
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EmptyNote({ children }) {
  return (
    <div className="rounded-2xl border border-dashed border-black/20 bg-white px-6 py-10 text-center">
      <p className="mx-auto max-w-xl text-charcoal-soft leading-relaxed">{children}</p>
    </div>
  )
}

/* One generic card: a title + labelled fields + links to consultant / vertical */
function EntryCard({ item, titleKey, fields }) {
  const vertical = item.verticalId ? verticalById[String(item.verticalId)] : null
  const consultantPath = consultantTarget(item.consultant)
  return (
    <article className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
      <h3 className="text-xl font-extrabold leading-snug text-ink">{item[titleKey]}</h3>
      <dl className="mt-4 flex flex-col gap-3 text-[0.95rem]">
        {fields
          .filter((f) => item[f.key])
          .map((f) => (
            <div key={f.key}>
              <dt className="text-xs font-bold uppercase tracking-wide text-gold">{f.label}</dt>
              <dd className="mt-0.5 text-charcoal-soft leading-relaxed">{item[f.key]}</dd>
            </div>
          ))}
      </dl>
      {(item.consultant || vertical) && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {item.consultant &&
            (consultantPath ? (
              <Link to={consultantPath} className="rounded-full bg-pale px-3.5 py-1.5 text-xs font-bold text-gold hover:bg-pale-dim">
                {item.consultant}
              </Link>
            ) : (
              <span className="rounded-full bg-pale px-3.5 py-1.5 text-xs font-bold text-gold">{item.consultant}</span>
            ))}
          {vertical && (
            <Link
              to={`/consulting-verticals#vertical-${vertical.id}`}
              className="rounded-full bg-pale px-3.5 py-1.5 text-xs font-bold text-charcoal-soft hover:bg-pale-dim"
            >
              {vertical.name}
            </Link>
          )}
        </div>
      )}
    </article>
  )
}

function CardGrid({ items, titleKey, fields, empty }) {
  if (!items.length) return <EmptyNote>{empty}</EmptyNote>
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={`${item[titleKey]}-${i}`} delay={(i % 3) * 0.06} className="h-full">
          <EntryCard item={item} titleKey={titleKey} fields={fields} />
        </Reveal>
      ))}
    </div>
  )
}

function SectionTitle({ id, eyebrow, title, text, light = false }) {
  return (
    <Reveal className="mb-10 max-w-3xl">
      <span className={`text-xs font-bold uppercase tracking-wide ${light ? 'text-sky' : 'text-gold'}`}>{eyebrow}</span>
      <h2 id={id} className={`mt-2 text-3xl font-extrabold md:text-[2.2rem] ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      <span className={`mt-4 block h-1 w-16 rounded-full ${light ? 'bg-sky' : 'bg-gold'}`} />
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/80' : 'text-charcoal-soft'}`}>{text}</p>}
    </Reveal>
  )
}

function Tabs({ tabs, active, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          onClick={() => onChange(t.id)}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 ${
            active === t.id ? 'bg-gold text-white' : 'bg-white text-ink ring-1 ring-black/15 hover:ring-gold'
          }`}
        >
          {t.label}
          <span className={`ml-2 text-xs ${active === t.id ? 'text-white/80' : 'text-charcoal-soft'}`}>{t.count}</span>
        </button>
      ))}
    </div>
  )
}

/* ---- Consultant profile (generated from existing leadership data) ---- */
function buildConsultants() {
  const people = []
  cSuite.forEach((e) =>
    people.push({
      name: e.name,
      credentials: e.credentials,
      role: e.title,
      profile: e.tagline,
      verticalName: null,
      to: `/leadership#csuite-${slugify(e.name)}`,
    }),
  )
  verticals
    .filter((v) => v.directorName)
    .forEach((v) =>
      people.push({
        name: v.directorName,
        credentials: v.directorCredentials,
        role: v.director,
        profile: v.directorTagline,
        verticalName: v.name,
        to: `/consulting-verticals#vertical-${v.id}`,
      }),
    )
  return people
}
const consultants = buildConsultants()

export default function Experience() {
  useSEO({
    title: 'Selected Consulting Experience',
    description:
      'Featured consulting experience, consultant profiles and advisory delivery from Arvington Ltd.',
    path: '/experience',
  })

  const featuredTabs = [
    { id: 'assignments', label: 'Strategic Advisory Assignments', count: strategicAssignments.length },
    { id: 'projects', label: 'Selected Consulting Projects', count: selectedProjects.length },
    { id: 'outcomes', label: 'Advisory Outcomes & Impact', count: advisoryOutcomes.length },
  ]
  const consultantTabs = [
    { id: 'profiles', label: 'Consultant Profiles', count: consultants.length },
    { id: 'engagements', label: 'Selected Advisory Engagements', count: advisoryEngagements.length },
    { id: 'institutions', label: 'Institutions Advised', count: institutionsAdvised.length },
  ]
  const galleryTabs = [
    { id: 'delivery', label: 'Advisory Delivery', count: advisoryDelivery.length },
    { id: 'photographs', label: 'Engagement Photographs', count: engagementPhotographs.length },
    { id: 'highlights', label: 'Assignment Highlights', count: assignmentHighlights.length },
  ]

  const [featured, setFeatured] = useState('assignments')
  const [consultantTab, setConsultantTab] = useState('profiles')
  const [gallery, setGallery] = useState('delivery')

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Selected Consulting Experience"
        title="Advisory Work, the People Behind It, and How It Was Delivered."
        description="A record of featured consulting experience, the consultants who led it and the delivery of each engagement, linked to the Consulting Vertical responsible."
        tall
      />

      {/* quick jump bar */}
      <div className="sticky top-[4.25rem] z-30 border-b border-black/10 bg-white/95 backdrop-blur-sm">
        <nav className="container-institutional flex gap-6 overflow-x-auto py-3 text-sm font-bold" aria-label="On this page">
          {[
            ['#featured', 'Featured Consulting Experience'],
            ['#consultants', 'Consultant Experience'],
            ['#gallery', 'Consulting Delivery Gallery'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="whitespace-nowrap text-ink hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* 3.2.1 FEATURED */}
      <section id="featured" className="scroll-mt-32 bg-white py-16 md:py-24">
        <div className="container-institutional">
          <SectionTitle
            eyebrow="3.2.1"
            title="Featured Consulting Experience"
            text="Strategic assignments, selected projects and the outcomes they produced."
          />
          <Tabs tabs={featuredTabs} active={featured} onChange={setFeatured} />
          {featured === 'assignments' && (
            <CardGrid
              items={strategicAssignments}
              titleKey="title"
              fields={[
                { key: 'client', label: 'Client / Institution' },
                { key: 'mandate', label: 'Advisory Mandate' },
                { key: 'consultantRole', label: 'Consultant Role' },
                { key: 'period', label: 'Year / Period' },
              ]}
              empty="Strategic advisory assignments approved for publication will appear here."
            />
          )}
          {featured === 'projects' && (
            <CardGrid
              items={selectedProjects}
              titleKey="title"
              fields={[
                { key: 'client', label: 'Client / Institution' },
                { key: 'scope', label: 'Advisory Scope' },
                { key: 'deliverable', label: 'Key Deliverable' },
              ]}
              empty="Selected consulting projects approved for publication will appear here."
            />
          )}
          {featured === 'outcomes' && (
            <CardGrid
              items={advisoryOutcomes}
              titleKey="outcome"
              fields={[
                { key: 'impact', label: 'Business / Institutional Impact' },
                { key: 'keyResult', label: 'Key Result' },
                { key: 'contribution', label: 'Consultant Contribution' },
              ]}
              empty="Advisory outcomes and impact approved for publication will appear here."
            />
          )}
        </div>
      </section>

      {/* 3.2.2 CONSULTANTS */}
      <section id="consultants" className="scroll-mt-32 bg-pale py-16 md:py-24">
        <div className="container-institutional">
          <SectionTitle
            eyebrow="3.2.2"
            title="Consultant Experience"
            text="The executives and Consulting Directors who lead Arvington's advisory work."
          />
          <Tabs tabs={consultantTabs} active={consultantTab} onChange={setConsultantTab} />

          {consultantTab === 'profiles' && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {consultants.map((p, i) => (
                <Reveal key={p.name} delay={(i % 4) * 0.05} className="h-full">
                  <Link
                    to={p.to}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(1,102,177,0.18)]"
                  >
                    <ImagePlaceholder label="Photo" ratio="aspect-square" src={personPhoto(p.name)} alt={p.name} />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-extrabold leading-snug text-ink">
                        {p.name}
                        {p.credentials ? `, ${p.credentials}` : ''}
                      </h3>
                      <p className="mt-1 text-sm text-charcoal-soft">{p.role}</p>
                      {p.verticalName && (
                        <p className="mt-2 text-xs font-bold uppercase tracking-wide text-gold">{p.verticalName}</p>
                      )}
                      <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-gold">
                        View profile <Arrow />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          {consultantTab === 'engagements' && (
            <CardGrid
              items={advisoryEngagements}
              titleKey="assignment"
              fields={[
                { key: 'client', label: 'Client / Institution' },
                { key: 'role', label: 'Advisory Role' },
                { key: 'period', label: 'Year / Period' },
                { key: 'contribution', label: 'Key Contribution' },
              ]}
              empty="Selected advisory engagements for each consultant will appear here once approved for publication."
            />
          )}

          {consultantTab === 'institutions' && (
            <CardGrid
              items={institutionsAdvised}
              titleKey="institution"
              fields={[
                { key: 'sector', label: 'Sector' },
                { key: 'mandate', label: 'Advisory Mandate' },
                { key: 'period', label: 'Year / Period' },
              ]}
              empty="Institutions advised will be listed here once clients have approved their publication."
            />
          )}
        </div>
      </section>

      {/* 3.2.3 GALLERY */}
      <section id="gallery" className="scroll-mt-32 bg-white py-16 md:py-24">
        <div className="container-institutional">
          <SectionTitle
            eyebrow="3.2.3"
            title="Consulting Delivery Gallery"
            text="Photographs and highlights from advisory delivery in the field."
          />
          <Tabs tabs={galleryTabs} active={gallery} onChange={setGallery} />

          {gallery === 'delivery' &&
            (advisoryDelivery.length ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {advisoryDelivery.map((g, i) => {
                  const v = g.verticalId ? verticalById[String(g.verticalId)] : null
                  return (
                    <Reveal key={`${g.src}-${i}`} delay={(i % 3) * 0.06}>
                      <figure className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
                        <ImagePlaceholder label={g.activity || 'Advisory delivery'} ratio="aspect-[4/3]" src={g.src} alt={g.activity || g.assignment || 'Advisory delivery'} />
                        <figcaption className="p-5">
                          {g.assignment && <p className="font-extrabold text-ink">{g.assignment}</p>}
                          {g.activity && <p className="mt-1 text-sm text-charcoal-soft">{g.activity}</p>}
                          <p className="mt-3 text-xs font-bold uppercase tracking-wide text-gold">
                            {[g.consultant, v?.name].filter(Boolean).join(' · ')}
                          </p>
                        </figcaption>
                      </figure>
                    </Reveal>
                  )
                })}
              </div>
            ) : (
              <EmptyNote>Photographs of advisory delivery will appear here.</EmptyNote>
            ))}

          {gallery === 'photographs' &&
            (engagementPhotographs.length ? (
              <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                {engagementPhotographs.map((p, i) => (
                  <Reveal key={`${p.src}-${i}`} className="mb-5 break-inside-avoid">
                    <div className="overflow-hidden rounded-2xl">
                      <img src={p.src} alt={p.alt || 'Consulting engagement'} loading="lazy" className="w-full object-cover" />
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <EmptyNote>Consulting engagement photographs will appear here.</EmptyNote>
            ))}

          {gallery === 'highlights' && (
            <CardGrid
              items={assignmentHighlights}
              titleKey="title"
              fields={[
                { key: 'client', label: 'Client / Institution' },
                { key: 'mandate', label: 'Advisory Mandate' },
                { key: 'contribution', label: 'Key Contribution' },
                { key: 'outcome', label: 'Outcome' },
              ]}
              empty="Advisory assignment highlights will appear here."
            />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-institutional flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">Have a challenge in mind?</h2>
            <p className="mt-2 max-w-xl text-white/80">Tell us what you are trying to solve and we will assemble the right expertise.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/request-consultancy" className="btn-pill btn-pill--light">
              Request Consultancy <Arrow />
            </Link>
            <Link to="/consulting-verticals" className="btn-pill btn-pill--light">
              Explore the Verticals
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
