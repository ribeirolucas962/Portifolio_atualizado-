# Portfolio Website - AI Coding Instructions

## Project Overview
Personal portfolio website for Lucas Ribeiro (Data Science professional). Single-page application built with vanilla HTML/CSS/JavaScript. Purpose: showcase skills, certificates, projects, and facilitate contact.

## Architecture & Key Components

### Data Structure
**Certificates System** (`script.js` - `certificatesData` object):
- Central data model organizing certifications by category (Python, SQL, Power BI, Data Science, Other)
- Each category has: title, description, icon/iconUrl, certificate list
- Pattern: Define new categories in `certificatesData.categories` to automatically appear in UI
- Certificate items require: courseName, institution, filePath (relative path to PDF in `/certificados` folder)
- Example: Adding new category is a 3-step process: (1) add entry to certificatesData, (2) place PDFs in appropriate folder, (3) system renders automatically

### Visual Sections
1. **Navbar** (fixed header): Navigation links, profile image trigger
2. **Hero Section**: Background image with overlay, intro text
3. **About**: Professional summary and value proposition
4. **Skills**: Skill tags with icons (Python, SQL, Power BI, R, Excel)
5. **Certificates**: Grid of category cards, clickable to show modals
6. **Portfolio**: Project icons linking to external PDFs/Colab notebooks
7. **Contact**: Social media links, footer

### Color Scheme
- Primary: `#d1a664` (gold/bronze) - Used for buttons, navbar, accents
- Dark: `#2d3436` - Text
- Light: `#f8f9fa`, `#f5f7fa` - Backgrounds
- Icons: Brand colors (Python: `#3776AB`, Excel: `#217346`, etc.)

## Development Workflows

### Adding New Certificates
1. Place PDF files in appropriate folder: `/certificados/{Category}/filename.pdf`
2. Edit `script.js` - locate `certificatesData.categories` object
3. Add entry to target category's `certificates` array with: courseName, institution, filePath
4. Modal and grid rendering happen automatically via `loadCertificatesData()`, `displayCertificateCards()`, `displayCertificates()`

### Adding New Portfolio Projects
- Edit `index.html`, section `#portfolio`
- Add `<div class="icon-container">` with project image and `onclick` handler
- Supports direct file opens or external links (Colab, GitHub)

### Mobile Responsiveness
- Navbar: hamburger menu toggles `.nav-links.active` state
- Breakpoint: `768px`
- All sections use padding percentages (`10%`, `5%`) for fluid scaling
- Test on mobile via DevTools

### Modals Pattern
Used for: profile image, certificates list, form submissions
- Add `.active` class to show; remove to hide
- Escape key closes (implemented for certificates and profile)
- Body scroll prevented when modal active (`overflow: hidden`)
- Click outside modal also closes

## Code Patterns & Conventions

### DOM Event Listeners
- Mobile menu: `burger.addEventListener('click')` - toggles `nav-links.active`
- Smooth scrolling: All `href="#"` anchors get smooth scroll behavior
- Form: `contactForm.addEventListener('submit')` - currently shows alert, replace with API call
- Modal: Click handler checks `e.target === modal` to exclude click-through when clicking children

### Intersection Observer Pattern
All sections fade in on scroll via IntersectionObserver with options:
```javascript
const observerOptions = { threshold: 0.1 };
// Applied to all <section> elements
```
Sets opacity 0→1 and translateY(20px→0) on intersection.

### Dynamic UI Generation
- Certificates grid and list: Generated from `certificatesData` object using `forEach` with `createElement` and `innerHTML`
- No static certificate HTML - all generated via script.js
- Renders at DOM load via `DOMContentLoaded` event

## Integration Points & External Dependencies

### FontAwesome Icons
- CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`
- Classes used: `.fa-python`, `.fa-database`, `.fa-chart-bar`, `.fas fa-check-circle`, etc.
- Custom logos: R language and ML logos use image files from `/imagens` folder

### External Links
- GitHub: `https://github.com/ribeirolucas962`
- LinkedIn: `https://www.linkedin.com/in/lucas-ribeiron/`
- Colab notebooks: Embedded in portfolio projects
- PDFs: Opened in new window via `window.open()` (see `viewCertificate()` function)

### Google Fonts
- Font: `Poppins` (300, 400, 500, 600, 700 weights)
- Applied globally via `html { scroll-behavior: smooth; }` and `body { font-family: 'Poppins' }`

## Critical Implementation Details

### Portfolio Item Hover Overlay
Portfolio images use absolute positioning overlay that appears on hover:
- `.portfolio-overlay` positioned absolutely on `.portfolio-item`
- Opacity transitions from 0→1 on hover
- Contains title and link button

### Certificate PDF Viewer
`viewCertificate(certificatePath)` creates new window with iframe:
- Dynamically builds HTML with `<iframe src="{filePath}">` 
- Useful for viewing PDFs stored in repository
- Falls back to browser's PDF viewer

### Text Rotation Animation
Hero section text rotates every 5 seconds:
- Uses `.typing-text` element with `data-texts` JSON array attribute
- Function `initTextRotation()` handles fade transitions
- Opacity: 0→1, TranslateY: -20px→0px over 500ms

### Form Submission
Currently placeholder - replace alert with actual API call:
```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: Add form submission logic (fetch API, email service, etc.)
    alert('Mensagem enviada com sucesso!');
});
```

## File Organization
- `/certificados/{Category}/` - PDF files organized by category
- `/imagens/` - Profile pictures, project thumbnails, custom logos (R_logo.svg, icons)
- `/projetos/` - Project files (PDFs, links to external resources)
- Root: index.html, script.js, styles.css, curriculo.md (downloadable resume)

## Common Tasks for AI Agents

1. **Update certificate data**: Edit certificatesData in script.js, ensure filePath matches `/certificados` folder structure
2. **Fix responsive issues**: Check CSS media queries at 768px breakpoint
3. **Add new section**: Follow pattern: semantic section tag, unique id for nav link, appropriate styling class
4. **Debug modals**: Check `.active` class toggling and event listener conditions
5. **Performance**: Minimize DOM manipulation; batch createElement calls, use event delegation where possible

## Testing Notes
- Mobile menu: Test hamburger toggle at <768px
- Certificate modals: Verify PDF paths exist and render in new window
- Smooth scroll: Verify all nav links navigate to correct sections
- Form validation: Currently no validation - consider adding if integrating real submission
- Accessibility: Ensure all interactive elements have proper labels for screen readers
