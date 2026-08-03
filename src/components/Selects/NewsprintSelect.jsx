import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

// Classifieds section select — pick your column inch in the back pages.
const sections = [
  { id: "for-sale", label: "For Sale", hint: "42 ads" },
  { id: "wanted", label: "Wanted", hint: "17 ads" },
  { id: "personals", label: "Personals", hint: "63 ads" },
  { id: "lost-found", label: "Lost & Found", hint: "08 ads" },
];

const NewsprintSelect = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sections[0]);
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

  return (
    <div
      ref={ref}
      className="relative w-72 bg-[#f5f1e6] text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono p-4"
    >
      <p
        id="newsprint-select-label"
        className="text-[9px] uppercase tracking-[0.35em] text-stone-500 mb-2"
      >
        The Daily · Classifieds
      </p>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="newsprint-select-label"
        className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border-2 border-black text-xs font-black uppercase tracking-wider hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f1e6] transition-colors"
      >
        <span>
          <span className="text-stone-500 font-bold">Section:</span>{" "}
          {selected.label}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby="newsprint-select-label"
          className="absolute left-4 right-4 z-10 mt-2 bg-white border-2 border-black shadow-[4px_4px_0_0_black]"
        >
          {sections.map((s) => (
            <li key={s.id} role="none">
              <button
                type="button"
                role="option"
                aria-selected={selected.id === s.id}
                onClick={() => {
                  setSelected(s);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider border-b-2 border-dashed border-stone-400 last:border-b-0 hover:bg-yellow-100 focus:outline-none focus-visible:bg-yellow-100 ${
                  selected.id === s.id ? "bg-yellow-100" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  {selected.id === s.id ? (
                    <Check aria-hidden="true" className="w-3.5 h-3.5" />
                  ) : (
                    <span aria-hidden="true" className="w-3.5" />
                  )}
                  {s.label}
                </span>
                <span className="text-[9px] text-stone-500 tracking-[0.2em]">
                  {s.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500 mt-3 border-t border-dashed border-stone-400 pt-2">
        Rates: $0.10 per word · Cash only
      </p>
    </div>
  );
};

export default NewsprintSelect;
