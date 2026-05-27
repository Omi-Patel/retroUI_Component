import React, { useState } from "react";

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
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
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
            <div className="p-5 text-sm leading-relaxed">
              <p className="opacity-70">
                {">"} Initializing connection<span className="animate-pulse">_</span>
              </p>
              <p className="opacity-70">{">"} Handshake complete.</p>
              <p className="mt-3 text-green-300">
                {">"} <span className="font-bold">SYSTEM ALERT:</span> Confirm
                action to continue. Process will not be reversible.
              </p>
              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-1 text-xs font-bold border border-green-400 hover:bg-green-400 hover:text-black transition-colors"
                >
                  [ABORT]
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-1 text-xs font-bold border border-green-400 bg-green-400 text-black"
                >
                  [PROCEED]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalModal;
