import { Image as ImageIcon, Heart } from "lucide-react";

const InstantFrame = () => {
  return (
    <div className="relative inline-block bg-white p-4 pb-14 shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] rotate-[3deg] transition-transform duration-200 hover:rotate-0">
      {/* Heart sticker */}
      <span
        aria-hidden="true"
        className="absolute -top-3 -right-3 w-10 h-10 bg-rose-400 rounded-full border-2 border-white flex items-center justify-center shadow-md rotate-12"
      >
        <Heart className="w-5 h-5 text-white fill-white" />
      </span>
      {/* Photo area with hand-drawn-feel inner border */}
      <div className="w-56 h-56 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 relative">
        <div className="absolute inset-2 border-2 border-dashed border-white/70 flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-white/80" strokeWidth={1.5} />
        </div>
      </div>
      {/* Caption + date stamp */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
        <p className="font-mono text-[13px] text-stone-800 italic">best day ever</p>
        <span className="font-mono text-[10px] tracking-wider text-red-600 border border-red-600 px-1.5 py-0.5 -rotate-3">
          05·27·96
        </span>
      </div>
    </div>
  );
};

export default InstantFrame;
