import { Camera } from "lucide-react";

const PolaroidCard = () => {
  return (
    <div className="relative inline-block bg-white p-3 pb-12 shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] -rotate-2 transition-transform duration-200 hover:rotate-0 hover:-translate-y-1">
      {/* Masking tape */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-200/80 border border-yellow-300/60 rotate-[-3deg] shadow-sm"
      />
      {/* Photo area */}
      <div className="w-52 h-52 bg-gradient-to-br from-orange-200 via-amber-100 to-rose-200 flex items-center justify-center">
        <Camera className="w-12 h-12 text-stone-700/40" strokeWidth={1.5} />
      </div>
      {/* Caption */}
      <p className="absolute bottom-3 left-0 right-0 text-center font-mono text-[13px] text-stone-700 italic">
        summer &apos;98
      </p>
    </div>
  );
};

export default PolaroidCard;
