const log = [
  { from: "OPERATOR", time: "09:41", text: "GOOD MORNING. HOW MAY I ASSIST?" },
  { from: "YOU", time: "09:42", text: "SEND THE QUARTERLY FIGURES TO ACCOUNTING." },
  { from: "OPERATOR", time: "09:42", text: "ACKNOWLEDGED. TRANSMITTING NOW... STAND BY." },
  { from: "OPERATOR", time: "09:43", text: "SENT. CONFIRMATION CODE 7K-DELTA-22." },
];

const TeletypeChat = () => {
  return (
    <div className="w-[340px] bg-[#f3ecd6] text-[#2b2417] border-2 border-[#2b2417] shadow-[6px_6px_0px_0px_#2b2417] font-mono">
      <div className="flex items-center justify-between px-4 py-2 border-b-2 border-dashed border-[#2b2417]/50 text-[10px] tracking-[0.25em] uppercase">
        <span>Teletype Model 33</span>
        <span className="opacity-60">CH. 1</span>
      </div>

      <div className="px-4 py-3 space-y-2.5 text-[11px] leading-relaxed">
        {log.map((m, i) => (
          <div key={i}>
            <span className="opacity-50">{m.time}</span>{" "}
            <span className="font-black">{m.from} ▸</span>{" "}
            <span className={m.from === "YOU" ? "underline decoration-dotted underline-offset-2" : ""}>
              {m.text}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-1 pt-1">
          <span className="opacity-50">09:44</span>
          <span className="font-black">YOU ▸</span>
          <span className="w-2 h-3.5 bg-[#2b2417] animate-pulse" />
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 border-t-2 border-[#2b2417] bg-[#e7dcc0]">
        <span className="text-[10px] tracking-widest opacity-60 uppercase">Type</span>
        <div className="flex-1 h-6 border border-[#2b2417]/60 bg-[#f3ecd6]" />
        <button className="text-[10px] font-black uppercase tracking-widest border-2 border-[#2b2417] px-2 py-0.5 bg-[#2b2417] text-[#f3ecd6]">
          Send
        </button>
      </div>
    </div>
  );
};

export default TeletypeChat;
