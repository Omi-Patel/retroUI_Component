// "This page is UNDER CONSTRUCTION" — the animated caution-stripe banner with
// the little digging-worker energy, minus the spinning GIF.
const UnderConstructionBanner = () => {
  return (
    <div className="max-w-[360px] font-mono">
      <style>{`
        @keyframes ucScroll { 0% { background-position: 0 0 } 100% { background-position: 56px 0 } }
        @keyframes ucBlink { 0%, 60% { opacity: 1 } 61%, 100% { opacity: 0.25 } }
        .uc-stripes {
          background-image: repeating-linear-gradient(-45deg, #f2b705 0 14px, #1f1b16 14px 28px);
          animation: ucScroll 0.8s linear infinite;
        }
        .uc-sign { animation: ucBlink 1s steps(1) infinite; }
      `}</style>

      <div className="border-4 border-black shadow-[8px_8px_0px_0px_black] bg-[#f5f1e6]">
        <div className="uc-stripes h-4 border-b-4 border-black" />
        <div className="px-4 py-4 text-center">
          <div className="uc-sign inline-block text-2xl mb-1" aria-hidden>
            🚧
          </div>
          <div className="text-[15px] font-black uppercase tracking-[0.1em] text-black leading-tight">
            Under Construction
          </div>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-black/60">
            Pardon our dust · check back soon
          </p>
        </div>
        <div className="uc-stripes h-4 border-t-4 border-black" />
      </div>
    </div>
  );
};

export default UnderConstructionBanner;
