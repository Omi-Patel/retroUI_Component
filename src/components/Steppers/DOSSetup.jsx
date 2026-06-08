const steps = [
  { label: "Copying system files", done: true },
  { label: "Configuring drivers", done: true },
  { label: "Installing RETRO.SYS", done: false, active: true },
  { label: "Updating CONFIG.SYS", done: false },
];

const progress = 64;
const totalCells = 24;
const filled = Math.round((progress / 100) * totalCells);

const DOSSetup = () => {
  return (
    <div className="w-[380px] bg-[#0000aa] text-[#d8d8d8] border-2 border-[#d8d8d8] font-mono p-0 shadow-[6px_6px_0_0_rgba(0,0,0,0.4)]">
      {/* header bar */}
      <div className="bg-[#d8d8d8] text-[#0000aa] text-center text-[12px] font-bold tracking-[0.2em] uppercase py-1">
        RetroDOS 6.22 Setup
      </div>

      <div className="p-4">
        <p className="text-[12px] mb-3 text-[#ffff55]">
          ▒ Please wait while Setup installs RetroDOS on your computer.
        </p>

        {/* steps as ASCII box */}
        <div className="border border-[#d8d8d8] p-3 mb-4">
          {steps.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-[12px] leading-relaxed">
              <span className={s.done ? "text-[#55ff55]" : s.active ? "text-[#ffff55]" : "opacity-50"}>
                {s.done ? "[X]" : s.active ? "[»]" : "[ ]"}
              </span>
              <span className={s.active ? "text-[#ffffff]" : s.done ? "" : "opacity-50"}>
                {s.label}
                {s.active && <span className="ml-1 animate-pulse">_</span>}
              </span>
            </div>
          ))}
        </div>

        {/* progress bar made of block chars */}
        <p className="text-[11px] mb-1 tracking-widest">DISK 2 OF 4 — {progress}% COMPLETE</p>
        <div className="border border-[#d8d8d8] px-1 py-0.5 text-[12px] tracking-[-1px] whitespace-nowrap overflow-hidden">
          {"█".repeat(filled)}
          <span className="opacity-30">{"░".repeat(totalCells - filled)}</span>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#d8d8d8] text-[#0000aa] flex items-center justify-between px-3 py-1 text-[11px] font-bold">
        <span>F1=Help</span>
        <span>ENTER=Continue</span>
        <span>ESC=Exit</span>
      </div>
    </div>
  );
};

export default DOSSetup;
