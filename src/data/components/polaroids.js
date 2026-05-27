import { Camera, Layers, Film, ImagePlus } from 'lucide-react';

import PolaroidCard from '../../components/Polaroids/PolaroidCard';
import PolaroidDeck from '../../components/Polaroids/PolaroidDeck';
import PolaroidStrip from '../../components/Polaroids/PolaroidStrip';
import InstantFrame from '../../components/Polaroids/InstantFrame';

export const polaroidComponents = [
  {
    name: 'PolaroidCard',
    component: PolaroidCard,
    icon: Camera,
    colors: {
      gradient: 'from-amber-400 to-rose-500',
      bg: 'bg-gradient-to-br from-amber-50 to-rose-100 dark:from-amber-900/20 dark:to-rose-900/30',
    },
    code: `import { Camera } from "lucide-react";

const PolaroidCard = () => {
  return (
    <div className="relative inline-block bg-white p-3 pb-12 shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] -rotate-2 transition-transform duration-200 hover:rotate-0 hover:-translate-y-1">
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-200/80 border border-yellow-300/60 rotate-[-3deg] shadow-sm"
      />
      <div className="w-52 h-52 bg-gradient-to-br from-orange-200 via-amber-100 to-rose-200 flex items-center justify-center">
        <Camera className="w-12 h-12 text-stone-700/40" strokeWidth={1.5} />
      </div>
      <p className="absolute bottom-3 left-0 right-0 text-center font-mono text-[13px] text-stone-700 italic">
        summer '98
      </p>
    </div>
  );
};

export default PolaroidCard;`,
  },
  {
    name: 'PolaroidDeck',
    component: PolaroidDeck,
    icon: Layers,
    colors: {
      gradient: 'from-sky-400 to-indigo-500',
      bg: 'bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-sky-900/20 dark:to-indigo-900/30',
    },
    code: `import { Mountain, Sun, Palmtree } from "lucide-react";

const cards = [
  { Icon: Sun, caption: "day 03", tint: "bg-gradient-to-br from-yellow-200 to-orange-300", rotate: "rotate-[-8deg]", offset: "left-0 top-2" },
  { Icon: Mountain, caption: "day 02", tint: "bg-gradient-to-br from-sky-200 to-indigo-300", rotate: "rotate-[2deg]", offset: "left-12 top-0" },
  { Icon: Palmtree, caption: "day 01", tint: "bg-gradient-to-br from-emerald-200 to-teal-300", rotate: "rotate-[10deg]", offset: "left-24 top-3" },
];

const PolaroidDeck = () => {
  return (
    <div className="relative w-64 h-56">
      {cards.map(({ Icon, caption, tint, rotate, offset }) => (
        <div key={caption} className={\`absolute bg-white p-2.5 pb-9 shadow-[5px_5px_0_0_rgba(0,0,0,0.25)] \${rotate} \${offset}\`}>
          <div className={\`w-32 h-32 \${tint} flex items-center justify-center\`}>
            <Icon className="w-8 h-8 text-stone-700/50" strokeWidth={1.5} />
          </div>
          <p className="absolute bottom-1.5 left-0 right-0 text-center font-mono text-[11px] text-stone-700">
            {caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PolaroidDeck;`,
  },
  {
    name: 'PolaroidStrip',
    component: PolaroidStrip,
    icon: Film,
    colors: {
      gradient: 'from-stone-700 to-stone-900',
      bg: 'bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900',
    },
    code: `import { Smile, Heart, Star, Coffee } from "lucide-react";

const frames = [
  { Icon: Smile, tint: "bg-rose-200" },
  { Icon: Heart, tint: "bg-amber-200" },
  { Icon: Star, tint: "bg-emerald-200" },
  { Icon: Coffee, tint: "bg-sky-200" },
];

const PolaroidStrip = () => {
  return (
    <div className="inline-block bg-black p-2 -rotate-1">
      <div className="flex flex-col gap-1">
        {frames.map(({ Icon, tint }, i) => (
          <div key={i} className="bg-white p-1.5 pb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]">
            <div className={\`w-20 h-20 \${tint} flex items-center justify-center\`}>
              <Icon className="w-6 h-6 text-stone-700/50" strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center font-mono text-[10px] tracking-[0.2em] text-yellow-300">
        PHOTOBOOTH · 1995
      </p>
    </div>
  );
};

export default PolaroidStrip;`,
  },
  {
    name: 'InstantFrame',
    component: InstantFrame,
    icon: ImagePlus,
    colors: {
      gradient: 'from-purple-400 to-pink-500',
      bg: 'bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/30',
    },
    code: `import { Image as ImageIcon, Heart } from "lucide-react";

const InstantFrame = () => {
  return (
    <div className="relative inline-block bg-white p-4 pb-14 shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] rotate-[3deg] transition-transform duration-200 hover:rotate-0">
      <span
        aria-hidden="true"
        className="absolute -top-3 -right-3 w-10 h-10 bg-rose-400 rounded-full border-2 border-white flex items-center justify-center shadow-md rotate-12"
      >
        <Heart className="w-5 h-5 text-white fill-white" />
      </span>
      <div className="w-56 h-56 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 relative">
        <div className="absolute inset-2 border-2 border-dashed border-white/70 flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-white/80" strokeWidth={1.5} />
        </div>
      </div>
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
        <p className="font-mono text-[13px] text-stone-800 italic">best day ever</p>
        <span className="font-mono text-[10px] tracking-wider text-red-600 border border-red-600 px-1.5 py-0.5 -rotate-3">
          05·27·96
        </span>
      </div>
    </div>
  );
};

export default InstantFrame;`,
  },
];

export default polaroidComponents;
