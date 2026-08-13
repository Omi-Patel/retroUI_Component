import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  Moon,
  Package,
  Palette,
  Terminal,
  Type,
} from "lucide-react";
import { SectionHeading } from "./Home";
import { SITE_META } from "../lib/constants";
import { useDocumentMeta, useCopyToClipboard } from "../hooks";

/* ---------- Copyable snippets ---------- */

const SNIPPET_PROJECT = `npm create vite@latest my-app -- --template react
cd my-app
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p`;

const SNIPPET_FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
  rel="stylesheet"
/>`;

const SNIPPET_TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        serif: ["'Instrument Serif'", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};`;

const SNIPPET_CSS = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

const SNIPPET_ICONS = `npm install lucide-react`;

const SNIPPET_DARK_MODE = `// Anywhere in your app — a button handler, a settings menu…
document.documentElement.classList.toggle("dark");`;

const SNIPPET_TOKENS = `:root {
  --bg: #ede7d6;
  --surface: #e2dcc9;
  --surface-2: #d3cab2;
  --fg: #1c1814;
  --muted: #6e6553;
  --border: #c0b69a;
  --border-strong: #948869;
  --accent: #1c1814;
  --accent-fg: #ede7d6;
  --warning: #b45309;
  --ok: #65a30d;
  --sticker: #e07b67;
  --sticker-2: #5b8a7a;
}

.dark {
  --bg: #15130e;
  --surface: #1c1913;
  --surface-2: #24201a;
  --fg: #ede7d6;
  --muted: #948869;
  --border: #2e2920;
  --border-strong: #4a4232;
  --accent: #ede7d6;
  --accent-fg: #15130e;
  --warning: #f59e0b;
  --ok: #a3e635;
  --sticker: #c46455;
  --sticker-2: #6a9686;
}`;

/* ---------- Local pieces ---------- */

function CodeBlock({ label, language, code }) {
  const [copied, copy] = useCopyToClipboard();
  return (
    <div
      className="site-card-flat overflow-hidden"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="mono text-[10px] font-semibold uppercase tracking-wider shrink-0"
            style={{ color: "var(--muted)" }}
          >
            {language}
          </span>
          <span
            className="text-[13px] font-medium truncate"
            style={{ color: "var(--fg)" }}
          >
            {label}
          </span>
        </div>
        <button
          onClick={() => copy(code)}
          className="inline-flex items-center gap-1.5 text-[11px] font-medium opacity-60 hover:opacity-100 transition-opacity shrink-0"
          style={{ color: copied ? "var(--ok)" : "var(--fg)" }}
          aria-label={`Copy ${label} to clipboard`}
        >
          {copied ? (
            <Check className="w-[11px] h-[11px]" />
          ) : (
            <Copy className="w-[11px] h-[11px]" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        className="px-4 py-3 mono text-[12.5px] leading-relaxed overflow-x-auto whitespace-pre nice-scroll"
        style={{ color: "var(--fg)" }}
      >
        {code}
      </pre>
    </div>
  );
}

function Step({ num, Icon, title, children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
      <div className="flex flex-col items-center">
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-md mono text-[12px] font-semibold shrink-0"
          style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
        >
          {num}
        </span>
        <span
          className="w-px flex-1 mt-3"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--border-strong) 50%, transparent 50%)",
            backgroundSize: "1px 6px",
          }}
        />
      </div>
      <div className="pb-12 min-w-0">
        <h3
          className="flex items-center gap-2 text-[18px] font-semibold tracking-tight mb-2"
          style={{ color: "var(--fg)" }}
        >
          <Icon className="w-4 h-4" style={{ color: "var(--muted)" }} />
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

function Body({ children }) {
  return (
    <p
      className="text-[14.5px] leading-relaxed mb-4 max-w-2xl"
      style={{ color: "var(--muted)" }}
    >
      {children}
    </p>
  );
}

const TROUBLESHOOTING = [
  [
    "The component renders but looks plain / un-retro.",
    "Nine times out of ten the fonts aren't loaded. Check that the Google Fonts <link> tag from step 2 is in your HTML <head> and the fontFamily block from step 3 is in tailwind.config — the components rely on font-mono and font-sans resolving to JetBrains Mono and Space Grotesk.",
  ],
  [
    "Dark mode classes do nothing.",
    'Make sure darkMode: "class" is set in tailwind.config and that a dark class is actually present on your <html> element. Without it, Tailwind falls back to the prefers-color-scheme media query and dark: variants never activate from your toggle.',
  ],
  [
    "The build fails on an unknown icon import.",
    "The component you copied imports icons from lucide-react (step 5). Install it, or swap the icons for your own SVGs — they're regular React components either way.",
  ],
  [
    "Colors like var(--surface) render as nothing.",
    "A few components read the design tokens from step 6. Paste the tokens block into your global CSS once and every token-aware component picks them up in both themes.",
  ],
];

