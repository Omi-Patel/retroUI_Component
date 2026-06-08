/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { Palette, Check } from "lucide-react";
import { PALETTES } from "../../lib/constants";

const PaletteToggle = ({ compact = false }) => {
  const [palette, setPalette] = useState(
    () =>
      (typeof window !== "undefined" && localStorage.getItem("palette")) ||
      "newsprint"
  );
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (palette === "newsprint") {
      root.removeAttribute("data-palette");
    } else {
      root.setAttribute("data-palette", palette);
    }
    localStorage.setItem("palette", palette);
  }, [palette]);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const size = compact ? "h-8 w-8" : "h-9 w-9";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch palette"
        className={`inline-flex items-center justify-center rounded-md transition-colors hover:bg-[var(--surface-2)] ${size}`}
        style={{ color: "var(--fg)" }}
      >
        <Palette className="w-4 h-4" />
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 py-1"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: "var(--muted)" }}
          >
            Palette
          </div>
          {PALETTES.map((p) => {
            const active = p.id === palette;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setPalette(p.id);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] transition-colors hover:bg-[var(--surface-2)]"
                style={{ color: "var(--fg)" }}
              >
                <span className="flex gap-0.5">
                  {p.swatch.map((c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: c,
                        border: "1px solid rgba(0,0,0,0.15)",
                      }}
                    />
                  ))}
                </span>
                <span className="flex-1 text-left">{p.label}</span>
                {active && (
                  <Check className="w-3.5 h-3.5" style={{ color: "var(--fg)" }} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PaletteToggle;
