import React, { useState, useRef, useEffect } from "react";
import { FolderOpen, Folder } from "lucide-react";

const FileCabinetDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Projects");
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const options = [
    { label: "Projects", code: "01" },
    { label: "Invoices", code: "02" },
    { label: "Receipts", code: "03" },
    { label: "Archive", code: "04" },
  ];

  return (
    <div ref={ref} className="relative font-mono w-60">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-4 py-2 bg-amber-100 text-black border-4 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] transition-all"
      >
        {open ? (
          <FolderOpen className="w-4 h-4" />
        ) : (
          <Folder className="w-4 h-4" />
        )}
        <span className="text-sm font-bold uppercase flex-1 text-left">
          {selected}
        </span>
        <span className="text-[10px] opacity-60">FILE</span>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-amber-50 border-4 border-black shadow-[6px_6px_0px_0px_black]">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => {
                setSelected(opt.label);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm border-b-2 border-dashed border-black/30 last:border-b-0 hover:bg-amber-200 transition-colors"
            >
              <span className="bg-black text-amber-100 text-[10px] font-bold px-1.5 py-0.5">
                {opt.code}
              </span>
              <span className="font-bold uppercase">{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileCabinetDropdown;
