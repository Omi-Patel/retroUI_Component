/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Search,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  Home,
  Info,
  Box,
  Shapes,
  ScrollText,
  Mail,
  Layers,
  Rocket,
} from "lucide-react";
import { COMPONENT_REGISTRY, PAGE_REGISTRY } from "../../lib/registries";

const NAV_ITEMS = [
  { label: "Home", to: "/", Icon: Home },
  { label: "Getting Started", to: "/getting-started", Icon: Rocket },
  { label: "Components", to: "/components", Icon: Layers },
  { label: "Icons", to: "/icons", Icon: Shapes },
  { label: "Page Templates", to: "/pages", Icon: Box },
  { label: "About", to: "/about", Icon: Info },
  { label: "Release Notes", to: "/release-notes", Icon: ScrollText },
  { label: "Contact", to: "/contact-us", Icon: Mail },
];

const GROUP_ORDER = ["Navigation", "Components", "Pages"];

// Highlight the matched substring inside a result label.
function highlight(text, q) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <span style={{ color: "var(--accent)", fontWeight: 700 }}>{text.slice(i, i + q.length)}</span>
      {text.slice(i + q.length)}
    </>
  );
}

const Kbd = ({ children }) => (
  <kbd
    className="inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded text-[10px] mono"
    style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--muted)" }}
  >
    {children}
  </kbd>
);

/**
 * Global ⌘K command palette. Searches navigation, components, and page
 * templates; arrow keys move, Enter navigates, Esc closes. Controlled by the
 * Navbar (which owns the open state + keyboard shortcut).
 */
