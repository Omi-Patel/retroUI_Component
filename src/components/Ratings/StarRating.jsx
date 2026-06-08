import { useState } from "react";

// Classic 5-star rating with hover preview and a hard-edged retro look.
const StarRating = () => {
  const [val, setVal] = useState(3);
  const [hover, setHover] = useState(0);
  const active = hover || val;

  return (
    <div className="inline-flex flex-col items-center gap-2 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] px-5 py-4 font-mono">
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setVal(n)}
            className="text-3xl leading-none transition-transform hover:scale-110"
            style={{ color: n <= active ? "#e3b762" : "transparent", WebkitTextStroke: "2px #1f1b16" }}
            aria-label={`${n} stars`}
          >
            ★
          </button>
        ))}
      </div>
      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/60">
        {active} / 5 stars
      </span>
    </div>
  );
};

export default StarRating;
