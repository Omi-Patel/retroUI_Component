import { useState } from "react";

// A mood scale — pick the face that fits. The chosen face pops out.
const FACES = [
  { e: "😖", label: "Awful" },
  { e: "🙁", label: "Meh" },
  { e: "😐", label: "Okay" },
  { e: "🙂", label: "Good" },
  { e: "🤩", label: "Rad" },
];

const EmojiRating = () => {
  const [val, setVal] = useState(3);

  return (
    <div className="inline-flex flex-col items-center gap-3 bg-[#f5f1e6] border-4 border-black shadow-[8px_8px_0px_0px_black] px-5 py-4 font-mono">
      <div className="flex gap-2">
        {FACES.map((f, i) => {
          const on = i === val;
          return (
            <button
              key={f.label}
              onClick={() => setVal(i)}
              className={`w-11 h-11 text-2xl flex items-center justify-center border-2 transition-all ${
                on
                  ? "border-black bg-[#e3b762] shadow-[3px_3px_0_0_black] -translate-y-1 grayscale-0"
                  : "border-black/20 grayscale opacity-60 hover:opacity-100"
              }`}
              aria-label={f.label}
            >
              {f.e}
            </button>
          );
        })}
      </div>
      <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#b23a2e]">{FACES[val].label}</span>
    </div>
  );
};

export default EmojiRating;
