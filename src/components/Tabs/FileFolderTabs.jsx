import React, { useState } from "react";

const FileFolderTabs = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: "Personal", body: "Personal details and bio." },
    { label: "Work", body: "Job history and references." },
    { label: "Education", body: "Schools, degrees, courses." },
  ];

  const colors = ["bg-yellow-200", "bg-cyan-200", "bg-rose-200"];

  return (
    <div className="font-mono w-full max-w-md">
      <div className="flex relative z-10">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`px-4 pt-2 pb-3 text-xs font-bold uppercase border-2 border-black -mr-2 transition-all ${
              colors[i]
            } ${
              active === i
                ? "translate-y-0 z-20 shadow-[3px_-3px_0_0_black]"
                : "translate-y-1 z-10 opacity-80 hover:opacity-100"
            }`}
            style={{
              clipPath:
                "polygon(0 0, 88% 0, 100% 40%, 100% 100%, 0 100%)",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-stone-100 text-black border-2 border-black shadow-[6px_6px_0px_0px_black] p-5 min-h-[160px] -mt-1">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-2">
          Folder · {tabs[active].label}
        </p>
        <p className="text-base">{tabs[active].body}</p>
      </div>
    </div>
  );
};

export default FileFolderTabs;
