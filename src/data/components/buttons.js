import { Cpu, Zap, Palette, Grid, Monitor, Sparkles, Stamp, Megaphone, Ticket } from 'lucide-react';

// Component imports
import RetroButton from '../../components/Buttons/RetroButton';
import RoundButton from '../../components/Buttons/RoundButton';
import RetroButton2 from '../../components/Buttons/RetroButton2';
import ThreeDButton from '../../components/Buttons/ThreeDButton';
import PixelButton from '../../components/Buttons/PixelButton';
import GlitchButton from '../../components/Buttons/GlitchButton';
import StampButton from '../../components/Buttons/StampButton';
import MarqueeButton from '../../components/Buttons/MarqueeButton';
import DashedButton from '../../components/Buttons/DashedButton';

export const buttonComponents = [
  {
    name: 'RetroButton',
    component: RetroButton,
    icon: Cpu,
    colors: {
      gradient: 'from-emerald-400 to-teal-500',
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30',
    },
    code: `import React from "react";

const RetroButton = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-neon border-4 border-black cursor-pointer select-none
      shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transition-all duration-150 ease-out retro-btn"
      >
        Click Me
      </button>
    </>
  );
};

export default RetroButton;`,
  },
  {
    name: 'RetroButton2',
    component: RetroButton2,
    icon: Zap,
    colors: {
      gradient: 'from-fuchsia-500 to-pink-600',
      bg: 'bg-gradient-to-br from-fuchsia-50 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/30',
    },
    code: `import React from "react";

const RetroButton2 = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-4 border-black cursor-pointer select-none
      shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out retro-btn
      before:absolute before:inset-0 before:bg-black before:-z-10 hover:before:bg-opacity-50
      hover:scale-105 transform hover:brightness-110"
      >
        <span className="relative z-20 neon-text">Click Me</span>
      </button>
    </>
  );
};

export default RetroButton2;`,
  },
  {
    name: 'RoundButton',
    component: RoundButton,
    icon: Palette,
    colors: {
      gradient: 'from-violet-500 to-purple-600',
      bg: 'bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/30',
    },
    code: `import React from "react";

const RoundButton = () => {
  return (
    <>
      <button
        className="relative inline-block px-6 py-3 font-mono text-lg text-white bg-gradient-to-r from-blue-400 to-purple-600 border-2 border-gray-800 cursor-pointer select-none
    rounded-full shadow-lg transition-transform transform hover:scale-105
    before:absolute before:inset-0 before:border-2 before:border-gray-700 before:rounded-full before:content-[''] before:z-10 before:opacity-50 before:-translate-x-1 before:-translate-y-1
    after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-700 after:rounded-full after:opacity-30 after:content-[''] after:z-0"
      >
        <span className="relative z-20 font-bold">Click Me</span>
      </button>
    </>
  );
};

export default RoundButton;`,
  },
  {
    name: 'ThreeDButton',
    component: ThreeDButton,
    icon: Grid,
    colors: {
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30',
    },
    code: `import React from "react";

const ThreeDButton = () => {
  return (
    <div>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-black bg-yellow-100 border-4 border-black cursor-pointer select-none
  shadow-[6px_6px_0px_0px_black] hover:shadow-[12px_12px_0px_0px_black] transition-all duration-150 ease-out 
  active:shadow-[3px_3px_0px_0px_black] active:translate-x-1 active:translate-y-1"
      >
        3D Effect
      </button>
    </div>
  );
};

export default ThreeDButton;`,
  },
  {
    name: 'PixelButton',
    component: PixelButton,
    icon: Monitor,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import React from "react";

const PixelButton = () => {
  return (
    <div>
      <button
        className="relative inline-block px-6 py-3 font-mono font-bold text-lg text-white bg-green-500 border-4 border-black cursor-pointer select-none
  shadow-[3px_3px_0px_0px_black] hover:shadow-[5px_5px_0px_0px_black] transition-all duration-200 ease-out
  before:content-[''] before:block before:absolute before:w-full before:h-full before:border-4 before:border-black before:left-1 before:top-1 before:transition-all before:duration-200 before:ease-out
  hover:before:left-0 hover:before:top-0 active:shadow-[3px_3px_0px_0px_black] active:before:left-2 active:before:top-2"
      >
        Pixel Art
      </button>
    </div>
  );
};

export default PixelButton;`,
  },
  {
    name: 'GlitchButton',
    component: GlitchButton,
    icon: Sparkles,
    colors: {
      gradient: 'from-pink-500 to-cyan-500',
      bg: 'bg-gradient-to-br from-pink-50 to-cyan-100 dark:from-pink-900/20 dark:to-cyan-900/30',
    },
    code: `import React from "react";

const GlitchButton = () => {
  return (
    <button
      className="group relative inline-block px-6 py-3 font-mono font-bold text-lg text-white bg-black border-4 border-black cursor-pointer select-none
      shadow-[5px_5px_0px_0px_#f472b6] hover:shadow-[8px_8px_0px_0px_#22d3ee] transition-all duration-150 ease-out
      hover:-translate-x-0.5 hover:-translate-y-0.5"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-pink-400 mix-blend-screen translate-x-0 group-hover:-translate-x-1 transition-transform duration-150"
      >
        GLITCH
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-cyan-300 mix-blend-screen translate-x-0 group-hover:translate-x-1 transition-transform duration-150"
      >
        GLITCH
      </span>
      <span className="relative z-10">GLITCH</span>
    </button>
  );
};

export default GlitchButton;`,
  },
  {
    name: 'StampButton',
    component: StampButton,
    icon: Stamp,
    colors: {
      gradient: 'from-red-500 to-rose-600',
      bg: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/30',
    },
    code: `import React from "react";

const StampButton = () => {
  return (
    <button
      className="relative inline-flex items-center gap-2 px-5 py-2 font-mono font-bold uppercase tracking-[0.18em] text-sm text-red-700 dark:text-red-400
      bg-transparent border-[3px] border-double border-red-700 dark:border-red-400 cursor-pointer select-none
      -rotate-3 hover:rotate-0 transition-transform duration-200 ease-out
      hover:scale-105"
    >
      <span aria-hidden="true">★</span>
      Approved
      <span aria-hidden="true">★</span>
    </button>
  );
};

export default StampButton;`,
  },
  {
    name: 'MarqueeButton',
    component: MarqueeButton,
    icon: Megaphone,
    colors: {
      gradient: 'from-yellow-400 to-amber-500',
      bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30',
    },
    code: `import React from "react";

const MarqueeButton = () => {
  return (
    <button
      className="group relative inline-block overflow-hidden px-6 py-3 font-mono font-bold text-lg text-black bg-yellow-300 border-4 border-black cursor-pointer select-none w-48
      shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all duration-150 ease-out"
    >
      <span className="block whitespace-nowrap group-hover:animate-[marquee_4s_linear_infinite]">
        ★ NEW DROP ★ NEW DROP ★ NEW DROP ★
      </span>
    </button>
  );
};

export default MarqueeButton;`,
  },
  {
    name: 'DashedButton',
    component: DashedButton,
    icon: Ticket,
    colors: {
      gradient: 'from-slate-500 to-zinc-600',
      bg: 'bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900/20 dark:to-zinc-900/30',
    },
    code: `import React from "react";

const DashedButton = () => {
  return (
    <button
      className="relative inline-flex items-center gap-2 px-6 py-3 font-mono font-semibold text-base text-black dark:text-white bg-transparent
      border-2 border-dashed border-black dark:border-white cursor-pointer select-none rounded-sm
      hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
      transition-colors duration-150 ease-out"
    >
      <span aria-hidden="true">{"//"}</span>
      Ticket Stub
      <span aria-hidden="true">{"//"}</span>
    </button>
  );
};

export default DashedButton;`,
  },
];

export default buttonComponents;

