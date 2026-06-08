import { useState } from "react";

// A paper ballot — fill in the oval to cast your single vote.
const OPTIONS = ["Newsprint", "Neon", "Terminal", "Polaroid"];

const BallotRadioGroup = () => {
  const [choice, setChoice] = useState("Neon");

  return (
    <div className="w-64 bg-[#fbf8f0] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <div className="text-center border-b-2 border-black pb-2 mb-3">
        <div className="text-[12px] font-black uppercase tracking-[0.2em]">Official Ballot</div>
        <div className="text-[9px] uppercase tracking-[0.15em] text-black/50">Vote for one · No. 04</div>
      </div>
      <div className="space-y-2.5">
        {OPTIONS.map((opt) => {
          const active = choice === opt;
          return (
            <button
              key={opt}
              onClick={() => setChoice(opt)}
              className="flex items-center gap-3 w-full text-left select-none"
            >
              <span className="relative w-7 h-4 rounded-full border-2 border-black flex items-center justify-center">
                {active && <span className="w-4 h-1.5 rounded-full bg-black" />}
              </span>
              <span className={`text-[13px] uppercase tracking-wide ${active ? "font-black" : "text-black/60"}`}>
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BallotRadioGroup;
