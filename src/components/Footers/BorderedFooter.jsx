import React from "react";
import { Twitter, Instagram, Github } from "lucide-react";

const BorderedFooter = () => {
  return (
    <footer className="bg-yellow-200 text-black border-t-4 border-black font-mono py-8 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.4) 1.2px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1 bg-yellow-200 border-[3px] border-red-600 text-red-600 rotate-[-4deg] text-[10px] font-black uppercase tracking-widest mb-4">
          ★ STAMP OF APPROVAL ★
        </div>
        <h3 className="text-3xl font-black uppercase tracking-tight mb-1">
          CreativeBrand
        </h3>
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-5">
          POSTMARK · {new Date().getFullYear()} · ALL RIGHTS RESERVED
        </p>

        <div className="flex justify-center gap-1 mb-5 flex-wrap">
          {["Privacy", "Terms", "Contact", "FAQ"].map((l) => (
            <a
              key={l}
              href="#"
              className="px-3 py-1.5 text-[11px] uppercase tracking-widest font-bold border-2 border-black hover:bg-black hover:text-yellow-200 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {[Twitter, Instagram, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 bg-yellow-200 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] hover:bg-black hover:text-yellow-200 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default BorderedFooter;
