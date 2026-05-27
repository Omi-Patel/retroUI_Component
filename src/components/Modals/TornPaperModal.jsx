import React, { useState } from "react";

const TornPaperModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 font-mono font-bold text-white bg-pink-500 border-4 border-black shadow-[4px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] transition-all"
      >
        Rip It Open
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-yellow-100 text-black border-x-4 border-black p-6 font-mono"
            style={{
              clipPath:
                "polygon(0 4%, 6% 0, 14% 3%, 24% 0, 38% 4%, 52% 0, 65% 3%, 78% 0, 92% 4%, 100% 1%, 100% 96%, 92% 100%, 80% 97%, 65% 100%, 52% 96%, 38% 100%, 24% 97%, 12% 100%, 4% 96%, 0 100%)",
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-3 py-1 border-2 border-black rotate-[-2deg]">
              URGENT
            </div>
            <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">
              You&apos;ve got mail.
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              A handwritten note, torn from a notebook, delivered straight to
              your browser. No envelope required.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-1.5 text-xs font-bold bg-white border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                Toss
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-1.5 text-xs font-bold bg-black text-yellow-200 border-2 border-black"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TornPaperModal;
