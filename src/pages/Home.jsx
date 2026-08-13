import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Github,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useCopyToClipboard, useDocumentMeta, useGitHubStars } from "../hooks";
import { SITE_META, SOCIAL_LINKS } from "../lib/constants";
import { COMPONENT_REGISTRY, PAGE_REGISTRY } from "../lib/registries";

const COMPONENT_VARIANT_COUNT = COMPONENT_REGISTRY.reduce(
  (sum, component) => sum + (component.count || 0),
  0,
);
const PAGE_VARIANT_COUNT = PAGE_REGISTRY.reduce(
  (sum, page) => sum + (page.count || 0),
  0,
);

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

const CATEGORIES = HIGHLIGHTED_PATHS.map((slug) =>
  COMPONENT_REGISTRY.find((component) => component.path === slug),
).filter(Boolean);

const PRINCIPLES = [
  {
    Icon: Code2,
    number: "01",
    title: "Readable by default",
    body: "Every component is ordinary React and Tailwind. No private API, generated wrapper, or dependency maze to decode.",
  },
  {
    Icon: Layers3,
    number: "02",
    title: "Made to be adapted",
    body: "Copy the exact source into your project, keep the pieces you need, and tune the visual language to your product.",
  },
  {
    Icon: ShieldCheck,
    number: "03",
    title: "Character with restraint",
    body: "The nostalgic details are deliberate, while responsive behavior, accessibility, and hierarchy stay thoroughly modern.",
  },
];

const WORKFLOW_CODE = `// 01 · copy a variant from the library
import { RetroButton } from "./components/RetroButton";

// 02 · use it like ordinary React
export function CheckoutAction() {
  return <RetroButton>Complete order</RetroButton>;
}

// 03 · edit the source until it feels like yours`;

