import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const TypewriterDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
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

  const options = ["Draft", "Publish", "Archive", "Delete"];

  return (
    <div ref={ref} className="relative font-mono w-56">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-2 text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all text-sm font-bold uppercase tracking-wider"
      >
        <span>{selected}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-2 w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_black] py-1"
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
                className="w-full text-left px-4 py-1.5 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                <span className="opacity-50 mr-1">›</span> {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypewriterDropdown;
