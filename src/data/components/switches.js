import { ToggleLeft, ToggleRight, Lightbulb, Palette, Layers } from 'lucide-react';

// Component imports
import BasicSwitch from '../../components/Switch/BasicSwitch';
import BorderedSwitch from '../../components/Switch/BorderedSwitch';
import GlowSwitch from '../../components/Switch/GlowSwitch';
import IconSwitch from '../../components/Switch/IconSwitch';
import LabeledSwitch from '../../components/Switch/LabeledSwitch';

export const switchComponents = [
  {
    name: 'BasicSwitch',
    component: BasicSwitch,
    icon: ToggleLeft,
    colors: {
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30',
    },
    code: `import React, { useState } from "react";

const BasicSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-300 \${
        isOn ? "bg-[#D08C60]" : "bg-[#f2c364]"
      }\`}
    >
      <div
        className={\`w-7 h-7 bg-[#3B3228] rounded-full shadow-[2px_2px_4px_#3B3228] transform transition-transform duration-300 \${
          isOn ? "translate-x-8" : "translate-x-1"
        }\`}
      />
    </div>
  );
};

export default BasicSwitch;`,
  },
  {
    name: 'BorderedSwitch',
    component: BorderedSwitch,
    icon: ToggleRight,
    colors: {
      gradient: 'from-rose-400 to-red-500',
      bg: 'bg-gradient-to-br from-rose-50 to-red-100 dark:from-rose-900/20 dark:to-red-900/30',
    },
    code: `import React, { useState } from "react";

// Chunky power switch with ON/OFF rail
const BorderedSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`relative w-20 h-9 flex items-center cursor-pointer border-4 border-black shadow-[4px_4px_0px_0px_black] transition-colors font-mono select-none \${
        isOn ? "bg-lime-400" : "bg-stone-200"
      }\`}
    >
      <span className={\`absolute left-2 text-[10px] font-black tracking-widest \${isOn ? "opacity-100 text-black" : "opacity-30"}\`}>ON</span>
      <span className={\`absolute right-2 text-[10px] font-black tracking-widest \${isOn ? "opacity-30" : "opacity-100 text-black"}\`}>OFF</span>
      <div
        className={\`w-7 h-7 bg-black border-2 border-black transition-transform duration-200 ease-out \${isOn ? "translate-x-[44px]" : "translate-x-0.5"}\`}
        style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0 2px, rgba(255,255,255,0.15) 2px 4px)" }}
      />
    </div>
  );
};

export default BorderedSwitch;`,
  },
  {
    name: 'GlowSwitch',
    component: GlowSwitch,
    icon: Lightbulb,
    colors: {
      gradient: 'from-blue-400 to-indigo-500',
      bg: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30',
    },
    code: `import React, { useState } from "react";

// Arcade neon switch — pink/cyan glow
const GlowSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`relative w-16 h-8 flex items-center cursor-pointer border-2 transition-all duration-300 font-mono \${
        isOn
          ? "bg-black border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.6)]"
          : "bg-black border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
      }\`}
    >
      <div className={\`w-5 h-5 transition-all duration-300 \${
        isOn
          ? "translate-x-[34px] bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.9)]"
          : "translate-x-1.5 bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
      }\`} />
      <span
        className={\`absolute inset-0 flex items-center justify-center text-[8px] font-black tracking-widest pointer-events-none \${isOn ? "text-pink-400" : "text-cyan-300"}\`}
        style={{ textShadow: "0 0 6px currentColor" }}
      >
        {isOn ? "▸ ON" : "OFF ◂"}
      </span>
    </div>
  );
};

export default GlowSwitch;`,
  },
  {
    name: 'IconSwitch',
    component: IconSwitch,
    icon: Palette,
    colors: {
      gradient: 'from-purple-400 to-violet-500',
      bg: 'bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/30',
    },
    code: `import React, { useState } from "react";
import { Sun, Moon } from 'lucide-react';

const IconSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={\`relative w-20 h-10 flex items-center rounded-full cursor-pointer transition-all duration-300 border-4 border-black shadow-[4px_4px_0px_0px_black] \${
        isOn ? "bg-[#5B4B8A]" : "bg-[#F7D44C]"
      }\`}
    >
      <div
        className={\`absolute left-1 text-white transition-opacity duration-300 \${
          isOn ? "opacity-0" : "opacity-100"
        }\`}
      >
        <Sun size={16} className="text-black" />
      </div>
      <div
        className={\`absolute right-1 text-white transition-opacity duration-300 \${
          isOn ? "opacity-100" : "opacity-0"
        }\`}
      >
        <Moon size={16} className="text-white" />
      </div>
      <div
        className={\`w-8 h-8 bg-white rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.3)] transform transition-transform duration-300 border-2 border-black \${
          isOn ? "translate-x-10" : "translate-x-0"
        }\`}
      />
    </div>
  );
};

export default IconSwitch;`,
  },
  {
    name: 'LabeledSwitch',
    component: LabeledSwitch,
    icon: Layers,
    colors: {
      gradient: 'from-cyan-400 to-blue-500',
      bg: 'bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/30',
    },
    code: `import React, { useState } from "react";

const LabeledSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono font-bold text-sm">OFF</span>
      <div
        onClick={toggleSwitch}
        className={\`relative w-16 h-8 flex items-center rounded-md cursor-pointer transition-all duration-300 border-2 border-black shadow-[3px_3px_0px_0px_black] \${
          isOn ? "bg-[#7CB9E8]" : "bg-gray-200"
        }\`}
      >
        <div
          className={\`w-6 h-6 bg-white rounded-sm shadow-md transform transition-transform duration-300 border border-black \${
            isOn ? "translate-x-9" : "translate-x-0.5"
          }\`}
        />
      </div>
      <span className="font-mono font-bold text-sm">ON</span>
    </div>
  );
};

export default LabeledSwitch;`,
  },
];

export default switchComponents;

