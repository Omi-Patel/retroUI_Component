import React from "react";

const steps = ["Account", "Profile", "Confirm", "Done"];
const current = 2; // 1-indexed: step 2 is active, step 1 complete

const WizardStepper = () => {
  return (
    <div className="w-[360px] bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 font-mono">
      <p className="text-[9px] tracking-[0.4em] uppercase opacity-60 mb-4">
        Form 1040-R · Step {current} of {steps.length}
      </p>

      {/* track */}
      <div className="flex items-center">
        {steps.map((s, i) => {
          const n = i + 1;
          const done = n < current;
          const active = n === current;
          return (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-9 h-9 flex items-center justify-center border-2 border-black text-[13px] font-black ${
                    active
                      ? "bg-[#e07b67] shadow-[3px_3px_0_0_black]"
                      : done
                      ? "bg-black text-[#f5f1e6]"
                      : "bg-[#f5f1e6] opacity-50"
                  }`}
                >
                  {done ? "✓" : n}
                </div>
                <span
                  className={`text-[9px] uppercase tracking-widest ${
                    active ? "font-black" : "opacity-50"
                  }`}
                >
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="flex-1 h-0.5 mx-1 mb-5"
                  style={{
                    backgroundImage: "repeating-linear-gradient(90deg, #000 0 4px, transparent 4px 8px)",
                    opacity: n < current ? 1 : 0.3,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* panel */}
      <div className="mt-5 border-2 border-black border-dashed p-4 bg-white/40">
        <h3 className="text-base font-black uppercase tracking-tight mb-1">Profile Details</h3>
        <p className="text-[11px] opacity-70 leading-relaxed">
          Tell us a little about yourself. All fields are processed in triplicate.
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button className="text-[11px] font-black uppercase tracking-widest border-2 border-black px-3 py-1.5 opacity-60">
          ← Back
        </button>
        <button className="text-[11px] font-black uppercase tracking-widest border-2 border-black px-4 py-1.5 bg-black text-[#f5f1e6] shadow-[3px_3px_0_0_#e07b67]">
          Next →
        </button>
      </div>
    </div>
  );
};

export default WizardStepper;
