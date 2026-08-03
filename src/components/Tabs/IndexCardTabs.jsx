import React, { useState, useRef } from "react";

const IndexCardTabs = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const tabs = [
    { label: "Notes", body: "Scribbled thoughts and quick ideas." },
    { label: "Tasks", body: "Things to do, things to undo." },
    { label: "Refs", body: "Links, citations, and bookmarks." },
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
      <div role="tablist" aria-label="Index cards" onKeyDown={onKeyDown} className="flex items-end">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => (tabRefs.current[i] = el)}
            role="tab"
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider border-4 border-b-0 border-black transition-all -mb-[2px] ${
              active === i
                ? "bg-amber-50 text-black z-10 translate-y-[2px]"
                : "bg-amber-200 text-black/60 hover:text-black"
            }`}
            style={{
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              marginRight: -2,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="bg-amber-50 text-black border-4 border-black shadow-[6px_6px_0px_0px_black] p-5 min-h-[160px]">
        <div className="border-b-2 border-dashed border-red-400/80 mb-3 pb-1">
          <p className="text-[10px] tracking-[0.3em] opacity-60 uppercase">
            Index · {String(active + 1).padStart(2, "0")} of{" "}
            {String(tabs.length).padStart(2, "0")}
          </p>
        </div>
        <p
          className="text-base leading-relaxed"
          style={{
            backgroundImage:
              "linear-gradient(transparent 22px, rgba(59,130,246,0.25) 22px, rgba(59,130,246,0.25) 23px, transparent 23px)",
            backgroundSize: "100% 24px",
            lineHeight: "24px",
          }}
        >
          {tabs[active].body}
        </p>
      </div>
    </div>
  );
};

export default IndexCardTabs;
