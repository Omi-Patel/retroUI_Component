import { Check } from "lucide-react";

// Postal tracking slip — rubber-stamped checkpoints down a dashed route.
const steps = [
  { label: "Order Placed", detail: "APR 02 · 09:14 · COUNTER 3", state: "done" },
  { label: "Packed", detail: "APR 02 · 16:40 · SORTING RM", state: "done" },
  { label: "In Transit", detail: "APR 03 · 07:55 · ROUTE 66", state: "current" },
  { label: "Out for Delivery", detail: "PENDING", state: "todo" },
  { label: "Delivered", detail: "PENDING", state: "todo" },
];

const PackageTrackingTimeline = () => {
  return (
    <div className="w-full max-w-md bg-amber-50 text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono">
      {/* Slip header */}
      <div className="flex items-center justify-between border-b-4 border-black px-5 py-3">
        <div>
          <p className="text-[9px] uppercase tracking-[0.35em] text-stone-500">
            Parcel Post · Priority
          </p>
          <h2 className="text-lg font-black uppercase tracking-tight">
            Tracking Slip
          </h2>
        </div>
        <span className="rotate-[4deg] border-2 border-red-600 text-red-600 px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em]">
          Fragile
        </span>
      </div>
      <p className="px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-stone-500 border-b-2 border-dashed border-stone-400">
        NO. RK-1998-0403-7
      </p>

      <ol className="px-5 py-5">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <li key={s.label} className="relative flex gap-4 pb-6 last:pb-0">
              {/* Dashed connector */}
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute left-[13px] top-7 bottom-0 border-l-2 border-dashed border-stone-500"
                />
              )}

              {/* Marker */}
              {s.state === "done" && (
                <span className="relative z-10 flex w-7 h-7 shrink-0 items-center justify-center bg-red-600 text-amber-50 border-2 border-black rotate-[-6deg]">
                  <Check className="w-4 h-4" strokeWidth={4} aria-hidden="true" />
                </span>
              )}
              {s.state === "current" && (
                <span className="relative z-10 flex w-7 h-7 shrink-0 items-center justify-center bg-amber-50 border-2 border-black animate-[pkg-pulse_1.4s_ease-in-out_infinite]">
                  <span
                    aria-hidden="true"
                    className="w-2.5 h-2.5 bg-red-600 rounded-full"
                  />
                </span>
              )}
              {s.state === "todo" && (
                <span className="relative z-10 w-7 h-7 shrink-0 bg-amber-50 border-2 border-dashed border-stone-500" />
              )}

              <div className="pt-0.5">
                <h3
                  className={`text-[12px] font-black uppercase tracking-[0.15em] ${
                    s.state === "todo" ? "text-stone-400" : ""
                  }`}
                >
                  {s.label}
                  {s.state === "current" && (
                    <span className="ml-2 text-[8px] font-black uppercase tracking-[0.2em] bg-black text-amber-50 px-1.5 py-0.5">
                      Now
                    </span>
                  )}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-0.5">
                  {s.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="border-t-4 border-black text-center py-2 text-[9px] uppercase tracking-[0.3em] text-stone-500">
        ✦ Handled with reasonable care ✦
      </div>

      <style>{`
        @keyframes pkg-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5); }
          50% { box-shadow: 0 0 0 6px rgba(220, 38, 38, 0); }
        }
      `}</style>
    </div>
  );
};

export default PackageTrackingTimeline;
