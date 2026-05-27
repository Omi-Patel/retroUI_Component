import { useEffect, useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Layers, ChevronRight, ArrowRight, Square } from "lucide-react";
import { SITE_META } from "../lib/constants";
import { COMPONENT_REGISTRY } from "../lib/registries";
import { useDocumentMeta } from "../hooks";

const CATEGORY_LIST = [
  "All",
  ...new Set(COMPONENT_REGISTRY.map((c) => c.category)),
];

export default function Component() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  useDocumentMeta({
    title: `Components | ${SITE_META.name}`,
    description:
      "Browse retroUI's full catalog of retro-themed React components — buttons, cards, inputs, navbars, and more.",
    canonical: `${SITE_META.url}/components`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    return COMPONENT_REGISTRY.filter(
      (c) => cat === "All" || c.category === cat
    ).filter(
      (c) =>
        !q ||
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.description.toLowerCase().includes(q.toLowerCase())
    );
  }, [q, cat]);

  return (
    <div>
      {/* Header */}
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
            <span style={{ color: "var(--fg)" }}>Components</span>
          </div>
          <h1
            className="display text-[44px] sm:text-[64px] leading-[1.0]"
            style={{ color: "var(--fg)", letterSpacing: "-0.035em" }}
          >
            <span className="display-italic" style={{ color: "var(--muted)" }}>
              The
            </span>{" "}
            Components
          </h1>
          <p
            className="mt-4 text-[15.5px] max-w-2xl leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A growing collection of retro-styled, accessible React components.
            Each comes with a live preview, source code, and copy-paste
            integration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-[260px] max-w-md">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search components by name or category…"
                className="w-full h-10 pl-9 pr-3 rounded-md text-[13.5px] outline-none focus:ring-2"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                }}
              />
            </div>
            <div
              className="flex items-center gap-2 text-[12px]"
              style={{ color: "var(--muted)" }}
            >
              <Layers className="w-3 h-3" />
              <span className="mono">
                {filtered.length} of {COMPONENT_REGISTRY.length} components
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-1.5 overflow-x-auto nice-scroll">
            {CATEGORY_LIST.map((c) => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="px-3 h-8 rounded-md text-[13px] font-medium whitespace-nowrap transition-colors"
                  style={{
                    background: active ? "var(--fg)" : "transparent",
                    color: active ? "var(--bg)" : "var(--muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20" style={{ color: "var(--muted)" }}>
              <Search className="w-7 h-7 mx-auto mb-3 opacity-40" />
              <p className="text-[14px]">No components match your search.</p>
              <button
                onClick={() => {
                  setQ("");
                  setCat("All");
                }}
                className="mt-3 text-[13px] underline"
                style={{ color: "var(--fg)" }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((c) => {
                const Icon = c.Icon || Square;
                const count = c.count;
                return (
                  <Link
                    key={c.path}
                    to={`/components/${c.path}`}
                    className="group text-left rounded-lg overflow-hidden transition-colors block"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--surface)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--bg)")
                    }
                  >
                    <div
                      className="aspect-[16/9] relative placeholder-tile"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="inline-flex h-12 w-12 items-center justify-center rounded-lg"
                          style={{
                            background: "var(--bg)",
                            border: "1px solid var(--border)",
                            color: "var(--fg)",
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <h3
                          className="text-[15px] font-semibold tracking-tight"
                          style={{ color: "var(--fg)" }}
                        >
                          {c.name}
                        </h3>
                        <span
                          className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-[4px] border"
                          style={{
                            background: "transparent",
                            color: "var(--muted)",
                            borderColor: "var(--border)",
                          }}
                        >
                          {c.category}
                        </span>
                      </div>
                      <p
                        className="text-[13px] mb-3"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.description}
                      </p>
                      <div
                        className="flex items-center justify-between text-[12px]"
                        style={{ color: "var(--muted)" }}
                      >
                        <span className="mono">{count} variants</span>
                        <span
                          className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-0.5"
                          style={{ color: "var(--fg)" }}
                        >
                          View
                          <ArrowRight className="w-[11px] h-[11px]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
