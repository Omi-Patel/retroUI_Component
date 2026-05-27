import React, { useState } from "react";

const PixelPagination = () => {
  const [page, setPage] = useState(3);
  const total = 7;

  return (
    <nav className="font-mono inline-flex items-center gap-0.5 bg-stone-900 border-4 border-black p-1 shadow-[4px_4px_0px_0px_black]" aria-label="Pagination">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="px-2 py-1 text-lime-300 hover:bg-lime-400 hover:text-black text-xs font-black"
      >
        ◂
      </button>
      {Array.from({ length: total }).map((_, i) => {
        const n = i + 1;
        const active = page === n;
        return (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`w-7 h-7 text-[11px] font-black ${
              active ? "bg-lime-400 text-black" : "text-lime-300 hover:bg-lime-400/20"
            }`}
          >
            {n}
          </button>
        );
      })}
      <button
        onClick={() => setPage((p) => Math.min(total, p + 1))}
        className="px-2 py-1 text-lime-300 hover:bg-lime-400 hover:text-black text-xs font-black"
      >
        ▸
      </button>
    </nav>
  );
};

export default PixelPagination;
