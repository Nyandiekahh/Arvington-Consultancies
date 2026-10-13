// A flat, searchable index of everything on the site worth jumping to
// directly: nav pages and sections, board/executive/director profiles,
// consulting verticals, capabilities, sectors and insights articles.
// Each entry's `path` is a full react-router destination (including any
// #hash) that the search overlay navigates straight to.
import { slugify } from '../utils/media'
import { NAV_ITEMS } from './navigation'
import { board, cSuite } from './leadership'
import { verticals, tiers } from './verticals'
import { capabilities } from './capabilities'
import { sectors } from './sectors'
import { insights } from './insights'

const entries = []

// Home
entries.push({ title: 'Home', subtitle: 'Arvington Ltd.', category: 'Page', path: '/' })

// Nav pages + their sub-sections
NAV_ITEMS.forEach((item) => {
  entries.push({ title: item.label, subtitle: 'Page', category: 'Page', path: item.to })
  item.children?.forEach((child) => {
    entries.push({ title: child.label, subtitle: item.label, category: item.label, path: child.to })
    child.children?.forEach((grand) => {
      entries.push({
        title: grand.label,
        subtitle: `${item.label} › ${child.label}`,
        category: item.label,
        path: grand.to,
      })
    })
  })
})
entries.push({ title: 'Contact', subtitle: 'Page', category: 'Page', path: '/contact' })
entries.push({ title: 'FAQs', subtitle: 'Engage Arvington', category: 'Engage Arvington', path: '/faqs' })
entries.push({ title: 'Partnerships', subtitle: 'Engage Arvington', category: 'Engage Arvington', path: '/partnerships' })
entries.push({ title: 'Request Consultancy', subtitle: 'Engage Arvington', category: 'Engage Arvington', path: '/request-consultancy' })
entries.push({ title: 'Request a Proposal', subtitle: 'Engage Arvington', category: 'Engage Arvington', path: '/request-proposal' })
entries.push({ title: 'Executive Consultation', subtitle: 'Engage Arvington', category: 'Engage Arvington', path: '/executive-consultation' })
entries.push({ title: 'Selected Consulting Experience', subtitle: 'What We Do', category: 'What We Do', path: '/experience' })

// Board of Directors
board.forEach((member) => {
  entries.push({
    title: member.name,
    subtitle: member.role,
    category: 'Board of Directors',
    path: `/leadership#board-${slugify(member.name)}`,
  })
})

// C-Suite
cSuite.forEach((exec) => {
  entries.push({
    title: exec.name,
    subtitle: exec.title,
    category: 'C-Suite',
    path: `/leadership#csuite-${slugify(exec.name)}`,
  })
})

// Consulting Verticals + their Directors
verticals.forEach((v) => {
  const tierLabel = tiers.find((t) => t.id === v.tier)?.label || 'Consulting Vertical'
  entries.push({
    title: v.name,
    subtitle: tierLabel,
    category: 'Consulting Verticals',
    path: `/consulting-verticals#vertical-${v.id}`,
  })
  if (v.directorName) {
    entries.push({
      title: v.directorName,
      subtitle: v.director,
      category: 'Consulting Directors',
      path: `/consulting-verticals#vertical-${v.id}`,
    })
  }
})

// Capabilities
capabilities.forEach((cap) => {
  entries.push({
    title: cap.name,
    subtitle: cap.short,
    category: 'Capabilities',
    path: `/capabilities#${cap.id}`,
  })
})

// Sectors
sectors.forEach((sector) => {
  entries.push({
    title: sector.name,
    subtitle: 'Sector',
    category: 'Sectors',
    path: `/sectors#${sector.id}`,
  })
})

// Insights articles
insights.forEach((insight) => {
  entries.push({
    title: insight.title,
    subtitle: `${insight.author} — ${insight.category}`,
    category: 'Insights',
    path: `/insights/${insight.id}`,
  })
})

// De-duplicate identical title + destination pairs (nav items can repeat).
const seen = new Set()
export const searchIndex = entries.filter((e) => {
  const k = `${e.title}|${e.path}`
  if (seen.has(k)) return false
  seen.add(k)
  return true
})

function score(entry, query) {
  const q = query.toLowerCase()
  const title = entry.title.toLowerCase()
  const subtitle = (entry.subtitle || '').toLowerCase()
  const category = (entry.category || '').toLowerCase()

  if (title === q) return 100
  if (title.startsWith(q)) return 90
  if (title.includes(` ${q}`)) return 75
  if (title.includes(q)) return 60
  if (subtitle.includes(q)) return 40
  if (category.includes(q)) return 30
  return 0
}

export function searchSite(query, limit = 8) {
  const q = query.trim()
  if (!q) return []
  return searchIndex
    .map((entry) => ({ entry, s: score(entry, q) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map(({ entry }) => entry)
}
