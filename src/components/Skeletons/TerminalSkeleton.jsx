import React from "react";

const TerminalSkeleton = () => {
  const lines = [
    "Initializing module...",
    "Fetching dependencies",
    "Parsing manifest",
    "Done",
  ];
  return (
    <div className="font-mono w-full max-w-sm bg-black text-green-400 border-2 border-green-400 p-4 space-y-1.5 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
      {lines.map((l, i) => (
        <p key={l} className="text-xs">
          <span className="opacity-60">{">"}</span>{" "}
          <span
            className="inline-block"
            style={{
              opacity: 0,
              animation: `tFade 1.6s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {l}
          </span>
        </p>
      ))}
      <p className="text-xs flex items-center gap-1.5">
        <span className="opacity-60">{">"}</span>
        <span className="inline-block w-2 h-3 bg-green-400 animate-pulse" />
      </p>
      <style>{`
        @keyframes tFade {
          0% { opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default TerminalSkeleton;
