import { useState } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Radio tuner — sliding needle over a frequency dial, ON AIR lamp when live.
const stations = [
  { freq: "88.1", name: "THE STATIC", genre: "LO-FI HISS" },
  { freq: "91.7", name: "ZINE RADIO", genre: "COLLEGE ROCK" },
  { freq: "95.5", name: "NEON NIGHTS", genre: "SYNTHWAVE" },
  { freq: "99.9", name: "CASSETTE FM", genre: "MIXTAPE HITS" },
  { freq: "104.3", name: "DIAL-UP JAZZ", genre: "SMOOTH 56K" },
];

const RadioTunerPlayer = () => {
  const [index, setIndex] = useState(2);
  const [playing, setPlaying] = useState(false);
  const station = stations[index];
  // needle travels 8% → 92% across the dial
  const needleLeft = 8 + (index / (stations.length - 1)) * 84;

  const prev = () => setIndex((i) => (i - 1 + stations.length) % stations.length);
  const next = () => setIndex((i) => (i + 1) % stations.length);

  return (
    <div className="w-full max-w-md bg-[#e8e0cc] border-4 border-black shadow-[8px_8px_0_0_black] font-mono p-4 text-black">
      {/* Top rail: brand + ON AIR lamp */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600">
          RetroUI Tuner · AM/FM
        </p>
        <span
          className={`text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 border-2 border-black transition-all ${
            playing
              ? "bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.8)]"
              : "bg-stone-300 text-stone-500"
          }`}
        >
          ● ON AIR
        </span>
      </div>

      {/* Frequency dial */}
      <div className="relative bg-stone-900 border-2 border-black px-3 pt-2 pb-4 overflow-hidden">
        <div className="flex justify-between text-[9px] font-bold text-amber-300 tracking-wider mb-1">
          {["88", "92", "96", "100", "104", "108"].map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
        {/* tick marks */}
        <div
          aria-hidden="true"
          className="h-5 bg-[repeating-linear-gradient(90deg,rgba(251,191,36,0.7)_0px,rgba(251,191,36,0.7)_1px,transparent_1px,transparent_9px)]"
        />
        {/* needle */}
        <div
          aria-hidden="true"
          className="absolute top-1 bottom-1 w-0.5 bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.9)] transition-all duration-500 ease-out"
          style={{ left: `${needleLeft}%` }}
        />
      </div>

      {/* Station readout */}
      <div className="mt-3 bg-black border-2 border-stone-600 px-3 py-2 flex items-baseline justify-between">
        <div>
          <p className="text-lime-400 text-sm font-black tracking-[0.15em]">
            {station.name}
          </p>
          <p className="text-lime-700 text-[9px] uppercase tracking-[0.3em] mt-0.5">
            {station.genre}
          </p>
        </div>
        <p className="text-amber-300 text-2xl font-black tabular-nums tracking-tight">
          {station.freq}
          <span className="text-[10px] ml-1 text-amber-500">FM</span>
        </p>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          aria-label="Previous station"
          onClick={prev}
          className="flex items-center justify-center w-11 h-10 bg-white border-2 border-black shadow-[3px_3px_0_0_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={3} />
        </button>
        <button
          aria-label={playing ? "Pause" : "Play"}
          aria-pressed={playing}
          onClick={() => setPlaying((p) => !p)}
          className={`flex items-center gap-2 px-5 h-10 text-[11px] font-black uppercase tracking-[0.2em] border-2 border-black transition-all ${
            playing
              ? "bg-stone-800 text-lime-300 shadow-none translate-x-[3px] translate-y-[3px]"
              : "bg-red-600 text-white shadow-[3px_3px_0_0_black] hover:bg-red-500"
          }`}
        >
          {playing ? (
            <Pause className="w-4 h-4" strokeWidth={2.5} />
          ) : (
            <Play className="w-4 h-4" strokeWidth={2.5} />
          )}
          {playing ? "Pause" : "Play"}
        </button>
        <button
          aria-label="Next station"
          onClick={next}
          className="flex items-center justify-center w-11 h-10 bg-white border-2 border-black shadow-[3px_3px_0_0_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
        >
          <ChevronRight className="w-4 h-4" strokeWidth={3} />
        </button>
      </div>

      <p className="mt-3 text-center text-[9px] uppercase tracking-[0.3em] text-stone-500">
        ~ Tune slowly for best reception ~
      </p>
    </div>
  );
};

export default RadioTunerPlayer;
