import { Type, Terminal, Zap, StickyNote, BookOpen } from 'lucide-react';

import BasicInput from '../../components/Inputs/BasicInput';
import OutlineInput from '../../components/Inputs/OutlineInput';
import NeonInput from '../../components/Inputs/NeonInput';
import FocusedInput from '../../components/Inputs/FocusedInput';
import RoundedInput from '../../components/Inputs/RoundedInput';

export const inputComponents = [
  {
    name: 'TypewriterInput',
    component: BasicInput,
    icon: Type,
    colors: {
      gradient: 'from-stone-400 to-stone-600',
      bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30',
    },
    code: `import React from "react";

const TypewriterInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-black/70">
        ✎ Field 01 · Name
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Type something…"
          className="w-full px-4 py-3 text-base bg-[#f5f1e6] text-black border-4 border-black focus:outline-none focus:bg-yellow-50 placeholder:opacity-40"
        />
        <span className="absolute -bottom-1 left-2 right-2 border-t-2 border-dashed border-black/40" />
      </div>
      <p className="mt-1.5 text-[10px] opacity-50 uppercase tracking-widest">
        Press [TAB] to continue
      </p>
    </div>
  );
};

export default TypewriterInput;`,
  },
  {
    name: 'TerminalInput',
    component: OutlineInput,
    icon: Terminal,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import React from "react";

const TerminalInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-green-400">
        $ user.input
      </label>
      <div className="flex items-center gap-2 px-3 py-3 bg-black border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.4)]">
        <span className="text-green-400 select-none">{">"}</span>
        <input
          type="text"
          placeholder="type a command_"
          className="flex-1 bg-transparent text-green-400 placeholder:text-green-700 focus:outline-none text-sm caret-green-400"
        />
        <span className="w-2 h-4 bg-green-400 animate-pulse" style={{ animationDuration: "1s" }} />
      </div>
    </div>
  );
};

export default TerminalInput;`,
  },
  {
    name: 'NeonInput',
    component: NeonInput,
    icon: Zap,
    colors: {
      gradient: 'from-pink-500 to-fuchsia-600',
      bg: 'bg-gradient-to-br from-pink-50 to-fuchsia-100 dark:from-pink-900/20 dark:to-fuchsia-900/30',
    },
    code: `import React from "react";

const NeonInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-pink-400">
        ▸ ENTER NAME
      </label>
      <input
        type="text"
        placeholder="AAA"
        maxLength={20}
        className="w-full px-4 py-3 text-base bg-black text-pink-300 placeholder:text-pink-700/60 border-2 border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.5)] focus:outline-none focus:border-cyan-300 focus:shadow-[0_0_25px_rgba(34,211,238,0.7)] focus:text-cyan-300 placeholder:tracking-widest tracking-widest uppercase"
      />
      <p className="mt-1.5 text-[10px] text-pink-400/60 tracking-widest">
        ★ HIGH SCORE ENTRY ★
      </p>
    </div>
  );
};

export default NeonInput;`,
  },
  {
    name: 'StickyNoteInput',
    component: RoundedInput,
    icon: StickyNote,
    colors: {
      gradient: 'from-yellow-300 to-amber-400',
      bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30',
    },
    code: `import React from "react";
import { Send } from "lucide-react";

const StickyNoteInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-black/70">
        ✉ Message
      </label>
      <div className="relative bg-yellow-200 border-2 border-black shadow-[5px_5px_0px_0px_black] rotate-[-1deg]">
        <input
          type="text"
          placeholder="Write a sticky note…"
          className="w-full px-4 py-3 pr-12 bg-transparent text-black focus:outline-none placeholder:opacity-40 text-base"
          style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive", fontSize: "1.2rem" }}
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-2 inline-flex items-center justify-center w-8 h-8 bg-black text-yellow-200 hover:bg-yellow-200 hover:text-black border-2 border-black transition-colors">
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default StickyNoteInput;`,
  },
  {
    name: 'IndexCardInput',
    component: FocusedInput,
    icon: BookOpen,
    colors: {
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30',
    },
    code: `import React from "react";

const IndexCardInput = () => {
  return (
    <div className="w-full max-w-md font-mono">
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-black/70">
        Index Card · Note
      </label>
      <div className="relative bg-amber-50 border-4 border-black shadow-[5px_5px_0px_0px_black] p-3">
        <span className="absolute left-8 top-0 bottom-0 border-l-2 border-red-300/70" />
        <input
          type="text"
          placeholder="Scribble here…"
          className="w-full pl-7 py-1 bg-transparent text-black focus:outline-none placeholder:opacity-40 text-base"
          style={{
            backgroundImage: "linear-gradient(transparent 22px, rgba(59,130,246,0.25) 22px, rgba(59,130,246,0.25) 23px, transparent 23px)",
            backgroundSize: "100% 24px",
            lineHeight: "24px",
          }}
        />
        <div className="absolute top-1.5 right-2 text-[8px] tracking-widest opacity-50">№ 047</div>
      </div>
    </div>
  );
};

export default IndexCardInput;`,
  },
];

export default inputComponents;
