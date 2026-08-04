import { useState } from "react";
import { Menu, X } from "lucide-react";

// Newspaper masthead navbar — edition strip, serif-italic wordmark, and
// section links with a double-rule active state.
const SECTIONS = ["Front Page", "Culture", "Classifieds", "Archive"];

const UniqueNavbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Front Page");

  return (
    <nav className="bg-[#f5f1e6] text-stone-900 border-b-4 border-double border-stone-900 font-mono">
      {/* Edition strip */}
      <div className="border-b-2 border-dashed border-stone-900/30 text-[9px] tracking-[0.3em] uppercase text-stone-500">
        <div className="max-w-6xl mx-auto px-4 py-1 flex items-center justify-between">
          <span>Vol. 27 · No. 14</span>
          <span className="hidden sm:inline">★ Established 1997 ★</span>
          <span>Friday Edition · 5¢</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Masthead */}
        <a href="#" className="leading-none">
          <span className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
            Unique
          </span>
          <span className="text-3xl sm:text-4xl font-serif italic font-normal tracking-tight">
            Daily
          </span>
        </a>

        {/* Section links */}
        <ul className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => {
            const isActive = active === s;
            return (
              <li key={s}>
                <a
                  href="#"
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(s);
                  }}
                  className={`inline-block px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] font-bold transition-colors ${
                    isActive
                      ? "border-y-2 border-stone-900"
                      : "hover:bg-yellow-300"
                  }`}
                >
                  {s}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#"
              className="ml-2 px-3.5 py-1.5 bg-stone-900 text-[#f5f1e6] text-[11px] uppercase tracking-[0.15em] font-black border-2 border-stone-900 hover:bg-yellow-300 hover:text-stone-900 transition-colors"
            >
              Subscribe
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 bg-yellow-300 text-stone-900 border-2 border-stone-900 shadow-[3px_3px_0_0_#1c1814]"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile index */}
      {open && (
        <div className="md:hidden border-t-2 border-dashed border-stone-900/30 px-4 py-3">
          <p className="text-[9px] tracking-[0.35em] uppercase text-stone-500 mb-2">
            In this edition
          </p>
          <ul className="space-y-0.5">
            {[...SECTIONS, "Subscribe"].map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="group flex items-baseline gap-2 px-2 py-2 text-[12px] uppercase tracking-[0.15em] font-bold hover:bg-yellow-300 transition-colors"
                >
                  <span aria-hidden="true" className="text-stone-400 group-hover:text-stone-900">
                    ☞
                  </span>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default UniqueNavbar;
