import { useState } from "react";

// A heart meter — half-step ratings with a hover preview.
const HeartRating = () => {
  const [val, setVal] = useState(3.5);
  const [hover, setHover] = useState(0);
  const active = hover || val;

  return (
    <div className="inline-flex flex-col items-center gap-2 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] px-5 py-4 font-mono">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => {
          const fill = Math.max(0, Math.min(1, active - (n - 1))) * 100;
          return (
            <span key={n} className="relative w-7 h-7" aria-label={`${n}`}>
              <span className="absolute inset-0 text-2xl leading-none" style={{ color: "transparent", WebkitTextStroke: "2px #1f1b16" }}>♥</span>
              <span className="absolute inset-0 overflow-hidden text-2xl leading-none text-[#e07b67]" style={{ width: `${fill}%` }}>♥</span>
              <button onMouseEnter={() => setHover(n - 0.5)} onClick={() => setVal(n - 0.5)} className="absolute inset-0 left-0 w-1/2" onMouseLeave={() => setHover(0)} />
              <button onMouseEnter={() => setHover(n)} onClick={() => setVal(n)} className="absolute inset-0 left-1/2 w-1/2" onMouseLeave={() => setHover(0)} />
            </span>
          );
        })}
      </div>
      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/60">{active.toFixed(1)} hearts</span>
    </div>
  );
};

export default HeartRating;
