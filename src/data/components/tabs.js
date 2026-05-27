import { Bookmark, Disc, Folder, Gamepad2 } from 'lucide-react';

import IndexCardTabs from '../../components/Tabs/IndexCardTabs';
import CassetteTabs from '../../components/Tabs/CassetteTabs';
import FileFolderTabs from '../../components/Tabs/FileFolderTabs';
import PixelTabs from '../../components/Tabs/PixelTabs';

export const tabsComponents = [
  {
    name: 'IndexCardTabs',
    component: IndexCardTabs,
    icon: Bookmark,
    colors: {
      gradient: 'from-amber-300 to-yellow-400',
      bg: 'bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/30',
    },
    code: `import React, { useState } from "react";

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
            className={\`relative px-4 py-1.5 text-xs font-bold uppercase border-4 border-b-0 border-black -mb-[2px] \${
              active === i ? "bg-amber-50 text-black z-10 translate-y-[2px]" : "bg-amber-200 text-black/60"
            }\`}
            style={{ marginRight: -2 }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-amber-50 text-black border-4 border-black shadow-[6px_6px_0px_0px_black] p-5 min-h-[160px]">
        <p className="text-[10px] tracking-[0.3em] opacity-60 uppercase mb-3">Index · 01</p>
        <p className="text-base">{tabs[active].body}</p>
      </div>
    </div>
  );
};

export default IndexCardTabs;`,
  },
  {
    name: 'CassetteTabs',
    component: CassetteTabs,
    icon: Disc,
    colors: {
      gradient: 'from-pink-400 to-rose-500',
      bg: 'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/30',
    },
    code: `import React, { useState } from "react";
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
      <div className="flex gap-1">
        {tabs.map((t, i) => (
          <button key={t.label} onClick={() => setActive(i)} className={\`flex-1 flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase border-2 border-b-0 border-black \${active === i ? "bg-black text-pink-300" : "bg-pink-200 text-black/70"}\`}>
            <Disc className={\`w-3 h-3 \${active === i ? "animate-spin" : ""}\`} />
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-pink-100 text-black border-2 border-black shadow-[5px_5px_0px_0px_black] p-5 min-h-[160px]">
        <p className="text-[10px] tracking-[0.3em] uppercase mb-3">◉ ROLLING · 60 MIN</p>
        <p className="text-base">{tabs[active].body}</p>
      </div>
    </div>
  );
};

export default CassetteTabs;`,
  },
  {
    name: 'FileFolderTabs',
    component: FileFolderTabs,
    icon: Folder,
    colors: {
      gradient: 'from-yellow-300 to-cyan-300',
      bg: 'bg-gradient-to-br from-yellow-50 to-cyan-100 dark:from-yellow-900/20 dark:to-cyan-900/30',
    },
    code: `import React, { useState } from "react";

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
          <button key={t.label} onClick={() => setActive(i)} className={\`px-4 pt-2 pb-3 text-xs font-bold uppercase border-2 border-black -mr-2 \${colors[i]} \${active === i ? "translate-y-0 z-20" : "translate-y-1 z-10"}\`}
            style={{ clipPath: "polygon(0 0, 88% 0, 100% 40%, 100% 100%, 0 100%)" }}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-stone-100 border-2 border-black shadow-[6px_6px_0px_0px_black] p-5 min-h-[160px] -mt-1">
        <p className="text-[10px] tracking-[0.3em] uppercase mb-2">Folder · {tabs[active].label}</p>
        <p className="text-base">{tabs[active].body}</p>
      </div>
    </div>
  );
};

export default FileFolderTabs;`,
  },
  {
    name: 'PixelTabs',
    component: PixelTabs,
    icon: Gamepad2,
    colors: {
      gradient: 'from-lime-400 to-green-600',
      bg: 'bg-gradient-to-br from-lime-50 to-green-100 dark:from-lime-900/20 dark:to-green-900/30',
    },
    code: `import React, { useState } from "react";

const PixelTabs = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: "P1", body: "WASD to move. SPACE to jump." },
    { label: "P2", body: "Arrow keys. Enter to shoot." },
    { label: "CPU", body: "Auto-routed. Difficulty: HARD." },
  ];

  return (
    <div className="font-mono w-full max-w-md">
      <div className="flex">
        {tabs.map((t, i) => (
          <button key={t.label} onClick={() => setActive(i)} className={\`flex-1 px-3 py-2 text-xs font-black uppercase border-4 border-b-0 border-black \${active === i ? "bg-lime-400 text-black" : "bg-stone-800 text-stone-400"}\`}>
            ▣ {t.label}
          </button>
        ))}
      </div>
      <div className="bg-stone-900 text-lime-300 border-4 border-black shadow-[6px_6px_0px_0px_black] p-5 min-h-[160px]">
        <p className="text-base">{tabs[active].body}</p>
        <p className="mt-4 text-[10px] opacity-50">[PRESS START TO CONTINUE]</p>
      </div>
    </div>
  );
};

export default PixelTabs;`,
  },
];

export default tabsComponents;
