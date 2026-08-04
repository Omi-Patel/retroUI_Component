import { useState, useEffect } from "react";
import { Play, Pause, Rewind, FastForward } from "lucide-react";

// Cassette deck — spinning spools, handwritten label, tape counter that rolls while playing.
const renderSpool = (playing, tapeSize) => (
  <div className="relative w-16 h-16 flex items-center justify-center" aria-hidden="true">
    {/* tape pack — grows/shrinks with progress */}
    <div
      className="absolute rounded-full bg-stone-800 transition-all duration-300"
      style={{ width: `${tapeSize}px`, height: `${tapeSize}px` }}
    />
    {/* rotating hub */}
    <div
      className="relative w-8 h-8 rounded-full bg-[#e8e0cc] border-2 border-black flex items-center justify-center animate-[cassette-spin_1.6s_linear_infinite]"
      style={{ animationPlayState: playing ? "running" : "paused" }}
    >
      {[0, 60, 120].map((deg) => (
        <span
          key={deg}
          className="absolute w-1 h-6 bg-black"
          style={{ transform: `rotate(${deg}deg)` }}
        />
      ))}
      <span className="absolute w-3 h-3 rounded-full bg-[#e8e0cc] border border-black" />
    </div>
  </div>
);

const CassetteDeckPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(24); // 0–100 tape position

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => (p + 0.5) % 100);
    }, 100);
    return () => clearInterval(id);
  }, [playing]);

  const rewind = () => setProgress((p) => Math.max(0, p - 10));
  const fastForward = () => setProgress((p) => Math.min(100, p + 10));

  const transportBtn =
    "flex items-center justify-center w-12 h-10 bg-[#e8e0cc] border-2 border-black shadow-[3px_3px_0_0_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all text-black";
  const latched =
    "flex items-center justify-center w-12 h-10 bg-stone-800 text-lime-300 border-2 border-black shadow-none translate-x-[3px] translate-y-[3px] transition-all";

  return (
    <div className="w-full max-w-sm bg-stone-800 border-4 border-black shadow-[8px_8px_0_0_black] font-mono p-4 text-stone-100">
      {/* Faceplate header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
          RetroUI · Deck-01
        </p>
        <span className="text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 border border-stone-500 text-stone-400">
          STEREO
        </span>
      </div>

      {/* Cassette window */}
      <div className="bg-[#e8e0cc] border-2 border-black p-3 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]">
        <div className="bg-white border-2 border-black px-3 py-1.5 rotate-[-1deg]">
          <p className="text-black text-sm font-bold italic tracking-wide">
            MIXTAPE &apos;97 · SIDE A
          </p>
          <div className="mt-1 border-t border-dashed border-stone-400" />
          <div className="mt-1 border-t border-dashed border-stone-400" />
        </div>
        <div className="mt-3 mx-auto w-56 bg-stone-200 border-2 border-black rounded-sm flex items-center justify-between px-4 py-2">
          {renderSpool(playing, 56 - progress * 0.24)}
          <div className="flex flex-col items-center gap-1" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-stone-400 border border-black" />
            <span className="w-2 h-2 rounded-full bg-stone-400 border border-black" />
          </div>
          {renderSpool(playing, 32 + progress * 0.24)}
        </div>
      </div>

      {/* Tape position */}
      <div className="mt-4">
        <div className="flex justify-between text-[9px] uppercase tracking-[0.25em] text-stone-400 mb-1">
          <span>Tape</span>
          <span className="tabular-nums text-lime-300">
            {String(Math.floor(progress * 9.99)).padStart(3, "0")}
          </span>
        </div>
        <div className="h-3 bg-black border-2 border-stone-600 overflow-hidden">
          <div
            className="h-full bg-lime-400 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Transport */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button aria-label="Rewind" onClick={rewind} className={transportBtn}>
          <Rewind className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <button
          aria-label="Play"
          aria-pressed={playing}
          onClick={() => setPlaying(true)}
          className={playing ? latched : transportBtn}
        >
          <Play className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <button
          aria-label="Pause"
          aria-pressed={!playing}
          onClick={() => setPlaying(false)}
          className={!playing ? latched : transportBtn}
        >
          <Pause className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <button aria-label="Fast forward" onClick={fastForward} className={transportBtn}>
          <FastForward className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>

      <style>{`
        @keyframes cassette-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CassetteDeckPlayer;
