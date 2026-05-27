import { Stamp, Sticker, Tag, Square, Terminal } from 'lucide-react';

import StampBadge from '../../components/Badges/StampBadge';
import StickerBadge from '../../components/Badges/StickerBadge';
import PriceTagBadge from '../../components/Badges/PriceTagBadge';
import PixelBadge from '../../components/Badges/PixelBadge';
import TerminalBadge from '../../components/Badges/TerminalBadge';

export const badgeComponents = [
  {
    name: 'StampBadge',
    component: StampBadge,
    icon: Stamp,
    colors: {
      gradient: 'from-red-500 to-rose-600',
      bg: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/30',
    },
    code: `import React from "react";

const StampBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="inline-block px-4 py-1.5 font-mono font-black uppercase text-red-600 border-[3px] border-red-600 rotate-[-6deg] text-sm tracking-widest">
        APPROVED
      </span>
      <span className="inline-block px-4 py-1.5 font-mono font-black uppercase text-emerald-700 border-[3px] border-emerald-700 rotate-[4deg] text-sm tracking-widest">
        PAID
      </span>
      <span className="inline-block px-4 py-1.5 font-mono font-black uppercase text-blue-700 border-[3px] border-blue-700 rotate-[-3deg] text-sm tracking-widest">
        DRAFT
      </span>
    </div>
  );
};

export default StampBadge;`,
  },
  {
    name: 'StickerBadge',
    component: StickerBadge,
    icon: Sticker,
    colors: {
      gradient: 'from-yellow-300 to-pink-400',
      bg: 'bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-yellow-900/20 dark:to-pink-900/30',
    },
    code: `import React from "react";
import { Star, Heart, Zap } from "lucide-react";

const StickerBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] font-mono font-black text-xs uppercase rotate-[-3deg]">
        <Star className="w-3 h-3" /> NEW
      </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] font-mono font-black text-xs uppercase rotate-[2deg]">
        <Heart className="w-3 h-3" /> FAV
      </span>
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] font-mono font-black text-xs uppercase rotate-[-1deg]">
        <Zap className="w-3 h-3" /> HOT
      </span>
    </div>
  );
};

export default StickerBadge;`,
  },
  {
    name: 'PriceTagBadge',
    component: PriceTagBadge,
    icon: Tag,
    colors: {
      gradient: 'from-orange-300 to-lime-300',
      bg: 'bg-gradient-to-br from-orange-50 to-lime-100 dark:from-orange-900/20 dark:to-lime-900/30',
    },
    code: `import React from "react";

const PriceTagBadge = () => {
  const tags = [
    { color: "bg-orange-200", label: "SALE", price: "$9" },
    { color: "bg-lime-200", label: "NEW", price: "$24" },
    { color: "bg-rose-200", label: "PRO", price: "$49" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {tags.map((t) => (
        <span key={t.label} className={\`relative inline-flex items-center pl-6 pr-4 py-1.5 \${t.color} text-black border-2 border-black font-mono text-xs font-black uppercase\`}
          style={{ clipPath: "polygon(0 50%, 14% 0, 100% 0, 100% 100%, 14% 100%)" }}>
          <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          <span className="mr-2">{t.label}</span>
          <span className="border-l-2 border-black/40 pl-2">{t.price}</span>
        </span>
      ))}
    </div>
  );
};

export default PriceTagBadge;`,
  },
  {
    name: 'PixelBadge',
    component: PixelBadge,
    icon: Square,
    colors: {
      gradient: 'from-lime-400 to-fuchsia-500',
      bg: 'bg-gradient-to-br from-lime-50 to-fuchsia-100 dark:from-lime-900/20 dark:to-fuchsia-900/30',
    },
    code: `import React from "react";

const PixelBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-block px-3 py-1 bg-lime-400 text-black border-4 border-black font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_black]">▣ LVL 99</span>
      <span className="inline-block px-3 py-1 bg-fuchsia-400 text-black border-4 border-black font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_black]">◆ RARE</span>
      <span className="inline-block px-3 py-1 bg-cyan-400 text-black border-4 border-black font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_black]">★ COMBO ×4</span>
    </div>
  );
};

export default PixelBadge;`,
  },
  {
    name: 'TerminalBadge',
    component: TerminalBadge,
    icon: Terminal,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import React from "react";

const TerminalBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 font-mono">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-green-400 border border-green-400 text-[11px]">
        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> ONLINE
      </span>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-amber-400 border border-amber-400 text-[11px]">
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" /> IDLE 02:14
      </span>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-red-400 border border-red-400 text-[11px]">
        <span className="w-1.5 h-1.5 bg-red-400 rounded-full" /> OFFLINE
      </span>
    </div>
  );
};

export default TerminalBadge;`,
  },
];

export default badgeComponents;
