import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ChevronRight, Shapes, Check, Copy } from "lucide-react";
import { SITE_META } from "../lib/constants";
import { useDocumentMeta } from "../hooks";
import { Dots } from "../components/showcase/parts";

/**
 * Bespoke top-level Icons section — a searchable, style-filtered gallery of
 * retro-styled icons. Clicking any tile copies that icon (as SVG or JSX). The
 * icon data + builders are lazy-loaded so this gallery stays code-split.
 */
export default function Icons() {
  const [mod, setMod] = useState(null); // { ICON_SET, ICON_STYLES, getIconCode }
  const [q, setQ] = useState("");
  const [style, setStyle] = useState("all");
  const [format, setFormat] = useState("svg"); // "svg" | "jsx"
  const [copiedId, setCopiedId] = useState(null);

  useDocumentMeta({
    title: `Retro Icons | ${SITE_META.name}`,
    description:
      "A copy-paste gallery of retro-styled icons — pixel, sticker, halftone, stamp, bevel & neon. Click any icon to copy its SVG or JSX.",
    canonical: `${SITE_META.url}/icons`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    let active = true;
    import("../data/icons").then((m) => {
      if (active) setMod(m);
    });
    return () => {
      active = false;
    };
  }, []);

  const styles = mod?.ICON_STYLES ?? [];
  const icons = mod?.ICON_SET ?? [];

  const filtered = useMemo(() => {
    const list = mod?.ICON_SET ?? [];
    const needle = q.trim().toLowerCase();
    return list
      .filter((ic) => style === "all" || ic.style === style)
      .filter(
        (ic) =>
          !needle ||
          ic.name.toLowerCase().includes(needle) ||
          ic.componentName.toLowerCase().includes(needle) ||
          ic.keywords.some((k) => k.toLowerCase().includes(needle))
      );
  }, [mod, q, style]);

  const handleCopy = (ic) => {
    const code = mod.getIconCode(ic, format);
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedId(ic.id);
        setTimeout(() => setCopiedId((id) => (id === ic.id ? null : id)), 1400);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const STYLE_CHIPS = [{ id: "all", label: "All" }, ...styles];

  return (
    <div>
      {/* Header */}
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
            <span style={{ color: "var(--fg)" }}>Icons</span>
          </div>
          <h1
            className="page-title"
          >
            Icons with{" "}
            <span className="display-italic" style={{ color: "var(--accent)" }}>
              old-school detail.
            </span>
          </h1>
          <p
            className="page-lede"
            style={{ color: "var(--muted)" }}
          >
            A hand-built set of retro-styled icons across 12 looks — pixel-art,
            sticker, halftone, stamp, bevel, neon, plus <em>animated</em> glitch,
            marquee, hologram, wiggle, and lite-brite. Click any icon to copy it
            as a self-contained SVG (animations included) or a JSX component.
          </p>

          {/* Controls */}
          <div className="page-controls">
            <div className="relative w-full max-w-lg">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search icons by name, style, or keyword…"
                className="site-input pl-9 pr-3"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                }}
              />
            </div>

            {/* Format toggle */}
            <div
              className="flex items-center gap-1 rounded-md p-0.5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {["svg", "jsx"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className="px-3 h-8 rounded text-[12px] font-medium uppercase tracking-wide transition-colors"
                  style={{
                    background: format === f ? "var(--fg)" : "transparent",
                    color: format === f ? "var(--bg)" : "var(--muted)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            <div
              className="flex items-center gap-2 text-[12px]"
              style={{ color: "var(--muted)" }}
            >
              <Shapes className="w-3 h-3" />
              <span className="mono">
                {filtered.length} of {icons.length} icons
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Style filter chips */}
      <section className="filter-strip">
        <div className="site-container filter-strip-inner">
          <div className="flex items-center gap-1 overflow-x-auto nice-scroll">
            {STYLE_CHIPS.map((c) => {
              const active = style === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setStyle(c.id)}
                  className="filter-chip"
                  data-active={active}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="site-section-compact">
        <div className="site-container">
          {!mod ? (
            <Dots />
          ) : filtered.length === 0 ? (
            <div className="text-center py-20" style={{ color: "var(--muted)" }}>
              <Search className="w-7 h-7 mx-auto mb-3 opacity-40" />
              <p className="text-[14px]">No icons match your search.</p>
              <button
                onClick={() => {
                  setQ("");
                  setStyle("all");
                }}
                className="mt-3 text-[13px] underline"
                style={{ color: "var(--fg)" }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {filtered.map((ic) => {
                const isCopied = copiedId === ic.id;
                return (
                  <button
                    key={ic.id}
                    onClick={() => handleCopy(ic)}
                    title={`Copy ${ic.componentName} as ${format.toUpperCase()}`}
                    className="catalog-card group relative flex flex-col items-center gap-2 p-3"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12"
                      // Icons are static, library-authored SVG strings — safe to inline.
                      dangerouslySetInnerHTML={{ __html: ic.svg }}
                    />
                    <span
                      className="text-[10px] mono text-center leading-tight truncate w-full"
                      style={{ color: "var(--muted)" }}
                    >
                      {ic.glyph}
                    </span>

                    {/* Copy affordance / confirmation */}
                    <span
                      className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--muted)" }}
                    >
                      {isCopied ? (
                        <Check className="w-3 h-3" style={{ color: "var(--ok, #7da567)" }} />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </span>
                    {isCopied && (
                      <span
                        className="absolute inset-x-1 bottom-1 text-[9px] mono text-center rounded-sm"
                        style={{ background: "var(--fg)", color: "var(--bg)" }}
                      >
                        Copied!
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
