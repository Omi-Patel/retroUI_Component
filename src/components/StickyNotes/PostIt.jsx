const PostIt = () => {
  return (
    <div
      className="relative inline-block w-52 h-52 p-4 bg-yellow-200 -rotate-3 shadow-[6px_6px_12px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:rotate-0"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 6%)",
      }}
    >
      {/* Folded corner */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-yellow-300"
      />
      <p className="font-mono text-[11px] tracking-widest uppercase text-yellow-900/70 mb-2">
        Remember
      </p>
      <p className="text-stone-800 text-[15px] leading-snug" style={{ fontFamily: '"Instrument Serif", serif' }}>
        buy milk · call mom · finish the zine
      </p>
    </div>
  );
};

export default PostIt;
