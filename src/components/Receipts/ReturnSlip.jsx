const ReturnSlip = () => {
  return (
    <div className="relative inline-block w-72 bg-white text-stone-800 font-mono border border-stone-400 shadow-[5px_5px_0_0_rgba(0,0,0,0.18)] overflow-hidden">
      {/* VOID watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[88px] font-bold tracking-widest text-red-500/15 -rotate-[18deg] select-none">
          VOID
        </span>
      </div>

      <div className="relative px-5 py-4 border-b border-dashed border-stone-400">
        <h3 className="text-[14px] font-bold tracking-[0.18em] uppercase text-center">
          Return Slip
        </h3>
        <p className="text-center text-[10px] text-stone-500 mt-1 tracking-widest">
          RTN-2026-0517
        </p>
      </div>

      <div className="relative px-5 py-3 text-[12px] space-y-1.5">
        <div className="flex justify-between">
          <span className="text-stone-500">ORIGINAL</span>
          <span>ORD-2026-0312</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">ITEM</span>
          <span>Sticker Pack ×1</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">REASON</span>
          <span>Damaged in transit</span>
        </div>
      </div>

      <div className="relative my-2 mx-5 border-t border-dashed border-stone-400" />

      <div className="relative px-5 pb-4 flex justify-between items-baseline">
        <span className="text-[12px] text-stone-500">REFUND</span>
        <span className="text-[16px] font-bold text-red-700">−$6.00</span>
      </div>

      <div className="relative px-5 pb-4 text-center">
        <p className="text-[10px] text-stone-500 tracking-widest">
          Processed via original payment method
        </p>
      </div>
    </div>
  );
};

export default ReturnSlip;
