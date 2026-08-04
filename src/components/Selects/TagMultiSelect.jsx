import { useState } from "react";
import { X, Plus } from "lucide-react";

// Sticker-sheet multi-select — peel tags off the sheet, slap them on your zine.
const allTags = [
  "PUNK",
  "LO-FI",
  "XEROX",
  "CASSETTE",
  "DIY",
  "RIOT",
  "ANALOG",
];

const chipColors = [
  "bg-yellow-300",
  "bg-pink-300",
  "bg-cyan-300",
  "bg-lime-300",
  "bg-orange-300",
];

const TagMultiSelect = () => {
  const [selected, setSelected] = useState(["PUNK", "CASSETTE"]);

  const remaining = allTags.filter((t) => !selected.includes(t));

  return (
    <div className="w-72 bg-[#f5f1e6] text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono p-4">
      <p
        id="tag-multiselect-label"
        className="text-[10px] font-black uppercase tracking-[0.3em] mb-3"
      >
        Tag your zine
      </p>

      {/* Chosen stickers */}
      <div
        className="flex flex-wrap gap-2 min-h-[2.5rem] p-2 bg-white border-2 border-dashed border-stone-500 mb-3"
        aria-live="polite"
      >
        {selected.length === 0 ? (
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 self-center">
            No stickers yet…
          </span>
        ) : (
          selected.map((tag, i) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 pl-2 pr-1 py-0.5 ${
                chipColors[i % chipColors.length]
              } border-2 border-black shadow-[2px_2px_0_0_black] text-[10px] font-black uppercase tracking-wider ${
                i % 2 ? "rotate-[2deg]" : "rotate-[-2deg]"
              }`}
            >
              {tag}
              <button
                type="button"
                aria-label={`Remove ${tag}`}
                onClick={() =>
                  setSelected((s) => s.filter((t) => t !== tag))
                }
                className="p-0.5 hover:bg-black hover:text-white focus:outline-none focus-visible:bg-black focus-visible:text-white transition-colors"
              >
                <X aria-hidden="true" className="w-3 h-3" />
              </button>
            </span>
          ))
        )}
      </div>

      {/* Sticker sheet of remaining options */}
      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 mb-1.5">
        Sticker sheet · {remaining.length} left
      </p>
      <ul
        role="listbox"
        aria-labelledby="tag-multiselect-label"
        aria-multiselectable="true"
        className="bg-white border-2 border-black divide-y-2 divide-dashed divide-stone-300 max-h-40 overflow-y-auto"
      >
        {remaining.length === 0 ? (
          <li
            role="option"
            aria-selected={false}
            aria-disabled="true"
            className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-stone-400"
          >
            Sheet empty — all stuck!
          </li>
        ) : (
          remaining.map((tag) => (
            <li key={tag} role="none">
              <button
                type="button"
                role="option"
                aria-selected={false}
                onClick={() => setSelected((s) => [...s, tag])}
                className="w-full flex items-center justify-between px-3 py-1.5 text-left text-[11px] font-bold uppercase tracking-wider hover:bg-yellow-100 focus:outline-none focus-visible:bg-yellow-100"
              >
                {tag}
                <Plus aria-hidden="true" className="w-3.5 h-3.5 text-stone-500" />
              </button>
            </li>
          ))
        )}
      </ul>

      <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500 mt-3">
        {selected.length} / {allTags.length} applied
      </p>
    </div>
  );
};

export default TagMultiSelect;
