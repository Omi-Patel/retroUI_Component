import { StickyNote, MessageCircle, Terminal, Image } from 'lucide-react';

import StickyNoteTooltip from '../../components/Tooltips/StickyNoteTooltip';
import SpeechBubbleTooltip from '../../components/Tooltips/SpeechBubbleTooltip';
import TerminalTooltip from '../../components/Tooltips/TerminalTooltip';
import PolaroidTooltip from '../../components/Tooltips/PolaroidTooltip';

const mk = (component, code, name, icon, gradient, light) => ({
  name,
  component,
  icon,
  colors: {
    gradient,
    bg: `bg-gradient-to-br from-${light}-50 to-${light}-100 dark:from-${light}-900/20 dark:to-${light}-900/30`,
  },
  code,
});

export const tooltipComponents = [
  mk(
    StickyNoteTooltip,
    `import React, { useState } from "react";

const StickyNoteTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="px-4 py-2 font-mono font-bold text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_black]">
        Hover me
      </button>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_black] rotate-[-2deg] whitespace-nowrap text-xs font-bold font-mono">
          A friendly note for you.
        </div>
      )}
    </div>
  );
};

export default StickyNoteTooltip;`,
    'StickyNoteTooltip',
    StickyNote,
    'from-yellow-300 to-amber-400',
    'yellow'
  ),
  mk(
    SpeechBubbleTooltip,
    `import React, { useState } from "react";

const SpeechBubbleTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="px-4 py-2 font-mono font-bold text-white bg-pink-500 border-4 border-black shadow-[4px_4px_0px_0px_black]">
        Tell me more
      </button>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 whitespace-nowrap">
          <div className="relative px-4 py-2 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_black] text-xs font-bold font-mono rounded-2xl">
            POW! What a tooltip!
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-white border-r-4 border-b-4 border-black rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeechBubbleTooltip;`,
    'SpeechBubbleTooltip',
    MessageCircle,
    'from-pink-400 to-rose-500',
    'pink'
  ),
  mk(
    TerminalTooltip,
    `import React, { useState } from "react";

const TerminalTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="px-4 py-2 font-mono font-bold text-green-400 bg-black border-2 border-green-400">
        $ help
      </button>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-green-400 border border-green-400 whitespace-nowrap text-[11px] font-mono shadow-[0_0_15px_rgba(74,222,128,0.4)]">
          {">"} runs the help command_
        </div>
      )}
    </div>
  );
};

export default TerminalTooltip;`,
    'TerminalTooltip',
    Terminal,
    'from-green-500 to-emerald-600',
    'green'
  ),
  mk(
    PolaroidTooltip,
    `import React, { useState } from "react";

const PolaroidTooltip = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="px-4 py-2 font-mono font-bold text-black bg-orange-200 border-4 border-black shadow-[4px_4px_0px_0px_black]">
        Memory lane
      </button>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-2 pb-4 bg-white border border-gray-300 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] rotate-[-3deg] w-40">
          <div className="aspect-square w-full bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-200 flex items-center justify-center">
            <span className="text-3xl">✦</span>
          </div>
          <p className="text-center text-xs mt-2 font-mono">good vibes</p>
        </div>
      )}
    </div>
  );
};

export default PolaroidTooltip;`,
    'PolaroidTooltip',
    Image,
    'from-orange-300 to-pink-400',
    'orange'
  ),
];

export default tooltipComponents;
