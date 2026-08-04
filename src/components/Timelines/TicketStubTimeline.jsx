// Ticket-stub timeline — a strip of perforated admission tickets, one per event.
const stubs = [
  { no: "0001", date: "MAR 14 1996", event: "PROJECT KICKOFF", seat: "ROW A" },
  { no: "0002", date: "JUN 02 1996", event: "FIRST DEMO NIGHT", seat: "ROW B" },
  { no: "0003", date: "OCT 19 1996", event: "BETA LAUNCH PARTY", seat: "ROW C" },
  { no: "0004", date: "FEB 07 1997", event: "V1.0 PREMIERE", seat: "ROW D" },
  { no: "0005", date: "SEP 23 1997", event: "1,000 USERS GALA", seat: "ROW E" },
];

const TicketStubTimeline = () => {
  return (
    <div className="w-full max-w-2xl bg-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono p-4">
      <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-3">
        Box Office · Season Archive
      </p>

      <ol className="flex gap-4 overflow-x-auto pb-3">
        {stubs.map((s) => (
          <li key={s.no} className="shrink-0">
            <div className="relative flex w-56 bg-amber-50 text-stone-900 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
              {/* Stub end with perforation */}
              <div className="flex flex-col items-center justify-center px-2 py-3 border-r-2 border-dashed border-stone-500 bg-red-600 text-amber-50">
                <span
                  className="text-[9px] font-black uppercase tracking-[0.2em]"
                  style={{ writingMode: "vertical-rl" }}
                >
                  ADMIT ONE
                </span>
              </div>
              {/* Perforation notches */}
              <span
                aria-hidden="true"
                className="absolute left-[34px] -top-[7px] w-3 h-3 rounded-full bg-stone-900 border-2 border-black"
              />
              <span
                aria-hidden="true"
                className="absolute left-[34px] -bottom-[7px] w-3 h-3 rounded-full bg-stone-900 border-2 border-black"
              />

              {/* Ticket body */}
              <div className="flex-1 px-3 py-3">
                <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500">
                  No. {s.no}
                </p>
                <h3 className="text-[12px] font-black uppercase tracking-wide mt-1 leading-tight">
                  {s.event}
                </h3>
                <time className="block text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 mt-2">
                  {s.date}
                </time>
                <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500 mt-1 border-t border-dashed border-stone-400 pt-1">
                  {s.seat} · NO REFUNDS
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mt-1 text-right">
        Scroll for more shows →
      </p>
    </div>
  );
};

export default TicketStubTimeline;
