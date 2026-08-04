import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Zap } from "lucide-react";

const NeonDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("CHOOSE MODE");
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const options = ["ARCADE", "CRUISE", "BATTLE", "TIME ATTACK"];

  return (
    <div ref={ref} className="relative font-mono w-56">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-2 bg-black text-pink-400 border-2 border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.5)] hover:shadow-[0_0_25px_rgba(244,114,182,0.7)] transition-shadow text-sm font-bold tracking-wider"
      >
        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          {selected}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-2 w-full bg-black border-2 border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.5)] py-1"
        >
          {options.map((opt) => (
            <li key={opt} role="none">
              <button
                role="option"
                aria-selected={selected === opt}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 text-sm tracking-wider text-pink-300 hover:text-black hover:bg-pink-400 hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] transition-colors"
              >
                ▸ {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NeonDropdown;
