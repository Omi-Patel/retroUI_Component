import { useState } from "react";

// A notched slider that snaps between labelled stops — like a toaster dial.
const STOPS = ["Off", "Low", "Med", "High", "Max"];

const SteppedSlider = () => {
  const [step, setStep] = useState(2);

  return (
    <div className="w-72 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <style>{`
        .step-rng{ -webkit-appearance:none; appearance:none; width:100%; height:10px; background:#cfc7b3; border:3px solid #000; outline:none; cursor:pointer; }
        .step-rng::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:22px; height:22px; background:#e3b762; border:3px solid #000; box-shadow:2px 2px 0 0 #000; border-radius:999px; }
        .step-rng::-moz-range-thumb{ width:22px; height:22px; background:#e3b762; border:3px solid #000; border-radius:999px; }
      `}</style>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-black uppercase tracking-[0.15em]">Toast level</span>
        <span className="text-[12px] font-black uppercase text-[#b23a2e]">{STOPS[step]}</span>
      </div>
      <input
        type="range"
        min="0"
        max={STOPS.length - 1}
        step="1"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        className="step-rng"
      />
      <div className="flex justify-between mt-2 px-0.5">
        {STOPS.map((s, i) => (
          <button
            key={s}
            onClick={() => setStep(i)}
            className={`text-[9px] uppercase tracking-wide ${
              i === step ? "text-black font-black" : "text-black/40"
            }`}
          >
            |
          </button>
        ))}
      </div>
    </div>
  );
};

export default SteppedSlider;
