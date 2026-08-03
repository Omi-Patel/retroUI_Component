import React, { useState } from "react";

const TerminalAccordion = () => {
  const [open, setOpen] = useState([0]);
  const items = [
    { cmd: "help", out: "Type 'ls', 'cat', or 'man <cmd>' for details." },
    { cmd: "whoami", out: "guest@retro:~$ — anonymous visitor (uid=1000)" },
    { cmd: "uptime", out: "27 years, 6 months, still rendering." },
  ];

  const toggle = (i) =>
    setOpen((o) =>
      o.includes(i) ? o.filter((x) => x !== i) : [...o, i]
    );

  return (
    <div className="font-mono w-full max-w-md bg-black text-green-400 border-2 border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div
            key={it.cmd}
            className="border-b border-green-400/30 last:border-b-0"
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-2 px-4 py-2 text-left text-sm hover:bg-green-400/10 transition-colors"
            >
              <span className="opacity-60">$</span>
              <span>{it.cmd}</span>
              <span className="ml-auto text-xs opacity-60">
                {isOpen ? "[-]" : "[+]"}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-200 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-3 text-xs text-green-300/80">
                  {">"} {it.out}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TerminalAccordion;
