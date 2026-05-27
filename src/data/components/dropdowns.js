import { Type, FolderOpen, Zap, BookOpen } from 'lucide-react';

import TypewriterDropdown from '../../components/Dropdowns/TypewriterDropdown';
import FileCabinetDropdown from '../../components/Dropdowns/FileCabinetDropdown';
import NeonDropdown from '../../components/Dropdowns/NeonDropdown';
import ZineDropdown from '../../components/Dropdowns/ZineDropdown';

export const dropdownComponents = [
  {
    name: 'TypewriterDropdown',
    component: TypewriterDropdown,
    icon: Type,
    colors: {
      gradient: 'from-stone-400 to-stone-600',
      bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30',
    },
    code: `import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const TypewriterDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const options = ["Draft", "Publish", "Archive", "Delete"];

  return (
    <div ref={ref} className="relative font-mono w-56">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] text-sm font-bold uppercase tracking-wider"
      >
        <span>{selected}</span>
        <ChevronDown className={\`w-4 h-4 transition-transform \${open ? "rotate-180" : ""}\`} />
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_black] py-1">
          {options.map((opt) => (
            <li key={opt}>
              <button onClick={() => { setSelected(opt); setOpen(false); }} className="w-full text-left px-4 py-1.5 text-sm uppercase hover:bg-black hover:text-white">
                <span className="opacity-50 mr-1">›</span> {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypewriterDropdown;`,
  },
  {
    name: 'FileCabinetDropdown',
    component: FileCabinetDropdown,
    icon: FolderOpen,
    colors: {
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30',
    },
    code: `import React, { useState, useRef, useEffect } from "react";
import { FolderOpen, Folder } from "lucide-react";

const FileCabinetDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Projects");
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const options = [
    { label: "Projects", code: "01" },
    { label: "Invoices", code: "02" },
    { label: "Receipts", code: "03" },
    { label: "Archive", code: "04" },
  ];

  return (
    <div ref={ref} className="relative font-mono w-60">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center gap-2 px-4 py-2 bg-amber-100 border-4 border-black shadow-[4px_4px_0px_0px_black]">
        {open ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
        <span className="text-sm font-bold uppercase flex-1 text-left">{selected}</span>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-amber-50 border-4 border-black shadow-[6px_6px_0px_0px_black]">
          {options.map((opt) => (
            <button key={opt.label} onClick={() => { setSelected(opt.label); setOpen(false); }} className="w-full flex items-center gap-3 px-3 py-2 text-sm border-b-2 border-dashed border-black/30 last:border-b-0 hover:bg-amber-200">
              <span className="bg-black text-amber-100 text-[10px] font-bold px-1.5 py-0.5">{opt.code}</span>
              <span className="font-bold uppercase">{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileCabinetDropdown;`,
  },
  {
    name: 'NeonDropdown',
    component: NeonDropdown,
    icon: Zap,
    colors: {
      gradient: 'from-pink-500 to-fuchsia-600',
      bg: 'bg-gradient-to-br from-pink-50 to-fuchsia-100 dark:from-pink-900/20 dark:to-fuchsia-900/30',
    },
    code: `import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Zap } from "lucide-react";

const NeonDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("CHOOSE MODE");
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const options = ["ARCADE", "CRUISE", "BATTLE", "TIME ATTACK"];

  return (
    <div ref={ref} className="relative font-mono w-56">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-4 py-2 bg-black text-pink-400 border-2 border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.5)] text-sm font-bold tracking-wider">
        <span className="flex items-center gap-2"><Zap className="w-4 h-4" />{selected}</span>
        <ChevronDown className={\`w-4 h-4 \${open ? "rotate-180" : ""}\`} />
      </button>
      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-black border-2 border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.5)] py-1">
          {options.map((opt) => (
            <li key={opt}>
              <button onClick={() => { setSelected(opt); setOpen(false); }} className="w-full text-left px-4 py-1.5 text-sm text-pink-300 hover:text-black hover:bg-pink-400">
                ▸ {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NeonDropdown;`,
  },
  {
    name: 'ZineDropdown',
    component: ZineDropdown,
    icon: BookOpen,
    colors: {
      gradient: 'from-fuchsia-400 to-yellow-300',
      bg: 'bg-gradient-to-br from-fuchsia-50 to-yellow-100 dark:from-fuchsia-900/20 dark:to-yellow-900/30',
    },
    code: `import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ZineDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Issues");
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const options = ["All Issues", "Punk Rock", "Lo-Fi Diaries", "Cassette Tapes"];

  return (
    <div ref={ref} className="relative font-mono w-60">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-4 py-2 bg-fuchsia-300 border-4 border-black shadow-[5px_5px_0px_0px_black] text-sm font-black uppercase">
        <span>{selected}</span>
        <ChevronDown className={\`w-4 h-4 \${open ? "rotate-180" : ""}\`} />
      </button>
      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-yellow-200 border-4 border-black shadow-[5px_5px_0px_0px_black] py-1 rotate-[-0.5deg]">
          {options.map((opt, i) => (
            <li key={opt}>
              <button onClick={() => { setSelected(opt); setOpen(false); }} className={\`w-full text-left px-4 py-1.5 text-sm font-bold uppercase border-b-2 border-dashed border-black/40 last:border-b-0 \${i % 2 ? "hover:bg-pink-300" : "hover:bg-cyan-300"}\`}>
                #{String(i + 1).padStart(2, "0")} — {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ZineDropdown;`,
  },
];

export default dropdownComponents;
