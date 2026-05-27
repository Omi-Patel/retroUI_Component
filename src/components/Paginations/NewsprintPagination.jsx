import React, { useState } from "react";

const NewsprintPagination = () => {
  const [page, setPage] = useState(2);
  const total = 5;

  return (
    <nav className="font-mono inline-flex flex-col items-center gap-1" aria-label="Pagination">
      <p className="text-[10px] tracking-[0.3em] uppercase opacity-60" style={{ color: "var(--fg)" }}>
        Page {page} of {total}
      </p>
      <div className="inline-flex items-center divide-x-2 divide-black border-2 border-black">
        {Array.from({ length: total }).map((_, i) => {
          const n = i + 1;
          const active = page === n;
          return (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-9 h-9 text-sm font-bold ${
                active ? "bg-black text-white" : "bg-[#f5f1e6] text-black hover:bg-yellow-100"
              }`}
            >
              {String(n).padStart(2, "0")}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NewsprintPagination;
