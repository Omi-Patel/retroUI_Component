/**
 * Canonical release log for RetroUI.
 *
 * This file is the single source of truth for:
 *   - The /release-notes page
 *   - The version string shown in the Navbar marquee
 *   - NEW / UPDATED badges on showcase cards (see lib/componentStatus.js)
 *
 * CHANGELOG.md mirrors this file in Keep-a-Changelog format. When you publish
 * a release, prepend a new entry here and copy it into CHANGELOG.md.
 *
 * Entry shape:
 *   {
 *     version:    "0.1.0",
 *     date:       "2026-05-27",            // ISO date
 *     summary:    "One-line release blurb.",
 *     changes:    { added: [], changed: [], fixed: [], removed: [] },
 *     components: { new: [], updated: [] } // component names (optional)
 *   }
 */

export const APP_VERSION = "0.1.0";

export const releases = [
  {
    version: "0.1.0",
    date: "2026-05-27",
    summary:
      "Production-readiness pass: release tracking, per-route SEO, error boundary, a11y linting, and richer docs.",
    changes: {
      added: [
        "Release Notes page at /release-notes, powered by src/data/releases.js.",
        "CHANGELOG.md (Keep a Changelog format).",
        "Per-route document titles, meta descriptions, and Open Graph tags via the useDocumentMeta hook.",
        "Top-level ErrorBoundary with retro-styled fallback UI.",
        "robots.txt, sitemap.xml, and PWA manifest.webmanifest.",
        "Open Graph image, Twitter card meta, and multi-size favicon links in index.html.",
        "Security and cache headers in vercel.json.",
        "eslint-plugin-jsx-a11y for accessibility linting.",
        "NEW / UPDATED stickers on showcase cards driven by releases.js.",
        "CONTRIBUTING.md and .github issue / PR templates.",
      ],
      changed: [
        "package.json version bumped from 0.0.0 to 0.1.0.",
        "SITE_META.version now reads from APP_VERSION (single source of truth).",
        "Navbar version marquee links to /release-notes.",
        "README.md rewritten with quickstart, project structure, and contribution guide.",
      ],
      fixed: [],
      removed: [],
    },
    components: { new: [], updated: [] },
  },
  {
    version: "0.0.4",
    date: "2026-05-20",
    summary: "Expanded the component and page catalog.",
    changes: {
      added: [
        "New showcase components across the catalog.",
        "Additional full-page templates under /pages.",
      ],
      changed: [],
      fixed: [],
      removed: [],
    },
    components: { new: [], updated: [] },
  },
  {
    version: "0.0.3",
    date: "2026-05-10",
    summary: "Site-wide visual revamp.",
    changes: {
      added: [],
      changed: [
        "Whole-site visual overhaul toward the 90s zine / faded newsprint aesthetic.",
      ],
      fixed: [],
      removed: [],
    },
    components: { new: [], updated: [] },
  },
  {
    version: "0.0.2",
    date: "2026-04-28",
    summary: "Page Showcase polish.",
    changes: {
      added: [],
      changed: ["Iterated on Page Showcase layout and styling."],
      fixed: [],
      removed: [],
    },
    components: { new: [], updated: [] },
  },
  {
    version: "0.0.1",
    date: "2026-04-15",
    summary: "Initial public release.",
    changes: {
      added: [
        "Initial component categories: buttons, cards, inputs, loaders, switches, navbars, footers, tables, avatars, signin, signup, pricing.",
        "Initial page templates: home, about, service, contact, dashboard, error, ecommerce, blog.",
        "TanStack Router with lazy-loaded routes and dark mode toggle.",
      ],
      changed: [],
      fixed: [],
      removed: [],
    },
    components: { new: [], updated: [] },
  },
];
