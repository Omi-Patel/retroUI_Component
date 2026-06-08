const KPIStatCard = () => {
  return (
    <div className="relative w-64 bg-[#f5f1e6] text-black border-4 border-black shadow-[8px_8px_0px_0px_black] p-5 font-mono">
      {/* corner stamp */}
      <span className="absolute -top-3 -right-3 inline-flex items-center bg-[#e07b67] text-black text-[9px] font-black uppercase tracking-widest px-2 py-1 border-2 border-black rotate-3 shadow-[2px_2px_0_0_black]">
        Q2 ’87
      </span>

      <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Total Subscribers</p>

      <div className="my-2 flex items-end gap-2">
        <span className="text-5xl font-black tracking-tighter tabular-nums leading-none">
          14,208
        </span>
      </div>

      <div className="flex items-center justify-between border-t-2 border-dashed border-black/40 pt-2 mt-3">
        <span className="inline-flex items-center gap-1 bg-black text-[#f5f1e6] text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5">
          ▲ 12.5%
        </span>
        <span className="text-[10px] opacity-60 uppercase tracking-wider">vs last qtr</span>
      </div>
    </div>
  );
};

export default KPIStatCard;
