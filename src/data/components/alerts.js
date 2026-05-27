import { Newspaper, AlertTriangle, Terminal, Megaphone } from 'lucide-react';

import NewsprintAlert from '../../components/Alerts/NewsprintAlert';
import StampAlert from '../../components/Alerts/StampAlert';
import TerminalAlert from '../../components/Alerts/TerminalAlert';
import MarqueeAlert from '../../components/Alerts/MarqueeAlert';

export const alertComponents = [
  {
    name: 'NewsprintAlert',
    component: NewsprintAlert,
    icon: Newspaper,
    colors: { gradient: 'from-stone-400 to-stone-600', bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30' },
    code: `import React from "react";
import { Info, X } from "lucide-react";

const NewsprintAlert = () => {
  return (
    <div className="font-mono w-full max-w-md bg-[#f5f1e6] text-black border-4 border-black shadow-[6px_6px_0px_0px_black] p-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-black text-[#f5f1e6] flex items-center justify-center">
          <Info className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-70 border-b border-dashed border-black/50 pb-0.5">Bulletin · Notice</p>
          <p className="text-sm font-bold uppercase mt-1">Update available</p>
          <p className="text-xs">A fresh edition is hot off the press.</p>
        </div>
        <button className="text-black hover:opacity-60"><X className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

export default NewsprintAlert;`,
  },
  {
    name: 'StampAlert',
    component: StampAlert,
    icon: AlertTriangle,
    colors: { gradient: 'from-red-500 to-rose-600', bg: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/30' },
    code: `import React from "react";
import { AlertTriangle } from "lucide-react";

const StampAlert = () => {
  return (
    <div className="font-mono w-full max-w-md bg-red-50 text-red-900 border-4 border-red-700 shadow-[5px_5px_0px_0px_rgb(127,29,29)] p-4 relative">
      <span className="absolute -top-3 right-4 inline-block px-3 py-1 bg-red-50 text-red-700 border-[3px] border-red-700 rotate-[-4deg] text-[10px] font-black uppercase tracking-widest">
        URGENT
      </span>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 mt-0.5" />
        <div>
          <p className="text-sm font-black uppercase">Action required</p>
          <p className="text-xs mt-1">Confirm your details before the deadline.</p>
        </div>
      </div>
    </div>
  );
};

export default StampAlert;`,
  },
  {
    name: 'TerminalAlert',
    component: TerminalAlert,
    icon: Terminal,
    colors: { gradient: 'from-green-500 to-emerald-600', bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30' },
    code: `import React from "react";

const TerminalAlert = () => {
  return (
    <div className="font-mono w-full max-w-md bg-black text-green-400 border-2 border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.3)] p-4">
      <div className="flex items-center gap-2 border-b border-green-400/30 pb-2 mb-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <p className="text-[10px] uppercase opacity-70">alert.log · 02:14:33</p>
      </div>
      <p className="text-sm"><span className="text-green-300">[INFO]</span> deployment finished</p>
      <p className="text-xs opacity-60">{">"} 12 files updated · 0 errors · 1.4s</p>
    </div>
  );
};

export default TerminalAlert;`,
  },
  {
    name: 'MarqueeAlert',
    component: MarqueeAlert,
    icon: Megaphone,
    colors: { gradient: 'from-yellow-300 to-amber-500', bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30' },
    code: `import React from "react";
import { Zap } from "lucide-react";

const MarqueeAlert = () => {
  const text = "BREAKING · LIMITED TIME OFFER · 50% OFF SITEWIDE · GRAB IT FAST · ";
  return (
    <div className="font-mono w-full max-w-md bg-yellow-300 text-black border-4 border-black shadow-[5px_5px_0px_0px_black] overflow-hidden">
      <div className="flex items-center">
        <div className="bg-black text-yellow-300 px-3 py-2"><Zap className="w-4 h-4" /></div>
        <div className="flex-1 overflow-hidden py-2">
          <div className="whitespace-nowrap animate-[marqueeAlert_18s_linear_infinite] text-sm font-bold uppercase">
            {text.repeat(4)}
          </div>
        </div>
      </div>
      <style>{\`@keyframes marqueeAlert { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }\`}</style>
    </div>
  );
};

export default MarqueeAlert;`,
  },
];

export default alertComponents;
