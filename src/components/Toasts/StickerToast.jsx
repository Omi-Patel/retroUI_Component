import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const StickerToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button
        onClick={() => setShow(true)}
        className="px-5 py-2 font-mono font-bold text-black bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all"
      >
        Stick It
      </button>

      {show && (
        <div className="fixed bottom-6 right-6 z-50 animate-[stickerPop_0.3s_ease-out]">
          <div className="relative px-4 py-3 bg-yellow-300 text-black border-4 border-black shadow-[6px_6px_0px_0px_black] rotate-[-3deg] font-mono max-w-xs">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-7 h-7 items-center justify-center bg-black text-yellow-300 rounded-full border-2 border-black">
                <Check className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-black uppercase">Saved!</p>
                <p className="text-[11px]">Your work is sticky-noted.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes stickerPop {
          0% { transform: scale(0.5) rotate(-15deg); opacity: 0; }
          60% { transform: scale(1.1) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default StickerToast;
