import { Cpu, Zap, Palette, Grid, Monitor } from 'lucide-react';

// Component imports
import RetroButton from '../../components/Buttons/RetroButton';
import RoundButton from '../../components/Buttons/RoundButton';
import RetroButton2 from '../../components/Buttons/RetroButton2';
import ThreeDButton from '../../components/Buttons/ThreeDButton';
import PixelButton from '../../components/Buttons/PixelButton';

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
];

export default buttonComponents;

