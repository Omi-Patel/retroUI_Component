import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

// Classic system alert — beveled gray chrome, illegal-operation humor, OK / Details.
const bevelOut =
  "border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040]";
const bevelIn =
  "border-2 border-t-[#404040] border-l-[#404040] border-b-white border-r-white";

const AlertDialog98 = () => {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openDialog = () => {
    setShowDetails(false);
    setOpen(true);
  };

  return (
    <div className="font-mono">
      <button
        onClick={openDialog}
        className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-black bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] shadow-[4px_4px_0_0_black] hover:shadow-[6px_6px_0_0_black] transition-all"
      >
        Crash the program
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Program error"
            className={`w-full max-w-sm bg-[#c0c0c0] ${bevelOut} shadow-[8px_8px_0_0_black] text-black`}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 m-0.5">
              <span className="text-white text-[11px] font-bold tracking-wide">
                RETROUI.EXE
              </span>
              <button
                aria-label="Close dialog"
                onClick={() => setOpen(false)}
                className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} text-[9px] leading-none font-black flex items-center justify-center`}
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-4 flex items-start gap-3">
              <div
                aria-hidden="true"
                className="shrink-0 w-10 h-10 bg-yellow-300 border-2 border-black flex items-center justify-center"
              >
                <AlertTriangle className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <div className="text-[11px] leading-relaxed">
                <p className="font-bold">
                  This program has performed an illegal operation and will be
                  shut down.
                </p>
                <p className="mt-2 text-stone-700">
                  If the problem persists, try turning it off and on again. It
                  usually works. No promises.
                </p>
              </div>
            </div>

            {showDetails && (
              <div className={`mx-4 mb-2 bg-white ${bevelIn} p-2 text-[10px] leading-relaxed text-stone-700`}>
                <p>RETROUI caused a General Vibe Fault in</p>
                <p>module NOSTALGIA.DLL at 0097:1997beef.</p>
                <p className="mt-1">Registers: AX=CAFE BX=BABE CX=1997</p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-center gap-2 px-4 pb-4">
              <button
                autoFocus
                onClick={() => setOpen(false)}
                className={`px-6 py-1 bg-[#c0c0c0] ${bevelOut} text-[11px] font-bold outline outline-1 outline-black outline-offset-[-4px] active:translate-y-px`}
              >
                OK
              </button>
              <button
                onClick={() => setShowDetails((d) => !d)}
                aria-pressed={showDetails}
                className={`px-4 py-1 bg-[#c0c0c0] ${bevelOut} text-[11px] font-bold active:translate-y-px`}
              >
                Details {showDetails ? "<<" : ">>"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertDialog98;
