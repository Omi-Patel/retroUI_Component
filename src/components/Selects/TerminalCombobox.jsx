import { useState, useRef, useEffect } from "react";

// Green-phosphor combobox — type to grep the package list.
const packages = [
  "retro-ui-core",
  "retro-ui-buttons",
  "retro-ui-cards",
  "zine-kit",
  "crt-shader",
  "phosphor-theme",
  "newsprint-grid",
  "cassette-player",
];

const TerminalCombobox = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const filtered = packages.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  const highlight = (name) => {
    if (!query) return name;
    const i = name.toLowerCase().indexOf(query.toLowerCase());
    if (i === -1) return name;
    return (
      <>
        {name.slice(0, i)}
        <span className="bg-green-400 text-black px-0.5">
          {name.slice(i, i + query.length)}
        </span>
        {name.slice(i + query.length)}
      </>
    );
  };

  return (
    <div
      ref={ref}
      className="relative w-72 bg-black text-green-400 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.5)] font-mono"
    >
      <div className="flex items-center justify-between px-3 py-1.5 bg-green-900/60 border-b-2 border-green-700 text-[9px] uppercase tracking-[0.3em] text-green-300">
        <span>pkg-manager v2.4</span>
        <span aria-hidden="true">[■]</span>
      </div>

      <div className="p-3">
        <label
          htmlFor="terminal-combobox-input"
          className="block text-[10px] uppercase tracking-[0.25em] text-green-600 mb-1.5"
        >
          $ select --pkg
        </label>
        <div className="flex items-center gap-2 border-2 border-green-600 px-2 py-1.5 focus-within:border-green-300">
          <span aria-hidden="true" className="text-green-600">
            &gt;
          </span>
          <input
            id="terminal-combobox-input"
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls="terminal-combobox-list"
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck="false"
            value={query}
            placeholder="type to filter…"
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
            className="w-full bg-transparent text-sm text-green-300 placeholder:text-green-800 focus:outline-none caret-green-300"
          />
        </div>

        {open && (
          <ul
            id="terminal-combobox-list"
            role="listbox"
            aria-label="Packages"
            className="mt-2 border-2 border-green-700 divide-y divide-green-900 max-h-44 overflow-y-auto"
          >
            {filtered.length === 0 ? (
              <li
                role="option"
                aria-selected={false}
                aria-disabled="true"
                className="px-3 py-2 text-[11px] text-green-700 uppercase tracking-[0.2em]"
              >
                0 matches — try again
              </li>
            ) : (
              filtered.map((p) => (
                <li key={p} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected === p}
                    onClick={() => {
                      setSelected(p);
                      setQuery(p);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-sm hover:bg-green-900/60 focus:outline-none focus-visible:bg-green-900/60 ${
                      selected === p ? "bg-green-900/60 text-green-200" : ""
                    }`}
                  >
                    <span aria-hidden="true" className="text-green-700 mr-2">
                      {selected === p ? "[x]" : "[ ]"}
                    </span>
                    {highlight(p)}
                  </button>
                </li>
              ))
            )}
          </ul>
        )}

        <p className="mt-2 text-[10px] text-green-700 tracking-wider" aria-live="polite">
          {selected ? `// installed: ${selected}` : "// nothing selected"}
        </p>
      </div>
    </div>
  );
};

export default TerminalCombobox;
