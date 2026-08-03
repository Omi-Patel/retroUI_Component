import { useState } from "react";
import { Play, Pause, SkipForward } from "lucide-react";

// Pocket walkman — spinning spool, scrolling title, orange foam headphone accent.
const tracks = ["SUNSET DRIVE — TAPE GHOSTS", "PAPER PLANES — THE ZINESTERS", "DIAL TONE LOVE — MODEM 56"];

const WalkmanPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);

  return (
    <div className="relative w-full max-w-[270px] bg-stone-800 border-4 border-black shadow-[6px_6px_0_0_black] font-mono p-3 text-stone-100">
      {/* Belt clip silhouette */}
      <div
        aria-hidden="true"
        className="absolute -right-3 top-6 w-3 h-20 bg-stone-900 border-2 border-l-0 border-black rounded-r-md"
      />

      {/* Headphone foam accent */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400">
          RetroUI Pocket
        </p>
        <div className="flex items-center gap-1" aria-hidden="true">
          <span className="w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-black" />
          <span className="w-4 h-0.5 bg-stone-500" />
          <span className="w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-black" />
        </div>
      </div>

      {/* Cassette window */}
      <div className="bg-[#e8e0cc] border-2 border-black p-2">
        <div className="bg-stone-200 border border-black flex items-center justify-around px-2 py-2">
          {/* spinning spool */}
          <div
            aria-hidden="true"
            className="relative w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center animate-[walkman-spin_1.4s_linear_infinite]"
            style={{ animationPlayState: playing ? "running" : "paused" }}
          >
            {[0, 60, 120].map((deg) => (
              <span
                key={deg}
                className="absolute w-0.5 h-6 bg-black"
                style={{ transform: `rotate(${deg}deg)` }}
              />
            ))}
          </div>
          <span aria-hidden="true" className="text-black text-[8px] font-black uppercase tracking-widest rotate-90">
            A
          </span>
          <div
            aria-hidden="true"
            className="relative w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center animate-[walkman-spin_1.4s_linear_infinite]"
            style={{ animationPlayState: playing ? "running" : "paused", animationDirection: "reverse" }}
          >
            {[30, 90, 150].map((deg) => (
              <span
                key={deg}
                className="absolute w-0.5 h-6 bg-black"
                style={{ transform: `rotate(${deg}deg)` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Title marquee */}
      <div className="mt-2 bg-black border-2 border-stone-600 overflow-hidden">
        <div
          className="inline-flex gap-10 whitespace-nowrap py-1 pr-10 animate-[walkman-marquee_7s_linear_infinite] text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase"
          style={{ animationPlayState: playing ? "running" : "paused" }}
        >
          <span>{tracks[track]}</span>
          <span aria-hidden="true">{tracks[track]}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          aria-label="Play"
          aria-pressed={playing}
          onClick={() => setPlaying(true)}
          className={`flex items-center justify-center w-10 h-9 border-2 border-black transition-all ${
            playing
              ? "bg-orange-500 text-black shadow-none translate-x-[2px] translate-y-[2px]"
              : "bg-[#e8e0cc] text-black shadow-[2px_2px_0_0_black]"
          }`}
        >
          <Play className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <button
          aria-label="Pause"
          aria-pressed={!playing}
          onClick={() => setPlaying(false)}
          className={`flex items-center justify-center w-10 h-9 border-2 border-black transition-all ${
            !playing
              ? "bg-orange-500 text-black shadow-none translate-x-[2px] translate-y-[2px]"
              : "bg-[#e8e0cc] text-black shadow-[2px_2px_0_0_black]"
          }`}
        >
          <Pause className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <button
          aria-label="Next track"
          onClick={() => setTrack((t) => (t + 1) % tracks.length)}
          className="flex items-center justify-center w-10 h-9 bg-[#e8e0cc] text-black border-2 border-black shadow-[2px_2px_0_0_black] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
        >
          <SkipForward className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>

      <p className="mt-2 text-center text-[8px] uppercase tracking-[0.3em] text-stone-500">
        Auto-reverse · Mega bass
      </p>

      <style>{`
        @keyframes walkman-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes walkman-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default WalkmanPlayer;
