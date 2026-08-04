import { useState } from "react";
import { Menu, X } from "lucide-react";

// 8-bit HUD navbar — pixel logo, level-tab links, and a coin counter.
// Pairs with PixelFooter for a matching arcade shell.
const LEVELS = [
  { code: "1-1", label: "Home" },
  { code: "1-2", label: "About" },
  { code: "2-1", label: "Games" },
  { code: "2-2", label: "Contact" },
];

const PixelCoin = () => (
  <span aria-hidden="true" className="inline-grid grid-cols-5 gap-[1px]">
    {[
      0,1,1,1,0,
      1,1,0,1,1,
      1,0,0,0,1,
      1,1,0,1,1,
      0,1,1,1,0,
    ].map((c, i) => (
      <span key={i} className="w-[3px] h-[3px]" style={{ background: c ? "#facc15" : "transparent" }} />
    ))}
  </span>
);

const PixelNavbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("1-1");

  return (
    <nav className="bg-[#0f0f23] text-stone-200 font-mono border-b-4 border-[#facc15]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Pixel brand */}
        <a href="#" className="flex items-center gap-2.5">
          <span aria-hidden="true" className="grid grid-cols-4 gap-[2px]">
            {[1,1,1,1, 1,0,0,1, 1,0,0,1, 1,1,1,1].map((c, i) => (
              <span key={i} className="w-2 h-2" style={{ background: c ? "#facc15" : "#2a2a4a" }} />
            ))}
          </span>
          <span className="text-[15px] font-black tracking-[0.3em] text-[#facc15] uppercase">
            PixelNav
          </span>
        </a>

        {/* Level-tab links */}
        <ul className="hidden md:flex items-center gap-1">
          {LEVELS.map((lv) => {
            const isActive = active === lv.code;
            return (
              <li key={lv.code}>
                <a
                  href="#"
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(lv.code);
                  }}
                  className={`group inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase border-2 transition-colors ${
                    isActive
                      ? "bg-[#facc15] text-[#0f0f23] border-[#facc15] shadow-[3px_3px_0_0_#000]"
                      : "border-transparent text-stone-400 hover:text-[#facc15] hover:border-[#3f3f5e]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={isActive ? "" : "opacity-0 group-hover:opacity-100 transition-opacity"}
                  >
                    ▶
                  </span>
                  <span className={isActive ? "" : "text-stone-500 group-hover:text-stone-300"}>
                    {lv.code}
                  </span>
                  {lv.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Coin counter + mobile toggle */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a35] border-2 border-[#3f3f5e] text-[11px] font-bold tracking-[0.2em] text-[#facc15] uppercase">
            <PixelCoin />
            ×99
          </span>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 bg-[#1a1a35] text-[#facc15] border-2 border-[#3f3f5e] shadow-[3px_3px_0_0_#000]"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile level select */}
      {open && (
        <div className="md:hidden border-t-2 border-[#2a2a4a] px-4 py-3">
          <p className="text-[9px] tracking-[0.35em] text-stone-500 uppercase mb-2">
            ★ Select World
          </p>
          <ul className="space-y-1">
            {LEVELS.map((lv) => (
              <li key={lv.code}>
                <a
                  href="#"
                  className="group flex items-center gap-2.5 px-2 py-2 text-[12px] font-bold tracking-[0.2em] uppercase text-stone-300 hover:text-[#facc15] transition-colors"
                >
                  <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 text-[#facc15] transition-opacity">
                    ▶
                  </span>
                  <span className="text-stone-500 group-hover:text-stone-300">{lv.code}</span>
                  {lv.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[10px] font-black tracking-[0.25em] text-[#4ade80] uppercase animate-[pixelnav-blink_1.1s_steps(1)_infinite]">
            ▸ Press Start
          </p>
        </div>
      )}

      <style>{`
        @keyframes pixelnav-blink {
          0%, 55% { opacity: 1; }
          56%, 100% { opacity: 0.1; }
        }
      `}</style>
    </nav>
  );
};

export default PixelNavbar;
