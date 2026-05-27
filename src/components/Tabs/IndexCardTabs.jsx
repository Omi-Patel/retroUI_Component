import React, { useState } from "react";

const IndexCardTabs = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: "Notes", body: "Scribbled thoughts and quick ideas." },
    { label: "Tasks", body: "Things to do, things to undo." },
    { label: "Refs", body: "Links, citations, and bookmarks." },
  ];

  return (
    <div className="font-mono w-full max-w-md">
      <div className="flex items-end">
        {tabs.map((t, i) => (
          <button
            key={t.label}
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
      <div className="bg-amber-50 text-black border-4 border-black shadow-[6px_6px_0px_0px_black] p-5 min-h-[160px]">
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
