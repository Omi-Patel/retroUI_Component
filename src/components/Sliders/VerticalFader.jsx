/* eslint-disable react/prop-types */
import { useState } from "react";

// A mixing-console channel strip with vertical faders and dB ticks.
const CHANNELS = [
  { label: "LO", color: "#e07b67" },
  { label: "MID", color: "#e3b762" },
  { label: "HI", color: "#7da567" },
];

const Fader = ({ label, color }) => {
  const [v, setV] = useState(60);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-32 w-8 flex items-center justify-center">
        <div className="absolute inset-y-0 w-2 bg-[#1f1b16] border-2 border-black" />
        <input
          type="range"
          min="0"
          max="100"
          value={v}
          onChange={(e) => setV(Number(e.target.value))}
          aria-label={label}
          className="fader-rng"
          style={{ width: "128px", transform: "rotate(-90deg)" }}
        />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>
        {label}
      </span>
    </div>
  );
};

const VerticalFader = () => {
  return (
    <div className="bg-[#cfc7b3] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <style>{`
        .fader-rng{ -webkit-appearance:none; appearance:none; height:14px; background:transparent; outline:none; cursor:pointer; }
        .fader-rng::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:18px; height:32px; background:#f5f1e6; border:3px solid #000; box-shadow:0 3px 0 0 #000; border-radius:2px; }
        .fader-rng::-moz-range-thumb{ width:18px; height:32px; background:#f5f1e6; border:3px solid #000; border-radius:2px; }
      `}</style>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-center">Equalizer</div>
      <div className="flex gap-5">
        {CHANNELS.map((c) => (
          <Fader key={c.label} {...c} />
        ))}
      </div>
    </div>
  );
};

export default VerticalFader;
