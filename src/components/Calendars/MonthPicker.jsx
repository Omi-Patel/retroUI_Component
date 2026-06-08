import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MON = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// A fully navigable month date-picker with a selectable day.
const MonthPicker = () => {
  const [view, setView] = useState({ y: 1999, m: 11 });
  const [sel, setSel] = useState({ y: 1999, m: 11, d: 31 });

  const first = new Date(view.y, view.m, 1).getDay();
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];

  const shift = (dir) => {
    setView((v) => {
      const m = v.m + dir;
      if (m < 0) return { y: v.y - 1, m: 11 };
      if (m > 11) return { y: v.y + 1, m: 0 };
      return { ...v, m };
    });
  };

  return (
    <div className="w-72 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono select-none">
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => shift(-1)} className="w-7 h-7 border-2 border-black flex items-center justify-center hover:bg-[#e3b762]">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-[13px] font-black uppercase tracking-[0.12em]">
          {MON[view.m]} {view.y}
        </span>
        <button onClick={() => shift(1)} className="w-7 h-7 border-2 border-black flex items-center justify-center hover:bg-[#e3b762]">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {DOW.map((d) => (
          <div key={d} className="text-[10px] font-black text-black/50 pb-1">{d}</div>
        ))}
        {cells.map((day, i) => {
          const active = day && sel.y === view.y && sel.m === view.m && sel.d === day;
          return (
            <button
              key={i}
              disabled={!day}
              onClick={() => setSel({ y: view.y, m: view.m, d: day })}
              className={`h-8 text-[12px] tabular-nums border-2 ${
                day ? "border-transparent hover:border-black" : "border-transparent"
              } ${active ? "bg-black text-[#f5f1e6] !border-black font-black" : "text-black/80"}`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="mt-3 pt-2 border-t-2 border-dashed border-black/40 text-[11px]">
        <span className="text-black/50 uppercase tracking-wider">Selected: </span>
        <span className="font-black">{MON[sel.m].slice(0, 3)} {sel.d}, {sel.y}</span>
      </div>
    </div>
  );
};

export default MonthPicker;
