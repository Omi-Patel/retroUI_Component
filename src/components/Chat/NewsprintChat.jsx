const log = [
  { from: "them", text: "Did you read the morning edition?" },
  { from: "me", text: "Front page, top fold. Couldn’t miss it." },
  { from: "them", text: "The whole office is talking about it." },
  { from: "me", text: "Let’s run a follow-up for tomorrow." },
];

const NewsprintChat = () => {
  return (
    <div className="w-[330px] bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <div className="text-center border-b-4 border-double border-black pb-2 mb-3">
        <p className="text-[9px] tracking-[0.4em] uppercase opacity-60">Correspondence Column</p>
        <h2 className="text-xl font-black uppercase tracking-tighter">The Wire</h2>
      </div>

      <div className="space-y-3">
        {log.map((m, i) => (
          <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[78%] border-2 border-black px-3 py-2 text-[12px] leading-snug ${
                m.from === "me" ? "bg-black text-[#f5f1e6]" : "bg-[#f5f1e6]"
              }`}
              style={
                m.from === "me"
                  ? {}
                  : {
                      backgroundImage: "radial-gradient(#0000000d 1px, transparent 1.2px)",
                      backgroundSize: "5px 5px",
                    }
              }
            >
              <p className="text-[8px] uppercase tracking-widest opacity-60 mb-0.5">
                {m.from === "me" ? "Editor" : "Reader"}
              </p>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4 border-t-2 border-dashed border-black/40 pt-3">
        <div className="flex-1 h-8 border-2 border-black bg-white/40" />
        <button className="self-stretch px-3 bg-black text-[#f5f1e6] text-[10px] font-black uppercase tracking-widest border-2 border-black">
          Wire
        </button>
      </div>
    </div>
  );
};

export default NewsprintChat;
