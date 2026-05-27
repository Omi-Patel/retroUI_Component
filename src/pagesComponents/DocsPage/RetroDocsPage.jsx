import React, { useState } from "react";
import { Search, BookOpen, Hash, ChevronRight, Copy, Check } from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "installation", label: "Installation" },
      { id: "quickstart", label: "Quickstart" },
    ],
  },
  {
    title: "Components",
    items: [
      { id: "buttons", label: "Buttons" },
      { id: "cards", label: "Cards" },
      { id: "inputs", label: "Inputs" },
      { id: "modals", label: "Modals" },
    ],
  },
  {
    title: "Theming",
    items: [
      { id: "palettes", label: "Palettes" },
      { id: "dark-mode", label: "Dark mode" },
      { id: "tokens", label: "Tokens" },
    ],
  },
];

export default function RetroDocsPage() {
  const [active, setActive] = useState("quickstart");
  const [copied, setCopied] = useState(false);

  const onCopy = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#ede7d6] text-black font-mono">
      {/* Top bar */}
      <header className="border-b-4 border-black bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <p className="font-black uppercase tracking-tight">Retro · Docs</p>
            <span className="text-[10px] bg-black text-yellow-300 px-1.5 py-0.5">v1.2.0</span>
          </div>
          <div className="ml-auto flex items-center gap-2 flex-1 max-w-md">
            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-[#fafaf3] border-4 border-black">
              <Search className="w-3.5 h-3.5 opacity-60" />
              <input
                placeholder="Search docs…"
                className="flex-1 bg-transparent text-sm focus:outline-none placeholder:opacity-40"
              />
              <kbd className="text-[10px] bg-black text-yellow-300 px-1 py-0.5">⌘K</kbd>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <nav className="space-y-6">
            {sections.map((s) => (
              <div key={s.title}>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">
                  {s.title}
                </p>
                <ul className="space-y-0.5 border-l-2 border-black/20 pl-3">
                  {s.items.map((it) => {
                    const isActive = active === it.id;
                    return (
                      <li key={it.id}>
                        <button
                          onClick={() => setActive(it.id)}
                          className={`w-full text-left px-2 py-1 text-xs ${
                            isActive
                              ? "bg-yellow-300 font-black border-l-2 border-black -ml-[14px] pl-3"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        >
                          {it.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="col-span-12 md:col-span-9 max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider opacity-60 mb-3">
            <span>Docs</span>
            <ChevronRight className="w-3 h-3" />
            <span>Getting Started</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold text-black">Quickstart</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight mb-3">
            Quickstart
          </h1>
          <p className="text-base opacity-80 mb-8 max-w-2xl">
            Get RetroUI up and running in under five minutes. Copy a few
            components, paste them into your project, and ship.
          </p>

          {/* Step 1 */}
          <Step n="01" title="Install dependencies">
            <p className="text-sm mb-3 opacity-80">
              RetroUI is just plain React + Tailwind. No runtime, no provider.
            </p>
            <CodeBlock
              code="npm install lucide-react framer-motion"
              onCopy={onCopy}
              copied={copied}
            />
          </Step>

          {/* Step 2 */}
          <Step n="02" title="Configure Tailwind">
            <p className="text-sm mb-3 opacity-80">
              Add the design tokens to your <code className="bg-yellow-200 px-1">tailwind.config.js</code>.
            </p>
            <CodeBlock
              code={`module.exports = {
  theme: {
    extend: {
      colors: { neon: "#39ff14" },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
};`}
              onCopy={onCopy}
              copied={copied}
            />
          </Step>

          {/* Step 3 */}
          <Step n="03" title="Drop in a component">
            <p className="text-sm mb-3 opacity-80">
              Browse the library, click <strong>Copy</strong> on any variant, and paste.
            </p>
            <CodeBlock
              code={`<button className="px-6 py-3 font-mono font-bold bg-yellow-300 border-4 border-black shadow-[4px_4px_0_0_black]">
  Click me
</button>`}
              onCopy={onCopy}
              copied={copied}
            />
          </Step>

          {/* Changelog */}
          <div className="mt-12 pt-8 border-t-4 border-dashed border-black/40">
            <p className="text-[11px] tracking-[0.3em] uppercase opacity-60 mb-2">
              CHANGELOG · LATEST
            </p>
            <h2 className="text-2xl font-black uppercase mb-4">What&apos;s new</h2>
            <ul className="space-y-3">
              {[
                {
                  v: "v1.2.0",
                  date: "May 27, 2026",
                  notes: "Added Modals, Toasts, Tooltips, Alerts, Progress, Breadcrumbs, Pagination, Skeletons.",
                  badge: "MAJOR",
                  color: "bg-yellow-300",
                },
                {
                  v: "v1.1.0",
                  date: "Apr 12, 2026",
                  notes: "Multi-palette theming (Newsprint, Neon, Terminal, Polaroid).",
                  badge: "MINOR",
                  color: "bg-pink-300",
                },
                {
                  v: "v1.0.0",
                  date: "Mar 01, 2026",
                  notes: "First release. 12 component categories, 8 page templates.",
                  badge: "RELEASE",
                  color: "bg-cyan-300",
                },
              ].map((c) => (
                <li
                  key={c.v}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-3 flex items-start gap-3"
                >
                  <span
                    className={`${c.color} border-2 border-black text-[10px] font-black uppercase tracking-widest px-2 py-0.5 flex-shrink-0`}
                  >
                    {c.badge}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-black text-sm">{c.v}</span>
                      <span className="text-[10px] opacity-60">· {c.date}</span>
                    </div>
                    <p className="text-xs mt-0.5 opacity-80">{c.notes}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Next / prev */}
          <div className="mt-12 grid grid-cols-2 gap-3">
            <a
              href="#"
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all"
            >
              <p className="text-[10px] uppercase tracking-widest opacity-60">
                ← Previous
              </p>
              <p className="text-sm font-bold mt-0.5">Installation</p>
            </a>
            <a
              href="#"
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] p-4 text-right hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all"
            >
              <p className="text-[10px] uppercase tracking-widest opacity-60">
                Next →
              </p>
              <p className="text-sm font-bold mt-0.5">Buttons</p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

function Step({ n, title, children }) {
  return (
    <section className="mb-8">
      <h3 className="flex items-center gap-3 mb-3">
        <span className="inline-flex w-9 h-9 items-center justify-center bg-black text-yellow-300 text-sm font-black">
          {n}
        </span>
        <span className="text-xl font-black uppercase">{title}</span>
        <Hash className="w-3.5 h-3.5 opacity-30 ml-auto" />
      </h3>
      {children}
    </section>
  );
}

function CodeBlock({ code, onCopy, copied }) {
  return (
    <div className="relative bg-black text-green-400 border-4 border-black shadow-[4px_4px_0px_0px_black] font-mono text-xs">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-green-400/30 bg-green-400/5">
        <p className="text-[10px] uppercase opacity-60 tracking-widest">snippet.jsx</p>
        <button
          onClick={() => onCopy(code)}
          className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest hover:text-yellow-300"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto whitespace-pre">{code}</pre>
    </div>
  );
}
