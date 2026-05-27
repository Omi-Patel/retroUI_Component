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

## Adding a new component variant

1. Drop the JSX in `src/components/<Category>/MyComponent.jsx`.
2. Register it in `src/data/components/<category>.js` so the showcase picks it
   up.
3. Mirror the existing components' code-as-string format — the showcase
   displays this verbatim via `react-syntax-highlighter`.

## Adding a new component category

1. `src/components/<Category>/` with the JSX files and an `index.js`.
2. `src/data/components/<category>.js` exporting the array.
3. `src/pages/<Category>Showcase.jsx` using the `ComponentShowcasePage`
   wrapper from `src/components/showcase/`.
4. Register the route in `src/router.jsx`.
5. Append the URL to `public/sitemap.xml`.

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
