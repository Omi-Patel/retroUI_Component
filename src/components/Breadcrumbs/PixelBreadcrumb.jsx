import React from "react";

const PixelBreadcrumb = () => {
  const items = ["World 1", "Level 2", "Boss"];
  return (
    <nav className="font-mono" aria-label="Breadcrumb">
      <ol className="inline-flex gap-1 items-center bg-stone-900 border-4 border-black shadow-[4px_4px_0px_0px_black] px-2 py-1.5">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <React.Fragment key={it}>
              <li
                className={`px-2 py-0.5 text-xs uppercase ${
                  last ? "bg-lime-400 text-black font-black" : "text-lime-300"
                }`}
                aria-current={last ? "page" : undefined}
              >
                {it}
              </li>
              {!last && <li className="text-lime-300/40">▸</li>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default PixelBreadcrumb;
