// Binder-tab sidebar — a ring-binder page with colored divider tabs on the right edge.
import { useState } from "react";

const tabs = [
  { label: "Notes", color: "bg-red-400", lines: ["Meeting minutes", "Sketch ideas", "To-do backlog"] },
  { label: "Specs", color: "bg-amber-300", lines: ["API contract", "Wireframes", "Edge cases"] },
  { label: "Refs", color: "bg-lime-300", lines: ["Zine scans", "Type samples", "Palette chips"] },
  { label: "Misc", color: "bg-sky-300", lines: ["Receipts", "Stickers", "Loose paper"] },
];

const BinderTabSidebar = () => {
  const [active, setActive] = useState("Specs");
  const current = tabs.find((t) => t.label === active);

  return (
    <div className="flex w-[260px] h-[380px] font-mono text-black">
      {/* Punched-hole rail */}
      <div
        aria-hidden="true"
        className="w-8 shrink-0 bg-stone-800 border-4 border-r-0 border-black flex flex-col items-center justify-evenly py-4"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="w-4 h-4 rounded-full bg-[#f5f1e6] border-2 border-black shadow-[inset_1px_1px_0_0_rgba(0,0,0,0.4)]"
          />
        ))}
      </div>

      {/* Binder page */}
      <div className="relative flex-1 bg-[#f5f1e6] border-4 border-black shadow-[6px_6px_0_0_black] flex flex-col">
        <div className="px-4 pt-4 pb-2 border-b-2 border-dashed border-black">
          <p className="text-[9px] uppercase tracking-[0.35em] text-stone-500">
            Three-Ring Binder
          </p>
          <h2 className="text-lg font-black uppercase tracking-tight">
            {current.label}
          </h2>
        </div>
        <ul className="flex-1 px-4 py-3 space-y-2.5">
          {current.lines.map((line) => (
            <li
              key={line}
              className="text-[11px] uppercase tracking-wider border-b border-black/20 pb-1.5 flex items-center gap-2"
            >
              <span aria-hidden="true" className="text-stone-400">
                ✎
              </span>
              {line}
            </li>
          ))}
        </ul>
        <p className="px-4 py-2 border-t-2 border-dashed border-black text-[8px] uppercase tracking-[0.25em] text-stone-500">
          Sect. {tabs.findIndex((t) => t.label === active) + 1} of {tabs.length}
        </p>

        {/* Divider tabs sticking out the right edge */}
        <nav
          aria-label="Binder sections"
          className="absolute top-6 -right-[26px] flex flex-col gap-3"
        >
          {tabs.map(({ label, color }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                aria-current={isActive ? "page" : undefined}
                className={`${color} w-[52px] py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-black border-2 border-black rounded-r-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
                  isActive
                    ? "translate-x-1.5 shadow-[3px_3px_0_0_black] z-10"
                    : "opacity-80 hover:translate-x-1 hover:opacity-100 shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default BinderTabSidebar;
