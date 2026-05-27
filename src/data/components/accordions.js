import { FileText, HelpCircle, Terminal, StickyNote } from 'lucide-react';

import FoldedPaperAccordion from '../../components/Accordions/FoldedPaperAccordion';
import RetroFAQAccordion from '../../components/Accordions/RetroFAQAccordion';
import TerminalAccordion from '../../components/Accordions/TerminalAccordion';
import StickyNoteAccordion from '../../components/Accordions/StickyNoteAccordion';

export const accordionComponents = [
  {
    name: 'FoldedPaperAccordion',
    component: FoldedPaperAccordion,
    icon: FileText,
    colors: {
      gradient: 'from-gray-300 to-gray-500',
      bg: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30',
    },
    code: `import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FoldedPaperAccordion = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "What is this thing?", a: "A folded-paper accordion." },
    { q: "Can I customize it?", a: "Of course. Swap colors freely." },
    { q: "Does it support keyboard?", a: "Yes — focus, tab, space to toggle." },
  ];

  return (
    <div className="font-mono w-full max-w-md space-y-2">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="bg-white border-4 border-black shadow-[5px_5px_0px_0px_black]">
            <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase">
              <span>{it.q}</span>
              <span className="inline-flex w-6 h-6 items-center justify-center border-2 border-black" style={{ background: isOpen ? "black" : "white" }}>
                {isOpen ? <Minus className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-black" />}
              </span>
            </button>
            <div className={\`grid transition-[grid-template-rows] duration-300 \${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}\`}>
              <div className="overflow-hidden">
                <div className="border-t-2 border-dashed border-black/50 px-4 py-3 text-sm">{it.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoldedPaperAccordion;`,
  },
  {
    name: 'RetroFAQAccordion',
    component: RetroFAQAccordion,
    icon: HelpCircle,
    colors: {
      gradient: 'from-yellow-400 to-amber-500',
      bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30',
    },
    code: `import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const RetroFAQAccordion = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "How fast is shipping?", a: "Faster than a fax machine in 1996." },
    { q: "Do you have refunds?", a: "Yes, within 30 days." },
    { q: "Where are you based?", a: "Right here, on the world wide web." },
  ];

  return (
    <div className="font-mono w-full max-w-md bg-yellow-100 border-4 border-black shadow-[6px_6px_0px_0px_black] divide-y-4 divide-black">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase">
              <span className="flex items-center gap-3">
                <span className="bg-black text-yellow-300 text-[10px] px-1.5 py-0.5">Q{i + 1}</span>
                {it.q}
              </span>
              <ChevronDown className={\`w-4 h-4 \${isOpen ? "rotate-180" : ""}\`} />
            </button>
            <div className={\`grid transition-[grid-template-rows] duration-300 \${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}\`}>
              <div className="overflow-hidden">
                <div className="px-4 pb-4 text-sm bg-yellow-50">{it.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RetroFAQAccordion;`,
  },
  {
    name: 'TerminalAccordion',
    component: TerminalAccordion,
    icon: Terminal,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import React, { useState } from "react";

const TerminalAccordion = () => {
  const [open, setOpen] = useState([0]);
  const items = [
    { cmd: "help", out: "Type 'ls', 'cat', or 'man <cmd>'." },
    { cmd: "whoami", out: "guest@retro:~$ — anonymous visitor" },
    { cmd: "uptime", out: "27 years, still rendering." },
  ];

  const toggle = (i) => setOpen((o) => o.includes(i) ? o.filter((x) => x !== i) : [...o, i]);

  return (
    <div className="font-mono w-full max-w-md bg-black text-green-400 border-2 border-green-400">
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={it.cmd} className="border-b border-green-400/30 last:border-b-0">
            <button onClick={() => toggle(i)} className="w-full flex items-center gap-2 px-4 py-2 text-sm">
              <span className="opacity-60">$</span>
              <span>{it.cmd}</span>
              <span className="ml-auto text-xs opacity-60">{isOpen ? "[-]" : "[+]"}</span>
            </button>
            <div className={\`grid transition-[grid-template-rows] duration-200 \${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}\`}>
              <div className="overflow-hidden">
                <div className="px-4 pb-3 text-xs text-green-300/80">{">"} {it.out}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TerminalAccordion;`,
  },
  {
    name: 'StickyNoteAccordion',
    component: StickyNoteAccordion,
    icon: StickyNote,
    colors: {
      gradient: 'from-yellow-300 to-pink-300',
      bg: 'bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-yellow-900/20 dark:to-pink-900/30',
    },
    code: `import React, { useState } from "react";

const StickyNoteAccordion = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { color: "bg-yellow-300", q: "Reminder", a: "Pay rent on Friday." },
    { color: "bg-pink-300", q: "Idea", a: "What if cats ran a coffee shop?" },
    { color: "bg-cyan-300", q: "Todo", a: "Buy stamps. Mail postcards." },
  ];

  return (
    <div className="font-mono w-full max-w-md space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={\`\${it.color} border-2 border-black shadow-[5px_5px_0px_0px_black] \${isOpen ? "rotate-[-1deg]" : "rotate-[0.5deg]"}\`}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between px-4 py-2 text-sm font-black uppercase">
              <span>{isOpen ? "▾" : "▸"} {it.q}</span>
              <span className="text-[10px] opacity-60">tap me</span>
            </button>
            <div className={\`grid transition-[grid-template-rows] duration-300 \${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}\`}>
              <div className="overflow-hidden">
                <div className="px-4 pb-3 text-base">{it.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StickyNoteAccordion;`,
  },
];

export default accordionComponents;
