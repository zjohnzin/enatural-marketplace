# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

eNatural Marketplace — a Brazilian natural products marketplace landing page. Built as a static site with vanilla HTML5, CSS3, and JavaScript (ES6+). No build tools, no package manager, no framework. Portuguese (pt-BR) language throughout.

## Running Locally

No build step. Open `index.html` directly in a browser or serve with any static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

There are no test, lint, or build commands — no `package.json` exists.

## Architecture

Three files make up the entire application:

- **`index.html`** — Semantic HTML with 10 sections: top bar, sticky navbar, hero banner, trust bar, categories grid, products grid, sellers grid, kits/combos, newsletter, footer. Uses ARIA labels for accessibility.
- **`styles.css`** — Complete design system (~1600 lines). Defines 90+ CSS custom properties in `:root` for colors, typography, spacing, shadows, radii, and transitions.
- **`scripts.js`** — Data-driven rendering. Product/seller/kit data is hardcoded as JS objects. Render functions (`renderProducts`, `renderSellers`, `renderKits`) generate HTML via template literals and inject into the DOM on `DOMContentLoaded`.

### CSS Conventions

- **BEM naming**: `.block__element--modifier` (e.g., `.product-card__image`, `.badge--organic`, `.navbar.scrolled`)
- **Design aesthetic**: "Organic Editorial Minimalism"
- **Fonts**: `DM Serif Display` (display/headings) + `Outfit` (body text), loaded via Google Fonts
- **Color palette**: Green scale (`--green-50` to `--green-900`), earth tones (`--earth-*`), terracotta accents, cream backgrounds
- **Responsive breakpoints**: 768px (tablet), 640px (mobile), 375px (small mobile) — mobile-first approach
- **Animations**: Scroll-triggered fade-ins via `IntersectionObserver`, CSS transitions on hover states

### JavaScript Patterns

- All code runs in global scope (no modules)
- Data arrays (`products`, `sellers`, `kits`) at the top of the file contain all marketplace content
- Rendering functions produce HTML strings from data and set `innerHTML`
- `initScrollAnimations()` uses `IntersectionObserver` to add `.visible` class on scroll
- `initNavbar()` adds `.scrolled` class to navbar after 60px scroll offset
- `initFilterPills()` toggles `.active` on category filter buttons

### Images

All assets live in `img/` — product photos, hero banner, and category icons. Referenced by relative path in both HTML and JS data objects.
