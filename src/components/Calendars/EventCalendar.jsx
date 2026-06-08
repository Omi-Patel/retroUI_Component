import { useState } from "react";

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// A month wall-calendar with colour-coded event dots and a legend.
const EVENTS = {
  6: ["#e07b67"],
  12: ["#7da567", "#6f8fb0"],
  18: ["#e3b762"],
  25: ["#e07b67", "#e3b762"],
};
const LEGEND = [
  { c: "#e07b67", label: "Gig" },
  { c: "#7da567", label: "Tape swap" },
  { c: "#e3b762", label: "Movie night" },
  { c: "#6f8fb0", label: "Arcade" },
];

const EventCalendar = () => {
  const year = 1989;
  const month = 6; // July
  const [sel, setSel] = useState(12);

  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];

  return (
    <div className="w-80 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono select-none">
      <div className="flex items-center justify-between mb-3 border-b-2 border-black pb-2">
        <span className="text-[15px] font-black uppercase tracking-[0.18em]">July 1989</span>
        <span className="text-[10px] text-black/50 uppercase">Summer</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {DOW.map((d) => (
          <div key={d} className="text-[9px] font-black text-black/50 pb-1">{d}</div>
        ))}
        {cells.map((day, i) => {
          const ev = day ? EVENTS[day] : null;
          return (
            <button
              key={i}
              disabled={!day}
              onClick={() => day && setSel(day)}
              className={`relative h-9 text-[11px] tabular-nums flex flex-col items-center justify-center border-2 ${
                sel === day ? "border-black bg-[#e3b762] font-black" : "border-transparent hover:border-black/30 text-black/80"
              }`}
            >
              <span>{day}</span>
              {ev && (
                <span className="flex gap-0.5 mt-0.5">
                  {ev.map((c, k) => (
                    <span key={k} className="w-1.5 h-1.5 rounded-full border border-black/40" style={{ background: c }} />
                  ))}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 pt-2 border-t-2 border-dashed border-black/40">
        {LEGEND.map((l) => (
          <span key={l.label} className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wide text-black/60">
            <span className="w-2 h-2 rounded-full border border-black/40" style={{ background: l.c }} />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
