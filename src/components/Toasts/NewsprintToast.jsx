import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";

const NewsprintToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button
        onClick={() => setShow(true)}
        className="px-5 py-2 font-mono font-bold text-white bg-black border-4 border-black hover:bg-white hover:text-black transition-colors"
      >
        Broadcast
      </button>

      {show && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-[newsDrop_0.35s_ease-out]">
          <div
            className="bg-[#f5f1e6] text-black border-4 border-black shadow-[6px_6px_0px_0px_black] px-5 py-3 font-mono max-w-md"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-70 border-b border-dashed border-black/60 pb-0.5">
                  Bulletin · Just In
                </p>
                <p className="text-sm font-bold uppercase mt-1">
                  New update available
                </p>
                <p className="text-[11px] opacity-80">
                  Hot off the press — refresh to read all about it.
                </p>
              </div>
              <button
                onClick={() => setShow(false)}
                className="text-[11px] font-bold underline"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes newsDrop {
          0% { transform: translate(-50%, -150%) rotate(-3deg); opacity: 0; }
          70% { transform: translate(-50%, 10%) rotate(1deg); opacity: 1; }
          100% { transform: translate(-50%, 0) rotate(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default NewsprintToast;
