import { useState } from "react";

// Rate by slamming ink stamps — each filled stamp tilts like a real one.
const StampRating = () => {
  const [val, setVal] = useState(4);

  return (
    <div className="inline-flex flex-col gap-2 bg-[#fbf8f0] border-4 border-black shadow-[8px_8px_0px_0px_black] px-5 py-4 font-mono">
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black/60">Inspector rating</span>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => {
          const on = n <= val;
          return (
            <button
              key={n}
              onClick={() => setVal(n)}
              className={`w-9 h-9 border-2 flex items-center justify-center text-[9px] font-black uppercase leading-none transition-all ${
                on
                  ? "border-[#b23a2e] text-[#b23a2e] bg-[#b23a2e]/5"
                  : "border-black/20 text-black/20"
              }`}
              style={{ transform: on ? `rotate(${(n % 2 ? -1 : 1) * 7}deg)` : "none" }}
              aria-label={`${n}`}
            >
              OK
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StampRating;
