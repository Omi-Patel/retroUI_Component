const log = [
  { from: "them", name: "CoolDude98", text: "yo!! u online?" },
  { from: "me", name: "You", text: "yeah whats up :)" },
  { from: "them", name: "CoolDude98", text: "wanna join the buddy chat l8r?" },
  { from: "me", name: "You", text: "brb getting snacks ✌" },
];

const MessengerChat = () => {
  return (
    <div className="w-[320px] bg-[#c3c7cb] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] font-sans select-none">
      {/* title bar */}
      <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-r from-[#000080] to-[#1084d0] text-white">
        <span className="text-[12px] font-bold tracking-wide flex items-center gap-1.5">
          <span className="text-yellow-300">●</span> Instant Message — CoolDude98
        </span>
        <div className="flex gap-1">
          {["_", "□", "✕"].map((s) => (
            <span
              key={s}
              className="w-4 h-4 flex items-center justify-center text-[9px] font-bold text-black bg-[#c3c7cb] border border-t-white border-l-white border-r-[#404040] border-b-[#404040]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* message area */}
      <div className="m-1.5 bg-white border-2 border-t-[#404040] border-l-[#404040] border-r-white border-b-white p-2 h-44 overflow-y-auto text-[12px] leading-snug space-y-1.5">
        {log.map((m, i) => (
          <p key={i}>
            <span className={m.from === "me" ? "font-bold text-[#cc0000]" : "font-bold text-[#0000cc]"}>
              {m.name}:
            </span>{" "}
            <span className="text-black">{m.text}</span>
          </p>
        ))}
        <p className="text-[#808080] italic text-[11px]">CoolDude98 is typing…</p>
      </div>

      {/* input */}
      <div className="m-1.5 mt-0">
        <div className="bg-white border-2 border-t-[#404040] border-l-[#404040] border-r-white border-b-white h-12 mb-1" />
        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-[11px] font-bold text-[#404040]">
            <span className="px-1.5 italic">B</span>
            <span className="px-1.5 italic underline">I</span>
            <span className="px-1.5">😊</span>
          </div>
          <button className="px-4 py-1 text-[12px] font-bold bg-[#c3c7cb] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] active:border-t-[#404040] active:border-l-[#404040]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessengerChat;
