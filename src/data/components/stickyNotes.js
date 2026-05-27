import { StickyNote, FileText, Paperclip, Pin } from 'lucide-react';

import PostIt from '../../components/StickyNotes/PostIt';
import IndexCard from '../../components/StickyNotes/IndexCard';
import TapedMemo from '../../components/StickyNotes/TapedMemo';
import PinnedNote from '../../components/StickyNotes/PinnedNote';

export const stickyNoteComponents = [
  {
    name: 'PostIt',
    component: PostIt,
    icon: StickyNote,
    colors: {
      gradient: 'from-yellow-300 to-amber-400',
      bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30',
    },
    code: `const PostIt = () => {
  return (
    <div
      className="relative inline-block w-52 h-52 p-4 bg-yellow-200 -rotate-3 shadow-[6px_6px_12px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:rotate-0"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 6%)",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-yellow-300"
      />
      <p className="font-mono text-[11px] tracking-widest uppercase text-yellow-900/70 mb-2">
        Remember
      </p>
      <p className="text-stone-800 text-[15px] leading-snug" style={{ fontFamily: '"Instrument Serif", serif' }}>
        buy milk · call mom · finish the zine
      </p>
    </div>
  );
};

export default PostIt;`,
  },
  {
    name: 'IndexCard',
    component: IndexCard,
    icon: FileText,
    colors: {
      gradient: 'from-stone-400 to-stone-600',
      bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900',
    },
    code: `const IndexCard = () => {
  return (
    <div
      className="relative inline-block w-64 h-44 bg-[#fdf6e3] border border-stone-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 23px, #c5cae0 23px, #c5cae0 24px)",
        backgroundPosition: "0 32px",
      }}
    >
      <span aria-hidden="true" className="absolute left-10 top-0 bottom-0 w-px bg-red-400/70" />
      <div className="px-3 py-2 border-b border-stone-300 bg-stone-50/40">
        <p className="font-mono text-[11px] uppercase tracking-widest text-stone-600">
          INDEX · 042
        </p>
      </div>
      <div className="pl-12 pr-3 pt-2 text-stone-800 text-[14px] leading-[24px]" style={{ fontFamily: '"Instrument Serif", serif' }}>
        <p>The medium is the message.</p>
        <p className="italic text-stone-500">— M. McLuhan</p>
      </div>
    </div>
  );
};

export default IndexCard;`,
  },
  {
    name: 'TapedMemo',
    component: TapedMemo,
    icon: Paperclip,
    colors: {
      gradient: 'from-zinc-400 to-zinc-600',
      bg: 'bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900',
    },
    code: `const TapedMemo = () => {
  return (
    <div className="relative inline-block w-56 pt-4">
      <span aria-hidden="true" className="absolute -top-1 left-3 w-14 h-5 bg-stone-200/70 border border-stone-300/60 rotate-[-8deg] shadow-sm" />
      <span aria-hidden="true" className="absolute -top-1 right-3 w-14 h-5 bg-stone-200/70 border border-stone-300/60 rotate-[6deg] shadow-sm" />
      <div className="bg-white border border-stone-200 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.12)]">
        <p className="font-mono text-[10px] tracking-widest uppercase text-red-600 mb-2">
          MEMO · do not remove
        </p>
        <p className="text-stone-800 text-[13.5px] leading-relaxed">
          Out for coffee. Back in <span className="font-semibold">15 min</span>. Take a number, leave a note.
        </p>
        <p className="mt-3 font-mono text-[10px] text-stone-500">— J.</p>
      </div>
    </div>
  );
};

export default TapedMemo;`,
  },
  {
    name: 'PinnedNote',
    component: PinnedNote,
    icon: Pin,
    colors: {
      gradient: 'from-lime-400 to-emerald-500',
      bg: 'bg-gradient-to-br from-lime-50 to-emerald-100 dark:from-lime-900/20 dark:to-emerald-900/30',
    },
    code: `const PinnedNote = () => {
  return (
    <div className="relative inline-block pt-3">
      <span aria-hidden="true" className="absolute -top-1 left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 border border-red-700 shadow-md">
        <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/60" />
      </span>
      <div className="w-48 bg-lime-100 border border-lime-200/80 p-4 pt-6 rotate-2 shadow-[5px_5px_10px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:rotate-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-lime-800/70 mb-1.5">
          To Do · today
        </p>
        <ul className="text-stone-800 text-[13.5px] leading-7 space-y-0">
          <li className="line-through text-stone-400">water plants</li>
          <li>mail postcards</li>
          <li>print contact sheet</li>
        </ul>
      </div>
    </div>
  );
};

export default PinnedNote;`,
  },
];

export default stickyNoteComponents;
