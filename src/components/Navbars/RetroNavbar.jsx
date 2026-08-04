import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

// Zine-shop sticker navbar — label-tape brand, sticker links, and a cart stub.
const LINKS = ["Home", "Zines", "Stickers", "About"];

const RetroNavbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="bg-[#f5f1e6] text-stone-900 border-b-4 border-stone-900 font-mono">
      {/* Notice strip */}
      <div className="border-b-2 border-dashed border-stone-900/30 text-[9px] tracking-[0.3em] uppercase text-stone-500">
        <div className="max-w-6xl mx-auto px-4 py-1 flex items-center justify-between">
          <span>★ Free shipping over $25</span>
          <span className="hidden sm:inline">Hand-packed daily</span>
          <span>Est. 1997</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Label-tape brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="inline-flex items-center justify-center w-9 h-9 bg-stone-900 text-[#f5f1e6] font-black text-lg border-2 border-stone-900 group-hover:bg-[#e07b67] transition-colors">
            R
          </span>
          <span className="px-2 py-0.5 bg-stone-900 text-[#f5f1e6] text-[13px] font-black uppercase tracking-[0.2em] rotate-[-1deg]">
            RetroBrand
          </span>
        </a>

        {/* Sticker links */}
        <ul className="hidden md:flex items-center gap-1.5">
          {LINKS.map((l, i) => {
            const isActive = active === l;
            return (
              <li key={l}>
                <a
                  href="#"
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(l);
                  }}
                  className={`inline-block px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] border-2 transition-all ${
                    isActive
                      ? `bg-yellow-300 border-stone-900 shadow-[3px_3px_0_0_#1c1814] ${i % 2 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]"}`
                      : "border-transparent hover:border-stone-900 hover:bg-white hover:shadow-[3px_3px_0_0_#1c1814]"
                  }`}
                >
                  {l}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Cart + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-[#e07b67] text-stone-900 text-[11px] font-black uppercase tracking-[0.15em] border-2 border-stone-900 shadow-[3px_3px_0_0_#1c1814] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#1c1814] transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
            Cart · 03
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 bg-yellow-300 border-2 border-stone-900 shadow-[3px_3px_0_0_#1c1814]"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile sticker sheet */}
      {open && (
        <div className="md:hidden border-t-2 border-dashed border-stone-900/30 px-4 py-3">
          <ul className="space-y-1.5">
            {[...LINKS, "Cart · 03"].map((l, i) => (
              <li key={l}>
                <a
                  href="#"
                  className={`block px-3 py-2 text-[12px] font-black uppercase tracking-[0.15em] border-2 border-stone-900 bg-white shadow-[3px_3px_0_0_#1c1814] ${
                    i % 2 ? "rotate-[0.5deg]" : "rotate-[-0.5deg]"
                  } hover:bg-yellow-300 transition-colors`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default RetroNavbar;
