const steps = [
  { label: "Application Filed", status: "approved" },
  { label: "Identity Verified", status: "approved" },
  { label: "Under Review", status: "pending" },
  { label: "Final Decision", status: "waiting" },
];

// Rubber-stamp ink mark — plain render helper (not a component) so it can take
// positional args without prop-types.
const stamp = (text, color, rotate) => (
  <span
    className="inline-flex items-center justify-center text-[10px] font-black uppercase tracking-[0.15em] border-[2.5px] rounded px-2 py-0.5"
    style={{
      color,
      borderColor: color,
      transform: `rotate(${rotate}deg)`,
      boxShadow: "inset 0 0 0 1px currentColor",
      opacity: 0.85,
    }}
  >
    {text}
  </span>
);

const StampedForm = () => {
  return (
    <div className="w-[350px] bg-[#f7f2e4] text-[#2b2417] border-2 border-[#2b2417] shadow-[6px_6px_0px_0px_#2b2417] p-5 font-mono">
      <div className="flex items-center justify-between border-b-2 border-double border-[#2b2417] pb-2 mb-4">
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase opacity-60">Bureau Form C-12</p>
          <h3 className="text-lg font-black uppercase tracking-tighter">Permit Status</h3>
        </div>
        <span className="text-[9px] tracking-widest opacity-60">No. 00471</span>
      </div>

      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2.5 text-[12px]">
              <span className="w-6 h-6 flex items-center justify-center border-2 border-[#2b2417] text-[11px] font-black bg-[#f7f2e4]">
                {i + 1}
              </span>
              <span className={s.status === "waiting" ? "opacity-40" : "font-bold"}>{s.label}</span>
            </span>
            {s.status === "approved" && stamp("Approved", "#1d6b3a", -6)}
            {s.status === "pending" && stamp("Pending", "#b45309", 4)}
            {s.status === "waiting" && (
              <span className="text-[10px] tracking-widest opacity-30 uppercase">— — —</span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-4 border-t-2 border-dashed border-[#2b2417]/40 pt-3 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-widest opacity-60">Processing time: 6–8 wks</span>
        {stamp("Received", "#7a1f1f", -3)}
      </div>
    </div>
  );
};

export default StampedForm;
