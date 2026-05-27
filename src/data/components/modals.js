import { Newspaper, Scissors, Terminal, Image } from 'lucide-react';

import NewsprintModal from '../../components/Modals/NewsprintModal';
import TornPaperModal from '../../components/Modals/TornPaperModal';
import TerminalModal from '../../components/Modals/TerminalModal';
import PolaroidModal from '../../components/Modals/PolaroidModal';

export const modalComponents = [
  {
    name: 'NewsprintModal',
    component: NewsprintModal,
    icon: Newspaper,
    colors: {
      gradient: 'from-stone-400 to-stone-600',
      bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30',
    },
    code: `import React, { useState } from "react";

const NewsprintModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 font-mono font-bold text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all"
      >
        EXTRA! EXTRA!
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[#f5f1e6] text-black border-4 border-black shadow-[10px_10px_0px_0px_black] p-6 font-mono"
          >
            <div className="text-center border-b-2 border-dashed border-black pb-2 mb-3">
              <p className="text-[10px] tracking-[0.3em]">VOL. 99 · NO. 04</p>
              <h2 className="text-3xl font-black tracking-tight uppercase">The Daily Zine</h2>
              <p className="text-[10px] tracking-[0.3em]">~ Special Edition ~</p>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Breaking Headline!</h3>
            <p className="text-sm leading-relaxed mb-4">
              You've unlocked a vintage modal printed on the finest faux newsprint.
            </p>
            <div className="flex justify-end gap-2 pt-3 border-t-2 border-dashed border-black">
              <button onClick={() => setOpen(false)} className="px-3 py-1 text-xs font-bold border-2 border-black hover:bg-black hover:text-white transition-colors">CLOSE</button>
              <button onClick={() => setOpen(false)} className="px-3 py-1 text-xs font-bold bg-black text-white border-2 border-black">READ MORE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsprintModal;`,
  },
  {
    name: 'TornPaperModal',
    component: TornPaperModal,
    icon: Scissors,
    colors: {
      gradient: 'from-pink-400 to-yellow-400',
      bg: 'bg-gradient-to-br from-pink-50 to-yellow-100 dark:from-pink-900/20 dark:to-yellow-900/30',
    },
    code: `import React, { useState } from "react";

const TornPaperModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 font-mono font-bold text-white bg-pink-500 border-4 border-black shadow-[4px_4px_0px_0px_black]"
      >
        Rip It Open
      </button>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-yellow-100 text-black border-x-4 border-black p-6 font-mono"
            style={{
              clipPath:
                "polygon(0 4%, 6% 0, 14% 3%, 24% 0, 38% 4%, 52% 0, 65% 3%, 78% 0, 92% 4%, 100% 1%, 100% 96%, 92% 100%, 80% 97%, 65% 100%, 52% 96%, 38% 100%, 24% 97%, 12% 100%, 4% 96%, 0 100%)",
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-3 py-1 border-2 border-black rotate-[-2deg]">URGENT</div>
            <h3 className="text-2xl font-black uppercase mb-3">You've got mail.</h3>
            <p className="text-sm mb-4">A handwritten note, torn from a notebook.</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="px-4 py-1.5 text-xs font-bold bg-white border-2 border-black">Toss</button>
              <button onClick={() => setOpen(false)} className="px-4 py-1.5 text-xs font-bold bg-black text-yellow-200 border-2 border-black">Reply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TornPaperModal;`,
  },
  {
    name: 'TerminalModal',
    component: TerminalModal,
    icon: Terminal,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import React, { useState } from "react";

const TerminalModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 font-mono font-bold text-green-400 bg-black border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors"
      >
        $ ./run.sh
      </button>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-black text-green-400 border-2 border-green-400 font-mono shadow-[0_0_30px_rgba(74,222,128,0.4)]"
          >
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-green-400/40 bg-green-400/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              </div>
              <p className="text-[11px] opacity-70">~/system/alert.exe</p>
            </div>
            <div className="p-5 text-sm">
              <p className="opacity-70">{">"} Initializing connection_</p>
              <p className="opacity-70">{">"} Handshake complete.</p>
              <p className="mt-3 text-green-300"><span className="font-bold">SYSTEM ALERT:</span> Confirm action.</p>
              <div className="mt-5 flex gap-2">
                <button onClick={() => setOpen(false)} className="px-4 py-1 text-xs font-bold border border-green-400">[ABORT]</button>
                <button onClick={() => setOpen(false)} className="px-4 py-1 text-xs font-bold border border-green-400 bg-green-400 text-black">[PROCEED]</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalModal;`,
  },
  {
    name: 'PolaroidModal',
    component: PolaroidModal,
    icon: Image,
    colors: {
      gradient: 'from-orange-300 to-pink-400',
      bg: 'bg-gradient-to-br from-orange-50 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/30',
    },
    code: `import React, { useState } from "react";

const PolaroidModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 font-mono font-bold text-black bg-orange-200 border-4 border-black shadow-[4px_4px_0px_0px_black]"
      >
        Snap a Memory
      </button>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white text-black p-3 pb-14 w-full max-w-xs shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] rotate-[-2deg]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/80 border border-yellow-700/30 rotate-[3deg]" />
            <div className="aspect-square w-full bg-gradient-to-br from-pink-300 via-orange-300 to-yellow-200 flex items-center justify-center border border-gray-300">
              <div className="text-center p-4">
                <div className="text-4xl mb-1">✦</div>
                <p className="font-mono text-[10px] tracking-widest text-gray-700">SUMMER '97</p>
              </div>
            </div>
            <p className="text-center mt-3 text-2xl">good times only</p>
            <button onClick={() => setOpen(false)} className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-mono font-bold bg-black text-white border-2 border-black">KEEP</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PolaroidModal;`,
  },
];

export default modalComponents;
