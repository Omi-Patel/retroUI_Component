import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Github, ChevronRight, ChevronDown, Copy } from "lucide-react";
import { SectionHeading } from "./Home";
import { SOCIAL_LINKS } from "../lib/constants";

const PRINCIPLES = [
  {
    t: "Own your code",
    d: "No package lock-in. Copy components straight into your repo and modify them like any other file.",
  },
  {
    t: "Composable parts",
    d: "Small primitives over kitchen-sink components. Stack them, restyle them, or strip them out.",
  },
  {
    t: "Distinctive by default",
    d: "Retro flair without sacrificing accessibility. Every component is auditable, AA-compliant, and themeable.",
  },
];

const QUICKSTART = [
  { step: 1, label: "Initialize Tailwind in your project", code: "npx tailwindcss init -p" },
  { step: 2, label: "Install peer dependencies", code: "npm install framer-motion lucide-react" },
  {
    step: 3,
    label: "Browse the gallery & copy a component",
    code: "# Open https://retro-component.vercel.app/components\n# Pick a variant, hit \"Copy\"",
  },
  {
    step: 4,
    label: "Paste & use in your project",
    code: '// src/components/RetroButton.jsx\n// (paste copied source here)\n\n<RetroButton>Ship it</RetroButton>',
  },
];

const FAQ = [
  ["Is retroui really free?", "Yes. retroui is MIT-licensed and free for commercial and personal use. Star us on GitHub if it helps."],
  ["Do I need to install it?", "No. retroui is copy-paste first — you can also use the CLI to pull components into your project."],
  ["Does it work with Next.js?", "Yes. Every component is plain JSX and works with Next.js, Vite, Remix, or any React setup."],
  ["Can I customize the styles?", "Absolutely. Components use Tailwind classes — override them in your tailwind.config or directly per usage."],
  ["Is dark mode supported?", "Yes. Every component ships with light & dark variants and respects your Tailwind dark-mode strategy."],
];

const AT_A_GLANCE = [
  ["License", "MIT"],
  ["Version", "v1.0.2"],
  ["Components", "60+"],
  ["Templates", "8"],
  ["Built with", "React 18 · Tailwind 3"],
  ["Last release", "2 days ago"],
];

function FAQItem({ q, a, last }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: last ? "none" : "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 transition-colors hover:bg-[var(--surface)]"
      >
        <span className="text-[14.5px] font-medium" style={{ color: "var(--fg)" }}>
          {q}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          className="px-5 pb-5 text-[14px] leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* HEADER */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div
            className="flex items-center gap-2 text-[12px] mono mb-4"
            style={{ color: "var(--muted)" }}
          >
            <Link to="/" className="hover:!text-[var(--fg)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-[11px] h-[11px]" />
            <span style={{ color: "var(--fg)" }}>About</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h1
                className="display text-[44px] sm:text-[68px] leading-[1.0]"
                style={{ color: "var(--fg)", letterSpacing: "-0.035em" }}
              >
                A component library
                <br />
                for{" "}
                <span className="display-italic" style={{ color: "var(--muted)" }}>
                  makers.
                </span>
              </h1>
              <p
                className="mt-6 text-[16.5px] leading-relaxed max-w-2xl"
                style={{ color: "var(--muted)" }}
              >
                retroui is an open-source collection of React components built with
                Tailwind CSS — designed for developers who want a distinctive,
                retro-flavored aesthetic without writing CSS from scratch.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/components"
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-[13.5px] font-medium transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-fg)",
                  }}
                >
                  Browse the library
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-[13.5px] font-medium transition-colors hover:bg-[var(--surface-2)]"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
              </div>
            </div>

            <div
              className="rounded-lg p-6"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--muted)" }}
              >
                At a glance
              </div>
              <dl className="space-y-3 text-[13.5px]">
                {AT_A_GLANCE.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between gap-3 pb-2.5"
                    style={{ borderBottom: "1px dashed var(--border)" }}
                  >
                    <dt style={{ color: "var(--muted)" }}>{k}</dt>
                    <dd className="mono" style={{ color: "var(--fg)" }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading
            eyebrow="Principles"
            title="Three things we care about."
          />
          <div
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px rounded-lg overflow-hidden"
            style={{ background: "var(--border)" }}
          >
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.t}
                className="p-7"
                style={{ background: "var(--bg)" }}
              >
                <div
                  className="mono text-[11px] mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-[18px] font-semibold tracking-tight mb-2"
                  style={{ color: "var(--fg)" }}
                >
                  {p.t}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICKSTART */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Quickstart"
                title="From zero to ship in 5 minutes."
                description="Install Tailwind in your React project, then pull in components as needed."
              />
            </div>
            <div className="lg:col-span-8 space-y-4">
              {QUICKSTART.map((s) => (
                <div
                  key={s.step}
                  className="rounded-lg overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="flex items-center justify-between px-4 py-2.5"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-5 w-5 items-center justify-center rounded mono text-[10px] font-semibold"
                        style={{ background: "var(--fg)", color: "var(--bg)" }}
                      >
                        {s.step}
                      </span>
                      <span
                        className="text-[13px] font-medium"
                        style={{ color: "var(--fg)" }}
                      >
                        {s.label}
                      </span>
                    </div>
                    <button
                      className="inline-flex items-center gap-1 text-[11px] font-medium opacity-60 hover:opacity-100"
                      style={{ color: "var(--fg)" }}
                    >
                      <Copy className="w-[11px] h-[11px]" />
                      Copy
                    </button>
                  </div>
                  <pre
                    className="px-4 py-3 mono text-[12.5px] leading-relaxed overflow-x-auto whitespace-pre"
                    style={{ color: "var(--fg)" }}
                  >
                    <span style={{ color: "var(--muted)" }}>$ </span>
                    {s.code}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions."
              />
            </div>
            <div className="lg:col-span-8">
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                {FAQ.map(([q, a], i) => (
                  <FAQItem
                    key={i}
                    q={q}
                    a={a}
                    last={i === FAQ.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
