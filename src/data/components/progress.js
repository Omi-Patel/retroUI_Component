import { Disc, Circle, Heart, Square } from 'lucide-react';

import VHSProgress from '../../components/Progress/VHSProgress';
import HalftoneProgress from '../../components/Progress/HalftoneProgress';
import ArcadeProgress from '../../components/Progress/ArcadeProgress';
import PixelProgress from '../../components/Progress/PixelProgress';

export const progressComponents = [
  {
    name: 'VHSProgress',
    component: VHSProgress,
    icon: Disc,
    colors: { gradient: 'from-red-500 to-yellow-400', bg: 'bg-gradient-to-br from-red-50 to-yellow-100 dark:from-red-900/20 dark:to-yellow-900/30' },
    code: `import React, { useState, useEffect } from "react";

const VHSProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPct((p) => (p >= 100 ? 0 : p + 1)), 60);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-[10px] uppercase mb-1">
        <span>REC ●</span><span>{String(Math.floor(pct)).padStart(3, "0")}%</span>
      </div>
      <div className="relative h-6 bg-black border-2 border-black overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300" style={{ width: \`\${pct}%\` }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 3px)"
        }} />
      </div>
    </div>
  );
};

export default VHSProgress;`,
  },
  {
    name: 'HalftoneProgress',
    component: HalftoneProgress,
    icon: Circle,
    colors: { gradient: 'from-stone-400 to-stone-700', bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30' },
    code: `import React, { useState, useEffect } from "react";

const HalftoneProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPct((p) => (p >= 100 ? 0 : p + 2)), 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-xs font-bold uppercase mb-2">
        <span>Loading</span><span>{pct}%</span>
      </div>
      <div className="h-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_black] overflow-hidden">
        <div className="h-full bg-black" style={{
          width: \`\${pct}%\`,
          backgroundImage: "radial-gradient(circle, white 0.8px, transparent 1.2px)",
          backgroundSize: "6px 6px",
        }} />
      </div>
    </div>
  );
};

export default HalftoneProgress;`,
  },
  {
    name: 'ArcadeProgress',
    component: ArcadeProgress,
    icon: Heart,
    colors: { gradient: 'from-pink-500 to-fuchsia-600', bg: 'bg-gradient-to-br from-pink-50 to-fuchsia-100 dark:from-pink-900/20 dark:to-fuchsia-900/30' },
    code: `import React, { useState, useEffect } from "react";

const ArcadeProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPct((p) => (p >= 100 ? 0 : p + 5)), 200);
    return () => clearInterval(id);
  }, []);

  const segments = 20;
  const filled = Math.floor((pct / 100) * segments);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-[11px] mb-1.5" style={{ color: "#f472b6" }}>
        <span className="tracking-widest">HP</span><span>{pct}/100</span>
      </div>
      <div className="flex gap-0.5 p-1 bg-black border-2 border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
        {Array.from({ length: segments }).map((_, i) => (
          <span key={i} className="flex-1 h-3" style={{
            background: i < filled ? "#f472b6" : "rgba(244,114,182,0.15)",
            boxShadow: i < filled ? "0 0 6px rgba(244,114,182,0.7)" : "none",
          }} />
        ))}
      </div>
    </div>
  );
};

export default ArcadeProgress;`,
  },
  {
    name: 'PixelProgress',
    component: PixelProgress,
    icon: Square,
    colors: { gradient: 'from-lime-400 to-green-600', bg: 'bg-gradient-to-br from-lime-50 to-green-100 dark:from-lime-900/20 dark:to-green-900/30' },
    code: `import React, { useState, useEffect } from "react";

const PixelProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPct((p) => (p >= 100 ? 0 : p + 4)), 150);
    return () => clearInterval(id);
  }, []);

  const blocks = 10;
  const filled = Math.floor((pct / 100) * blocks);

  return (
    <div className="font-mono w-full max-w-sm">
      <div className="flex justify-between text-xs font-black uppercase mb-2">
        <span>▣ LEVEL UP</span><span>{pct}%</span>
      </div>
      <div className="flex gap-1 p-1.5 bg-stone-900 border-4 border-black shadow-[4px_4px_0px_0px_black]">
        {Array.from({ length: blocks }).map((_, i) => (
          <span key={i} className="flex-1 h-5 border-2" style={{
            background: i < filled ? "#84cc16" : "#1c1917",
            borderColor: i < filled ? "#365314" : "#0a0a0a",
          }} />
        ))}
      </div>
    </div>
  );
};

export default PixelProgress;`,
  },
];

export default progressComponents;
