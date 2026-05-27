import { Ticket, Gamepad2, Newspaper, Hash } from 'lucide-react';

import TicketStubPagination from '../../components/Paginations/TicketStubPagination';
import PixelPagination from '../../components/Paginations/PixelPagination';
import NewsprintPagination from '../../components/Paginations/NewsprintPagination';
import NumberedPagination from '../../components/Paginations/NumberedPagination';

export const paginationComponents = [
  {
    name: 'TicketStubPagination',
    component: TicketStubPagination,
    icon: Ticket,
    colors: { gradient: 'from-pink-400 to-yellow-300', bg: 'bg-gradient-to-br from-pink-50 to-yellow-100 dark:from-pink-900/20 dark:to-yellow-900/30' },
    code: `import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TicketStubPagination = () => {
  const [page, setPage] = useState(2);
  const total = 5;

  return (
    <nav className="font-mono inline-flex items-center gap-1">
      <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="inline-flex items-center justify-center w-9 h-9 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_black]">
        <ChevronLeft className="w-4 h-4" />
      </button>
      {Array.from({ length: total }).map((_, i) => {
        const n = i + 1, active = page === n;
        return (
          <button key={n} onClick={() => setPage(n)} className={\`relative inline-flex items-center justify-center w-9 h-9 border-2 border-black text-xs font-bold \${active ? "bg-pink-400 text-black shadow-[3px_3px_0px_0px_black]" : "bg-white text-black"}\`}>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-black/20 rounded-r-sm" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-black/20 rounded-l-sm" />
            {n}
          </button>
        );
      })}
      <button onClick={() => setPage((p) => Math.min(total, p + 1))} className="inline-flex items-center justify-center w-9 h-9 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_black]">
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default TicketStubPagination;`,
  },
  {
    name: 'PixelPagination',
    component: PixelPagination,
    icon: Gamepad2,
    colors: { gradient: 'from-lime-400 to-green-600', bg: 'bg-gradient-to-br from-lime-50 to-green-100 dark:from-lime-900/20 dark:to-green-900/30' },
    code: `import React, { useState } from "react";

const PixelPagination = () => {
  const [page, setPage] = useState(3);
  const total = 7;

  return (
    <nav className="font-mono inline-flex items-center gap-0.5 bg-stone-900 border-4 border-black p-1 shadow-[4px_4px_0px_0px_black]">
      <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-2 py-1 text-lime-300 text-xs font-black">◂</button>
      {Array.from({ length: total }).map((_, i) => {
        const n = i + 1, active = page === n;
        return (
          <button key={n} onClick={() => setPage(n)} className={\`w-7 h-7 text-[11px] font-black \${active ? "bg-lime-400 text-black" : "text-lime-300"}\`}>
            {n}
          </button>
        );
      })}
      <button onClick={() => setPage((p) => Math.min(total, p + 1))} className="px-2 py-1 text-lime-300 text-xs font-black">▸</button>
    </nav>
  );
};

export default PixelPagination;`,
  },
  {
    name: 'NewsprintPagination',
    component: NewsprintPagination,
    icon: Newspaper,
    colors: { gradient: 'from-stone-400 to-stone-600', bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30' },
    code: `import React, { useState } from "react";

const NewsprintPagination = () => {
  const [page, setPage] = useState(2);
  const total = 5;

  return (
    <nav className="font-mono inline-flex flex-col items-center gap-1">
      <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Page {page} of {total}</p>
      <div className="inline-flex items-center divide-x-2 divide-black border-2 border-black">
        {Array.from({ length: total }).map((_, i) => {
          const n = i + 1, active = page === n;
          return (
            <button key={n} onClick={() => setPage(n)} className={\`w-9 h-9 text-sm font-bold \${active ? "bg-black text-white" : "bg-[#f5f1e6] text-black"}\`}>
              {String(n).padStart(2, "0")}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NewsprintPagination;`,
  },
  {
    name: 'NumberedPagination',
    component: NumberedPagination,
    icon: Hash,
    colors: { gradient: 'from-cyan-400 to-blue-500', bg: 'bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/30' },
    code: `import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NumberedPagination = () => {
  const [page, setPage] = useState(4);
  const total = 12;

  return (
    <nav className="font-mono inline-flex items-center gap-3">
      <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="inline-flex items-center gap-1.5 px-3 h-9 text-xs font-bold uppercase border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_black] disabled:opacity-30">
        <ArrowLeft className="w-3 h-3" /> Prev
      </button>
      <div className="inline-flex items-center gap-0.5 text-sm">
        <span className="font-black bg-yellow-300 text-black border-2 border-black px-2 py-0.5">{String(page).padStart(2, "0")}</span>
        <span className="opacity-50 mx-1">/</span>
        <span className="font-bold opacity-60">{String(total).padStart(2, "0")}</span>
      </div>
      <button onClick={() => setPage((p) => Math.min(total, p + 1))} disabled={page === total} className="inline-flex items-center gap-1.5 px-3 h-9 text-xs font-bold uppercase border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_black] disabled:opacity-30">
        Next <ArrowRight className="w-3 h-3" />
      </button>
    </nav>
  );
};

export default NumberedPagination;`,
  },
];

export default paginationComponents;
