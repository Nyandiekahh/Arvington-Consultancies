import { useEffect } from 'react'

export const SITE_NAME = 'Arvington Ltd.'
export const SITE_URL = 'https://arvington-consultancies.vercel.app'
export const DEFAULT_DESCRIPTION =
  'Arvington Ltd. is a multidisciplinary consulting, analytics and strategic advisory firm strengthening institutions through superior decisions.'
export const DEFAULT_IMAGE = `${SITE_URL}/images/brand/arvington-og.jpg`

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Sets the document title, meta description, canonical link, and Open
// Graph / Twitter card tags for the current page. Runs client-side, so
// crawlers that execute JavaScript (Google, Bing) pick it up; crawlers
// that only read the initial HTML (most social-link previews) will see
// the static defaults declared in index.html instead.
export default function useSEO({ title, description = DEFAULT_DESCRIPTION, path = '/', image = DEFAULT_IMAGE, type = 'website' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Strengthening Institutions Through Superior Decisions.`
    document.title = fullTitle

    upsertMeta('name', 'description', description)

    const url = `${SITE_URL}${path}`
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', SITE_NAME)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
  }, [title, description, path, image, type])
}
