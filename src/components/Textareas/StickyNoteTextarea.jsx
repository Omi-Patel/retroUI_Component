import { useState } from "react";

// Post-it on the monitor — taped up, slightly crooked, impossible to ignore.
const StickyNoteTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-72 pt-4 font-mono">
      <div className="relative bg-yellow-200 text-stone-900 border-2 border-yellow-500/60 shadow-[5px_6px_0_0_rgba(0,0,0,0.25)] rotate-[-1.5deg] p-4 pt-6">
        {/* Tape strip */}
        <div
          aria-hidden="true"
          className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[2deg] w-24 h-6 bg-stone-100/70 border border-stone-300/70 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]"
        />

        <label
          htmlFor="sticky-note-textarea"
          className="block text-[10px] font-black uppercase tracking-[0.25em] text-yellow-800 mb-2"
        >
          Note to self
        </label>

        <textarea
          id="sticky-note-textarea"
          rows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={"buy more tape…\ncall mom\nship the zine!!"}
          className="w-full resize-none bg-transparent text-sm leading-6 placeholder:text-yellow-700/50 border-2 border-transparent focus:outline-none focus:border-dashed focus:border-yellow-700/70 focus:bg-yellow-100/60 px-1.5 py-1 transition-colors"
        />

        <div className="flex items-center justify-between mt-2 text-[9px] uppercase tracking-[0.2em] text-yellow-800/70">
          <span>~ don&apos;t forget ~</span>
          <span aria-live="polite">{value.length > 0 ? `${value.length} ch` : "blank"}</span>
        </div>

        {/* Curled corner */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-0 h-0 border-l-[14px] border-l-transparent border-b-[14px] border-b-yellow-400/80"
        />
      </div>
    </div>
  );
};

export default StickyNoteTextarea;
