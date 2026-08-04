import { useState } from "react";
import { Menu, X } from "lucide-react";

// Box-office navbar — chasing marquee bulbs, a theater sign, and ticket-stub links.
const SHOWS = ["Now Playing", "Coming Soon", "Matinee", "Contact"];

const RetroNavbar1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#7f1d1d] text-[#fde68a] font-mono border-b-4 border-stone-900">
      {/* Chasing bulbs */}
      <div aria-hidden="true" className="flex justify-between px-3 py-1.5 bg-stone-900 overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-[#fde68a] animate-[bulb-chase_1.2s_steps(3)_infinite]"
            style={{ animationDelay: `${(i % 3) * 0.4}s` }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Theater sign */}
        <a href="#" className="flex flex-col leading-none">
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#fde68a]/60">
            ★ The ★
          </span>
          <span
            className="text-2xl font-black uppercase tracking-[0.15em]"
            style={{ textShadow: "2px 2px 0 #1c1814" }}
          >
            Roxy
          </span>
        </a>

        {/* Ticket-stub links */}
        <ul className="hidden md:flex items-stretch">
          {SHOWS.map((l) => (
            <li key={l} className="flex">
              <a
                href="#"
                className="flex items-center px-4 text-[11px] font-bold uppercase tracking-[0.15em] border-l-2 border-dashed border-[#fde68a]/40 last:border-r-2 hover:bg-[#fde68a] hover:text-[#7f1d1d] transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Admit-one CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fde68a] text-[#7f1d1d] text-[11px] font-black uppercase tracking-[0.2em] border-2 border-stone-900 shadow-[3px_3px_0_0_#1c1814] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_#1c1814] transition-all"
          >
            Admit One · $5
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 bg-[#fde68a] text-[#7f1d1d] border-2 border-stone-900 shadow-[3px_3px_0_0_#1c1814]"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile listings board */}
      {open && (
        <div className="md:hidden border-t-2 border-dashed border-[#fde68a]/40 px-4 py-3">
          <ul className="divide-y divide-dashed divide-[#fde68a]/30">
            {[...SHOWS, "Admit One · $5"].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="flex items-center justify-between py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] hover:text-white transition-colors"
                >
                  {l}
                  <span aria-hidden="true" className="opacity-50">✂ - - -</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes bulb-chase {
          0% { opacity: 1; }
          33% { opacity: 0.25; }
          66% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default RetroNavbar1;
