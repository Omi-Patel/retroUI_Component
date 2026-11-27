import { useEffect, useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ChevronRight, ArrowRight, Box } from "lucide-react";
import { useDocumentMeta } from "../../hooks";
import { SITE_META } from "../../lib/constants";
import { PAGE_REGISTRY } from "../../lib/registries";

const CATEGORIES = ["All", ...new Set(PAGE_REGISTRY.map((p) => p.category))];

/* ---------- Mini SVG wireframe per template type ---------- */
function PageWireframe({ type }) {
  const colors = {
    bg: "var(--bg)",
    line: "var(--border)",
    fill: "var(--surface-2)",
    accent: "var(--fg)",
  };
  const wm = {
    home: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="14" y="28" width="60" height="6" fill={colors.accent} />
        <rect x="14" y="40" width="80" height="3" fill={colors.line} />
        <rect x="14" y="48" width="70" height="3" fill={colors.line} />
        <rect x="14" y="58" width="22" height="8" rx="2" fill={colors.accent} />
        <rect x="40" y="58" width="22" height="8" rx="2" fill={colors.fill} />
        <rect x="100" y="28" width="50" height="38" rx="2" fill={colors.fill} />
        <rect x="14" y="78" width="42" height="22" rx="2" fill={colors.fill} />
        <rect x="60" y="78" width="42" height="22" rx="2" fill={colors.fill} />
        <rect x="106" y="78" width="42" height="22" rx="2" fill={colors.fill} />
      </g>
    ),
    "landing-pages": (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="10" y="22" width="140" height="58" rx="2" fill={colors.accent} opacity="0.88" />
        <rect x="20" y="34" width="52" height="7" fill={colors.bg} />
        <rect x="20" y="47" width="62" height="3" fill={colors.line} />
        <rect x="20" y="55" width="46" height="3" fill={colors.line} />
        <rect x="20" y="65" width="24" height="8" rx="1" fill={colors.bg} />
        <circle cx="124" cy="36" r="10" fill={colors.bg} opacity="0.8" />
        <rect x="10" y="88" width="42" height="20" rx="2" fill={colors.fill} />
        <rect x="59" y="88" width="42" height="20" rx="2" fill={colors.fill} />
        <rect x="108" y="88" width="42" height="20" rx="2" fill={colors.fill} />
      </g>
    ),
    about: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <circle cx="80" cy="36" r="10" fill={colors.fill} />
        <rect x="40" y="52" width="80" height="6" fill={colors.accent} />
        <rect x="32" y="64" width="96" height="3" fill={colors.line} />
        <rect x="32" y="71" width="96" height="3" fill={colors.line} />
        <rect x="14" y="84" width="44" height="16" rx="2" fill={colors.fill} />
        <rect x="62" y="84" width="44" height="16" rx="2" fill={colors.fill} />
      </g>
    ),
    service: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="14" y="28" width="60" height="6" fill={colors.accent} />
        <rect x="14" y="46" width="40" height="40" rx="2" fill={colors.fill} />
        <rect x="60" y="46" width="40" height="40" rx="2" fill={colors.fill} />
        <rect x="106" y="46" width="40" height="40" rx="2" fill={colors.fill} />
      </g>
    ),
    contact: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="14" y="28" width="60" height="6" fill={colors.accent} />
        <rect x="14" y="44" width="60" height="8" rx="2" fill={colors.fill} />
        <rect x="14" y="58" width="60" height="8" rx="2" fill={colors.fill} />
        <rect x="14" y="72" width="60" height="22" rx="2" fill={colors.fill} />
        <rect x="14" y="100" width="22" height="8" rx="2" fill={colors.accent} />
        <rect x="84" y="44" width="64" height="60" rx="2" fill={colors.fill} />
      </g>
    ),
    dashboard: (
      <g>
        <rect x="8" y="8" width="32" height="100" fill={colors.fill} />
        <rect x="46" y="14" width="100" height="14" rx="2" fill={colors.fill} />
        <rect x="46" y="34" width="32" height="22" rx="2" fill={colors.accent} opacity="0.85" />
        <rect x="82" y="34" width="32" height="22" rx="2" fill={colors.fill} />
        <rect x="118" y="34" width="28" height="22" rx="2" fill={colors.fill} />
        <rect x="46" y="62" width="100" height="46" rx="2" fill={colors.fill} />
        <path
          d="M50 100 L70 84 L90 92 L110 76 L142 86"
          stroke={colors.accent}
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    ),
    error: (
      <g>
        <text
          x="80"
          y="62"
          fontFamily="JetBrains Mono, monospace"
          fontSize="32"
          fontWeight="700"
          fill={colors.accent}
          textAnchor="middle"
        >
          404
        </text>
        <rect x="50" y="72" width="60" height="3" fill={colors.line} />
        <rect x="60" y="86" width="40" height="10" rx="2" fill={colors.accent} />
      </g>
    ),
    ecommerce: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="14" y="22" width="20" height="80" rx="2" fill={colors.fill} />
        <rect x="40" y="22" width="34" height="38" rx="2" fill={colors.fill} />
        <rect x="78" y="22" width="34" height="38" rx="2" fill={colors.fill} />
        <rect x="116" y="22" width="34" height="38" rx="2" fill={colors.accent} opacity="0.85" />
        <rect x="40" y="64" width="34" height="38" rx="2" fill={colors.fill} />
        <rect x="78" y="64" width="34" height="38" rx="2" fill={colors.fill} />
        <rect x="116" y="64" width="34" height="38" rx="2" fill={colors.fill} />
      </g>
    ),
    blog: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="14" y="24" width="80" height="6" fill={colors.accent} />
        <rect x="14" y="36" width="100" height="3" fill={colors.line} />
        <rect x="14" y="44" width="80" height="3" fill={colors.line} />
        <rect x="14" y="56" width="40" height="44" rx="2" fill={colors.fill} />
        <rect x="60" y="56" width="40" height="44" rx="2" fill={colors.fill} />
        <rect x="106" y="56" width="40" height="44" rx="2" fill={colors.fill} />
      </g>
    ),
    auth: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="44" y="28" width="72" height="80" rx="2" fill={colors.fill} />
        <rect x="56" y="40" width="48" height="6" fill={colors.accent} />
        <rect x="56" y="56" width="48" height="8" rx="2" fill={colors.bg} stroke={colors.line} />
        <rect x="56" y="68" width="48" height="8" rx="2" fill={colors.bg} stroke={colors.line} />
        <rect x="56" y="84" width="48" height="10" rx="2" fill={colors.accent} />
      </g>
    ),
    pricing: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="14" y="28" width="80" height="6" fill={colors.accent} />
        <rect x="14" y="46" width="40" height="60" rx="2" fill={colors.fill} />
        <rect x="60" y="42" width="40" height="64" rx="2" fill={colors.accent} opacity="0.85" />
        <rect x="106" y="46" width="40" height="60" rx="2" fill={colors.fill} />
      </g>
    ),
    "coming-soon": (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <text x="80" y="56" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill={colors.accent} textAnchor="middle">COMING SOON</text>
        <rect x="36" y="68" width="22" height="20" rx="2" fill={colors.fill} />
        <rect x="62" y="68" width="22" height="20" rx="2" fill={colors.fill} />
        <rect x="88" y="68" width="22" height="20" rx="2" fill={colors.fill} />
        <rect x="114" y="68" width="22" height="20" rx="2" fill={colors.fill} />
        <rect x="50" y="96" width="60" height="8" rx="2" fill={colors.accent} />
      </g>
    ),
    settings: (
      <g>
        <rect x="8" y="8" width="40" height="100" fill={colors.fill} />
        <rect x="14" y="20" width="28" height="4" fill={colors.accent} />
        <rect x="14" y="32" width="28" height="3" fill={colors.line} />
        <rect x="14" y="40" width="28" height="3" fill={colors.line} />
        <rect x="14" y="48" width="28" height="3" fill={colors.line} />
        <rect x="54" y="14" width="100" height="6" fill={colors.accent} />
        <rect x="54" y="28" width="100" height="20" rx="2" fill={colors.fill} />
        <rect x="54" y="54" width="100" height="20" rx="2" fill={colors.fill} />
        <rect x="54" y="80" width="100" height="20" rx="2" fill={colors.fill} />
      </g>
    ),
    docs: (
      <g>
        <rect x="8" y="8" width="40" height="100" fill={colors.fill} />
        <rect x="14" y="20" width="28" height="3" fill={colors.accent} />
        <rect x="14" y="28" width="22" height="3" fill={colors.line} />
        <rect x="14" y="36" width="24" height="3" fill={colors.line} />
        <rect x="14" y="44" width="20" height="3" fill={colors.line} />
        <rect x="54" y="14" width="80" height="6" fill={colors.accent} />
        <rect x="54" y="26" width="100" height="3" fill={colors.line} />
        <rect x="54" y="34" width="100" height="3" fill={colors.line} />
        <rect x="54" y="42" width="76" height="3" fill={colors.line} />
        <rect x="54" y="56" width="100" height="50" rx="2" fill={colors.fill} />
      </g>
    ),
    zine: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <text x="80" y="40" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill={colors.accent} textAnchor="middle">RETROZINE</text>
        <rect x="40" y="48" width="80" height="2" fill={colors.line} />
        <rect x="14" y="60" width="44" height="44" rx="2" fill={colors.fill} transform="rotate(-4, 36, 82)" />
        <rect x="60" y="58" width="40" height="46" rx="2" fill={colors.fill} />
        <rect x="106" y="62" width="40" height="42" rx="2" fill={colors.fill} transform="rotate(3, 126, 83)" />
      </g>
    ),
    default: (
      <g>
        <rect x="8" y="8" width="144" height="6" fill={colors.fill} />
        <rect x="14" y="24" width="60" height="6" fill={colors.accent} />
        <rect x="14" y="38" width="132" height="3" fill={colors.line} />
        <rect x="14" y="46" width="100" height="3" fill={colors.line} />
        <rect x="14" y="60" width="42" height="40" rx="2" fill={colors.fill} />
        <rect x="60" y="60" width="42" height="40" rx="2" fill={colors.fill} />
        <rect x="106" y="60" width="42" height="40" rx="2" fill={colors.fill} />
      </g>
    ),
  };
  return (
    <svg viewBox="0 0 160 116" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="160" height="116" fill={colors.bg} />
      {wm[type] || wm.default}
    </svg>
  );
}

