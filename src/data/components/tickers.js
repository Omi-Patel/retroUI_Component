import { Newspaper, TrendingUp, Sparkles } from 'lucide-react';

import BreakingNewsTicker from '../../components/Tickers/BreakingNewsTicker';
import StockTicker from '../../components/Tickers/StockTicker';
import EmojiRibbon from '../../components/Tickers/EmojiRibbon';

export const tickerComponents = [
  {
    name: 'BreakingNewsTicker',
    component: BreakingNewsTicker,
    icon: Newspaper,
    colors: {
      gradient: 'from-red-500 to-rose-600',
      bg: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/30',
    },
    code: `const headlines = [
  "ZINE #04 NOW SHIPPING WORLDWIDE",
  "FREE STICKER WITH EVERY ORDER OVER $25",
  "STUDIO HOURS: TUES — SAT, 11AM — 7PM",
  "MIXTAPE DROP THIS FRIDAY @ MIDNIGHT",
];

const BreakingNewsTicker = () => {
  return (
    <div className="inline-flex w-full max-w-2xl border-2 border-black bg-white overflow-hidden shadow-[4px_4px_0_0_black]">
      <span className="flex items-center px-4 py-2 bg-red-600 text-white font-mono font-bold text-[11px] tracking-[0.2em] whitespace-nowrap">
        ● BREAKING
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="marquee-track py-2 font-mono text-[12.5px] text-stone-800 tracking-wider">
          {[...headlines, ...headlines].map((h, i) => (
            <span key={i} className="inline-flex items-center">
              {h}
              <span aria-hidden="true" className="mx-6 text-red-600">●</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;`,
  },
  {
    name: 'StockTicker',
    component: StockTicker,
    icon: TrendingUp,
    colors: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30',
    },
    code: `const stocks = [
  { sym: "ZINE", price: 42.18, change: 1.24 },
  { sym: "STIK", price: 8.05, change: -0.12 },
  { sym: "RETR", price: 128.50, change: 3.41 },
  { sym: "MIXT", price: 19.95, change: 0.00 },
  { sym: "PXLR", price: 64.20, change: -1.85 },
  { sym: "TAPE", price: 12.40, change: 0.55 },
];

const StockTicker = () => {
  return (
    <div className="inline-flex w-full max-w-2xl bg-black border border-green-500/40 overflow-hidden">
      <span className="flex items-center px-3 py-2 bg-green-500 text-black font-mono font-bold text-[11px] tracking-[0.2em] whitespace-nowrap">
        LIVE
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="marquee-track py-2 font-mono text-[12.5px] text-green-400">
          {[...stocks, ...stocks].map((s, i) => {
            const up = s.change > 0;
            const flat = s.change === 0;
            const color = flat ? "text-stone-400" : up ? "text-green-400" : "text-red-400";
            return (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="text-white">{s.sym}</span>
                <span>\${s.price.toFixed(2)}</span>
                <span className={color}>
                  {up ? "▲" : flat ? "—" : "▼"} {Math.abs(s.change).toFixed(2)}
                </span>
                <span aria-hidden="true" className="mx-3 text-green-700">·</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;`,
  },
  {
    name: 'EmojiRibbon',
    component: EmojiRibbon,
    icon: Sparkles,
    colors: {
      gradient: 'from-pink-400 to-cyan-400',
      bg: 'bg-gradient-to-br from-pink-50 to-cyan-100 dark:from-pink-900/20 dark:to-cyan-900/30',
    },
    code: `const items = [
  "★ HAND-MADE ZINES",
  "✿ FREE STICKERS",
  "♥ MADE WITH LOVE",
  "✦ LOCAL ARTISTS",
  "☼ SUMMER COLLECTION",
  "✰ LIMITED RUN",
];

const EmojiRibbon = () => {
  return (
    <div className="relative inline-flex w-full max-w-2xl overflow-hidden bg-gradient-to-r from-pink-300 via-yellow-200 to-cyan-300 border-y-4 border-black">
      <div className="marquee-track py-2.5 font-bold text-[13px] tracking-[0.15em] text-black uppercase">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center">
            {t}
            <span aria-hidden="true" className="mx-5 text-red-600">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmojiRibbon;`,
  },
];

export default tickerComponents;
