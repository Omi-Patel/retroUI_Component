import React from "react";

const StampBadge = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="inline-block px-4 py-1.5 font-mono font-black uppercase text-red-600 border-[3px] border-red-600 rotate-[-6deg] text-sm tracking-widest"
        style={{ boxShadow: "inset 0 0 0 1px rgba(220,38,38,0.3)" }}>
        APPROVED
      </span>
      <span className="inline-block px-4 py-1.5 font-mono font-black uppercase text-emerald-700 border-[3px] border-emerald-700 rotate-[4deg] text-sm tracking-widest">
        PAID
      </span>
      <span className="inline-block px-4 py-1.5 font-mono font-black uppercase text-blue-700 border-[3px] border-blue-700 rotate-[-3deg] text-sm tracking-widest">
        DRAFT
      </span>
    </div>
  );
};

export default StampBadge;
