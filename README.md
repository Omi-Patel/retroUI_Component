# retroUI

> Retro-themed React component library — copy and paste, ship instantly.

[![Made with React](https://img.shields.io/badge/React-18-149eca)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com)
[![TanStack Router](https://img.shields.io/badge/Router-TanStack-ef4444)](https://tanstack.com/router)

retroUI is a showcase site for a 90s-zine / faded-newsprint themed React component library. Browse 50+ components and 13 full-page templates, copy any source, drop into your project. No install, no lock-in.

**Live:** https://retro-ui.basecase.site

---

## Quickstart

```bash
git clone https://github.com/Omi-Patel/retroUI_Component.git
cd retroUI_Component
npm install
npm run dev
```

Then open <http://localhost:5173>.

### Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start Vite dev server                 |
| `npm run build`   | Production build (`dist/`)            |
| `npm run lint`    | Run ESLint (incl. `jsx-a11y` checks)  |
| `npm run preview` | Serve the production build locally    |

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** with a custom CSS variable–driven theme (`src/index.css`)
- **TanStack Router** with lazy-loaded routes
- **Framer Motion** for animation, **lucide-react** for icons
- **react-syntax-highlighter** for the in-app code preview
- Deployed on **Vercel**

## Project structure

```
src/
  components/        Retro UI components, organized by category
    Buttons/  Cards/  Inputs/  Loaders/  Switch/  Tables/  ...
    AppUI/             Site chrome (Navbar, Footer, ErrorBoundary, ...)
    showcase/          Shared showcase layout primitives
  pages/             Standalone route components + per-category showcases
  pagesComponents/   Full page-template examples + their showcase pages
  data/components/   Component metadata/registry, exported by category
  data/releases.js   Canonical release log (drives /release-notes + badges)
  hooks/             useCopyToClipboard, useDocumentMeta, useScrollToTop
  lib/               theme.js, utils.js, animations.js, constants.js
  router.jsx         TanStack Router config (root layout + all routes)
```

See [CLAUDE.md](./CLAUDE.md) for deeper architecture notes.

## Adding a new component

1. Create the component file under the right category folder, e.g.
   `src/components/Buttons/MyButton.jsx`.
2. Register it in the corresponding data file, e.g.
   `src/data/components/buttons.js`.
3. (Optional) Add a `NEW` / `UPDATED` flag for the next release in
   `src/data/releases.js` under `components: { new: [...] }`.

The showcase page picks it up automatically from the data file.

## Adding a new component category

1. Create `src/components/<Category>/` with the components and an `index.js`.
2. Create `src/data/components/<category>.js` exporting the array.
3. Create `src/pages/<Category>Showcase.jsx` using the shared
   `ComponentShowcasePage` wrapper from `src/components/showcase/`.
4. Register the route in `src/router.jsx`.
5. Append the entry to `public/sitemap.xml`.

## Releases

Releases are tracked in two places — kept in sync manually for now:

- [`src/data/releases.js`](./src/data/releases.js) — source of truth. Powers the
  `/release-notes` page, the version string in the Navbar marquee, and `NEW`/
  `UPDATED` badges on showcase cards.
- [`CHANGELOG.md`](./CHANGELOG.md) — Markdown mirror for GitHub Releases and
  changelog viewers.

When publishing a release, prepend an entry to `releases.js`, copy it into
`CHANGELOG.md`, bump `package.json` version, and tag.

## Contributing

PRs welcome — read [CONTRIBUTING.md](./CONTRIBUTING.md) for branch naming,
commit conventions, and the component-add walkthrough. Bug reports and feature
requests have templates under [`.github/`](./.github).

## License

See repository for license details.
