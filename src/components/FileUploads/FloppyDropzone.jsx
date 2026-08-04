// Floppy dropzone — "INSERT DISK" drag-and-drop with files listed as labeled diskettes.
import { useState, useRef } from "react";
import { X } from "lucide-react";

const FloppyDropzone = () => {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const addFiles = (fileList) => {
    const next = Array.from(fileList).map((f) => ({
      id: `${f.name}-${Date.now()}-${Math.random()}`,
      name: f.name,
    }));
    setFiles((prev) => [...prev, ...next]);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  return (
    <div className="w-full max-w-sm bg-[#f5f1e6] text-black font-mono border-4 border-black shadow-[6px_6px_0_0_black] p-4">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-sm font-black uppercase tracking-tight">
          Disk Intake
        </h2>
        <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500">
          1.44 MB HD
        </span>
      </div>

      {/* Dropzone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`border-4 border-dashed p-5 text-center transition-colors ${
          dragging
            ? "border-black bg-amber-200"
            : "border-black/50 bg-amber-50"
        }`}
      >
        {/* Floppy-disk art */}
        <div
          aria-hidden="true"
          className="mx-auto w-16 h-16 bg-stone-800 border-2 border-black relative shadow-[3px_3px_0_0_rgba(0,0,0,0.3)]"
        >
          {/* metal shutter */}
          <div className="absolute top-0 right-2 w-7 h-5 bg-stone-400 border-2 border-black">
            <div className="absolute inset-y-0.5 right-1 w-2 bg-stone-800" />
          </div>
          {/* label */}
          <div className="absolute bottom-1 inset-x-2 h-6 bg-amber-50 border border-black flex items-center justify-center">
            <span className="text-[7px] font-bold tracking-widest">A:\</span>
          </div>
        </div>
        <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.25em]">
          {dragging ? "Release to insert" : "Insert Disk"}
        </p>
        <p className="mt-1 text-[9px] uppercase tracking-wider text-stone-500">
          Drag files here, or
        </p>
        <button
          onClick={() => inputRef.current?.click()}
          className="mt-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white border-2 border-black shadow-[3px_3px_0_0_black] hover:shadow-[4px_4px_0_0_black] transition-all"
        >
          Browse Drive
        </button>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="sr-only"
          aria-label="Choose files to upload"
          onChange={(e) => {
            if (e.target.files?.length) addFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {/* Disk shelf */}
      {files.length > 0 && (
        <ul className="mt-3 space-y-2" aria-label="Inserted disks">
          {files.map((f) => (
            <li
              key={f.id}
              className="flex items-center gap-2 bg-white border-2 border-black px-2 py-1.5 shadow-[2px_2px_0_0_black]"
            >
              <span
                aria-hidden="true"
                className="w-5 h-5 shrink-0 bg-stone-800 border border-black relative"
              >
                <span className="absolute bottom-0.5 inset-x-0.5 h-1.5 bg-amber-50" />
              </span>
              <span className="flex-1 min-w-0 truncate text-[11px] font-bold uppercase tracking-wide">
                {f.name}
              </span>
              <button
                onClick={() =>
                  setFiles((prev) => prev.filter((x) => x.id !== f.id))
                }
                aria-label={`Eject ${f.name}`}
                className="p-0.5 border-2 border-black bg-red-300 hover:bg-red-400 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-3 text-[8px] uppercase tracking-[0.25em] text-stone-500 text-center">
        {files.length === 0
          ? "No disks in drive"
          : `${files.length} disk${files.length > 1 ? "s" : ""} loaded`}
      </p>
    </div>
  );
};

export default FloppyDropzone;
