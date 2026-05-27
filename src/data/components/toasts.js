import { Sticker, Receipt, Terminal, Newspaper } from 'lucide-react';

import StickerToast from '../../components/Toasts/StickerToast';
import ReceiptToast from '../../components/Toasts/ReceiptToast';
import TerminalToast from '../../components/Toasts/TerminalToast';
import NewsprintToast from '../../components/Toasts/NewsprintToast';

export const toastComponents = [
  {
    name: 'StickerToast',
    component: StickerToast,
    icon: Sticker,
    colors: {
      gradient: 'from-yellow-400 to-amber-500',
      bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30',
    },
    code: `import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const StickerToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button
        onClick={() => setShow(true)}
        className="px-5 py-2 font-mono font-bold text-black bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_black]"
      >
        Stick It
      </button>

      {show && (
        <div className="fixed bottom-6 right-6 z-50 animate-[stickerPop_0.3s_ease-out]">
          <div className="relative px-4 py-3 bg-yellow-300 text-black border-4 border-black shadow-[6px_6px_0px_0px_black] rotate-[-3deg] font-mono max-w-xs">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-7 h-7 items-center justify-center bg-black text-yellow-300 rounded-full">
                <Check className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-black uppercase">Saved!</p>
                <p className="text-[11px]">Your work is sticky-noted.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{\`
        @keyframes stickerPop {
          0% { transform: scale(0.5) rotate(-15deg); opacity: 0; }
          60% { transform: scale(1.1) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 1; }
        }
      \`}</style>
    </div>
  );
};

export default StickerToast;`,
  },
  {
    name: 'ReceiptToast',
    component: ReceiptToast,
    icon: Receipt,
    colors: {
      gradient: 'from-gray-300 to-gray-500',
      bg: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/30',
    },
    code: `import React, { useState, useEffect } from "react";

const ReceiptToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button onClick={() => setShow(true)} className="px-5 py-2 font-mono font-bold text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_black]">
        Print Receipt
      </button>

      {show && (
        <div className="fixed top-6 right-6 z-50">
          <div className="bg-white text-black border-x border-black/40 px-5 py-3 font-mono w-64 animate-[receiptSlide_0.4s_ease-out]"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.25)" }}>
            <p className="text-center text-[10px] tracking-[0.3em] mb-1">* THANK YOU *</p>
            <p className="text-center text-sm font-bold uppercase mb-2">Order Confirmed</p>
            <div className="border-t border-dashed border-black/60 pt-2 text-[11px] space-y-0.5">
              <div className="flex justify-between"><span>Item</span><span>1x</span></div>
              <div className="flex justify-between font-bold border-t border-dashed border-black/60 mt-1 pt-1"><span>TOTAL</span><span>$00.00</span></div>
            </div>
          </div>
        </div>
      )}

      <style>{\`@keyframes receiptSlide { 0% { transform: translateY(-120%); } 100% { transform: translateY(0); } }\`}</style>
    </div>
  );
};

export default ReceiptToast;`,
  },
  {
    name: 'TerminalToast',
    component: TerminalToast,
    icon: Terminal,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `import React, { useState, useEffect } from "react";

const TerminalToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button onClick={() => setShow(true)} className="px-5 py-2 font-mono font-bold text-green-400 bg-black border-2 border-green-400">
        $ deploy
      </button>

      {show && (
        <div className="fixed bottom-6 left-6 z-50 animate-[termIn_0.25s_ease-out]">
          <div className="bg-black text-green-400 border-2 border-green-400 font-mono px-4 py-2.5 max-w-sm shadow-[0_0_20px_rgba(74,222,128,0.4)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-[11px] opacity-70 uppercase">process · pid 1337</p>
            </div>
            <p className="text-sm mt-1">{">"} <span className="text-green-300">deploy</span> completed in 0.42s</p>
          </div>
        </div>
      )}

      <style>{\`@keyframes termIn { 0% { transform: translateX(-120%); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }\`}</style>
    </div>
  );
};

export default TerminalToast;`,
  },
  {
    name: 'NewsprintToast',
    component: NewsprintToast,
    icon: Newspaper,
    colors: {
      gradient: 'from-stone-400 to-stone-600',
      bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30',
    },
    code: `import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";

const NewsprintToast = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <div className="relative">
      <button onClick={() => setShow(true)} className="px-5 py-2 font-mono font-bold text-white bg-black border-4 border-black">
        Broadcast
      </button>

      {show && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-[newsDrop_0.35s_ease-out]">
          <div className="bg-[#f5f1e6] text-black border-4 border-black shadow-[6px_6px_0px_0px_black] px-5 py-3 font-mono max-w-md">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5" />
              <div className="flex-1">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-70 border-b border-dashed border-black/60">Bulletin · Just In</p>
                <p className="text-sm font-bold uppercase mt-1">New update available</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{\`@keyframes newsDrop { 0% { transform: translate(-50%, -150%); opacity: 0; } 100% { transform: translate(-50%, 0); opacity: 1; } }\`}</style>
    </div>
  );
};

export default NewsprintToast;`,
  },
];

export default toastComponents;
