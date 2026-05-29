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
- **`src/pages/`** — Top-level pages (Home, About, Component/Pages index, ReleaseNotes) plus `ComponentShowcaseRoute.jsx`, the single generic route that renders any `/components/$slug` by resolving the slug against `COMPONENT_REGISTRY` and lazy-loading its data via `componentLoaders`.
- **`src/pagesComponents/`** — Full page template examples (HomePage, AboutPage, DashboardPage, etc.). `PageShowcase/index.jsx` is the `/pages` index; `PageShowcase/PageShowcaseRoute.jsx` is the single generic `/pages/$slug` route.
- **`src/router.jsx`** — TanStack Router config: `createRootRoute` defines the chrome (Navbar + Outlet + Footer + ScrollRestoration + 404). Top-level paths plus two pathless layout routes (both rendering the shared `ShowcaseLayout`) whose children are the generic `/components/$slug` and `/pages/$slug` param routes. All pages are lazy-loaded.
- **`src/data/components/`** — Component variant data by category (`buttonComponents`, etc.); `index.js` exports `componentLoaders` (slug → lazy data loader). Each variant is `{ name, component, code }` with `code` a `?raw` import of the real source.
- **`src/data/pages/`** — Page-template showcase data by slug (`{ slug, title, description, variants }`); `index.js` exports `pageLoaders` (slug → lazy loader).
- **`src/data/releases.js`** — Canonical release log. Source of truth for the `/release-notes` page, the Navbar version marquee, and `NEW`/`UPD` badges on showcase variant chips. See **Release process** below.
- **`src/lib/`** — Shared utilities: `utils.js` (clipboard, `formatComponentName`), `constants.js` (`SITE_META`, `NAV_ITEMS`, `FOOTER_LINKS`, `getComponentRouteMeta`, `getPageRouteMeta`), `registries.jsx` (`COMPONENT_REGISTRY`, `PAGE_REGISTRY` — single source of truth for sidebar, index pages, and the generic showcase routes), `componentStatus.js` (`getComponentStatus(name)` — drives NEW/UPD badges).
- **`src/hooks/`** — Custom hooks: `useCopyToClipboard`, `useScrollToTop`, `useDocumentMeta` (per-route `<title>` + meta tags; restores on unmount).
- **`src/components/AppUI/ErrorBoundary.jsx`** — Class component wrapping `<Outlet />` in the router root layout. Catches render errors with a retro-styled fallback.

### Patterns

- **Adding a new component variant:** Create the component in the appropriate `src/components/<Category>/` folder, then register it in `src/data/components/<category>.js`: add `{ name, component, code }` where `component` is the imported component and `code` is a `?raw` import of the same file (e.g. `import FooSrc from '../../components/Bar/Foo.jsx?raw'`). The displayed copy-paste code is now the real source — there is no hand-maintained code string to keep in sync. If shipping in a release, add its `name` to `components.new` (or `components.updated`) on the next release entry in `src/data/releases.js`.
- **Adding a new component category:** (1) Create a folder under `src/components/`; (2) add a data file in `src/data/components/<category>.js` exporting `<category>Components`; (3) add a slug→loader entry to `src/data/components/index.js` (`componentLoaders`); (4) add an entry to `COMPONENT_REGISTRY` in `src/lib/registries.jsx` (including `path` = slug and `folder` = the `src/components/` directory name); (5) **append the URL to `public/sitemap.xml`**. No per-category showcase page or router row is needed — the single generic `/components/$slug` route (`src/pages/ComponentShowcaseRoute.jsx`) renders any registered slug, and the sidebar/index read `COMPONENT_REGISTRY`. Page templates work the same way: `src/data/pages/<slug>.js` → `pageLoaders` in `src/data/pages/index.js` → `PAGE_REGISTRY` → generic `/pages/$slug` route.
- **Adding a new top-level route:** Register in `src/router.jsx`, add to `FOOTER_LINKS` in `src/lib/constants.js` if user-facing, append to `public/sitemap.xml`, and call `useDocumentMeta({ title, description, canonical })` from the page component for SEO.
- **Per-route SEO:** Every page should call `useDocumentMeta` from `src/hooks` with `title`, `description`, and `canonical` (use `SITE_META.url` as the base). The hook restores tags on unmount automatically.
- **Showcase chrome:** Both `/components/*` and `/pages/*` render one shared `ShowcaseLayout` (`src/components/showcase/ShowcaseLayout.jsx`), which derives its registry/labels/resources from the first URL segment. Shared header/variant-chip/info-card/loader pieces live in `src/components/showcase/parts.jsx`. The Tailwind config adds a custom `neon` color (#39ff14); per-category color schemes were removed (the showcase chrome uses the CSS-variable design tokens).
- **Copy-to-clipboard:** Components are displayed with their real source code (imported via `?raw`) that users can copy. Uses `useCopyToClipboard` hook and `react-syntax-highlighter`.

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
