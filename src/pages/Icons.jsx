import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Check,
  ChevronRight,
  Copy,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { SITE_META } from "../lib/constants";
import { useDocumentMeta } from "../hooks";
import { Dots } from "../components/showcase/parts";

const formatGlyphName = (name) =>
  name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

/**
 * Searchable, style-filtered gallery of retro icons. Clicking a card copies
 * that icon as SVG or JSX. Icon data is lazy-loaded to keep the route split.
 */
export default function Icons() {
  const [mod, setMod] = useState(null);
  const [q, setQ] = useState("");
  const [style, setStyle] = useState("all");
  const [format, setFormat] = useState("svg");
  const [copiedId, setCopiedId] = useState(null);

  useDocumentMeta({
    title: `Retro Icons | ${SITE_META.name}`,
    description:
      "A copy-paste library of hand-built retro icons in pixel, sticker, halftone, stamp, bevel, neon, and animated styles.",
    canonical: `${SITE_META.url}/icons`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    let active = true;

    import("../data/icons").then((iconModule) => {
      if (active) setMod(iconModule);
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
      .filter((icon) => style === "all" || icon.style === style)
      .filter(
        (icon) =>
          !needle ||
          icon.name.toLowerCase().includes(needle) ||
          icon.componentName.toLowerCase().includes(needle) ||
          icon.keywords.some((keyword) => keyword.toLowerCase().includes(needle))
      );
  }, [mod, q, style]);

  const styleCounts = useMemo(
    () =>
      icons.reduce((counts, icon) => {
        counts[icon.style] = (counts[icon.style] || 0) + 1;
        return counts;
      }, {}),
    [icons]
  );

  const styleChips = [
    { id: "all", label: "All styles", count: icons.length },
    ...styles.map((item) => ({ ...item, count: styleCounts[item.id] || 0 })),
  ];

  const activeStyleLabel =
    style === "all" ? "All icons" : styles.find((item) => item.id === style)?.label;

  const handleCopy = (icon) => {
    const code = mod.getIconCode(icon, format);

    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedId(icon.id);
        window.setTimeout(
          () => setCopiedId((currentId) => (currentId === icon.id ? null : currentId)),
          1400
        );
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  const resetFilters = () => {
    setQ("");
    setStyle("all");
  };

  return (
    <div>
      <section className="page-intro">
        <div className="site-container">
          <div className="page-breadcrumb">
            <Link to="/" className="transition-colors hover:!text-[var(--fg)]">
              Home
            </Link>
            <ChevronRight className="h-[11px] w-[11px]" />
            <span style={{ color: "var(--fg)" }}>Icons</span>
          </div>

          <div className="icon-page-lead">
            <div>
              <h1 className="page-title">
                Icons with{" "}
                <span className="display-italic" style={{ color: "var(--accent)" }}>
                  old-school detail.
                </span>
              </h1>
              <p className="page-lede">
                A focused library of hand-built symbols in twelve retro styles.
                Filter by treatment, then copy production-ready SVG or React JSX.
              </p>
            </div>

            <dl className="icon-page-stats" aria-label="Icon library summary">
              <div>
                <dt>Icons</dt>
                <dd>{mod ? icons.length : "--"}</dd>
              </div>
              <div>
                <dt>Styles</dt>
                <dd>{mod ? styles.length : "--"}</dd>
              </div>
              <div>
                <dt>Formats</dt>
                <dd>2</dd>
              </div>
            </dl>
          </div>

          <div className="icon-toolbar">
            <label className="icon-search">
              <span className="sr-only">Search the icon library</span>
              <Search className="icon-search__glyph" />
              <input
                value={q}
                onChange={(event) => setQ(event.target.value)}
                placeholder="Search by name, style, or keyword"
                className="site-input"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="icon-search__clear"
                  aria-label="Clear icon search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </label>

            <fieldset className="icon-format-toggle">
              <legend>Copy format</legend>
              <div>
                {[
                  { id: "svg", label: "SVG" },
                  { id: "jsx", label: "React JSX" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormat(item.id)}
                    data-active={format === item.id}
                    aria-pressed={format === item.id}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="icon-result-count" aria-live="polite">
              <strong>{filtered.length}</strong>
              <span>{filtered.length === 1 ? "result" : "results"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="filter-strip" aria-label="Filter icons by style">
        <div className="site-container filter-strip-inner icon-filter-row">
          <div className="icon-filter-label" aria-hidden="true">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Style</span>
          </div>
          <div className="nice-scroll icon-style-options">
            {styleChips.map((item) => {
              const active = style === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setStyle(item.id)}
                  className="icon-style-chip"
                  data-active={active}
                  aria-pressed={active}
                >
                  <span>{item.label}</span>
                  <span className="icon-style-chip__count">{item.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section-compact">
        <div className="site-container">
          <div className="icon-results-heading">
            <div>
              <p>Browse the library</p>
              <h2>{activeStyleLabel || "Icons"}</h2>
            </div>
            <p>Choose a copy format above, then select any icon.</p>
          </div>

          {!mod ? (
            <Dots />
          ) : filtered.length === 0 ? (
            <div className="icon-empty-state">
              <Search className="h-6 w-6" />
              <h2>No matching icons</h2>
              <p>Try another name or return to the full library.</p>
              <button type="button" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          ) : (
            <div className="icon-gallery-grid">
              {filtered.map((icon) => {
                const isCopied = copiedId === icon.id;

                return (
                  <button
                    key={icon.id}
                    type="button"
                    onClick={() => handleCopy(icon)}
                    className="icon-gallery-card"
                    data-copied={isCopied}
                    aria-label={`Copy ${icon.componentName} as ${format.toUpperCase()}`}
                  >
                    <span className="icon-gallery-card__top">
                      <span>{icon.styleLabel}</span>
                      <span className="icon-gallery-card__action">
                        {isCopied ? (
                          <>
                            <Check className="h-3 w-3" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" /> {format.toUpperCase()}
                          </>
                        )}
                      </span>
                    </span>

                    <span
                      className="icon-gallery-card__preview"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                    />

                    <span className="icon-gallery-card__details">
                      <strong>{formatGlyphName(icon.glyph)}</strong>
                      <span>{icon.componentName}</span>
                    </span>
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
