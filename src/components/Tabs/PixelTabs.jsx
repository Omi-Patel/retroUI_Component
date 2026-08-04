import React, { useState, useRef } from "react";

const PixelTabs = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const tabs = [
    { label: "P1", name: "PLAYER 1", body: "WASD to move. SPACE to jump." },
    { label: "P2", name: "PLAYER 2", body: "Arrow keys. Enter to shoot." },
    { label: "CPU", name: "AI BOT", body: "Auto-routed. Difficulty: HARD." },
  ];

  const onKeyDown = (e) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="font-mono w-full max-w-md">
      <div role="tablist" aria-label="Player select" onKeyDown={onKeyDown} className="flex gap-0 mb-0">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => (tabRefs.current[i] = el)}
            role="tab"
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`flex-1 px-3 py-2 text-xs font-black uppercase tracking-widest border-4 border-b-0 border-black transition-colors ${
              active === i
                ? "bg-lime-400 text-black"
                : "bg-stone-800 text-stone-400 hover:text-lime-300"
            }`}
          >
            ▣ {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="bg-stone-900 text-lime-300 border-4 border-black shadow-[6px_6px_0px_0px_black] p-5 min-h-[160px]">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-2">
          {">>"} {tabs[active].name}
        </p>
        <p className="text-base">{tabs[active].body}</p>
        <p className="mt-4 text-[10px] opacity-50">
          [PRESS START TO CONTINUE]
        </p>
      </div>
    </div>
  );
};

export default PixelTabs;
