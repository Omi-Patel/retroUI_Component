import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const RetroFAQAccordion = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "How fast is shipping?", a: "Faster than a fax machine in 1996." },
    { q: "Do you have refunds?", a: "Yes, within 30 days. No questions asked." },
    { q: "Where are you based?", a: "Right here, on the world wide web." },
  ];

  return (
    <div className="font-mono w-full max-w-md bg-yellow-100 border-4 border-black shadow-[6px_6px_0px_0px_black] divide-y-4 divide-black">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-bold uppercase hover:bg-yellow-200 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="bg-black text-yellow-300 text-[10px] px-1.5 py-0.5">
                  Q{i + 1}
                </span>
                {it.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 text-sm bg-yellow-50">
                  <span className="bg-black text-yellow-300 text-[10px] px-1.5 py-0.5 mr-2">
                    A
                  </span>
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

export default RetroFAQAccordion;