export const CommandPalette = ({ open, onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const rowRefs = useRef({});
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);

  const items = useMemo(() => {
    const nav = NAV_ITEMS.map((n) => ({ ...n, group: "Navigation" }));
    const comps = COMPONENT_REGISTRY.map((c) => ({
      label: c.name,
      sub: c.category,
      to: `/components/${c.path}`,
      Icon: c.Icon,
      group: "Components",
    }));
    const pages = PAGE_REGISTRY.map((p) => ({
      label: p.name,
      sub: p.category,
      to: `/pages/${p.path}`,
      Icon: p.Icon,
      group: "Pages",
    }));
    return [...nav, ...comps, ...pages];
  }, []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return items;
    return items
      .map((it) => {
        const label = it.label.toLowerCase();
        let score = -1;
        if (label.startsWith(needle)) score = 0;
        else if (label.includes(needle)) score = 1;
        else if (it.sub && it.sub.toLowerCase().includes(needle)) score = 2;
        else if (it.group.toLowerCase().includes(needle)) score = 3;
        return { it, score };
      })
      .filter((r) => r.score >= 0)
      .sort((a, b) => a.score - b.score)
      .map((r) => r.it);
  }, [items, q]);

  // Flatten in group order so the visible order matches keyboard order.
  const ordered = useMemo(() => {
    const out = [];
    for (const g of GROUP_ORDER) {
      const rows = filtered.filter((it) => it.group === g);
      if (rows.length) out.push({ group: g, rows });
    }
    return out;
  }, [filtered]);
  const flat = useMemo(() => ordered.flatMap((g) => g.rows), [ordered]);

  // Reset + focus when opened.
  useEffect(() => {
    if (!open) return;
    setQ("");
    setActive(0);
    const id = setTimeout(() => inputRef.current?.focus(), 20);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(id);
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => setActive(0), [q]);

  // Keep the active row in view.
  useEffect(() => {
    rowRefs.current[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  // Keyboard handling lives on window so focus stays in the input.
  const stateRef = useRef({ flat, active });
  stateRef.current = { flat, active };
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      const { flat, active } = stateRef.current;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const it = flat[active];
        if (it) {
          navigate({ to: it.to });
          onClose();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, navigate, onClose]);

  if (!open) return null;

  const go = (it) => {
    navigate({ to: it.to });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]">
      <style>{`
        @keyframes cmdkPop { from { opacity: 0; transform: translateY(-8px) scale(.98) } to { opacity: 1; transform: none } }
        @keyframes cmdkFade { from { opacity: 0 } to { opacity: 1 } }
      `}</style>

      {/* Backdrop (native button → keyboard-closeable, no a11y warning) */}
      <button
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        style={{
          background: "color-mix(in srgb, var(--fg) 28%, transparent)",
          backdropFilter: "blur(8px)",
          animation: "cmdkFade .12s ease-out",
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-md)",
          animation: "cmdkPop .14s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        {/* Search field */}
        <div className="flex h-[56px] items-center gap-2.5 px-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <Search className="w-4 h-4 flex-shrink-0" style={{ color: "var(--muted)" }} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search components, pages, sections…"
            className="flex-1 bg-transparent outline-none text-[15px]"
            style={{ color: "var(--fg)" }}
          />
          {q && (
            <span className="text-[11px] mono flex-shrink-0" style={{ color: "var(--muted)" }}>
              {flat.length} result{flat.length === 1 ? "" : "s"}
            </span>
          )}
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[52vh] overflow-y-auto nice-scroll py-2">
          {flat.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <Search className="w-6 h-6 mx-auto mb-3 opacity-30" style={{ color: "var(--muted)" }} />
              <p className="text-[13.5px]" style={{ color: "var(--muted)" }}>
                No matches for “<span style={{ color: "var(--fg)" }}>{q}</span>”
              </p>
            </div>
          ) : (
            ordered.map((g) => (
              <div key={g.group} className="mb-1.5 last:mb-0">
                <div
                  className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.12em] flex items-center justify-between"
                  style={{ color: "var(--muted)" }}
                >
                  <span>{g.group}</span>
                  <span className="opacity-60">{g.rows.length}</span>
                </div>
                {g.rows.map((it) => {
                  const idx = flat.indexOf(it);
                  const isActive = idx === active;
                  const Icon = it.Icon;
                  return (
                    <button
                      key={it.to}
                      ref={(el) => (rowRefs.current[idx] = el)}
                      onMouseMove={() => setActive(idx)}
                      onClick={() => go(it)}
                      className="group w-full flex items-center gap-3 pl-2 pr-3 py-1.5 mx-1.5 rounded-lg text-left transition-colors"
                      style={{
                        width: "calc(100% - 12px)",
                        background: isActive ? "var(--surface-2)" : "transparent",
                        color: "var(--fg)",
                      }}
                    >
                      {/* accent bar */}
                      <span
                        className="w-[3px] h-6 rounded-full flex-shrink-0"
                        style={{ background: isActive ? "var(--accent)" : "transparent" }}
                      />
                      {/* icon chip */}
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0"
                        style={{
                          background: isActive ? "var(--bg)" : "var(--surface)",
                          border: "1px solid var(--border)",
                          color: "var(--fg)",
                        }}
                      >
                        {Icon && <Icon className="w-3.5 h-3.5" />}
                      </span>
                      <span className="flex-1 text-[13.5px] truncate">{highlight(it.label, q.trim())}</span>
                      {it.sub && (
                        <span
                          className="text-[10.5px] px-1.5 py-0.5 rounded mono flex-shrink-0"
                          style={{ background: "var(--surface)", color: "var(--muted)", border: "1px solid var(--border)" }}
                        >
                          {it.sub}
                        </span>
                      )}
                      <CornerDownLeft
                        className="w-3.5 h-3.5 flex-shrink-0 transition-opacity"
                        style={{ color: "var(--muted)", opacity: isActive ? 1 : 0 }}
                      />
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer legend */}
        <div
          className="flex items-center gap-4 px-4 h-9 text-[11px]"
          style={{ borderTop: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--muted)" }}
        >
          <span className="flex items-center gap-1.5">
            <Kbd><ArrowUp className="w-2.5 h-2.5" /></Kbd>
            <Kbd><ArrowDown className="w-2.5 h-2.5" /></Kbd>
            navigate
          </span>
          <span className="flex items-center gap-1.5">
            <Kbd><CornerDownLeft className="w-2.5 h-2.5" /></Kbd>
            open
          </span>
          <span className="flex items-center gap-1.5">
            <Kbd>esc</Kbd>
            close
          </span>
          <span className="ml-auto mono opacity-70">RetroUI ⌘K</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
