import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Layers3, Search, Square } from "lucide-react";
import { useDocumentMeta } from "../hooks";
import { SITE_META } from "../lib/constants";
import { COMPONENT_REGISTRY } from "../lib/registries";

const CATEGORIES = ["All", ...new Set(COMPONENT_REGISTRY.map((component) => component.category))];
const VARIANT_TOTAL = COMPONENT_REGISTRY.reduce((sum, component) => sum + (component.count || 0), 0);

export default function Component() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useDocumentMeta({
    title: `Components | ${SITE_META.name}`,
    description: "Browse retroUI's complete catalog of expressive, copy-paste React components.",
    canonical: `${SITE_META.url}/components`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return COMPONENT_REGISTRY.filter(
      (component) => category === "All" || component.category === category,
    ).filter(
      (component) =>
        !needle ||
        component.name.toLowerCase().includes(needle) ||
        component.description.toLowerCase().includes(needle),
    );
  }, [query, category]);

  const reset = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div>
      <section className="page-intro">
        <div className="site-container">
          <div className="page-breadcrumb">
            <Link to="/" className="transition-colors hover:!text-[var(--fg)]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span style={{ color: "var(--fg)" }}>Components</span>
          </div>

          <h1 className="page-title">
            Components with a <span className="display-italic" style={{ color: "var(--accent)" }}>point of view.</span>
          </h1>
          <p className="page-lede">
            Explore {COMPONENT_REGISTRY.length} categories and {VARIANT_TOTAL} production-ready variants. Each entry includes a live preview, readable source, and a one-click copy workflow.
          </p>

          <div className="page-controls">
            <label className="relative w-full max-w-lg">
              <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2" style={{ color: "var(--muted)" }} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by component name or purpose…"
                className="site-input pl-10 pr-4"
                aria-label="Search components"
              />
            </label>
            <span className="inline-flex items-center gap-2 text-[11.5px]" style={{ color: "var(--muted)" }}>
              <Layers3 className="h-3.5 w-3.5" />
              <span className="mono">{filtered.length} shown</span>
            </span>
          </div>
        </div>
      </section>

      <section className="filter-strip">
        <div className="site-container filter-strip-inner">
          <div className="nice-scroll flex items-center gap-1 overflow-x-auto" role="group" aria-label="Filter components by category">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className="filter-chip"
                data-active={category === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-compact">
        <div className="site-container">
          {filtered.length === 0 ? (
            <div className="site-card-flat py-20 text-center">
              <Search className="mx-auto h-6 w-6" style={{ color: "var(--muted)" }} />
              <h2 className="mt-4 text-[16px] font-bold" style={{ color: "var(--fg)" }}>No matching components</h2>
              <p className="mt-1 text-[13px]" style={{ color: "var(--muted)" }}>Try a broader term or clear the current category.</p>
              <button type="button" onClick={reset} className="site-button-secondary mt-5">Reset filters</button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((component) => {
                const Icon = component.Icon || Square;
                return (
                  <Link key={component.path} to={`/components/${component.path}`} className="catalog-card group">
                    <div className="catalog-preview flex aspect-[16/8] items-center justify-center">
                      <span
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:-rotate-2 group-hover:scale-105"
                        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--fg)", boxShadow: "var(--shadow-sm)" }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-[15px] font-bold tracking-[-0.02em]" style={{ color: "var(--fg)" }}>{component.name}</h2>
                          <p className="mt-1.5 text-[12.5px] leading-5" style={{ color: "var(--muted)" }}>{component.description}</p>
                        </div>
                        <span className="rounded-md px-2 py-1 text-[9.5px] font-semibold uppercase tracking-[0.08em]" style={{ background: "var(--surface-2)", color: "var(--muted)" }}>{component.category}</span>
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t pt-4 text-[11.5px]" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                        <span className="mono">{component.count} variants</span>
                        <span className="inline-flex items-center gap-1.5 font-bold" style={{ color: "var(--fg)" }}>
                          Open category <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
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
