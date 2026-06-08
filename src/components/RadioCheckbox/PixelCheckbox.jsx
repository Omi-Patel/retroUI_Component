import { useState } from "react";

// Chunky 8-bit checkboxes with a pixel-art check mark.
const ITEMS = ["Insert coin", "Press start", "Enter cheat"];

const PixelCheckbox = () => {
  const [on, setOn] = useState([true, false, true]);
  const toggle = (i) => setOn((s) => s.map((v, k) => (k === i ? !v : v)));

  return (
    <div className="flex flex-col gap-3 font-mono" style={{ imageRendering: "pixelated" }}>
      {ITEMS.map((label, i) => (
        <button
          key={label}
          onClick={() => toggle(i)}
          className="group inline-flex items-center gap-3 select-none"
        >
          <span
            className="relative w-7 h-7 bg-[#cfe8c4] border-[3px] border-black"
            style={{ boxShadow: "inset -3px -3px 0 0 #7da567, inset 3px 3px 0 0 #eafbe2" }}
          >
            {on[i] && (
              <svg viewBox="0 0 7 7" className="absolute inset-0 w-full h-full p-[3px]" shapeRendering="crispEdges">
                <path fill="#1f6b3a" d="M0 3h1v1h1v1h1v-1h1v-1h1v-1h1v-1h-1v1h-1v1h-1v1h-1v-1h-1z" />
              </svg>
            )}
          </span>
          <span
            className={`text-[13px] font-bold uppercase tracking-wide ${
              on[i] ? "text-black" : "text-black/40"
            }`}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PixelCheckbox;
