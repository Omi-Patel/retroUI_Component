import { Loader, RotateCw, RefreshCw, Hourglass, Clock, Gauge } from 'lucide-react';

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
    name: 'RetroSpinner',
    component: RetroSpinner,
    icon: RotateCw,
    colors: {
      gradient: 'from-blue-400 to-blue-500',
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30',
    },
    code: `import React from "react";

const RetroSpinner = () => {
  return (
    <div className="flex">
      <div className="w-8 h-8 rounded-full border-4 border-black border-t-transparent border-b-[#60a5fa] shadow-[2px_2px_0px_0px_black] animate-[spin_0.8s_linear_infinite]"></div>
    </div>
  );
};

export default RetroSpinner;`,
  },
  {
    name: 'ThreeSpinner',
    component: ThreeSpinner,
    icon: RefreshCw,
    colors: {
      gradient: 'from-pink-400 to-pink-500',
      bg: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/30',
    },
    code: `import React from "react";

const ThreeSpinner = () => {
  return (
    <div className="flex space-x-6">
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#fbbf24] delay-0 rounded-full animate-spin shadow-[1px_1px_14px_0px_#fbbf24]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#ec4899] delay-300 rounded-full animate-spin shadow-[1px_1px_14px_0px_#ec4899]"></div>
      <div className="w-8 h-8 border-4 border-t-transparent border-black bg-[#3b82f6] delay-600 rounded-full animate-spin shadow-[1px_1px_14px_0px_#3b82f6]"></div>
    </div>
  );
};

export default ThreeSpinner;`,
  },
  {
    name: 'ShadowSpinner',
    component: ShadowSpinner,
    icon: Hourglass,
    colors: {
      gradient: 'from-purple-400 to-purple-500',
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30',
    },
    code: `import React from "react";

const ShadowSpinner = () => {
  return (
    <div className="flex space-x-4 items-center">
      <div className="w-8 h-8 rounded-full border-4 border-black relative bg-yellow-100 shadow-[2px_2px_14px_0px_yellow] animate-[spin_0.6s_linear_infinite]">
        <div className="w-2 h-2 bg-[#ffdb25] absolute right-1 top-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default ShadowSpinner;`,
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

