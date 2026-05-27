import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TicketStubPagination = () => {
  const [page, setPage] = useState(2);
  const total = 5;

  return (
    <nav className="font-mono inline-flex items-center gap-1" aria-label="Pagination">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="inline-flex items-center justify-center w-9 h-9 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_black] hover:bg-yellow-200 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      {Array.from({ length: total }).map((_, i) => {
        const n = i + 1;
        const active = page === n;
        return (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`relative inline-flex items-center justify-center w-9 h-9 border-2 border-black text-xs font-bold ${
              active ? "bg-pink-400 text-black shadow-[3px_3px_0px_0px_black]" : "bg-white text-black hover:bg-pink-100"
            }`}
            style={{
              backgroundImage: active
                ? "radial-gradient(circle, transparent 2px, transparent 2.5px)"
                : undefined,
            }}
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-black/20 rounded-r-sm" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-black/20 rounded-l-sm" />
            {n}
          </button>
        );
      })}
      <button
        onClick={() => setPage((p) => Math.min(total, p + 1))}
        className="inline-flex items-center justify-center w-9 h-9 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_black] hover:bg-yellow-200 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default TicketStubPagination;
