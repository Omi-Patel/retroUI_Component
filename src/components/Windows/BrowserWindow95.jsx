import { ArrowLeft, ArrowRight, RotateCw, Home } from "lucide-react";

// 90s browser frame — beveled chrome, geocities address bar, under-construction page.
const bevelOut =
  "border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040]";
const bevelIn =
  "border-2 border-t-[#404040] border-l-[#404040] border-b-white border-r-white";

const BrowserWindow95 = () => {
  return (
    <div
      className={`w-full max-w-lg bg-[#c0c0c0] ${bevelOut} shadow-[6px_6px_0_0_black] font-mono text-black`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 m-0.5">
        <span className="text-white text-[11px] font-bold tracking-wide truncate">
          RetroScape Navigator — [RetroUI Home]
        </span>
        <div className="flex gap-1">
          <button
            aria-label="Minimize window"
            className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} text-[8px] leading-none font-black flex items-end justify-center pb-0.5`}
          >
            _
          </button>
          <button
            aria-label="Maximize window"
            className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} text-[8px] leading-none font-black flex items-center justify-center`}
          >
            □
          </button>
          <button
            aria-label="Close window"
            className={`w-4 h-4 bg-[#c0c0c0] ${bevelOut} text-[8px] leading-none font-black flex items-center justify-center`}
          >
            ×
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b-2 border-b-[#808080]">
        <button
          aria-label="Back"
          className={`flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] ${bevelOut} text-[10px] font-bold active:translate-y-px`}
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
          Back
        </button>
        <button
          aria-label="Forward"
          className={`flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] ${bevelOut} text-[10px] font-bold text-[#808080]`}
        >
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          Fwd
        </button>
        <button
          aria-label="Reload"
          className={`flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] ${bevelOut} text-[10px] font-bold active:translate-y-px`}
        >
          <RotateCw className="w-3.5 h-3.5" strokeWidth={2.5} />
          Reload
        </button>
        <button
          aria-label="Home"
          className={`flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] ${bevelOut} text-[10px] font-bold active:translate-y-px`}
        >
          <Home className="w-3.5 h-3.5" strokeWidth={2.5} />
          Home
        </button>
      </div>

      {/* Address bar */}
      <div className="flex items-center gap-2 px-2 py-1.5 border-b-2 border-b-[#808080]">
        <span className="text-[10px] font-bold">Location:</span>
        <div className={`flex-1 bg-white ${bevelIn} px-2 py-1 text-[11px] truncate`}>
          http://www.geocities.com/retroui
        </div>
      </div>

      {/* Page content */}
      <div className={`m-1 bg-white ${bevelIn} p-4 text-center`}>
        <h2 className="text-xl font-black uppercase tracking-tight text-[#000080] underline">
          Welcome to my Home Page!!!
        </h2>
        {/* under construction stripe */}
        <div
          aria-hidden="true"
          className="mt-3 h-4 border-2 border-black bg-[repeating-linear-gradient(45deg,#facc15_0px,#facc15_10px,black_10px,black_20px)]"
        />
        <p className="mt-3 text-xs font-bold text-red-600 uppercase tracking-wider">
          🚧 Under construction — check back soon! 🚧
        </p>
        <p className="mt-2 text-[11px] text-stone-700 leading-relaxed">
          Best viewed at 800×600 in 256 glorious colors. Sign my guestbook and
          grab a free GIF on your way out.
        </p>
        <div className="mt-3 inline-block bg-black text-lime-400 text-[10px] px-3 py-1 border-2 border-[#808080] tabular-nums">
          You are visitor № 001337
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-1 px-1 pb-1 pt-0.5">
        <div className={`flex-1 ${bevelIn} px-2 py-0.5 text-[10px] bg-[#c0c0c0]`}>
          Document: Done
        </div>
        <div className={`${bevelIn} px-2 py-0.5 text-[10px] bg-[#c0c0c0]`}>28.8k</div>
      </div>
    </div>
  );
};

export default BrowserWindow95;
