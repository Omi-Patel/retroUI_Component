import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ZineDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Issues");
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const options = [
    "All Issues",
    "Punk Rock",
    "Lo-Fi Diaries",
    "Cassette Tapes",
    "Vintage Ads",
  ];

  return (
    <div ref={ref} className="relative font-mono w-60">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 bg-fuchsia-300 text-black border-4 border-black shadow-[5px_5px_0px_0px_black] hover:rotate-[-1deg] transition-transform text-sm font-black uppercase"
      >
        <span>{selected}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-yellow-200 border-4 border-black shadow-[5px_5px_0px_0px_black] py-1 rotate-[-0.5deg]">
          {options.map((opt, i) => (
            <li key={opt}>
              <button
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-1.5 text-sm font-bold uppercase border-b-2 border-dashed border-black/40 last:border-b-0 transition-colors ${
                  i % 2 ? "hover:bg-pink-300" : "hover:bg-cyan-300"
                }`}
              >
                #{String(i + 1).padStart(2, "0")} — {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ZineDropdown;
