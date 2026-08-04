import { useState } from "react";

// Ruled composition paper — every line typed lands on a blue rule.
const MAX = 500;

const TypewriterTextarea = () => {
  const [value, setValue] = useState(
    "Dear reader,\nThe zine ships Friday. Bring tape."
  );

  return (
    <div className="w-full max-w-md bg-[#fdfbf3] text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono">
      <div className="flex items-center justify-between px-4 py-2 border-b-4 border-black bg-[#f5f1e6]">
        <label
          htmlFor="typewriter-textarea"
          className="text-[10px] font-black uppercase tracking-[0.3em]"
        >
          First Draft
        </label>
        <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500">
          No. 2 pencil OK
        </span>
      </div>

      <div className="relative">
        {/* Red margin line */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-10 w-0 border-l-2 border-red-400/70 pointer-events-none"
        />
        <textarea
          id="typewriter-textarea"
          rows={6}
          maxLength={MAX}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Begin your draft here…"
          spellCheck="false"
          className="w-full resize-none bg-transparent bg-local bg-[repeating-linear-gradient(transparent,transparent_27px,#a8c4e0_27px,#a8c4e0_28px)] leading-[28px] text-sm pl-14 pr-4 pt-[6px] pb-4 placeholder:text-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-2 border-t-2 border-dashed border-stone-400 text-[9px] uppercase tracking-[0.25em] text-stone-500">
        <span>Rev. 03 · Do not fold</span>
        <span
          className={value.length >= MAX ? "text-red-600 font-black" : ""}
          aria-live="polite"
        >
          {value.length} / {MAX}
        </span>
      </div>
    </div>
  );
};

export default TypewriterTextarea;
