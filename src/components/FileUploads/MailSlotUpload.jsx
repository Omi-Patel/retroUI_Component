// Mail-slot upload — post files through a brass letter slot; each arrives as an envelope.
import { useState, useRef } from "react";
import { X } from "lucide-react";

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const MailSlotUpload = () => {
  const [letters, setLetters] = useState([]);
  const inputRef = useRef(null);

  const addFiles = (fileList) => {
    const next = Array.from(fileList).map((f) => ({
      id: `${f.name}-${Date.now()}-${Math.random()}`,
      name: f.name,
      size: f.size,
    }));
    setLetters((prev) => [...prev, ...next]);
  };

  return (
    <div className="w-full max-w-sm bg-[#f5f1e6] text-black font-mono border-4 border-black shadow-[6px_6px_0_0_black] p-4">
      <div className="text-center mb-3">
        <p className="text-[9px] uppercase tracking-[0.35em] text-stone-500">
          ✦ Registered Mail ✦
        </p>
        <h2 className="text-lg font-black uppercase tracking-tight">
          Letter Slot
        </h2>
      </div>

      {/* Brass plate + slot */}
      <button
        onClick={() => inputRef.current?.click()}
        className="group w-full bg-gradient-to-b from-amber-300 to-amber-500 border-4 border-black p-4 shadow-[4px_4px_0_0_black] hover:shadow-[6px_6px_0_0_black] transition-all"
      >
        <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-black/70 mb-2">
          Letters Only
        </span>
        {/* slot opening */}
        <span className="block mx-auto w-4/5 h-4 bg-stone-900 border-2 border-black rounded-sm shadow-[inset_0_3px_0_0_rgba(0,0,0,0.6)] group-hover:h-5 transition-all" />
        <span className="block mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-black/70">
          Push to post a file
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        multiple
        className="sr-only"
        aria-label="Choose files to post"
        onChange={(e) => {
          if (e.target.files?.length) addFiles(e.target.files);
          e.target.value = "";
        }}
      />

      {/* Envelope stack */}
      {letters.length === 0 ? (
        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.3em] text-stone-500">
          The mailbag is empty
        </p>
      ) : (
        <ul className="mt-4 space-y-2" aria-label="Posted envelopes">
          {letters.map((letter, i) => (
            <li
              key={letter.id}
              className={`relative bg-amber-50 border-2 border-black px-3 py-2.5 shadow-[3px_3px_0_0_black] ${
                i % 2 === 0 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
              }`}
            >
              {/* postage stamp */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 right-8 w-6 h-7 bg-red-300 border-2 border-dotted border-black flex items-center justify-center text-[8px] font-black"
              >
                1¢
              </span>
              {/* postmark */}
              <span
                aria-hidden="true"
                className="absolute top-2 right-[52px] w-6 h-6 rounded-full border-2 border-black/30 text-[6px] flex items-center justify-center text-black/40 -rotate-12"
              >
                POST
              </span>
              <p className="pr-16 text-[11px] font-bold uppercase tracking-wide truncate">
                To: {letter.name}
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 mt-0.5">
                Wt. {formatSize(letter.size)} · Registered
              </p>
              <button
                onClick={() =>
                  setLetters((prev) => prev.filter((l) => l.id !== letter.id))
                }
                aria-label={`Return ${letter.name} to sender`}
                className="absolute top-1.5 right-1.5 p-0.5 border-2 border-black bg-white hover:bg-red-300 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-3 text-center text-[8px] uppercase tracking-[0.25em] text-stone-500 border-t-2 border-dashed border-black pt-2">
        {letters.length} piece{letters.length === 1 ? "" : "s"} of mail ·
        collected daily
      </p>
    </div>
  );
};

export default MailSlotUpload;
