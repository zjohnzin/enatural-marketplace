# Repository Guidelines

## Project Structure & Module Organization
This repository is a static landing page for a natural products marketplace, built with vanilla web technologies.

- `index.html`: main page markup (semantic sections and UI skeleton)
- `styles.css`: full styling layer (design tokens, layout, responsive rules, animations)
- `scripts.js`: client-side rendering and interactions (product data, filters, slider, UI behaviors)
- `img/`: all image assets used by the page
- `CLAUDE.md`: project notes and architecture summary for coding agents

There is no `src/`, build system, or backend in this project.

## Build, Test, and Development Commands
No build step is required.

- `python -m http.server 8000`: run a local static server
- `npx serve .`: alternative static server (Node.js required)

Open `http://localhost:8000` (or the port shown) to test interactions in a browser.

## Coding Style & Naming Conventions
- Use **2-space indentation** (matches existing HTML/CSS/JS files).
- Keep content and UI copy in **Portuguese (pt-BR)** unless a task explicitly requires another language.
- Follow **BEM-style CSS naming**: `.block__element--modifier`.
- Prefer **semantic HTML** (`section`, `nav`, `footer`, buttons with `aria-label` when needed).
- Keep JavaScript in plain ES6+ and align with current patterns (global functions, data arrays, `DOMContentLoaded` init).

Examples:
- CSS class: `.product-card__cart-btn`
- JS init function: `initHeroSlider()`

## Testing Guidelines
There is no automated test framework configured in this repository.

Use manual browser testing for every UI change:
- verify responsive layout (desktop/tablet/mobile)
- test filters, carousel, mobile menu, and WhatsApp widget
- confirm no console errors after loading `index.html`

If tests are added later, place them in a `tests/` folder and document the run command here.

## Commit & Pull Request Guidelines
This folder currently has **no Git history** (`.git` not present), so there is no established commit convention to infer.

Recommended commit format:
- `feat: add newsletter success state`
- `fix: correct filter tag mapping for lactose-free products`

PRs should include:
- short description of changes
- screenshots/GIFs for UI updates
- manual test notes (viewport sizes + interactions tested)
- linked issue/task when available

## Security & Configuration Tips
- Do not commit secrets or tokens (for example, MCP or Supabase access tokens).
- Keep environment-specific values in local environment variables, not hardcoded in HTML/JS.
