import React, { useState } from "react";

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
              <h2 className="text-3xl font-black tracking-tight uppercase">
                The Daily Zine
              </h2>
              <p className="text-[10px] tracking-[0.3em]">~ Special Edition ~</p>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">
              Breaking Headline!
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              You&apos;ve unlocked a vintage modal printed on the finest faux
              newsprint. Read all about it, then dismiss when ready.
            </p>
            <div className="flex justify-end gap-2 pt-3 border-t-2 border-dashed border-black">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 text-xs font-bold border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                CLOSE
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 text-xs font-bold bg-black text-white border-2 border-black"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsprintModal;
