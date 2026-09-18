# Image drop-in guide

Every placeholder on the site now looks for a real image at a fixed path.
Save your files using the **exact names** below into the matching folder
under `public/images/`. Nothing else needs to change in the code — Vite
serves everything in `public/` from the site root, and any placeholder
whose image is missing just keeps showing the grey placeholder box (it
never breaks the page), so you can add these gradually.

Format: `.jpg`, sRGB, reasonably compressed (aim under ~300KB each).

## People — `public/images/people/` (square photo, will be cropped to a circle-free square crop, min ~600x600px)

Board of Directors:
- newton-siele.jpg
- stephen-luketero.jpg
- charity-wamwea.jpg
- fred-moin-siyoi.jpg
- musa-ambuchi.jpg
- peter-makan.jpg

C-Suite:
- seth-kipsang.jpg
- john-kiche.jpg
- alex-mwaniki.jpg
- joseph-abuya.jpg
- mogire-obwaya.jpg
- brian-mogaka.jpg
- kennedy-muchiri.jpg
- gabriel-kingauwi-musyoka.jpg
- eric-katumo.jpg

Consulting Vertical Directors:
- isaac-waluke.jpg
- raphael-chesori.jpg
- rael-awuor.jpg
- samuel-kipsang-kaptum.jpg
- tamanji-logodi.jpg
- beldine-akinyi-okoth.jpg
- augustine-wekesa-masinde.jpg
- bilha-wetende.jpg
- **einstein-nyandieka-mokua.jpg** ← your own photo
- eric-mugo-njuguna.jpg
- mildred-chepkwemoi.jpg

Client testimonials (Home page):
- anne-wambui-karanja.jpg
- charles-mbogo-wanjala.jpg
- fiona-chepngetich-kiprono.jpg

Note: the six Insights authors (Seth Kipsang, Isaac Waluke, Samuel Kipsang
Kaptum, Brian Mogaka, Rael Awuor, Mogire Obwaya) are already covered above —
their author avatar on an article reuses the same file as their director/
C-Suite photo, so no extra files are needed for them.

If a person's name ever changes in the data files, their filename is simply
the name lowercased, with any "Dr./Prof./Adv./Mr./Mrs./Ms." title dropped
and spaces turned into hyphens (see `src/utils/media.js`).

## Sectors — `public/images/sectors/` (4:3 landscape)
- government-public-sector.jpg
- financial-services.jpg
- health-life-sciences.jpg
- development-humanitarian.jpg
- energy-infrastructure.jpg
- academia-research.jpg

## Capabilities — `public/images/capabilities/` (4:3 landscape)
- strategy.jpg
- ai-data.jpg
- economics-finance.jpg
- research.jpg
- technology.jpg
- institutional-advisory.jpg

## Insights / journal articles — `public/images/insights/` (16:9 or 16:10 landscape)
- decision-quality-institutions.jpg
- ai-without-strategy.jpg  (this one is also reused for the "Featured Research" banner on the Insights page)
- economics-of-climate-finance.jpg
- governance-of-data.jpg
- research-rigour-under-pressure.jpg
- building-technical-teams-in-public-sector.jpg

## One-off site images — `public/images/site/`
- about-purpose.jpg (4:5 portrait — About page)
- careers-life.jpg (4:3 landscape — Careers page)
- selected-engagement.jpg (4:3 landscape — Home page, "Selected Engagement")

Total: 50 image files. None are required for the site to run — everything
already renders correctly with placeholders — so ship now and backfill
these as photos/assets come in from each person.
