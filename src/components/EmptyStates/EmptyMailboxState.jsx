// Inbox zero — a roadside mailbox with the flag up and nothing inside.
const EmptyMailboxState = () => {
  return (
    <div className="w-full max-w-sm bg-amber-50 text-stone-900 border-4 border-black shadow-[6px_6px_0_0_black] font-mono text-center">
      <p className="border-b-2 border-dashed border-stone-400 py-2 text-[9px] uppercase tracking-[0.35em] text-stone-500">
        Rural Route 7 · Box 42
      </p>

      {/* Mailbox illustration */}
      <div aria-hidden="true" className="pt-10 pb-2">
        <div className="relative mx-auto w-44 h-28">
          {/* Flag pole + flag (up) */}
          <div className="absolute -top-7 right-4 w-1.5 h-12 bg-black" />
          <div className="absolute -top-7 right-[3px] w-8 h-5 bg-red-600 border-2 border-black" />
          {/* Mailbox body */}
          <div className="absolute top-0 inset-x-4 h-16 bg-stone-300 border-4 border-black rounded-t-full">
            {/* Open mouth / empty interior */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1.5 w-20 h-8 bg-stone-800 border-2 border-black rounded-t-full flex items-end justify-center">
              <span className="text-[7px] uppercase tracking-[0.25em] text-stone-500 pb-1">
                empty
              </span>
            </div>
          </div>
          {/* Post */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-12 bg-amber-800 border-2 border-black" />
          {/* Ground line */}
          <div className="absolute -bottom-1 inset-x-0 border-b-4 border-dotted border-stone-500" />
        </div>
      </div>

      <div className="px-6 pb-6">
        <span className="inline-block rotate-[-2deg] border-2 border-red-600 text-red-600 px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.25em] mt-4">
          Inbox Zero
        </span>
        <h2 className="text-xl font-black uppercase tracking-tight mt-2">
          You&apos;re All Caught Up
        </h2>
        <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">
          Every letter has been read and filed. The flag stays up until new
          mail arrives.
        </p>
        <button
          type="button"
          className="mt-5 px-6 py-2 bg-transparent text-stone-900 text-[11px] font-black uppercase tracking-[0.25em] border-2 border-black shadow-[3px_3px_0_0_black] hover:bg-black hover:text-amber-50 transition-colors"
        >
          ✎ Write a letter
        </button>
      </div>
    </div>
  );
};

export default EmptyMailboxState;
