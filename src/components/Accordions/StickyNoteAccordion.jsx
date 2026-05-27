import React, { useState } from "react";

const StickyNoteAccordion = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { color: "bg-yellow-300", q: "Reminder", a: "Pay rent on Friday." },
    { color: "bg-pink-300", q: "Idea", a: "What if cats ran a coffee shop?" },
    { color: "bg-cyan-300", q: "Todo", a: "Buy stamps. Mail postcards." },
  ];

  return (
    <div className="font-mono w-full max-w-md space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className={`${it.color} text-black border-2 border-black shadow-[5px_5px_0px_0px_black] transition-transform ${
              isOpen ? "rotate-[-1deg]" : "rotate-[0.5deg]"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between px-4 py-2 text-left text-sm font-black uppercase"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{isOpen ? "▾" : "▸"}</span>
                {it.q}
              </span>
              <span className="text-[10px] opacity-60">tap me</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="px-4 pb-3 text-base"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  {it.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StickyNoteAccordion;
