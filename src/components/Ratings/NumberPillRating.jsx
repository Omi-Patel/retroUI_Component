import { useState } from "react";

// A 0–10 "how likely are you to recommend" pill scale (retro NPS).
const NumberPillRating = () => {
  const [val, setVal] = useState(8);

  return (
    <div className="w-80 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <div className="text-[11px] font-black uppercase tracking-[0.15em] mb-3">
        How likely to recommend?
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 11 }, (_, n) => {
          const on = n === val;
          return (
            <button
              key={n}
              onClick={() => setVal(n)}
              className={`flex-1 h-9 text-[12px] font-black tabular-nums border-2 border-black transition-all ${
                on ? "bg-black text-[#f5f1e6] -translate-y-1 shadow-[2px_3px_0_0_#000]" : "bg-[#f5f1e6] hover:bg-[#e3b762]"
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between mt-2 text-[9px] uppercase tracking-wider text-black/50">
        <span>Not at all</span>
        <span>Extremely</span>
      </div>
    </div>
  );
};

export default NumberPillRating;
