import { useState } from "react";
import { Volume2 } from "lucide-react";

// A boombox volume slider with a live value bubble and a hard-shadow thumb.
const VolumeSlider = () => {
  const [vol, setVol] = useState(65);

  return (
    <div className="w-72 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <style>{`
        .vol-rng{ -webkit-appearance:none; appearance:none; width:100%; height:14px; background:#1f1b16; border:3px solid #000; outline:none; cursor:pointer; }
        .vol-rng::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:16px; height:26px; background:#e07b67; border:3px solid #000; box-shadow:2px 2px 0 0 #000; }
        .vol-rng::-moz-range-thumb{ width:16px; height:26px; background:#e07b67; border:3px solid #000; border-radius:0; }
      `}</style>
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.15em]">
          <Volume2 className="w-4 h-4" /> Volume
        </span>
        <span className="text-[12px] font-black tabular-nums bg-black text-[#e3b762] px-2 py-0.5">
          {vol}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={vol}
        onChange={(e) => setVol(Number(e.target.value))}
        className="vol-rng"
      />
    </div>
  );
};

export default VolumeSlider;