export default function GettingStarted() {
  useDocumentMeta({
    title: `Getting Started | ${SITE_META.name}`,
    description:
      "Set up RetroUI in five minutes: Tailwind config, fonts, dark mode, and design tokens — then copy-paste any component into your React app.",
    canonical: `${SITE_META.url}/getting-started`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* HEADER */}
      <section className="page-intro">
        <div className="site-container">
          <div
            className="page-breadcrumb"
            style={{ color: "var(--muted)" }}
          >
            <Link to="/" className="hover:!text-[var(--fg)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-[11px] h-[11px]" />
            <span style={{ color: "var(--fg)" }}>Getting Started</span>
          </div>
          <h1
            className="page-title"
          >
            Zero to retro in{" "}
            <span className="display-italic" style={{ color: "var(--accent)" }}>
              five minutes.
            </span>
          </h1>
          <p
            className="page-lede"
            style={{ color: "var(--muted)" }}
          >
            RetroUI is copy-paste first: there's no package to install and
            nothing to configure beyond Tailwind itself. Run through these steps
            once per project, then paste any component from the gallery and it
            will render exactly like the preview.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="site-container site-section-compact">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Setup"
                title="Six steps, one time."
                description="Steps 1–3 are the required baseline. Steps 4–6 depend on which components you copy — each component's page tells you what it needs."
              />
            </div>
            <div className="lg:col-span-8">
              <Step num={1} Icon={Terminal} title="Create a React + Tailwind project">
                <Body>
                  Any React setup works — Vite, Next.js, Remix, Astro. The only
                  hard requirement is Tailwind CSS 3. If you're starting fresh:
                </Body>
                <CodeBlock label="Terminal" language="sh" code={SNIPPET_PROJECT} />
                <div className="mt-3">
                  <Body>
                    Then add the three Tailwind directives to your global CSS
                    (Vite's <span className="mono text-[13px]">src/index.css</span>):
                  </Body>
                  <CodeBlock label="src/index.css" language="css" code={SNIPPET_CSS} />
                </div>
              </Step>

              <Step num={2} Icon={Type} title="Load the three fonts">
                <Body>
                  The retro look leans hard on typography: Space Grotesk for UI
                  text, JetBrains Mono for labels and code, Instrument Serif for
                  italic accents. Add this to your HTML <span className="mono text-[13px]">&lt;head&gt;</span>{" "}
                  (in Next.js, use <span className="mono text-[13px]">next/font</span> with the same three families):
                </Body>
                <CodeBlock label="index.html" language="html" code={SNIPPET_FONTS} />
              </Step>

              <Step num={3} Icon={Package} title="Configure Tailwind">
                <Body>
                  Two things matter here: <span className="mono text-[13px]">darkMode: "class"</span>{" "}
                  so the <span className="mono text-[13px]">dark:</span> variants respond to your own
                  toggle, and the font family mapping so{" "}
                  <span className="mono text-[13px]">font-mono</span> /{" "}
                  <span className="mono text-[13px]">font-sans</span> resolve to the fonts from step 2:
                </Body>
                <CodeBlock
                  label="tailwind.config.js"
                  language="js"
                  code={SNIPPET_TAILWIND_CONFIG}
                />
              </Step>

              <Step num={4} Icon={Moon} title="Wire up dark mode (optional)">
                <Body>
                  Every component ships light and dark styles. With{" "}
                  <span className="mono text-[13px]">darkMode: "class"</span> configured, toggling is
                  one line — persist the choice however you like:
                </Body>
                <CodeBlock label="Dark mode toggle" language="js" code={SNIPPET_DARK_MODE} />
              </Step>

              <Step num={5} Icon={Package} title="Install lucide-react (when needed)">
                <Body>
                  Components that show icons import them from{" "}
                  <span className="mono text-[13px]">lucide-react</span> — you'll see the import at the
                  top of the copied code. No other runtime dependency is used:
                </Body>
                <CodeBlock label="Terminal" language="sh" code={SNIPPET_ICONS} />
              </Step>

              <Step num={6} Icon={Palette} title="Add the design tokens (when needed)">
                <Body>
                  A handful of components read CSS variables (you'll spot{" "}
                  <span className="mono text-[13px]">var(--surface)</span> and friends in their code)
                  so they can follow a site-wide palette. Paste this block into
                  your global CSS once and they work in both themes — or skip it
                  and replace the variables with your own colors:
                </Body>
                <CodeBlock label="Design tokens" language="css" code={SNIPPET_TOKENS} />
              </Step>

              {/* Final CTA row (outside numbered steps) */}
              <div
                className="site-card-flat flex flex-wrap items-center justify-between gap-4 p-6"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div>
                  <div
                    className="text-[15px] font-semibold tracking-tight"
                    style={{ color: "var(--fg)" }}
                  >
                    That's the whole setup.
                  </div>
                  <div className="text-[13.5px] mt-1" style={{ color: "var(--muted)" }}>
                    Browse the gallery, hit Copy on any variant, and paste it
                    into your project as a new file.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/components"
                    className="site-button-primary"
                  >
                    Browse components
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    to="/pages"
                    className="site-button-secondary"
                  >
                    Page templates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section>
        <div className="site-container site-section-compact">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Troubleshooting"
                title="If it doesn't look right."
                description="The four issues that cover nearly every 'it looks different on my machine' report."
              />
            </div>
            <div className="lg:col-span-8">
              <div
                className="site-card-flat overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                {TROUBLESHOOTING.map(([q, a], i) => (
                  <div
                    key={q}
                    className="px-5 py-4"
                    style={{
                      borderBottom:
                        i === TROUBLESHOOTING.length - 1
                          ? "none"
                          : "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="text-[14.5px] font-medium mb-1.5"
                      style={{ color: "var(--fg)" }}
                    >
                      {q}
                    </div>
                    <div
                      className="text-[14px] leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
