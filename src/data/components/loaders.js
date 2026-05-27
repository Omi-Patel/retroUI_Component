import { Loader, Disc, Heart, Music, Clock, Gauge } from 'lucide-react';

// Component imports
import RetroLoader from '../../components/Loaders/RetroLoader';
import RetroSpinner from '../../components/Loaders/RetroSpinner';
import ThreeSpinner from '../../components/Loaders/ThreeSpinner';
import ShadowSpinner from '../../components/Loaders/ShadowSpinner';
import SequenceLoader from '../../components/Loaders/SequenceLoader';
import BarsLoader from '../../components/Loaders/BarsLoader';

export const loaderComponents = [
  {
    name: 'RetroLoader',
    component: RetroLoader,
    icon: Loader,
    colors: {
      gradient: 'from-yellow-400 to-yellow-500',
      bg: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/30',
    },
    code: `import React from "react";

const RetroLoader = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-yellow-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-pink-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
        <div className="w-8 h-8 bg-blue-500 border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"></div>
      </div>

      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#eab308] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#10b981] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-300"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#3b82f6] border-4 border-black shadow-[4px_4px_0px_0px_black] animate-[ping_1s_ease-in-out_infinite] delay-500"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      <div className="flex space-x-2">
        <div
          className="w-8 h-8 bg-[#fcd34d] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite]"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#60a5fa] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-100"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="w-8 h-8 bg-[#f472b6] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-200"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default RetroLoader;`,
  },
  {
    name: 'CassetteLoader',
    component: RetroSpinner,
    icon: Music,
    colors: {
      gradient: 'from-pink-400 to-rose-500',
      bg: 'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/30',
    },
    code: `import React from "react";

// Cassette tape with spinning reels
const CassetteLoader = () => {
  return (
    <div className="relative w-32 h-20 bg-pink-300 border-4 border-black shadow-[4px_4px_0px_0px_black] font-mono">
      <div className="absolute top-1 left-1 right-1 h-2 bg-black/80" />
      <div className="absolute inset-2 top-4 flex items-center justify-around bg-stone-900">
        <div className="w-7 h-7 rounded-full bg-stone-700 border-2 border-black flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border-2 border-pink-300 border-t-transparent animate-spin" />
        </div>
        <div className="text-[8px] text-pink-300 tracking-widest">► REC</div>
        <div className="w-7 h-7 rounded-full bg-stone-700 border-2 border-black flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border-2 border-pink-300 border-t-transparent animate-spin" style={{ animationDirection: "reverse" }} />
        </div>
      </div>
    </div>
  );
};

export default CassetteLoader;`,
  },
  {
    name: 'ArcadeHeartsLoader',
    component: ThreeSpinner,
    icon: Heart,
    colors: {
      gradient: 'from-lime-400 to-green-600',
      bg: 'bg-gradient-to-br from-lime-50 to-green-100 dark:from-lime-900/20 dark:to-green-900/30',
    },
    code: `import React from "react";

// Retro arcade HUD — 3 pixel hearts pulsing
const ArcadeHeartsLoader = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-black border-4 border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.4)] font-mono">
      <span className="text-[10px] tracking-widest text-lime-300">HP</span>
      {[0, 1, 2].map((i) => (
        <span key={i} className="text-2xl text-pink-400" style={{
          animation: "heartPulse 1.2s ease-in-out infinite",
          animationDelay: \`\${i * 0.2}s\`,
        }}>♥</span>
      ))}
      <style>{\`
        @keyframes heartPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); text-shadow: 0 0 8px currentColor; }
        }
      \`}</style>
    </div>
  );
};

export default ArcadeHeartsLoader;`,
  },
  {
    name: 'VinylLoader',
    component: ShadowSpinner,
    icon: Disc,
    colors: {
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30',
    },
    code: `import React from "react";

// Vinyl record spinning on a turntable
const VinylLoader = () => {
  return (
    <div className="flex items-center justify-center w-24 h-24 bg-amber-100 border-4 border-black shadow-[4px_4px_0px_0px_black]">
      <div className="relative w-16 h-16 rounded-full bg-stone-900 animate-spin" style={{ animationDuration: "1.5s" }}>
        <div className="absolute inset-1 rounded-full border border-stone-700" />
        <div className="absolute inset-3 rounded-full border border-stone-700" />
        <div className="absolute inset-5 rounded-full border border-stone-700" />
        <div className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-red-500 border-2 border-black" />
        <div className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-black" />
      </div>
    </div>
  );
};

export default VinylLoader;`,
  },
  {
    name: 'SequenceLoader',
    component: SequenceLoader,
    icon: Clock,
    colors: {
      gradient: 'from-green-400 to-green-500',
      bg: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30',
    },
    code: `import React from "react";

const SequenceLoader = () => {
  return (
    <div className="flex space-x-2">
      <div
        className="w-8 h-8 bg-[#fcd34d] border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#f472b6] border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-8 h-8 bg-[#60a5fa] border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_black]"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};

export default SequenceLoader;`,
  },
  {
    name: 'BarsLoader',
    component: BarsLoader,
    icon: Gauge,
    colors: {
      gradient: 'from-orange-400 to-orange-500',
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/30',
    },
    code: `import React from "react";

const BarsLoader = () => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className="w-2 h-8 bg-[#fbbf24] border-2 border-black shadow-[4px_4px_16px_0px_yellow] animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#ec4899] border-2 border-black shadow-[4px_4px_16px_0px_pink] animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-8 bg-[#3b82f6] border-2 border-black shadow-[4px_4px_16px_0px_blue] animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </>
  );
};

export default BarsLoader;`,
  },
];

export default loaderComponents;

