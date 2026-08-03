import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

// Boombox — twin speaker grilles, LED track strip, EQ bars that freeze on pause.
const eqHeights = [40, 75, 55, 90, 65, 80, 45, 70, 60, 85];

const SpeakerGrille = () => (
  <div
    aria-hidden="true"
    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-black bg-stone-700 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)] bg-[radial-gradient(circle,rgba(0,0,0,0.65)_1.5px,transparent_1.5px)] bg-[length:8px_8px] flex items-center justify-center"
  >
    <div className="w-8 h-8 rounded-full bg-stone-900 border-2 border-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
  </div>
);

const BoomboxPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  return (
    <div className="w-full max-w-lg bg-[#e8e0cc] border-4 border-black shadow-[8px_8px_0_0_black] font-mono p-4">
      {/* Handle */}
      <div
        aria-hidden="true"
        className="mx-auto -mt-8 mb-3 w-2/3 h-6 border-4 border-b-0 border-black rounded-t-lg bg-stone-800"
      />

      {/* LED track strip */}
      <div className="bg-black border-2 border-stone-600 px-3 py-1.5 flex items-center justify-between">
        <p className="text-lime-400 text-xs font-bold tracking-[0.2em] uppercase truncate">
          {playing ? "▶ NOW: STREET DREAMS FM" : "■ TAPE STOPPED"}
        </p>
        <span className="text-red-500 text-[9px] font-black tracking-widest">
          {playing ? "PLAY" : "STOP"}
        </span>
      </div>

      {/* Speakers + EQ */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <SpeakerGrille />

        <div className="flex-1 flex flex-col items-center gap-3">
          {/* EQ bars */}
          <div
            aria-hidden="true"
            className="flex items-end gap-1 h-16 bg-stone-900 border-2 border-black px-2 py-1.5"
          >
            {eqHeights.map((h, i) => (
              <span
                key={i}
                className="w-1.5 bg-lime-400 origin-bottom animate-[boombox-eq_0.7s_ease-in-out_infinite_alternate]"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.09}s`,
                  animationPlayState: playing ? "running" : "paused",
                }}
              />
            ))}
          </div>

          {/* Transport */}
          <button
            aria-label={playing ? "Pause" : "Play"}
            aria-pressed={playing}
            onClick={() => setPlaying((p) => !p)}
            className={`flex items-center gap-2 px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] border-2 border-black transition-all ${
              playing
                ? "bg-stone-800 text-lime-300 shadow-none translate-x-[3px] translate-y-[3px]"
                : "bg-white text-black shadow-[3px_3px_0_0_black] hover:bg-yellow-100"
            }`}
          >
            {playing ? (
              <Pause className="w-4 h-4" strokeWidth={2.5} />
            ) : (
              <Play className="w-4 h-4" strokeWidth={2.5} />
            )}
            {playing ? "Pause" : "Play"}
          </button>

          {/* Volume */}
          <div className="w-full flex items-center gap-2 px-1">
            <Volume2 className="w-4 h-4 text-black shrink-0" strokeWidth={2.5} aria-hidden="true" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Volume"
              className="w-full h-2 accent-red-600 cursor-pointer"
            />
            <span className="text-[10px] font-bold text-black tabular-nums w-7 text-right">
              {volume}
            </span>
          </div>
        </div>

        <SpeakerGrille />
      </div>

      {/* Base plate */}
      <div className="mt-4 border-t-4 border-black pt-2 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.3em] text-stone-500">
        <span>RetroUI Soundmachine</span>
        <span>MODEL BX-90</span>
      </div>

      <style>{`
        @keyframes boombox-eq {
          from { transform: scaleY(0.25); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
};

export default BoomboxPlayer;
