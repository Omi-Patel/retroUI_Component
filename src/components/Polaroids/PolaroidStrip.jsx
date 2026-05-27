import { Smile, Heart, Star, Coffee } from "lucide-react";

const frames = [
  { Icon: Smile, tint: "bg-rose-200" },
  { Icon: Heart, tint: "bg-amber-200" },
  { Icon: Star, tint: "bg-emerald-200" },
  { Icon: Coffee, tint: "bg-sky-200" },
];

const PolaroidStrip = () => {
  return (
    <div className="inline-block bg-black p-2 -rotate-1">
      <div className="flex flex-col gap-1">
        {frames.map(({ Icon, tint }, i) => (
          <div
            key={i}
            className="bg-white p-1.5 pb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]"
          >
            <div className={`w-20 h-20 ${tint} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-stone-700/50" strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center font-mono text-[10px] tracking-[0.2em] text-yellow-300">
        PHOTOBOOTH · 1995
      </p>
    </div>
  );
};

export default PolaroidStrip;
