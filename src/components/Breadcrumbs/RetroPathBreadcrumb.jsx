import React from "react";
import { Home } from "lucide-react";

const RetroPathBreadcrumb = () => {
  const items = ["Docs", "Guides", "Quickstart"];
  return (
    <nav
      className="font-mono inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_black]"
      aria-label="Breadcrumb"
    >
      <Home className="w-3.5 h-3.5" />
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it}>
            <span className="opacity-50">/</span>
            <a
              href="#"
              className={`text-xs uppercase tracking-wider ${
                last
                  ? "font-bold bg-yellow-300 px-1.5"
                  : "hover:underline"
              }`}
              aria-current={last ? "page" : undefined}
            >
              {it}
            </a>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default RetroPathBreadcrumb;
