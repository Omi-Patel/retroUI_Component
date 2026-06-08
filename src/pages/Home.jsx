import { useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useDocumentMeta, useGitHubStars } from "../hooks";
import { SITE_META } from "../lib/constants";
import { COMPONENT_REGISTRY, PAGE_REGISTRY } from "../lib/registries";
import {
  ArrowRight,
  Github,
  Star,
  Sparkles,
  Code2,
  Palette,
  Zap,
  Layers,
  ToggleRight,
  Box,
  Copy,
} from "lucide-react";

const COMPONENT_VARIANT_COUNT = COMPONENT_REGISTRY.reduce(
  (sum, c) => sum + (c.count || 0),
  0,
);
const COMPONENT_CATEGORY_COUNT = COMPONENT_REGISTRY.length;
const PAGE_VARIANT_COUNT = PAGE_REGISTRY.reduce(
  (sum, p) => sum + (p.count || 0),
  0,
);
const PAGE_CATEGORY_COUNT = PAGE_REGISTRY.length;

const buildStats = (starsLabel) => [
  {
    v: `${COMPONENT_VARIANT_COUNT}`,
    l: "Components",
    sub: `across ${COMPONENT_CATEGORY_COUNT} categories`,
  },
  {
    v: `${PAGE_VARIANT_COUNT}`,
    l: "Page templates",
    sub: `${PAGE_CATEGORY_COUNT} categories · production-ready`,
  },
  { v: starsLabel, l: "GitHub stars", sub: "live from GitHub · star us!" },
  { v: "MIT", l: "Open source", sub: "forever free" },
];

const FEATURES = [
  {
    Icon: Code2,
    title: "Copy & paste",
    body: "No npm install required. Drop the JSX into your project and tweak the Tailwind classes.",
  },
  {
    Icon: Palette,
    title: "Tailwind native",
    body: "Built on Tailwind utilities. Your design tokens stay in your tailwind.config — no opaque CSS.",
  },
  {
    Icon: Zap,
    title: "Zero runtime",
    body: "No state, no providers. Components are dumb by default, composable by design.",
  },
  {
    Icon: Layers,
    title: "Composable",
    body: "Each block is single-purpose. Mix and match to build complete page layouts in minutes.",
  },
  {
    Icon: ToggleRight,
    title: "Dark mode",
    body: "Every component ships with light & dark variants tested for AA contrast.",
  },
  {
    Icon: Box,
    title: "Page templates",
    body: `${PAGE_VARIANT_COUNT} pre-composed templates across ${PAGE_CATEGORY_COUNT} categories — landing, dashboard, blog, ecommerce, auth, docs, and more.`,
  },
];

// Show a curated 8-card preview from the canonical component registry —
// keeps the home page in sync as new categories are added.
const HIGHLIGHTED_PATHS = [
  "buttons",
  "cards",
  "inputs",
  "tables",
  "switch",
  "loaders",
  "navbars",
  "footers",
];
const CATEGORIES = HIGHLIGHTED_PATHS.map((slug) => {
  const entry = COMPONENT_REGISTRY.find((c) => c.path === slug);
  return entry
    ? {
        name: entry.name,
        Icon: entry.Icon,
        count: entry.count,
        path: `/components/${entry.path}`,
      }
    : null;
}).filter(Boolean);

