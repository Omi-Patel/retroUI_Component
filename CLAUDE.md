# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RetroUI is a retro-themed React component library showcase site. It displays copy-pasteable UI components (buttons, cards, inputs, navbars, etc.) and full page templates with a vintage aesthetic. Deployed on Vercel.

## Commands

- **Dev server:** `npm run dev` (Vite)
- **Build:** `npm run build` (Vite production build)
- **Lint:** `npm run lint` (ESLint flat config)
- **Preview prod build:** `npm run preview`

No test framework is configured.

## Architecture

### Tech Stack
React 18 + Vite + Tailwind CSS 3 + Framer Motion. Uses **TanStack Router** (`@tanstack/react-router`) for client-side routing with lazy-loaded pages. Dark mode via Tailwind `class` strategy.

### Design system
"90s zine / faded newsprint" palette. Tokens live in `src/index.css` as CSS variables (`--bg`, `--surface`, `--surface-2`, `--fg`, `--muted`, `--border`, `--border-strong`, `--accent`, `--accent-fg`, `--ok`, `--sticker`). Both themes ship light and dark. Typography: Space Grotesk (sans), JetBrains Mono (mono), Instrument Serif (italic accents). Helper classes: `display`, `display-italic`, `mono`, `label`, `sticker`, `sticker-flat`, `stamp`, `ornament-hr`, `retro-link`, `marquee-track`, `bg-grid`, `bg-dots`, `bg-halftone`, `placeholder-tile`, `nice-scroll`.

### Key Directories

- **`src/components/`** — Retro UI components organized by category (Buttons/, Cards/, Inputs/, Loaders/, Switch/, Tables/, Navbars/, Footers/, Avtars/, SignIn/, Signup/, Pricing/). Also contains `AppUI/` for the site's own shell (Navbar, Footer, PrivacyPolicy, Terms, ContactUs) and `showcase/` for shared showcase layout components.
- **`src/pages/`** — Page-level components. Each `*Showcase.jsx` renders a showcase for one component category using a shared `ComponentShowcase` pattern.
- **`src/pagesComponents/`** — Full page template examples (HomePage, AboutPage, DashboardPage, etc.) with their own `PageShowcase/` index.
- **`src/router.jsx`** — TanStack Router config: `createRootRoute` defines the chrome (Navbar + Outlet + Footer + ScrollRestoration + 404), then each path is added via `createRoute`. All page components are lazy-loaded.
- **`src/data/components/`** — Component metadata/registry exported by category (buttonComponents, cardComponents, etc.).
- **`src/data/releases.js`** — Canonical release log. Source of truth for the `/release-notes` page, the Navbar version marquee, and `NEW`/`UPD` badges on showcase variant chips. See **Release process** below.
- **`src/lib/`** — Shared utilities: `theme.js` (per-category color schemes via `showcaseThemes`), `utils.js` (clipboard, class name helper `cn()`), `animations.js` (Framer Motion variants), `constants.js` (`SITE_META`, `NAV_ITEMS`, `FOOTER_LINKS`, `getComponentRouteMeta`, `getPageRouteMeta`), `registries.jsx` (`COMPONENT_REGISTRY`, `PAGE_REGISTRY` — single source of truth for both sidebar and `/components` & `/pages` index pages), `componentStatus.js` (`getComponentStatus(name)` — drives NEW/UPD badges).
- **`src/hooks/`** — Custom hooks: `useCopyToClipboard`, `useScrollToTop`, `useDocumentMeta` (per-route `<title>` + meta tags; restores on unmount).
- **`src/components/AppUI/ErrorBoundary.jsx`** — Class component wrapping `<Outlet />` in the router root layout. Catches render errors with a retro-styled fallback.

### Patterns

- **Adding a new component variant:** Create the component in the appropriate `src/components/<Category>/` folder, then register it in `src/data/components/<category>.js` so the showcase page picks it up. If shipping in a release, add its `name` to `components.new` (or `components.updated`) on the next release entry in `src/data/releases.js`.
- **Adding a new component category:** Create a folder under `src/components/`, add a data file in `src/data/components/`, create a showcase page in `src/pages/` (use the shared `ComponentShowcasePage` wrapper from `src/components/showcase/`), register the route in `src/router.jsx`, **and append the URL to `public/sitemap.xml`**.
- **Adding a new top-level route:** Register in `src/router.jsx`, add to `FOOTER_LINKS` in `src/lib/constants.js` if user-facing, append to `public/sitemap.xml`, and call `useDocumentMeta({ title, description, canonical })` from the page component for SEO.
- **Per-route SEO:** Every page should call `useDocumentMeta` from `src/hooks` with `title`, `description`, and `canonical` (use `SITE_META.url` as the base). The hook restores tags on unmount automatically.
- **Theme config:** Each component category has its own color scheme defined in `src/lib/theme.js` (`showcaseThemes`). The Tailwind config adds a custom `neon` color (#39ff14).
- **Copy-to-clipboard:** Components are displayed with source code that users can copy. Uses `useCopyToClipboard` hook and `react-syntax-highlighter`.

## Release process

**Always update all four locations together — they must stay in sync:**

1. **`src/data/releases.js`** — prepend a new entry at the top of the `releases` array AND bump the exported `APP_VERSION` constant. Entry shape:
   ```js
   {
     version: "0.2.0",
     date: "2026-06-15",                    // ISO date
     summary: "One-line release blurb.",
     changes: {
       added:   [...],   // user-visible additions
       changed: [...],   // behavior changes
       fixed:   [...],   // bug fixes
       removed: [...],
     },
     components: {
       new:     ["GlitchButton"],            // must match `name` in data/components/<category>.js
       updated: ["PixelNavbar"],
     },
   }
   ```
2. **`CHANGELOG.md`** — mirror the entry under a new `## [x.y.z] - YYYY-MM-DD` heading in Keep-a-Changelog format.
3. **`package.json`** — bump `version` to match `APP_VERSION`.
4. **`public/sitemap.xml`** — add `<url>` entries for any new routes shipped in this release.

**What updates automatically once `releases.js` changes:**
- `/release-notes` renders the new entry with a `LATEST` sticker.
- The Navbar marquee shows the new version and links to `/release-notes`.
- Components listed in `components.new` get a green `NEW` badge on their variant chips.
- Components listed in `components.updated` get a gray `UPD` badge.
- Badges fade after the next release ships (`getComponentStatus` only reads the latest release by default — `lookback = 1` in `src/lib/componentStatus.js`).

**When NOT to cut a release:** doc-only changes, refactors with no user-visible effect, or in-progress work. Save those for the next user-visible release rather than spinning a patch version.

**When making any user-visible change** (new component, new route, bug fix, UI change), default to adding it to the `[Unreleased]` section in `CHANGELOG.md` so it's not forgotten when the next release is cut.

### Naming Note
The avatar components live in `src/components/Avatars/` (corrected spelling). The legacy `Avtars` folder has been removed.
