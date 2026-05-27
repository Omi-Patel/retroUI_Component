import React from "react";
import { Info, X } from "lucide-react";

const NewsprintAlert = () => {
  return (
    <div className="font-mono w-full max-w-md bg-[#f5f1e6] text-black border-4 border-black shadow-[6px_6px_0px_0px_black] p-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-black text-[#f5f1e6] flex items-center justify-center">
          <Info className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-70 border-b border-dashed border-black/50 pb-0.5 mb-1">
            Bulletin · Notice
          </p>
          <p className="text-sm font-bold uppercase">Update available</p>
          <p className="text-xs mt-0.5">
            A fresh edition is hot off the press.
          </p>
        </div>
        <button className="text-black hover:opacity-60" aria-label="Dismiss">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NewsprintAlert;
