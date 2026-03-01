import { Type, MessageSquare, Zap, Mail, Search } from 'lucide-react';

// Component imports
import BasicInput from '../../components/Inputs/BasicInput';
import OutlineInput from '../../components/Inputs/OutlineInput';
import NeonInput from '../../components/Inputs/NeonInput';
import FocusedInput from '../../components/Inputs/FocusedInput';
import RoundedInput from '../../components/Inputs/RoundedInput';

export const inputComponents = [
  {
    name: 'BasicInput',
    component: BasicInput,
    icon: Type,
    colors: {
      gradient: 'from-emerald-400 to-teal-500',
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/30',
    },
    code: `import React from "react";

const RetroInput = () => {
  return (
    <>
      <div className="mb-6 w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Basic Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-gray-200 text-gray-800 border-4 border-black shadow-[6px_6px_0px_0px_black] hover:shadow-[10px_10px_0px_0px_black] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150 ease-out"
        />
      </div>
    </>
  );
};

export default RetroInput;`,
  },
  {
    name: 'OutlineInput',
    component: OutlineInput,
    icon: MessageSquare,
    colors: {
      gradient: 'from-fuchsia-500 to-pink-600',
      bg: 'bg-gradient-to-br from-fuchsia-50 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/30',
    },
    code: `import React from "react";

const OutlineInput = () => {
  return (
    <>
      <div className="w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Outlined Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-transparent border-4 border-black text-gray-800 
          hover:bg-gray-200 transition-all duration-150 ease-out 
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-[4px_4px_0px_0px_black]"
        />
      </div>
    </>
  );
};

export default OutlineInput;`,
  },
  {
    name: 'NeonInput',
    component: NeonInput,
    icon: Zap,
    colors: {
      gradient: 'from-violet-500 to-purple-600',
      bg: 'bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/30',
    },
    code: `import React from "react";

const NeonInput = () => {
  return (
    <>
      <div className="w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Neon Glow Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-gray-900 text-white border-4 border-pink-500 neon-glow 
          focus:outline-none focus:ring-2 focus:ring-yellow-500 
          hover:shadow-[0_0_15px_5px_pink] transition-all duration-150 ease-out"
        />
      </div>
    </>
  );
};

export default NeonInput;`,
  },
  {
    name: 'RoundedInput',
    component: RoundedInput,
    icon: Mail,
    colors: {
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/30',
    },
    code: `import React from "react";

const RoundedInput = () => {
  return (
    <>
      <div className="w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Rounded Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-blue-100 border-4 border-black rounded-full 
          shadow-[4px_4px_0px_0px_black] hover:bg-blue-200 hover:shadow-[8px_8px_0px_0px_black] 
          transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default RoundedInput;`,
  },
  {
    name: 'FocusedInput',
    component: FocusedInput,
    icon: Search,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import React from "react";

const FocusedInput = () => {
  return (
    <>
      <div className="mb-6 w-full max-w-md">
        <label className="block text-xl font-bold mb-2 text-gray-700">
          Focused Input
        </label>
        <input
          type="text"
          placeholder="Enter text"
          className="w-full font-mono px-4 py-2 text-lg bg-gray-100 text-gray-800 border-4 border-black shadow-[6px_6px_0px_0px_black] focus:outline-none focus:shadow-[10px_10px_0px_0px_blue] transition-all duration-150 ease-out"
        />
      </div>
    </>
  );
};

export default FocusedInput;`,
  },
];

export default inputComponents;

