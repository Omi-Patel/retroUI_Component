import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Wood-grain TV channel dial — clunk through the lineup, wraps at both ends.
const channels = [
  { ch: "03", name: "CARTOONS" },
  { ch: "07", name: "NEWS AT 9" },
  { ch: "12", name: "STATIC" },
  { ch: "24", name: "MOVIE NIGHT" },
  { ch: "36", name: "HOME SHOPPING" },
  { ch: "58", name: "LATE SHOW" },
];

const ChannelDialSelect = () => {
  const [index, setIndex] = useState(0);
  const current = channels[index];

  const prev = () =>
    setIndex((i) => (i - 1 + channels.length) % channels.length);
  const next = () => setIndex((i) => (i + 1) % channels.length);

  const pointerDeg = (360 / channels.length) * index;

  return (
    <div className="w-80 bg-amber-900 text-amber-100 border-4 border-black shadow-[6px_6px_0_0_black] font-mono p-4">
      <p className="text-[9px] uppercase tracking-[0.35em] text-amber-300/70 mb-3">
        Zenith-O-Matic · Solid State
      </p>

      <div className="flex items-center gap-4">
        {/* Screen readout */}
        <div className="flex-1 bg-stone-950 border-4 border-black p-3">
          <p
            className="text-2xl font-black tracking-tight text-green-400"
            aria-live="polite"
          >
            CH {current.ch}
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-green-500 mt-1 truncate">
            — {current.name}
          </p>
          <p className="text-[8px] uppercase tracking-[0.3em] text-green-800 mt-2">
            Signal OK · {index + 1}/{channels.length}
          </p>
        </div>

        {/* Static dial */}
        <div
          aria-hidden="true"
          className="relative w-20 h-20 shrink-0 rounded-full bg-stone-200 border-4 border-black shadow-[3px_3px_0_0_black]"
        >
          {channels.map((c, i) => (
            <span
              key={c.ch}
              className="absolute inset-0 flex justify-center"
              style={{ transform: `rotate(${(360 / channels.length) * i}deg)` }}
            >
              <span className="w-0.5 h-2 bg-black mt-1" />
            </span>
          ))}
          <span
            className="absolute inset-2 rounded-full bg-stone-300 border-2 border-black flex justify-center transition-transform duration-300"
            style={{ transform: `rotate(${pointerDeg}deg)` }}
          >
            <span className="w-1 h-4 bg-red-600 mt-0.5" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-[7px] font-black uppercase tracking-widest text-stone-600">
            VHF
          </span>
        </div>
      </div>

      {/* Dial buttons */}
      <div className="flex items-center justify-between gap-3 mt-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous channel"
          className="flex-1 flex items-center justify-center gap-1 py-2 bg-amber-200 text-black border-2 border-black shadow-[3px_3px_0_0_black] text-[10px] font-black uppercase tracking-[0.2em] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_black] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all"
        >
          <ChevronLeft aria-hidden="true" className="w-4 h-4" />
          CH−
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next channel"
          className="flex-1 flex items-center justify-center gap-1 py-2 bg-amber-200 text-black border-2 border-black shadow-[3px_3px_0_0_black] text-[10px] font-black uppercase tracking-[0.2em] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_black] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all"
        >
          CH+
          <ChevronRight aria-hidden="true" className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[8px] uppercase tracking-[0.3em] text-amber-300/60 mt-3 text-center">
        Please adjust antenna for best reception
      </p>
    </div>
  );
};

export default ChannelDialSelect;
