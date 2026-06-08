import { useState } from "react";
import { Calendar } from "lucide-react";

const DOW = ["S", "M", "T", "W", "T", "F", "S"];

// A compact inline date field with a drop-down mini month grid.
const MiniDatePicker = () => {
  const year = 1995;
  const month = 9; // October
  const [sel, setSel] = useState(31);
  const [open, setOpen] = useState(true);

  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];

  return (
    <div className="w-52 font-mono select-none">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 bg-[#f5f1e6] border-[3px] border-black shadow-[3px_3px_0_0_black] px-3 py-2 text-[12px] font-bold"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>10 / {String(sel).padStart(2, "0")} / 95</span>
      </button>
      {open && (
        <div className="mt-2 bg-[#f5f1e6] border-[3px] border-black shadow-[4px_4px_0_0_black] p-2">
          <div className="text-center text-[10px] font-black uppercase tracking-[0.15em] mb-1.5">Oct ’95</div>
          <div className="grid grid-cols-7 gap-0.5 text-center">
            {DOW.map((d, i) => (
              <div key={i} className="text-[8px] font-black text-black/40">{d}</div>
            ))}
            {cells.map((day, i) => (
              <button
                key={i}
                disabled={!day}
                onClick={() => setSel(day)}
                className={`h-5 text-[10px] tabular-nums flex items-center justify-center ${
                  sel === day ? "bg-[#e07b67] border border-black font-black" : "hover:bg-[#e3b762] text-black/70"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniDatePicker;
