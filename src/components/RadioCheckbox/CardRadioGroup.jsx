import { useState } from "react";

// Selectable trading-card radios — the chosen card pops out with a corner check.
const PLANS = [
  { id: "basic", name: "Side A", sub: "2 tracks" },
  { id: "deluxe", name: "Side B", sub: "6 tracks" },
];

const CardRadioGroup = () => {
  const [sel, setSel] = useState("deluxe");

  return (
    <div className="flex gap-3 font-mono">
      {PLANS.map((p) => {
        const active = sel === p.id;
        return (
          <button
            key={p.id}
            onClick={() => setSel(p.id)}
            className={`relative w-28 text-left p-3 border-4 border-black bg-[#f5f1e6] transition-all ${
              active
                ? "shadow-[6px_6px_0px_0px_#e07b67] -translate-y-1"
                : "shadow-[4px_4px_0px_0px_black] opacity-80 hover:opacity-100"
            }`}
          >
            {active && (
              <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#7da567] border-2 border-black flex items-center justify-center text-black font-black text-sm">
                ✓
              </span>
            )}
            <div className="text-[10px] uppercase tracking-[0.2em] text-black/50">Cassette</div>
            <div className="text-[16px] font-black uppercase leading-tight mt-0.5">{p.name}</div>
            <div className="text-[11px] text-black/60 mt-1">{p.sub}</div>
          </button>
        );
      })}
    </div>
  );
};

export default CardRadioGroup;
