import { useState } from "react";

// A torn-paper to-do list — checking an item strikes it through in red pen.
const INITIAL = [
  { label: "Rewind the tape", done: true },
  { label: "Water the tamagotchi", done: true },
  { label: "Burn a mixtape CD", done: false },
  { label: "Dial up to the web", done: false },
];

const ChecklistGroup = () => {
  const [items, setItems] = useState(INITIAL);
  const toggle = (i) =>
    setItems((s) => s.map((it, k) => (k === i ? { ...it, done: !it.done } : it)));
  const done = items.filter((i) => i.done).length;

  return (
    <div className="w-64 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 font-mono">
      <div className="flex items-center justify-between border-b-2 border-dashed border-black/40 pb-2 mb-3">
        <span className="text-[11px] font-black uppercase tracking-[0.2em]">To-Do</span>
        <span className="text-[11px] font-bold text-black/50">{done}/{items.length}</span>
      </div>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li key={it.label}>
            <button
              onClick={() => toggle(i)}
              className="group flex items-center gap-2.5 w-full text-left select-none"
            >
              <span className="w-5 h-5 flex-shrink-0 border-2 border-black flex items-center justify-center text-[13px] font-black leading-none">
                {it.done ? "✕" : ""}
              </span>
              <span
                className={`text-[13px] relative ${it.done ? "text-black/40" : "text-black"}`}
              >
                {it.label}
                {it.done && (
                  <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[#b23a2e] -rotate-1" />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistGroup;
