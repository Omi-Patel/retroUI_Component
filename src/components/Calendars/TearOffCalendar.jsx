import { useState } from "react";

const DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// A page-a-day tear-off calendar. Hit "tear" to rip to the next day.
const TearOffCalendar = () => {
  const [t, setT] = useState(() => new Date(1986, 5, 13).getTime());
  const d = new Date(t);
  const tear = () => setT(t + 86400000);

  return (
    <div className="w-56 font-mono select-none">
      <div className="h-4 bg-[#1f1b16] border-4 border-b-0 border-black rounded-t-md mx-3" />
      <div className="relative bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black]">
        {/* binding holes */}
        <div className="flex justify-around pt-1.5">
          <span className="w-2 h-2 rounded-full bg-black/70" />
          <span className="w-2 h-2 rounded-full bg-black/70" />
        </div>
        <div className="text-center py-3 border-b-2 border-black">
          <div className="text-[11px] font-black uppercase tracking-[0.25em] text-[#b23a2e]">
            {MON[d.getMonth()]} · {d.getFullYear()}
          </div>
        </div>
        <div className="text-center py-5">
          <div className="text-[64px] font-black leading-none tabular-nums">{d.getDate()}</div>
          <div className="text-[12px] uppercase tracking-[0.2em] mt-1">{DOW[d.getDay()]}</div>
        </div>
        <button
          onClick={tear}
          className="w-full py-2 text-[10px] font-black uppercase tracking-[0.2em] border-t-2 border-dashed border-black/40 hover:bg-[#e07b67] transition-colors"
        >
          ✁ Tear off
        </button>
      </div>
    </div>
  );
};

export default TearOffCalendar;
