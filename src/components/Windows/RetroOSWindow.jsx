import { useState } from "react";

// System-1-style OS window — pinstriped title bar, About This Computer panel.
const ramBars = [
  { name: "System Software", kb: 412, color: "bg-stone-800" },
  { name: "ZinePaint 2.0", kb: 256, color: "bg-red-600" },
  { name: "MixTape Deck", kb: 128, color: "bg-amber-500" },
  { name: "Free Memory", kb: 228, color: "bg-lime-500" },
];
const totalKb = 1024;

const RetroOSWindow = () => {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 font-mono text-[11px] font-black uppercase tracking-[0.2em] text-black bg-[#e8e0cc] border-2 border-black shadow-[4px_4px_0_0_black] hover:shadow-[6px_6px_0_0_black] transition-all"
      >
        Reopen window
      </button>
    );
  }

  return (
    <div className="w-full max-w-md bg-white border-2 border-black shadow-[6px_6px_0_0_black] font-mono text-black">
      {/* Pinstriped title bar */}
      <div className="relative flex items-center h-7 border-b-2 border-black px-1.5 bg-[repeating-linear-gradient(180deg,black_0px,black_1px,white_1px,white_3px)]">
        <button
          aria-label="Close window"
          onClick={() => setOpen(false)}
          className="relative z-10 w-3.5 h-3.5 bg-white border-2 border-black hover:bg-stone-300 active:bg-black transition-colors"
        />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-[11px] font-bold tracking-wide whitespace-nowrap">
          About This Computer
        </span>
      </div>

      {/* Content */}
      <div className="p-4 bg-white">
        <div className="flex items-start gap-4">
          {/* Tiny computer glyph */}
          <div aria-hidden="true" className="shrink-0">
            <div className="w-14 h-11 border-2 border-black bg-[#e8e0cc] p-1">
              <div className="w-full h-full bg-stone-800 flex items-center justify-center">
                <span className="text-lime-400 text-[8px]">☺</span>
              </div>
            </div>
            <div className="mx-auto w-8 h-2 border-2 border-t-0 border-black bg-[#e8e0cc]" />
          </div>
          <div>
            <p className="text-sm font-black tracking-tight">RetroUI System 1.0</p>
            <p className="text-[10px] text-stone-600 mt-0.5">
              © 1984–1997 RetroUI Computer, Inc.
            </p>
            <p className="text-[10px] text-stone-600 mt-2">
              Total Memory: <span className="tabular-nums font-bold">1,024K</span>
            </p>
          </div>
        </div>

        {/* RAM bars */}
        <div className="mt-4 border-2 border-black p-3">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-stone-500 mb-2">
            Memory Allocation
          </p>
          <ul className="space-y-2">
            {ramBars.map((r) => (
              <li key={r.name}>
                <div className="flex justify-between text-[10px] mb-0.5">
                  <span>{r.name}</span>
                  <span className="tabular-nums text-stone-600">{r.kb}K</span>
                </div>
                <div className="h-2.5 border border-black bg-stone-100">
                  <div
                    className={`h-full ${r.color}`}
                    style={{ width: `${(r.kb / totalKb) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom rail with resize grip */}
      <div className="flex items-center justify-between border-t-2 border-black bg-stone-100 px-2 py-1">
        <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500">
          Finder 1.0
        </span>
        <span
          aria-hidden="true"
          className="w-4 h-4 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_2px,black_2px,black_3px)]"
        />
      </div>
    </div>
  );
};

export default RetroOSWindow;
