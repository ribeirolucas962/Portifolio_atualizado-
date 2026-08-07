# Portfolio Website - AI Coding Instructions

## Project Overview
Personal portfolio for Lucas Ribeiro (Data Science professional). Vanilla HTML/CSS/JavaScript — no framework, no build step, no package manager. Open `index.html` directly, or serve over HTTP (`python -m http.server 8000`) so the PDFs load without browser restrictions.

## Files
- `index.html` — main single-page site
- `trajetoria.html` — standalone career-timeline page with its own embedded `<style>` block (does **not** use `styles.css`)
- `styles.css` — styles for the main page only
- `script.js` — interactivity plus the `certificatesData` catalog
- `favicon.svg` — tab icon
- `certificados/{Categoria}/` — certificate PDFs
- `imagens/` — profile photo, project thumbnails, logos
- `projetos/` — project files (PDFs)

## Architecture

### Certificates system
`certificatesData` in `script.js` is the single source of truth — there is **no** `certificates.json`. Structure:

```
certificatesData.categories.<key> = {
  title, description,
  icon,      // Font Awesome class, e.g. "fab fa-python"
  iconUrl,   // OR an image path; iconUrl wins when both are set
  certificates: [ { courseName, institution, filePath } ]
}
```

Rendering is fully dynamic — no static certificate HTML exists:
- `displayCertificateCards()` fills `#certificates-grid` with one card per category
- `showCertificatesList(category)` opens `#certificates-modal`
- `displayCertificates(category)` fills the modal list
- `viewCertificate(filePath)` opens a new window containing an `<iframe>` with the PDF

Adding a certificate = drop the PDF in `certificados/{Categoria}/`, add an entry to the category's `certificates` array. Adding a category = add a key under `categories`; the card appears automatically.

**File naming matters:** `filePath` must match the on-disk name exactly, including accents and double spaces. Prefer renaming new files to plain ASCII without spaces or brackets — characters like `[ ]` break when served over HTTP.

### Page sections
Navbar (fixed) → Hero → About → Trajetória (card linking to `trajetoria.html`) → Skills → Certificates → Portfolio → Contact → Footer.

The Trajetória section is only a clickable card; the timeline content itself lives in `trajetoria.html`. There is **no** inline expandable timeline and no contact form.

### Design tokens
Defined as CSS variables in `:root` (`styles.css`). Use them instead of hardcoding:
`--primary: #d1a664` · `--primary-dark: #b38d4a` · `--primary-light: rgba(209,166,100,.12)` · `--dark: #0d1b2a` · `--text-dark: #2d3436` · `--text-muted: #636e72` · plus `--shadow-*`, `--radius-*`, `--transition`.

> Known issue: `.timeline-section` references `var(--bg-light)`, which is not defined. Fixing it changes the section's background, so it was left alone deliberately.

## Code patterns

- **Mobile menu**: `.burger` click toggles the `active` class on both `.nav-links` and `.burger`. The menu closes on outside click *and* on nav-link click — keep both paths in sync and always use the class name `active`.
- **Smooth scrolling**: every `a[href^="#"]` gets `preventDefault()` + `scrollIntoView`. `html { scroll-padding-top: 90px }` compensates for the fixed navbar — adjust it if the navbar height changes.
- **Section reveal**: an `IntersectionObserver` sets every `<section>` to `opacity: 0` then fades it in. Content is invisible if JS fails to run.
- **Skill bars**: `.skill-fill` uses a `--level` custom property inline; `initSkillBars()` adds `.animated` when the section scrolls into view.
- **Typing animation**: `.typing-text` reads a JSON array from its `data-texts` attribute.
- **Modal**: toggled via the `active` class; sets `document.body.style.overflow`. Closes on Escape, on close button, and on backdrop click (`e.target === modal`).
- **Project cards**: `.project-card` divs with inline `onclick="window.open(...)"`.

## External dependencies (CDN)
- Font Awesome 6 — icons
- Google Fonts (Poppins 300–700)

## Known gaps worth fixing
- `.burger` and `.project-card` are `div`s with click handlers — not keyboard accessible, no ARIA roles.
- Images in `imagens/` are large (several PNGs above 1.5 MB); converting to resized WebP would cut page weight substantially.
- Excel certificates are catalogued under the Power BI category.
