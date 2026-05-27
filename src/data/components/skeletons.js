import { Newspaper, Sparkles, Square, Terminal } from 'lucide-react';

import NewsprintSkeleton from '../../components/Skeletons/NewsprintSkeleton';
import ShimmerSkeleton from '../../components/Skeletons/ShimmerSkeleton';
import PixelSkeleton from '../../components/Skeletons/PixelSkeleton';
import TerminalSkeleton from '../../components/Skeletons/TerminalSkeleton';

export const skeletonComponents = [
  {
    name: 'NewsprintSkeleton',
    component: NewsprintSkeleton,
    icon: Newspaper,
    colors: { gradient: 'from-stone-400 to-stone-600', bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30' },
    code: `import React from "react";

const Bar = ({ w = "w-full", h = "h-3", className = "" }) => (
  <div className={\`\${w} \${h} \${className}\`} style={{
    backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 6px)",
    backgroundColor: "rgba(0,0,0,0.08)",
  }} />
);

const NewsprintSkeleton = () => (
  <div className="font-mono w-full max-w-sm bg-[#f5f1e6] text-black border-4 border-black shadow-[5px_5px_0px_0px_black] p-4 space-y-3">
    <Bar w="w-1/3" h="h-2.5" />
    <Bar w="w-full" h="h-5" />
    <Bar w="w-5/6" />
    <Bar w="w-2/3" />
    <div className="flex gap-2 pt-2">
      <Bar w="w-16" h="h-7" />
      <Bar w="w-16" h="h-7" />
    </div>
  </div>
);

export default NewsprintSkeleton;`,
  },
  {
    name: 'ShimmerSkeleton',
    component: ShimmerSkeleton,
    icon: Sparkles,
    colors: { gradient: 'from-gray-300 to-gray-500', bg: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30' },
    code: `import React from "react";

const Shimmer = ({ className = "" }) => (
  <div className={\`relative overflow-hidden bg-stone-200 dark:bg-stone-800 \${className}\`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite]" style={{
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
    }} />
  </div>
);

const ShimmerSkeleton = () => (
  <div className="w-full max-w-sm bg-white border-4 border-black shadow-[5px_5px_0px_0px_black] p-4 space-y-3">
    <div className="flex items-center gap-3">
      <Shimmer className="w-12 h-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Shimmer className="w-2/3 h-3" />
        <Shimmer className="w-1/2 h-2.5" />
      </div>
    </div>
    <Shimmer className="w-full h-3" />
    <Shimmer className="w-5/6 h-3" />
    <Shimmer className="w-32 h-8 mt-3" />
    <style>{\`@keyframes shimmer { 100% { transform: translateX(100%); } }\`}</style>
  </div>
);

export default ShimmerSkeleton;`,
  },
  {
    name: 'PixelSkeleton',
    component: PixelSkeleton,
    icon: Square,
    colors: { gradient: 'from-lime-400 to-green-600', bg: 'bg-gradient-to-br from-lime-50 to-green-100 dark:from-lime-900/20 dark:to-green-900/30' },
    code: `import React from "react";

const Block = ({ className = "" }) => (
  <div className={\`bg-lime-400/30 animate-pulse \${className}\`} />
);

const PixelSkeleton = () => (
  <div className="w-full max-w-sm bg-stone-900 border-4 border-black shadow-[5px_5px_0px_0px_black] p-4 font-mono">
    <div className="flex items-center gap-3 mb-3">
      <Block className="w-10 h-10" />
      <div className="flex-1 space-y-1.5">
        <Block className="w-2/3 h-3" />
        <Block className="w-1/2 h-2.5" />
      </div>
    </div>
    <div className="grid grid-cols-8 gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <Block key={i} className="aspect-square" />
      ))}
    </div>
  </div>
);

export default PixelSkeleton;`,
  },
  {
    name: 'TerminalSkeleton',
    component: TerminalSkeleton,
    icon: Terminal,
    colors: { gradient: 'from-green-500 to-emerald-600', bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30' },
    code: `import React from "react";

const TerminalSkeleton = () => {
  const lines = ["Initializing module...", "Fetching dependencies", "Parsing manifest", "Done"];
  return (
    <div className="font-mono w-full max-w-sm bg-black text-green-400 border-2 border-green-400 p-4 space-y-1.5">
      {lines.map((l, i) => (
        <p key={l} className="text-xs">
          <span className="opacity-60">{">"}</span>{" "}
          <span style={{ opacity: 0, animation: "tFade 1.6s linear infinite", animationDelay: \`\${i * 0.3}s\` }}>{l}</span>
        </p>
      ))}
      <p className="text-xs flex items-center gap-1.5">
        <span className="opacity-60">{">"}</span>
        <span className="inline-block w-2 h-3 bg-green-400 animate-pulse" />
      </p>
      <style>{\`@keyframes tFade { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }\`}</style>
    </div>
  );
};

export default TerminalSkeleton;`,
  },
];

export default skeletonComponents;
