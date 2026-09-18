// Small helper for turning a person's name into a predictable image filename,
// so every part of the site that shows someone's photo looks in the same place.
export function slugify(name) {
  if (!name) return ''
  const stripped = name.replace(/^(Dr\.|Prof\.|Adv\.|Mr\.|Mrs\.|Ms\.)\s+/, '')
  return stripped
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Returns the expected path for a person's photo under /public/images/people/.
// Save the matching file there (see IMAGE_GUIDE.md) and it will be picked up
// automatically -- no further code changes needed.
export function personPhoto(name) {
  if (!name) return undefined
  const slug = slugify(name)
  return slug ? `/images/people/${slug}.jpg` : undefined
}
