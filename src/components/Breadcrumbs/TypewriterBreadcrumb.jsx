import React from "react";

const TypewriterBreadcrumb = () => {
  const items = ["Home", "Library", "Components", "Buttons"];
  return (
    <nav className="font-mono text-sm" style={{ color: "var(--fg)" }} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <React.Fragment key={it}>
              <li>
                <a
                  href="#"
                  className={`uppercase tracking-wider px-1 ${last ? "font-bold" : "opacity-60 hover:opacity-100"}`}
                  aria-current={last ? "page" : undefined}
                >
                  {it}
                </a>
              </li>
              {!last && <li className="opacity-40">›</li>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default TypewriterBreadcrumb;
