import { useState } from "react";

// Segmented chip radio — pick one, it presses in like a tape-deck button.
const OPTIONS = ["LP", "45", "78", "MIX"];

const ChipRadioGroup = () => {
  const [value, setValue] = useState("45");

  return (
    <div className="inline-flex bg-[#1f1b16] p-1.5 gap-1.5 border-4 border-black shadow-[6px_6px_0px_0px_black] font-mono">
      {OPTIONS.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            onClick={() => setValue(opt)}
            className={`px-4 py-2 text-[12px] font-black uppercase tracking-[0.15em] border-2 border-black transition-all ${
              active
                ? "bg-[#e3b762] text-black translate-y-[1px] shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.3)]"
                : "bg-[#f5f1e6] text-black/70 -translate-y-[1px] shadow-[2px_2px_0_0_#000] hover:bg-white"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};

export default ChipRadioGroup;
