import { useState } from "react";
import { Menu, X } from "lucide-react";

// Arcade neon navbar — tube-glow brand with a flickering letter and an OPEN lamp.
const LINKS = ["Home", "Games", "Prizes", "Contact"];

const NeonNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="bg-[#0a0a14] text-stone-300 font-mono border-b-2 border-cyan-400"
      style={{ boxShadow: "0 4px 18px -6px rgba(34,211,238,0.5)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Tube brand */}
        <a
          href="#"
          className="text-xl font-black tracking-[0.25em] uppercase text-pink-400 select-none"
          style={{ textShadow: "0 0 6px #f472b6, 0 0 18px rgba(244,114,182,0.7)" }}
        >
          NE
          <span className="animate-[nav-neon-flicker_3.5s_linear_infinite]">O</span>
          N&nbsp;NAV
        </a>

        {/* Tube links */}
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="group relative py-1 text-[12px] tracking-[0.25em] uppercase text-stone-400 hover:text-cyan-300 transition-colors"
                style={{ textShadow: "none" }}
              >
                <span className="group-hover:[text-shadow:0_0_8px_rgba(103,232,249,0.8)]">
                  {l}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: "0 0 8px #67e8f9" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* OPEN lamp + mobile toggle */}
        <div className="flex items-center gap-3">
          <span
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-lime-400 text-lime-400 text-[10px] font-bold tracking-[0.35em] uppercase"
            style={{
              boxShadow: "0 0 8px rgba(163,230,53,0.5), inset 0 0 6px rgba(163,230,53,0.3)",
              textShadow: "0 0 6px #a3e635",
            }}
          >
            Open
          </span>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border-2 border-pink-400 text-pink-400"
            style={{ boxShadow: "0 0 8px rgba(244,114,182,0.5)" }}
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile tube menu */}
      {open && (
        <div className="md:hidden border-t border-cyan-400/30 px-4 py-3">
          <ul className="space-y-1">
            {LINKS.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="group flex items-center gap-3 px-2 py-2.5 text-[13px] tracking-[0.25em] uppercase text-stone-400 hover:text-cyan-300 transition-colors"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ boxShadow: "0 0 6px #67e8f9" }}
                  />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes nav-neon-flicker {
          0%, 8%, 12%, 100% { opacity: 1; }
          9%, 11% { opacity: 0.2; }
          62%, 66% { opacity: 1; }
          64% { opacity: 0.35; }
        }
      `}</style>
    </nav>
  );
};

export default NeonNavbar;
