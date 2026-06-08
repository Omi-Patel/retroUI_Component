import { useState } from "react";

const DOW = ["S", "M", "T", "W", "T", "F", "S"];

// A spiral-bound desk calendar for a single month; click a day to circle it.
const DeskCalendar = () => {
  const year = 1998;
  const month = 5; // June
  const [sel, setSel] = useState(15);

  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];

  return (
    <div className="w-72 font-mono select-none">
      {/* spiral binding */}
      <div className="flex justify-around px-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="w-1.5 h-4 bg-[#948869] border-2 border-black rounded-full" />
        ))}
      </div>
      <div className="bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 -mt-1.5">
        <div className="text-center mb-3">
          <span className="text-[16px] font-black uppercase tracking-[0.2em]">June</span>
          <span className="text-[12px] text-black/50 ml-2">1998</span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {DOW.map((d, i) => (
            <div key={i} className="text-[10px] font-black text-[#b23a2e] pb-1">{d}</div>
          ))}
          {cells.map((day, i) => (
            <button
              key={i}
              disabled={!day}
              onClick={() => day && setSel(day)}
              className={`h-8 text-[12px] tabular-nums flex items-center justify-center ${
                day ? "hover:bg-[#e3b762]" : ""
              } ${sel === day ? "relative font-black" : "text-black/70"}`}
            >
              {sel === day && (
                <span className="absolute inset-0.5 border-2 border-[#b23a2e] rounded-full -rotate-6" />
              )}
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeskCalendar;