export default function PagesIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  useDocumentMeta({
    title: `Page Templates | ${SITE_META.name}`,
    description:
      "Full retro-themed page templates — landing, dashboard, blog, ecommerce, auth, and more.",
    canonical: `${SITE_META.url}/pages`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    return PAGE_REGISTRY.filter(
      (p) => cat === "All" || p.category === cat
    ).filter(
      (p) =>
        !q ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.desc.toLowerCase().includes(q.toLowerCase())
    );
  }, [q, cat]);

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
            <span style={{ color: "var(--fg)" }}>Pages</span>
          </div>
          <h1
            className="page-title"
          >
            Page templates{" "}
            <span className="display-italic" style={{ color: "var(--accent)" }}>
              ready to reshape.
            </span>
          </h1>
          <p
            className="page-lede"
            style={{ color: "var(--muted)" }}
          >
            Pre-composed page layouts you can fork in minutes. Each template uses
            the retroui component library and ships in light + dark mode.
          </p>

          <div className="page-controls">
            <div className="relative w-full max-w-lg">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search pages…"
                className="site-input pl-9 pr-3"
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
              <Box className="w-3 h-3" />
              <span className="mono">
                {filtered.length} of {PAGE_REGISTRY.length} templates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="filter-strip">
        <div className="site-container filter-strip-inner">
          <div className="flex items-center gap-1 overflow-x-auto nice-scroll">
            {CATEGORIES.map((c) => {
              const active = c === cat;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="filter-chip"
                  data-active={active}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="site-section-compact">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link
                key={p.path}
                to={`/pages/${p.path}`}
                className="catalog-card group text-left"
              >
                <div
                  className="catalog-preview aspect-[16/10] relative overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <PageWireframe type={p.path} />
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-[4px] border"
                      style={{
                        background: "var(--bg)",
                        color: "var(--muted)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <p.Icon className="w-3.5 h-3.5 opacity-60" />
                    <h3
                      className="text-[15px] font-semibold tracking-tight"
                      style={{ color: "var(--fg)" }}
                    >
                      {p.name}
                    </h3>
                  </div>
                  <p
                    className="text-[13px] mb-3"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.desc}
                  </p>
                  <div
                    className="flex items-center justify-between text-[12px]"
                    style={{ color: "var(--muted)" }}
                  >
                    <span className="mono">
                      {p.count} variant{p.count > 1 ? "s" : ""}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-0.5"
                      style={{ color: "var(--fg)" }}
                    >
                      Preview
                      <ArrowRight className="w-[11px] h-[11px]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