export default function Home() {
  const { stars } = useGitHubStars({ fallback: 9 });
  const starsLabel = stars.toLocaleString();
  const [copied, copy] = useCopyToClipboard();

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
      <section className="relative overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px lg:block"
          style={{ background: "var(--border)" }}
        />
        <div className="site-container grid gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.11em]"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <Sparkles className="h-3 w-3" /> Open-source React UI kit
              </span>
              <Link
                to="/release-notes"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors hover:!text-[var(--fg)]"
                style={{ color: "var(--muted)" }}
              >
                {SITE_META.version} is live <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <h1
              className="display max-w-[720px] text-[49px] leading-[0.98] sm:text-[70px] lg:text-[76px]"
              style={{ color: "var(--fg)" }}
            >
              Retro character.
              <br />
              <span className="display-italic" style={{ color: "var(--accent)" }}>
                Production discipline.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[16px] leading-7 sm:text-[17px]" style={{ color: "var(--muted)" }}>
              A considered collection of React components for products that need more personality than another default design system—without sacrificing clarity or control.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/components" className="site-button-primary">
                Explore components <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/getting-started" className="site-button-secondary">
                Read the setup guide
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px]" style={{ color: "var(--muted)" }}>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" style={{ color: "var(--ok)" }} /> MIT licensed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" style={{ color: "var(--ok)" }} /> Copy-paste source
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" style={{ color: "var(--ok)" }} /> React + Tailwind
              </span>
            </div>
          </div>

          <div className="flex items-center lg:pl-6">
            <div className="site-card w-full overflow-hidden">
              <div className="flex items-center justify-between border-b px-5 py-4" style={{ borderColor: "var(--border)" }}>
                <div>
                  <p className="text-[13px] font-bold" style={{ color: "var(--fg)" }}>Find the right building block</p>
                  <p className="mt-0.5 text-[11px]" style={{ color: "var(--muted)" }}>Browse by the job your interface needs to do.</p>
                </div>
                <span className="label" style={{ color: "var(--muted)" }}>Library / 01</span>
              </div>

              <div className="p-4 sm:p-5">
                <button
                  type="button"
                  className="site-input flex items-center gap-2.5 px-3 text-left"
                  onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
                >
                  <Search className="h-3.5 w-3.5" style={{ color: "var(--muted)" }} />
                  <span className="flex-1" style={{ color: "var(--muted)" }}>Search components, patterns, pages…</span>
                  <kbd>⌘K</kbd>
                </button>

                <div className="mt-4 space-y-1.5">
                  {CATEGORIES.slice(0, 5).map((category, index) => (
                    <Link
                      key={category.path}
                      to={`/components/${category.path}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-[var(--surface-2)]"
                    >
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ background: index === 0 ? "var(--accent-soft)" : "var(--surface-2)", color: index === 0 ? "var(--accent)" : "var(--fg)" }}
                      >
                        <category.Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13.5px] font-semibold" style={{ color: "var(--fg)" }}>{category.name}</span>
                        <span className="block truncate text-[11px]" style={{ color: "var(--muted)" }}>{category.description}</span>
                      </span>
                      <span className="mono text-[10px]" style={{ color: "var(--muted)" }}>{category.count}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-30 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t px-5 py-3" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
                <span className="mono text-[10px]" style={{ color: "var(--muted)" }}>copy → paste → adapt</span>
                <Link to="/components" className="text-[11px] font-bold" style={{ color: "var(--accent)" }}>View all {COMPONENT_REGISTRY.length} categories</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="site-container grid grid-cols-2 divide-x divide-y sm:grid-cols-4 sm:divide-y-0" style={{ borderColor: "var(--border)" }}>
          {[
            [`${COMPONENT_VARIANT_COUNT}`, "Component variants"],
            [`${PAGE_VARIANT_COUNT}`, "Page templates"],
            [starsLabel, "GitHub stars", Star],
            ["MIT", "Free forever"],
          ].map(([value, label, Icon], index) => (
            <div key={label} className={`px-4 py-6 sm:px-6 sm:py-7 ${index === 2 ? "sm:border-l" : ""}`} style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2">
                <span className="display text-[26px] tracking-[-0.04em]" style={{ color: "var(--fg)" }}>{value}</span>
                {Icon && <Icon className="h-3.5 w-3.5" style={{ color: "var(--accent)" }} />}
              </div>
              <p className="mt-0.5 text-[11.5px] font-medium" style={{ color: "var(--muted)" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="The working principles"
            title={<>Opinionated enough to be useful.<br /><span className="display-italic" style={{ color: "var(--muted)" }}>Simple enough to make yours.</span></>}
            description="The library is designed like a good reference book: easy to scan, specific when you need it, and never between you and the work."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PRINCIPLES.map(({ Icon, number, title, body }) => (
              <article key={title} className="site-card-flat p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="mono text-[10px]" style={{ color: "var(--muted)" }}>{number} / 03</span>
                </div>
                <h3 className="mt-8 text-[18px] font-bold tracking-[-0.025em]" style={{ color: "var(--fg)" }}>{title}</h3>
                <p className="mt-2 text-[13.5px] leading-6" style={{ color: "var(--muted)" }}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-muted">
        <div className="site-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Component library"
              title={<>Start with the familiar.<br /><span className="display-italic" style={{ color: "var(--muted)" }}>Finish somewhere distinctive.</span></>}
              description="The everyday interface pieces, treated with more care and a little less sameness."
            />
            <Link to="/components" className="site-button-secondary shrink-0">
              See the complete library <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category, index) => (
              <Link key={category.path} to={`/components/${category.path}`} className="catalog-card group p-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--surface-2)", color: "var(--fg)" }}>
                    <category.Icon className="h-4 w-4" />
                  </span>
                  <span className="mono text-[10px]" style={{ color: "var(--muted)" }}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 text-[15px] font-bold" style={{ color: "var(--fg)" }}>{category.name}</h3>
                <div className="mt-1.5 flex items-center justify-between text-[11.5px]" style={{ color: "var(--muted)" }}>
                  <span>{category.count} variants</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="A lighter workflow"
              title={<>Use the source.<br /><span className="display-italic" style={{ color: "var(--accent)" }}>Lose the lock-in.</span></>}
              description="There is no package abstraction to work around. What you copy is what your application runs, so every detail remains inspectable and editable."
            />
            <ol className="mt-9 space-y-5">
              {[
                ["Browse", "Compare live variants in the context of the full library."],
                ["Copy", "Take one self-contained JSX file and its explicit dependencies."],
                ["Adapt", "Replace colors, type, motion, or structure until the result belongs to your product."],
              ].map(([title, body], index) => (
                <li key={title} className="flex gap-4">
                  <span className="mono mt-0.5 text-[10px] font-semibold" style={{ color: "var(--accent)" }}>0{index + 1}</span>
                  <div>
                    <p className="text-[14px] font-bold" style={{ color: "var(--fg)" }}>{title}</p>
                    <p className="mt-1 text-[13px] leading-6" style={{ color: "var(--muted)" }}>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="site-card overflow-hidden">
            <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="mono text-[10px] font-medium" style={{ color: "var(--muted)" }}>CheckoutAction.jsx</span>
              </div>
              <button
                type="button"
                onClick={() => copy(WORKFLOW_CODE)}
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold"
                style={{ color: copied ? "var(--ok)" : "var(--muted)" }}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied" : "Copy example"}
              </button>
            </div>
            <pre className="nice-scroll overflow-x-auto px-5 py-6 text-[12px] leading-6 sm:px-7 sm:py-8" style={{ color: "var(--fg)", fontFamily: "'IBM Plex Mono', monospace" }}>
              {WORKFLOW_CODE}
            </pre>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[20px] px-6 py-12 sm:px-12 sm:py-16" style={{ background: "var(--fg)", color: "var(--bg)" }}>
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="label" style={{ color: "color-mix(in srgb, var(--bg) 62%, transparent)" }}>Ready when you are</span>
                <h2 className="display mt-4 max-w-2xl text-[34px] leading-[1.05] sm:text-[48px]">
                  Build something people will remember for the right reasons.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/components" className="site-button-primary">Browse components <ArrowRight className="h-3.5 w-3.5" /></Link>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="site-button-secondary"
                  style={{ background: "transparent", borderColor: "color-mix(in srgb, var(--bg) 30%, transparent)", color: "var(--bg)" }}
                >
                  <Github className="h-3.5 w-3.5" /> Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left", number }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      {(eyebrow || number) && (
        <div className={`${align === "center" ? "justify-center" : ""} section-kicker`}>
          {number ? `${number} · ` : ""}{eyebrow}
        </div>
      )}
      <h2 className="display text-[34px] leading-[1.05] sm:text-[46px]" style={{ color: "var(--fg)" }}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[14.5px] leading-7 sm:text-[15px]" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
