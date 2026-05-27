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
- **`src/lib/`** — Shared utilities: `theme.js` (per-category color schemes via `showcaseThemes`), `utils.js` (clipboard, class name helper `cn()`), `animations.js` (Framer Motion variants).
- **`src/hooks/`** — Custom hooks: `useCopyToClipboard`, `useScrollToTop`.

### Patterns

- **Adding a new component variant:** Create the component in the appropriate `src/components/<Category>/` folder, then register it in `src/data/components/<category>.js` so the showcase page picks it up.
- **Adding a new component category:** Create a folder under `src/components/`, add a data file in `src/data/components/`, create a showcase page in `src/pages/` (use the shared `ComponentShowcasePage` wrapper from `src/components/showcase/`), and register the route in `src/router.jsx`.
- **Theme config:** Each component category has its own color scheme defined in `src/lib/theme.js` (`showcaseThemes`). The Tailwind config adds a custom `neon` color (#39ff14).
- **Copy-to-clipboard:** Components are displayed with source code that users can copy. Uses `useCopyToClipboard` hook and `react-syntax-highlighter`.

### Naming Note
The avatar components live in `src/components/Avatars/` (corrected spelling). The legacy `Avtars` folder has been removed.
