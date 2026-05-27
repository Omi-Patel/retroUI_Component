import React, { useState, useEffect } from "react";

const TerminalToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button
        onClick={() => setShow(true)}
        className="px-5 py-2 font-mono font-bold text-green-400 bg-black border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors"
      >
        $ deploy
      </button>

      {show && (
        <div className="fixed bottom-6 left-6 z-50 animate-[termIn_0.25s_ease-out]">
          <div className="bg-black text-green-400 border-2 border-green-400 font-mono px-4 py-2.5 max-w-sm shadow-[0_0_20px_rgba(74,222,128,0.4)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-[11px] opacity-70 uppercase tracking-wider">
                process · pid 1337
              </p>
            </div>
            <p className="text-sm mt-1">
              {">"} <span className="text-green-300">deploy</span> completed in
              0.42s
            </p>
            <p className="text-[11px] opacity-60">
              {">"} 1 file uploaded · 0 errors
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes termIn {
          0% { transform: translateX(-120%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TerminalToast;
