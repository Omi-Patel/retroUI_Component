import React from "react";
import { AlertTriangle } from "lucide-react";

const StampAlert = () => {
  return (
    <div className="font-mono w-full max-w-md bg-red-50 text-red-900 border-4 border-red-700 shadow-[5px_5px_0px_0px_rgb(127,29,29)] p-4 relative">
      <span className="absolute -top-3 right-4 inline-block px-3 py-1 bg-red-50 text-red-700 border-[3px] border-red-700 rotate-[-4deg] text-[10px] font-black uppercase tracking-widest">
        URGENT
      </span>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-black uppercase tracking-wide">
            Action required
          </p>
          <p className="text-xs mt-1">
            Confirm your details before the deadline expires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StampAlert;
