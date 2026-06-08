import { useState } from "react";

// A min/max price range with two hard-edged thumbs and a highlighted band.
const MIN = 0;
const MAX = 100;

const DualRangeSlider = () => {
  const [lo, setLo] = useState(25);
  const [hi, setHi] = useState(70);

  const loPct = ((lo - MIN) / (MAX - MIN)) * 100;
  const hiPct = ((hi - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="w-72 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <style>{`
        .dr-rng{ position:absolute; left:0; top:0; width:100%; height:24px; margin:0; background:none; pointer-events:none; -webkit-appearance:none; appearance:none; }
        .dr-rng::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:16px; height:24px; background:#e07b67; border:3px solid #000; box-shadow:2px 2px 0 0 #000; cursor:pointer; pointer-events:all; }
        .dr-rng::-moz-range-thumb{ width:16px; height:24px; background:#e07b67; border:3px solid #000; border-radius:0; cursor:pointer; pointer-events:all; }
      `}</style>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-black uppercase tracking-[0.15em]">Price</span>
        <span className="text-[12px] font-black tabular-nums">${lo} – ${hi}</span>
      </div>

      <div className="relative h-6">
        {/* base track */}
        <div className="absolute inset-x-0 top-[5px] h-3 bg-[#cfc7b3] border-[3px] border-black" />
        {/* selected band */}
        <div
          className="absolute top-[5px] h-3 bg-[#e3b762] border-y-[3px] border-black"
          style={{ left: `${loPct}%`, right: `${100 - hiPct}%` }}
        />
        <input
          type="range" min={MIN} max={MAX} value={lo}
          onChange={(e) => setLo(Math.min(Number(e.target.value), hi - 1))}
          className="dr-rng" aria-label="Minimum"
        />
        <input
          type="range" min={MIN} max={MAX} value={hi}
          onChange={(e) => setHi(Math.max(Number(e.target.value), lo + 1))}
          className="dr-rng" aria-label="Maximum"
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
