# Changelog

All notable changes to RetroUI are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The canonical source of truth is [`src/data/releases.js`](./src/data/releases.js).
This file mirrors that data in plain Markdown for tools (GitHub Releases,
changelog viewers, etc.) that consume it directly.

## [Unreleased]

## [0.1.0] - 2026-05-27

Production-readiness pass: release tracking, per-route SEO, error boundary,
a11y linting, and richer docs.

### Added
- Release Notes page at `/release-notes`, powered by `src/data/releases.js`.
- `CHANGELOG.md` (Keep a Changelog format).
- Per-route document titles, meta descriptions, and Open Graph tags via the
  `useDocumentMeta` hook.
- Top-level `ErrorBoundary` with retro-styled fallback UI.
- `robots.txt`, `sitemap.xml`, and PWA `manifest.webmanifest`.
- Open Graph image, Twitter card meta, and multi-size favicon links in
  `index.html`.
- Security and cache headers in `vercel.json`.
- `eslint-plugin-jsx-a11y` for accessibility linting.
- NEW / UPDATED stickers on showcase cards driven by `releases.js`.
- `CONTRIBUTING.md` and `.github/` issue / PR templates.

### Changed
- `package.json` version bumped from `0.0.0` to `0.1.0`.
- `SITE_META.version` now reads from `APP_VERSION` (single source of truth).
- Navbar version marquee links to `/release-notes`.
- `README.md` rewritten with quickstart, project structure, and contribution
  guide.

## [0.0.4] - 2026-05-20
### Added
- New showcase components across the catalog.
- Additional full-page templates under `/pages`.

## [0.0.3] - 2026-05-10
### Changed
- Whole-site visual overhaul toward the 90s zine / faded newsprint aesthetic.

## [0.0.2] - 2026-04-28
### Changed
- Iterated on Page Showcase layout and styling.

## [0.0.1] - 2026-04-15
### Added
- Initial component categories: buttons, cards, inputs, loaders, switches,
  navbars, footers, tables, avatars, signin, signup, pricing.
- Initial page templates: home, about, service, contact, dashboard, error,
  ecommerce, blog.
- TanStack Router with lazy-loaded routes and dark mode toggle.
