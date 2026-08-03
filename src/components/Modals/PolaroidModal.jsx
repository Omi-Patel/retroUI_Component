import React, { useState, useEffect } from "react";

const PolaroidModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 font-mono font-bold text-black bg-orange-200 border-4 border-black shadow-[4px_4px_0px_0px_black] hover:rotate-[-1deg] transition-all"
      >
        Snap a Memory
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Polaroid memory — good times only"
            className="relative bg-white text-black p-3 pb-14 w-full max-w-xs shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] rotate-[-2deg]"
            style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/80 border border-yellow-700/30 rotate-[3deg] shadow-sm" />
            <div className="aspect-square w-full bg-gradient-to-br from-pink-300 via-orange-300 to-yellow-200 flex items-center justify-center border border-gray-300">
              <div className="text-center p-4">
                <div className="text-4xl mb-1">✦</div>
                <p className="font-mono text-[10px] tracking-widest text-gray-700">
                  SUMMER &apos;97
                </p>
              </div>
            </div>
            <p className="text-center mt-3 text-2xl leading-tight">
              good times only
            </p>
            <p className="text-center text-sm text-gray-500">- the gang</p>
            <button
              onClick={() => setOpen(false)}
              autoFocus
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-mono font-bold bg-black text-white border-2 border-black"
            >
              KEEP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PolaroidModal;
