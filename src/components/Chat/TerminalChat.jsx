const log = [
  { role: "ai", text: "retroGPT v0.9 ready. ask me anything." },
  { role: "user", text: "how do i center a div?" },
  { role: "ai", text: "display:flex; place-items:center; — works every time. mostly." },
  { role: "user", text: "classic. thanks." },
  { role: "ai", text: "anytime. logging off in 3... 2..." },
];

const TerminalChat = () => {
  return (
    <div className="w-[360px] bg-black text-green-400 border-2 border-green-500/50 shadow-[0_0_24px_rgba(34,197,94,0.25)] font-mono overflow-hidden">
      {/* title bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border-b border-green-500/30">
        <span className="w-2.5 h-2.5 rounded-full border border-green-400" />
        <span className="w-2.5 h-2.5 rounded-full border border-green-400" />
        <span className="flex-1 text-center text-[10px] tracking-[0.3em] uppercase opacity-70">
          /dev/chat — 80×24
        </span>
      </div>

      <div className="px-3 py-3 space-y-2 text-[11.5px] leading-relaxed">
        {log.map((m, i) => (
          <div key={i} className="flex gap-2">
            <span className={m.role === "user" ? "text-green-300 shrink-0" : "text-yellow-400 shrink-0"}>
              {m.role === "user" ? "you@retro:~$" : "ai>"}
            </span>
            <span className={m.role === "ai" ? "opacity-90" : ""}>{m.text}</span>
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-green-300 shrink-0">you@retro:~$</span>
          <span className="w-2 h-4 bg-green-400 animate-pulse" />
        </div>
      </div>

      <div className="px-3 py-2 border-t border-green-500/30 text-[10px] tracking-widest uppercase opacity-60 flex justify-between">
        <span>▮ connected</span>
        <span>ESC to quit</span>
      </div>
    </div>
  );
};

export default TerminalChat;
