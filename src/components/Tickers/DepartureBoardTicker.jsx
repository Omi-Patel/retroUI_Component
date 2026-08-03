// Split-flap departure board — station announcements on a rolling belt.
const departures = [
  { time: "09:12", dest: "PIXELTOWN", track: "04", status: "ON TIME" },
  { time: "09:40", dest: "ZINE CITY", track: "11", status: "BOARDING" },
  { time: "10:05", dest: "CASSETTE BAY", track: "02", status: "DELAYED" },
  { time: "10:31", dest: "NEON HEIGHTS", track: "07", status: "ON TIME" },
];

const DepartureBoardTicker = () => {
  return (
    <div className="inline-flex w-full max-w-2xl bg-stone-950 border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.4)] overflow-hidden">
      <span className="flex items-center px-4 py-2 bg-amber-400 text-black font-mono font-black text-[11px] tracking-[0.2em] whitespace-nowrap border-r-4 border-black">
        DEPARTURES
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="inline-flex gap-12 pr-12 animate-[ticker-marquee_40s_linear_infinite] py-2 font-mono text-[12.5px] text-amber-300 tracking-wider">
          {[...departures, ...departures].map((d, i) => (
            <span key={i} className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="text-white tabular-nums">{d.time}</span>
              <span>{d.dest}</span>
              <span className="text-amber-500/80">TRK {d.track}</span>
              <span
                className={
                  d.status === "DELAYED" ? "text-red-400" : "text-lime-300"
                }
              >
                · {d.status}
              </span>
              <span aria-hidden="true" className="mx-3 text-amber-600">▪</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default DepartureBoardTicker;
