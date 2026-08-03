// No-signal TV — a CRT set full of animated static and a color-bar strip.
const colorBars = [
  "bg-white",
  "bg-yellow-400",
  "bg-cyan-400",
  "bg-green-500",
  "bg-fuchsia-500",
  "bg-red-600",
  "bg-blue-700",
];

const StaticTVEmptyState = () => {
  return (
    <div className="w-full max-w-sm bg-stone-200 text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono p-5">
      {/* TV set */}
      <div className="border-4 border-black bg-stone-800 p-3 rounded-lg">
        {/* CRT screen */}
        <div className="relative overflow-hidden rounded-[14px] border-4 border-black bg-black aspect-[4/3]">
          {/* Animated static */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 opacity-70 animate-[tv-static_0.35s_steps(4)_infinite]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #111 0px, #555 1px, #222 2px, #888 3px, #111 4px), repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.35) 1px, transparent 2px, rgba(0,0,0,0.5) 3px, transparent 5px)",
              backgroundSize: "100% 7px, 9px 100%",
            }}
          />
          {/* Rolling scanline band */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 h-8 bg-white/10 animate-[tv-roll_3s_linear_infinite]"
          />
          {/* Color-bar strip */}
          <div aria-hidden="true" className="absolute bottom-0 inset-x-0 flex h-5 border-t-2 border-black">
            {colorBars.map((c) => (
              <span key={c} className={`flex-1 ${c}`} />
            ))}
          </div>
          {/* NO SIGNAL card */}
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[11px] font-black uppercase tracking-[0.35em] px-3 py-1.5 border-2 border-white">
            No Signal
          </p>
        </div>

        {/* Control panel */}
        <div aria-hidden="true" className="flex items-center justify-between mt-2 px-1">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-stone-400" />
            <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-stone-400" />
          </div>
          <span className="text-[8px] uppercase tracking-[0.3em] text-stone-400">
            CH — · VOL —
          </span>
        </div>
      </div>

      <div className="text-center mt-4">
        <h2 className="text-lg font-black uppercase tracking-tight">
          Nothing Broadcasting Here
        </h2>
        <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
          The channel is dead air. Adjust the antenna and try tuning in again.
        </p>
        <button
          type="button"
          className="mt-4 px-6 py-2 bg-red-600 text-white text-[11px] font-black uppercase tracking-[0.25em] border-2 border-black shadow-[3px_3px_0_0_black] hover:bg-black transition-colors"
        >
          ↻ Retry Signal
        </button>
      </div>

      <style>{`
        @keyframes tv-static {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-4px, 3px); }
          50% { transform: translate(3px, -4px); }
          75% { transform: translate(-3px, -2px); }
          100% { transform: translate(4px, 2px); }
        }
        @keyframes tv-roll {
          from { top: -20%; }
          to { top: 110%; }
        }
      `}</style>
    </div>
  );
};

export default StaticTVEmptyState;
