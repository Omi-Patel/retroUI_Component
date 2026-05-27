import React, { useState } from "react";
import { Disc } from "lucide-react";

const CassetteTabs = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: "Side A", body: "Mellow tracks for late nights." },
    { label: "Side B", body: "Upbeat bangers for the morning." },
    { label: "Bonus", body: "Hidden tracks and B-sides." },
  ];

  return (
    <div className="font-mono w-full max-w-md">
      <div className="flex gap-1 mb-0">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider border-2 border-b-0 border-black transition-all ${
              active === i
                ? "bg-black text-pink-300"
                : "bg-pink-200 text-black/70 hover:bg-pink-300"
            }`}
          >
            <Disc
              className={`w-3 h-3 ${active === i ? "animate-spin" : ""}`}
              style={{ animationDuration: "3s" }}
            />
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-pink-100 text-black border-2 border-black shadow-[5px_5px_0px_0px_black] p-5 min-h-[160px]">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/30">
          <p className="text-[10px] tracking-[0.3em] uppercase">
            ◉ ROLLING · 60 MIN
          </p>
          <span className="text-[10px] mono opacity-60">
            ░░░░▓▓▓▓▓▓▓░░░░
          </span>
        </div>
        <p className="text-base">{tabs[active].body}</p>
      </div>
    </div>
  );
};

export default CassetteTabs;
