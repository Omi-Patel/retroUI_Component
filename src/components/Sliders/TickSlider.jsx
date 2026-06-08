import { useState } from "react";

// A radio-tuner style slider: a ruler of ticks with a pointer riding the dial.
const TickSlider = () => {
  const [val, setVal] = useState(88);
  const min = 76;
  const max = 108;
  const pct = ((val - min) / (max - min)) * 100;

  return (
    <div className="w-80 bg-[#1f1b16] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e3b762]">FM</span>
        <span className="text-[15px] font-black tabular-nums text-[#39ff14]" style={{ textShadow: "0 0 6px rgba(57,255,20,.7)" }}>
          {val.toFixed(1)}
        </span>
      </div>

      <div className="relative h-10">
        {/* ruler ticks */}
        <div className="absolute inset-x-0 top-3 flex justify-between">
          {Array.from({ length: 33 }).map((_, i) => (
            <span key={i} className={`w-px bg-[#cfc7b3] ${i % 4 === 0 ? "h-3" : "h-1.5"}`} />
          ))}
        </div>
        {/* pointer */}
        <div
          className="absolute top-0 -translate-x-1/2"
          style={{ left: `${pct}%` }}
        >
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#e07b67]" />
        </div>
        <input
          type="range"
          min={min * 10}
          max={max * 10}
          value={val * 10}
          onChange={(e) => setVal(Number(e.target.value) / 10)}
          className="absolute inset-x-0 bottom-0 w-full opacity-0 cursor-pointer h-6"
          aria-label="Tuner"
        />
      </div>
    </div>
  );
};

export default TickSlider;
