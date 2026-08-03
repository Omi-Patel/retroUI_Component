# Changelog

All notable changes to RetroUI are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The canonical source of truth is [`src/data/releases.js`](./src/data/releases.js).
This file mirrors that data in plain Markdown for tools (GitHub Releases,
changelog viewers, etc.) that consume it directly.

## [Unreleased]

## [0.6.0] - 2026-08-03

The Builder Pack — eight new categories that close the everyday gaps, plus two
showpieces.

### Added
- **Select** (`/components/selects`) — `NewsprintSelect`, `TerminalCombobox`
  (type-to-filter), `TagMultiSelect` (sticker chips), `ChannelDialSelect`
  (TV dial).
- **Textarea** (`/components/textareas`) — `TypewriterTextarea` (ruled paper),
  `TelegramTextarea` (priced by the word), `StickyNoteTextarea`,
  `TerminalTextarea`.
- **Sidebar** (`/components/sidebars`) — `FileDrawerSidebar`, `SlideOutDrawer`
  (accessible overlay drawer), `BinderTabSidebar`, `TerminalTreeSidebar`.
- **File Upload** (`/components/file-uploads`) — `FloppyDropzone` (drag & drop),
  `ScannerUpload` (animated scan progress), `MailSlotUpload`, `PolaroidUpload`
  (image previews).
- **Timeline** (`/components/timelines`) — `NewspaperTimeline`,
  `TicketStubTimeline`, `TerminalLogTimeline`, `PackageTrackingTimeline`.
- **Empty State** (`/components/empty-states`) — `EmptyDrawerState`,
  `StaticTVEmptyState` (animated no-signal static), `EmptyMailboxState`,
  `NoResultsClassified`.
- **Media Player** (`/components/media-players`) — `CassetteDeckPlayer`
  (spinning spools), `BoomboxPlayer` (animated EQ), `RadioTunerPlayer` (moving
  dial needle), `WalkmanPlayer`.
- **Window** (`/components/windows`) — `RetroOSWindow`, `TerminalWindow`,
  `BrowserWindow95`, `AlertDialog98` (accessible system alert).

### Changed
- **Footer overhaul** — five variants redesigned around strong retro concepts:
  `BorderedFooter` (airmail envelope: par-avion stripes, perforated stamp,
  postmark), `ShadowFooter` (VHS end-credits: scanlines, tracking bar,
  color-bar sign-off), `ClassicFooter` (newspaper back page: column rules,
  clip-out subscription coupon), `NeonFooter` (flickering neon diner sign),
  `PixelFooter` (arcade game-over: score bar, level-select links, pixel
  hearts).

### Fixed
- The Getting Started link is now actually reachable — it was registered in
  unused constants instead of the navbar, footer, and command palette lists
  that render the real navigation.
- Ticker marquees no longer collapse and wrap word-by-word inside the preview —
  the track now keeps its natural width (`w-max` + `nowrap`) in all four
  ticker variants.
- `PixelFooter` referenced a non-existent `font-pixel` class; footers now use
  real Tailwind font stacks.
- Full-width components (navbars, footers) now span the entire preview — and
  the entire device frame in fullscreen — instead of shrink-wrapping to their
  content width.

## [0.5.0] - 2026-08-03

Copy-paste you can trust — a Getting Started guide, fully self-contained
component code, an accessibility pass, and the Data & App Pack.

### Added
- **Getting Started** (`/getting-started`) — a five-minute setup guide covering
  the Tailwind config, the three fonts, dark mode, the optional design tokens,
  and a troubleshooting section. Linked from the navbar and footer.
- **Data & App Pack** — four new component categories:
  - `Chart` (`/components/charts`) — `NewsprintBarChart`, `ASCIILineChart`,
    `HalftonePieChart`, `LedgerAreaChart`. Hand-rolled SVG/CSS, no chart library.
  - `Stat` (`/components/stats`) — `KPIStatCard`, `MetricTrendCard`,
    `GaugeBlock`, `LeaderboardBlock`. Dashboard/analytics blocks.
  - `Chat` (`/components/chat`) — `TeletypeChat`, `TerminalChat`,
    `MessengerChat`, `NewsprintChat`. Retro chat / AI conversation UIs.
  - `Stepper` (`/components/steppers`) — `WizardStepper`, `ReceiptCheckout`,
    `StampedForm`, `DOSSetup`. Multi-step form / wizard flows.
- **Sign in** grew from 1 to 4 variants — `TerminalSignIn` (green-phosphor
  shell login), `ArcadeSignIn` (insert-coin cabinet), `LibraryCardSignIn`
  (manila checkout card).
- `NewsprintPricing` — a classified-ads style three-tier pricing table.
- `DepartureBoardTicker` — a split-flap station departure board marquee.

### Changed
- **Every copyable component is now fully self-contained.** Dependencies on
  site-global CSS (design-token variables and helper classes like
  `marquee-track`, `ornament-hr`, `retro-link`, `mono`) were replaced with
  inline Tailwind, so pasted code renders correctly in any Tailwind project.
  This includes the Dashboard page template, which previously relied on ~130
  CSS variables.
