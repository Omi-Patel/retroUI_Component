import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const UniqueNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f5f1e6] text-black border-b-4 border-black font-mono">
      <div className="border-b-2 border-dashed border-black/40 text-[10px] tracking-[0.3em] uppercase">
        <div className="container mx-auto px-4 py-1 flex items-center justify-between opacity-70">
          <span>VOL. 27 · NO. 14</span>
          <span className="hidden sm:inline">★ ESTABLISHED 1997 ★</span>
          <span>FRIDAY EDITION</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none"
        >
          Unique<span className="italic font-light">Daily</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-3 py-1.5 text-xs uppercase tracking-widest font-bold hover:bg-yellow-300 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="ml-2 px-3 py-1.5 bg-black text-yellow-300 text-xs uppercase tracking-widest font-bold border-2 border-black hover:bg-yellow-300 hover:text-black transition-colors"
            >
              Subscribe
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black]"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t-2 border-dashed border-black/40 bg-[#f5f1e6]">
          <ul className="px-4 py-3 space-y-1">
            {["Home", "About", "Services", "Contact", "Subscribe"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm uppercase tracking-widest font-bold hover:bg-yellow-300"
                >
                  {item}
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
