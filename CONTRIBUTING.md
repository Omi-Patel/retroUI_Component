# Contributing to retroUI

Thanks for considering a contribution! retroUI lives by a few simple rules.

## Ground rules

- **Be kind.** Reviews focus on the code, not the contributor.
- **Match the aesthetic.** retroUI is a "90s zine / faded newsprint" library —
  new components should feel at home next to existing ones.
- **Keep it copy-paste-able.** No hidden dependencies, no global state, no
  config flags. A user should be able to paste your component into any React
  project and have it work.

## Setup

```bash
git clone https://github.com/Omi-Patel/retroUI_Component.git
cd retroUI_Component
npm install
npm run dev
```

## Branch + commit conventions

We loosely follow [Conventional Commits](https://www.conventionalcommits.org).
This is not enforced yet, but it makes future automated changelog tooling
trivial to bolt on.

- `feat: add NeonNavbar component`
- `fix: signin form validation`
- `docs: update README quickstart`
- `chore: bump deps`

Branch names: `feature/<thing>`, `fix/<thing>`, `docs/<thing>`.

## Before you push

```bash
npm run lint    # ESLint (incl. jsx-a11y a11y checks)
npm run build   # Vite production build
```

Both must pass. Warnings are okay; errors are not.

## Architecture in one paragraph

The showcase is **data-driven**. `src/lib/registries.jsx` (`COMPONENT_REGISTRY`
and `PAGE_REGISTRY`) is the single source of truth; `src/data/components/index.js`
(`componentLoaders`) and `src/data/pages/index.js` (`pageLoaders`) map each URL
slug to a lazily-imported data module. Two generic param routes —
`/components/$slug` (`src/pages/ComponentShowcaseRoute.jsx`) and `/pages/$slug`
(`src/pagesComponents/PageShowcase/PageShowcaseRoute.jsx`) — resolve the slug
against the registry and render the shared chrome (`ShowcaseLayout`) + the
shared renderer (`ComponentShowcasePage` / `PageShowcasePage`). **There is no
per-category page file and no per-category router entry** — adding a category is
data entry, not new wiring.

## Adding a new component variant

1. Drop the JSX in `src/components/<Category>/MyComponent.jsx`. It must be
   self-contained (only React / Tailwind / the libs every component already
   uses) so users can copy the single file.
2. Register it in `src/data/components/<category>.js`. Add a `?raw` import of the
   component next to its normal import, then push a variant object:
   ```js
   import MyComponent from '../../components/<Category>/MyComponent';
   import MyComponentSrc from '../../components/<Category>/MyComponent.jsx?raw';
   // ...
   { name: 'MyComponent', component: MyComponent, code: MyComponentSrc },
   ```
   `component` is rendered live in the Preview tab; `code` is the `?raw` source
   shown verbatim in the Code tab. **Do not hand-write a code string** — the
   `?raw` import keeps the displayed code identical to the real source.
3. If the change ships in a release, add the variant `name` to `components.new`
   (or `components.updated`) on the next `src/data/releases.js` entry.

## Adding a new component category

No new page or route is required — register the category in the four data spots:

1. `src/components/<Category>/` with the self-contained JSX files and an
   `index.js`.
2. `src/data/components/<category>.js` exporting `<category>Components` (variants
   in the `{ name, component, code }` shape above).
3. Add a slug → loader entry to `componentLoaders` in
   `src/data/components/index.js`:
   ```js
   <slug>: () => import('./<category>').then((m) => m.<category>Components),
   ```
4. Add an entry to `COMPONENT_REGISTRY` in `src/lib/registries.jsx`, where
   `path` is the URL slug and `folder` is the `src/components/` directory name:
   ```js
   { name: "...", path: "<slug>", folder: "<Category>", Icon: SomeLucideIcon, count: N, category: "...", description: "..." },
   ```
5. Append the `/components/<slug>` URL to `public/sitemap.xml`.

The sidebar, the `/components` index, and the `/components/<slug>` route all read
`COMPONENT_REGISTRY`, so they update together.

## Adding a new page template

Same pattern, one slug at a time:

1. Build the template under `src/pagesComponents/<Name>Page/`.
2. Create `src/data/pages/<slug>.js` exporting a default
   `{ slug, title, description, variants }` (each variant
   `{ name, label, component, githubUrl }`).
3. Add a slug → loader entry to `pageLoaders` in `src/data/pages/index.js`.
4. Add an entry to `PAGE_REGISTRY` in `src/lib/registries.jsx`.
5. Append the `/pages/<slug>` URL to `public/sitemap.xml`.

## Cutting a release

Releases are tracked in [`src/data/releases.js`](./src/data/releases.js).
That file drives:

- The `/release-notes` page.
- The version string in the Navbar marquee.
- `NEW` / `UPDATED` badges on showcase cards.

When publishing:

1. Prepend a new entry to `releases.js` with `version`, `date`, `summary`,
   `changes`, and optional `components: { new: [...], updated: [...] }`.
2. Bump the `APP_VERSION` constant in `releases.js`.
3. Bump `version` in `package.json` to match.
4. Mirror the entry into `CHANGELOG.md` in Keep-a-Changelog format.
5. Tag the commit: `git tag v<x.y.z>` and push the tag.
6. Cut a GitHub Release with the same notes.

## Accessibility

retroUI aims for AA color contrast and full keyboard navigation. We lint with
`eslint-plugin-jsx-a11y`. If you add new interactive elements, please:

- Give buttons accessible labels (visible text or `aria-label`).
- Provide `alt` on every `<img>`.
- Ensure focus rings remain visible.
- Use semantic HTML (`<button>` for actions, `<a>` for navigation).

## Reporting bugs and requesting features

Use the templates under [`.github/ISSUE_TEMPLATE/`](./.github/ISSUE_TEMPLATE).
A minimal reproduction (CodeSandbox / StackBlitz / repo branch) makes bugs ten
times easier to fix.
