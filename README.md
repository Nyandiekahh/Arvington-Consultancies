# Arvington Ltd. Website

A React + Vite + Tailwind CSS (v4) website for Arvington Ltd., a multidisciplinary
consulting, analytics and strategic advisory firm.

## Getting started

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Building for production

```
npm run build
```

Output goes to the `dist/` folder, ready to deploy to Vercel, Netlify, or any static host.

## Project structure

```
src/
  components/   Shared UI: Navbar, Footer, Preloader, NodeNetwork (hero canvas),
                PipelineDiagram (GSAP scroll animation), cards, section headings
  pages/        One file per route: Home, About, Capabilities, ConsultingVerticals,
                Leadership, Insights, InsightArticle, Sectors, Careers, Contact
  data/         Structured content (verticals, capabilities, insights, leadership,
                sectors) kept separate from components so copy is easy to edit
  hooks/        useReducedMotion, for respecting accessibility preferences
  index.css     Tailwind v4 theme tokens (colors, fonts) and global styles
```

## Adding your logo

Drop your PNG into `public/` (e.g. `public/arvington-logo.png`), then in
`src/components/Navbar.jsx` replace the text wordmark:

```jsx
<span className="font-display text-xl md:text-2xl tracking-wide text-navy">
  ARVINGTON<span className="text-gold">.</span>
</span>
```

with:

```jsx
<img src="/arvington-logo.png" alt="Arvington Ltd." className="h-9 md:h-11 w-auto" />
```

Do the same in `src/components/Footer.jsx` for the footer wordmark, and drop a
favicon into `public/favicon.png` (already referenced in `index.html`).

## Replacing image placeholders

Every section that needs a photograph currently uses the `<ImagePlaceholder />`
component (`src/components/ImagePlaceholder.jsx`). Swap it for a real `<img>` tag
once you have photography, keeping the same `aspect-*` wrapper class for layout.

## Design tokens

Colors, fonts and other tokens live in `src/index.css` under `@theme`. Change a
value there and it updates everywhere across the site.
# Arvington-Consultancies
