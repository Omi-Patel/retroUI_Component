import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NumberedPagination = () => {
  const [page, setPage] = useState(4);
  const total = 12;

  return (
    <nav className="font-mono inline-flex items-center gap-3" aria-label="Pagination">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="inline-flex items-center gap-1.5 px-3 h-9 text-xs font-bold uppercase tracking-wider border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_black] hover:bg-cyan-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ArrowLeft className="w-3 h-3" /> Prev
      </button>
      <div className="inline-flex items-center gap-0.5 text-sm">
        <span className="font-black bg-yellow-300 text-black border-2 border-black px-2 py-0.5">
          {String(page).padStart(2, "0")}
        </span>
        <span className="opacity-50 mx-1">/</span>
        <span className="font-bold opacity-60" style={{ color: "var(--fg)" }}>
          {String(total).padStart(2, "0")}
        </span>
      </div>
      <button
        onClick={() => setPage((p) => Math.min(total, p + 1))}
        disabled={page === total}
        className="inline-flex items-center gap-1.5 px-3 h-9 text-xs font-bold uppercase tracking-wider border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_black] hover:bg-cyan-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        Next <ArrowRight className="w-3 h-3" />
      </button>
    </nav>
  );
};

export default NumberedPagination;