- **Accessibility pass** across interactive components: modals close on Escape
  and ship dialog roles with initial focus; dropdowns close on Escape and
  expose listbox semantics; tabs support arrow-key navigation with proper
  tablist roles and roving tabindex; accordions announce their expanded state;
  sliders and ratings gained accessible labels.

### Fixed
- The About page quickstart linked to the old deployment URL instead of
  retro-ui.basecase.site.

## [0.4.0] - 2026-06-08

Form staples in retro dress, plus a ⌘K command palette.

### Added
- **Radio & Checkbox** (`/components/radio-checkbox`) — `StampCheckbox`,
  `PixelCheckbox`, `ChecklistGroup`, `BallotRadioGroup`, `ChipRadioGroup`,
  `CardRadioGroup`.
- **Slider** (`/components/sliders`) — `VolumeSlider`, `SteppedSlider`,
  `DualRangeSlider`, `VerticalFader`, `TickSlider`.
- **Calendar** (`/components/calendars`) — `TearOffCalendar`, `DeskCalendar`,
  `MonthPicker`, `MiniDatePicker`, `EventCalendar`.
- **Rating** (`/components/ratings`) — `StarRating`, `StampRating`, `HeartRating`,
  `EmojiRating`, `NumberPillRating`.
- **⌘K command palette** — fuzzy search + jump to any component, page, or
  section (`src/components/AppUI/CommandPalette.jsx`), wired into the navbar.

### Changed
- The navbar search box now opens the command palette instead of a placeholder
  link.

## [0.3.0] - 2026-06-08

Retro Icons gallery and the 88×31 Web Badges category — two corners of the old
web that modern component libraries forgot.

### Added
- **Icons** — a new top-level section at `/icons`: a searchable, style-filtered
  gallery of ~188 retro icons. Click any icon to copy it as a self-contained SVG
  or a ready-to-paste JSX component. 12 styles (built in `src/data/icons/`):
  `Pixel`, `Sticker`, `Halftone`, `Stamp`, `Bevel`, `Neon`, plus 5 **animated**
  styles — `Glitch`, `Marquee`, `Hologram`, `Wiggle`, `Lite-Brite` — and
  `Cross-stitch`. Animations are baked into the copied SVG.
- **Web Badge** (`/components/web-badges`) — 6 variants: `ClassicButtonStrip`,
  `BlinkieBadge`, `UnderConstructionBanner`, `AwardRibbonBadge`, `WebRingNav`,
  and `VisitorCounterBadge`.
- Live GitHub star count on the home page (GitHub API, 1-hour localStorage
  cache) replacing the previously hardcoded number.

### Changed
- Navbar and footer gain an **Icons** link alongside Components and Pages.

## [0.2.0] - 2026-05-27

Zine Spread Pack: four new component categories, five new button variants,
four new page templates, and a unified registry for `/components` and
`/pages`.

### Added
- New button variants: `GlitchButton`, `StampButton`, `MarqueeButton`, and
  `DashedButton` — registered in `src/data/components/buttons.js`.
- **Zine Spread Pack** — four new component categories that lean into the
  90s zine aesthetic:
  - `Polaroid` (`/components/polaroids`) — `PolaroidCard`, `PolaroidDeck`,
    `PolaroidStrip`, `InstantFrame`.
  - `Sticky Note` (`/components/sticky-notes`) — `PostIt`, `IndexCard`,
    `TapedMemo`, `PinnedNote`.
  - `Receipt` (`/components/receipts`) — `CartReceipt`, `OrderReceipt`,
    `TransactionSlip`, `ReturnSlip`.
  - `Ticker` (`/components/tickers`) — `BreakingNewsTicker`, `StockTicker`,
    `EmojiRibbon`.
- New `Zine Page` template (`/pages/zine`) — magazine-spread landing page
  composed from the new components.
- New page-template variants — modern grids with vintage flourishes, each
  with its own distinct visual identity:
  - `EditorialAbout` on `/pages/about` — magazine-editorial layout with
    numbered chapter sections, halftone hero, animated stat counters, and a
    framed team grid.
  - `MenuServices` on `/pages/service` — type-specimen / boutique menu with
    lettered services (A–F), italic serif accents, tag chips, and a 4-step
    process strip.
  - `TelegramContact` on `/pages/contact` — letterhead / teletype layout
    with a "transmit" form, live wire indicator, subject chips, hours table,
    and a `Reply within 24h` stamp.
- Default wireframe in `/pages` index so future templates show a sensible
  thumbnail without needing a custom SVG per route.

### Changed
- `COMPONENT_REGISTRY` in `src/lib/registries.jsx` is now the single source
  of truth for both the sidebar and the `/components` index page (gained a
  `description` field).
- `/components` and `/pages` index pages now iterate the canonical
  registries instead of hardcoded duplicate lists — no more drift when new
  categories are added.
- `getComponentRouteMeta` in `src/lib/constants.js` now reads from
  `COMPONENT_REGISTRY`.
- Corrected sidebar variant counts that had drifted from reality (Button
  5 → 9, Loader 8 → 6).

### Removed
- `COMPONENT_CATEGORIES` export from `src/lib/constants.js` (use
  `COMPONENT_REGISTRY` from `src/lib/registries.jsx`).

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