export default function Home() {
  const navigate = useNavigate();
  const { stars, loading: starsLoading } = useGitHubStars({ fallback: 9 });
  const starsLabel = starsLoading ? "…" : stars.toLocaleString();
  const STATS = buildStats(starsLabel);

  useDocumentMeta({
    title: `${SITE_META.name} | ${SITE_META.tagline}`,
    description: SITE_META.description,
    canonical: SITE_META.url,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="absolute inset-0 bg-halftone pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="sticker">
                <Sparkles className="w-[10px] h-[10px]" />
                NEW · {SITE_META.version}
              </span>
              <Link
                to="/release-notes"
                className="text-[13px] retro-link"
                style={{ color: "var(--muted)" }}
              >
                Read the release notes →
              </Link>
            </div>

            <h1
              className="display text-[52px] sm:text-[80px] leading-[0.96]"
              style={{ color: "var(--fg)", letterSpacing: "-0.035em" }}
            >
              The{" "}
              <span className="display-italic" style={{ color: "var(--muted)" }}>
                retro
              </span>{" "}
              UI library
              <br />
              built for{" "}
              <span className="relative inline-block">
                <span style={{ position: "relative", zIndex: 1 }}>modern</span>
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: -4,
                    right: -4,
                    bottom: 6,
                    height: 12,
                    background: "var(--surface-2)",
                    zIndex: 0,
                    transform: "skew(-2deg)",
                  }}
                />
              </span>{" "}
              apps.
            </h1>

            <p
              className="mt-7 text-[17px] sm:text-[18.5px] leading-[1.55] max-w-2xl"
              style={{ color: "var(--muted)" }}
            >
              Copy-paste React components with nostalgic charm and modern
              ergonomics.
              <br />
              <span className="display-italic" style={{ color: "var(--fg)" }}>
                Open source.
              </span>{" "}
              Fully accessible. Styled with Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate({ to: "/components" })}
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md text-[15px] font-medium transition-opacity hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-fg)",
                }}
              >
                Browse components
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://github.com/Omi-Patel/retroUI_Component"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md text-[15px] font-medium transition-colors hover:bg-[var(--surface-2)]"
                style={{ color: "var(--fg)" }}
              >
                <Github className="w-3.5 h-3.5" />
                Star on GitHub
                <span
                  className="ml-1 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] mono"
                  style={{ background: "var(--surface-2)", color: "var(--muted)" }}
                >
                  <Star className="w-[10px] h-[10px]" /> {starsLabel}
                </span>
              </a>
            </div>

            {/* code snippet */}
            <div className="mt-12 max-w-2xl">
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "3px 3px 0 0 var(--border-strong)",
                }}
              >
                <div
                  className="flex items-center justify-between px-3 py-2"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex h-2 w-2 rounded-full"
                      style={{ background: "#e07b67" }}
                    />
                    <span
                      className="inline-flex h-2 w-2 rounded-full"
                      style={{ background: "#e3b762" }}
                    />
                    <span
                      className="inline-flex h-2 w-2 rounded-full"
                      style={{ background: "#7da567" }}
                    />
                    <span
                      className="label ml-3"
                      style={{ color: "var(--muted)" }}
                    >
                      how it works
                    </span>
                  </div>
                  <button
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium opacity-60 hover:opacity-100 mono"
                    style={{ color: "var(--fg)" }}
                  >
                    <Copy className="w-[11px] h-[11px]" /> COPY
                  </button>
                </div>
                <pre
                  className="px-4 py-4 mono text-[13.5px] leading-relaxed overflow-x-auto"
                  style={{ color: "var(--fg)" }}
                >
                  <span style={{ color: "var(--muted)" }}># </span>1. browse the gallery{"\n"}
                  <span style={{ color: "var(--muted)" }}># </span>2. click <span style={{ color: "var(--fg)" }}>Copy</span> on any variant{"\n"}
                  <span style={{ color: "var(--muted)" }}># </span>3. paste into your project{"\n"}
                  <span style={{ color: "var(--ok)", opacity: 0.8 }}>✓</span>
                  <span style={{ color: "var(--muted)" }}>
                    {" "}no install · no lock-in
                  </span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-lg overflow-hidden"
            style={{ background: "var(--border)" }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.l}
                className="px-6 py-7"
                style={{ background: "var(--bg)" }}
              >
                <div
                  className="label mb-2 inline-flex items-center gap-1.5"
                  style={{ color: "var(--muted)" }}
                >
                  <span className="chapter-num text-[14px]">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div
                  className="display text-[40px] leading-none"
                  style={{ color: "var(--fg)" }}
                >
                  {s.v}
                </div>
                <div className="text-[13px] mt-1.5" style={{ color: "var(--fg)" }}>
                  {s.l}
                </div>
                <div
                  className="text-[11.5px] mt-0.5 display-italic"
                  style={{ color: "var(--muted)" }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24">
          <SectionHeading
            number="01"
            eyebrow="Why retroui"
            title={
              <>
                Nostalgic aesthetics.{" "}
                <span className="display-italic" style={{ color: "var(--muted)" }}>
                  Modern engineering.
                </span>
              </>
            }
            description="Every component is unstyled at its core and decorated with the retro look — strip it back or restyle it without rewriting your app."
          />

          <div
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px rounded-lg overflow-hidden"
            style={{ background: "var(--border)" }}
          >
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="p-8"
                style={{ background: "var(--bg)" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded"
                    style={{
                      background: "var(--surface)",
                      color: "var(--fg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <f.Icon className="w-4 h-4" />
                  </div>
                  <span className="label" style={{ color: "var(--muted)" }}>
                    0{i + 1}/06
                  </span>
                </div>
                <h3
                  className="display text-[18px] tracking-tight mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <SectionHeading
              number="02"
              eyebrow="The library"
              title={
                <>
                  {COMPONENT_CATEGORY_COUNT} categories.
                  <br />
                  <span
                    className="display-italic"
                    style={{ color: "var(--muted)" }}
                  >
                    {COMPONENT_VARIANT_COUNT} components.
                  </span>
                </>
              }
              description="Built for landing pages, dashboards, and side projects you actually want to ship."
            />
            <Link
              to="/components"
              className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-[13.5px] font-medium transition-colors hover:bg-[var(--surface-2)]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--fg)",
              }}
            >
              View all components
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.name}
                to={cat.path}
                className="group text-left rounded-lg p-5 transition-all relative block"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "3px 3px 0 0 var(--border-strong)";
                  e.currentTarget.style.transform = "translate(-1px, -1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translate(0, 0)";
                }}
              >
                <div className="flex items-start justify-between mb-7">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded"
                    style={{
                      background: "var(--surface)",
                      color: "var(--fg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <cat.Icon className="w-4 h-4" />
                  </div>
                  <span className="label" style={{ color: "var(--muted)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div
                  className="display text-[18px] tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  {cat.name}
                </div>
                <div
                  className="text-[12px] mt-1 mono flex items-center justify-between"
                  style={{ color: "var(--muted)" }}
                >
                  <span>{cat.count} variants</span>
                  <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALL */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                number="03"
                eyebrow="Getting started"
                title={
                  <>
                    From zero to{" "}
                    <span
                      className="display-italic"
                      style={{ color: "var(--muted)" }}
                    >
                      ship
                    </span>
                    <br />
                    in 5 minutes.
                  </>
                }
              />
              <ol className="mt-12 space-y-7">
                {[
                  {
                    t: "Browse the gallery",
                    d: "Find the component that matches your layout. Live preview & code on every page.",
                  },
                  {
                    t: "Copy the snippet",
                    d: "One-click copy. Every component is a single self-contained JSX file with Tailwind classes.",
                  },
                  {
                    t: "Paste and customize",
                    d: "Drop it into your project. Override the Tailwind tokens to match your brand.",
                  },
                ].map((s, i) => (
                  <li key={i} className="flex gap-5">
                    <span
                      className="flex-shrink-0 chapter-num text-[40px] leading-none"
                      style={{ color: "var(--muted)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1">
                      <div
                        className="display text-[18px] mb-1.5"
                        style={{ color: "var(--fg)" }}
                      >
                        {s.t}
                      </div>
                      <div
                        className="text-[14px] leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        {s.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div
              className="rounded-lg overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "4px 4px 0 0 var(--border-strong)",
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: "#e07b67" }}
                  />
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: "#e3b762" }}
                  />
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: "#7da567" }}
                  />
                </div>
                <span
                  className="label ml-2"
                  style={{ color: "var(--muted)" }}
                >
                  RetroButton.jsx
                </span>
              </div>
              <pre
                className="px-5 py-5 mono text-[12.5px] leading-[1.75] overflow-x-auto"
                style={{ color: "var(--fg)" }}
              >
{`import { motion } from "framer-motion";

export function RetroButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className="px-6 py-3 bg-black text-white
                 border-2 border-black rounded-md
                 shadow-[4px_4px_0_0_#000]
                 hover:shadow-[6px_6px_0_0_#000]
                 transition-all"
      {...props}
    >
      {children}
    </motion.button>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24">
          <div
            className="rounded-xl px-8 py-16 sm:px-14 sm:py-20 text-center relative overflow-hidden"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
            <div className="relative">
              <div className="ornament-hr mb-8 max-w-xs mx-auto">
                <span className="label">FOR DEVELOPERS WHO SHIP</span>
              </div>
              <h2
                className="display text-[36px] sm:text-[52px] tracking-tight leading-[1.05]"
                style={{ color: "var(--fg)" }}
              >
                Ready to build
                <br />
                <span
                  className="display-italic"
                  style={{ color: "var(--muted)" }}
                >
                  something nostalgic?
                </span>
              </h2>
              <p
                className="mt-5 text-[16px] max-w-xl mx-auto"
                style={{ color: "var(--muted)" }}
              >
                Free, open-source, and improving every week. Start with a single
                component or pull a whole page template.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => navigate({ to: "/components" })}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md text-[15px] font-medium transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-fg)",
                  }}
                >
                  Get started
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://github.com/Omi-Patel/retroUI_Component"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md text-[15px] font-medium transition-colors hover:bg-[var(--surface-2)]"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Section heading (shared) ---------- */
export function SectionHeading({ eyebrow, title, description, align = "left", number }) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}
    >
      {(eyebrow || number) && (
        <div
          className={`flex items-center gap-3 mb-5 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {number && (
            <span
              className="sticker-flat"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
            >
              CH. {number}
            </span>
          )}
          {eyebrow && (
            <div
              className="label inline-flex items-center gap-2"
              style={{ color: "var(--muted)" }}
            >
              <span aria-hidden style={{ fontSize: 13 }}>
                ※
              </span>
              <span>[ {eyebrow} ]</span>
            </div>
          )}
        </div>
      )}
      <h2
        className="display text-[34px] sm:text-[44px] leading-[1.02]"
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 text-[15.5px] leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
