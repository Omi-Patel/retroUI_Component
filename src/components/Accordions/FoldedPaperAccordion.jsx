import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FoldedPaperAccordion = () => {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: "What is this thing?",
      a: "A folded-paper accordion. Crisp creases included.",
    },
    {
      q: "Can I customize it?",
      a: "Of course. Swap colors, fonts, and shadows freely.",
    },
    { q: "Does it support keyboard?", a: "Yes — focus, tab, space to toggle." },
  ];

  return (
    <div className="font-mono w-full max-w-md space-y-2">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className="bg-white text-black border-4 border-black shadow-[5px_5px_0px_0px_black]"
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-bold uppercase"
            >
              <span>{it.q}</span>
              <span
                className="inline-flex w-6 h-6 items-center justify-center border-2 border-black flex-shrink-0"
                style={{ background: isOpen ? "black" : "white" }}
              >
                {isOpen ? (
                  <Minus className="w-3 h-3 text-white" />
                ) : (
                  <Plus className="w-3 h-3 text-black" />
                )}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t-2 border-dashed border-black/50 px-4 py-3 text-sm">
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

export default FoldedPaperAccordion;
