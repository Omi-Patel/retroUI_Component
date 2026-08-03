import { useState } from "react";

// Telegram compose slip — every word costs a nickel, brevity is a virtue.
const RATE = 0.05;

const TelegramTextarea = () => {
  const [value, setValue] = useState("ARRIVING TUESDAY NOON TRAIN");

  const words = value.trim().split(/\s+/).filter(Boolean);
  const cost = (words.length * RATE).toFixed(2);

  return (
    <div className="w-full max-w-md bg-[#efe3c0] text-stone-900 border-2 border-stone-800 shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] font-mono relative">
      {/* Urgent stamp */}
      <div
        aria-hidden="true"
        className="absolute top-3 right-3 rotate-[5deg] border-2 border-red-700 text-red-700 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.25em]"
      >
        Urgent
      </div>

      <div className="px-5 pt-5 pb-3 border-b-2 border-stone-800 text-center">
        <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500">
          Western Wire Co. · Est. 1891
        </p>
        <h3 className="text-xl font-black uppercase tracking-tight mt-0.5">
          Telegram
        </h3>
      </div>

      <div className="px-5 py-4">
        <label
          htmlFor="telegram-textarea"
          className="block text-[10px] uppercase tracking-[0.3em] text-stone-600 mb-1"
        >
          Message text
        </label>
        <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500 mb-2">
          Block capitals only. Punctuation spelled out.
        </p>
        <textarea
          id="telegram-textarea"
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value.toUpperCase())}
          placeholder="TYPE MESSAGE HERE"
          spellCheck="false"
          className="w-full resize-none bg-[#f7efd8] uppercase tracking-[0.15em] text-sm leading-6 px-3 py-2 border-2 border-dashed border-stone-600 placeholder:text-stone-400 focus:outline-none focus:border-solid focus:border-stone-900"
        />

        <div
          className="flex items-center justify-between mt-3 px-3 py-2 bg-stone-800 text-[#efe3c0] text-[10px] font-bold uppercase tracking-[0.2em]"
          aria-live="polite"
        >
          <span>Tariff</span>
          <span className="tabular-nums">
            {words.length} {words.length === 1 ? "word" : "words"} × ${RATE.toFixed(2)} = ${cost}
          </span>
        </div>
      </div>

      <footer className="border-t border-dashed border-stone-600 px-5 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">
        — Stop —
      </footer>
    </div>
  );
};

export default TelegramTextarea;
