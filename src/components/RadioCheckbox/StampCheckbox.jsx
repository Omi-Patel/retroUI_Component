import { useState } from "react";

// A checkbox that slams down a rubber "APPROVED" ink stamp when ticked.
const StampCheckbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setChecked((c) => !c)}
      aria-pressed={checked}
      className="inline-flex items-center gap-3 cursor-pointer select-none font-mono"
    >
      <span
        className="relative w-9 h-9 border-4 border-black bg-[#f5f1e6] shadow-[3px_3px_0_0_black] flex items-center justify-center transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        {checked && (
          <span className="text-black text-2xl font-black leading-none -rotate-12">
            ✓
          </span>
        )}
      </span>
      <span
        className={`text-[11px] font-black uppercase tracking-[0.15em] px-2 py-1 border-2 ${
          checked
            ? "text-[#b23a2e] border-[#b23a2e] -rotate-3"
            : "text-black/30 border-black/20 rotate-0"
        } transition-all`}
      >
        {checked ? "Approved" : "Pending"}
      </span>
    </button>
  );
};

export default StampCheckbox;
