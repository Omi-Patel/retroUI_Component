import { Type, ArrowRight, Square, Home } from 'lucide-react';

import TypewriterBreadcrumb from '../../components/Breadcrumbs/TypewriterBreadcrumb';
import ArrowBreadcrumb from '../../components/Breadcrumbs/ArrowBreadcrumb';
import PixelBreadcrumb from '../../components/Breadcrumbs/PixelBreadcrumb';
import RetroPathBreadcrumb from '../../components/Breadcrumbs/RetroPathBreadcrumb';

export const breadcrumbComponents = [
  {
    name: 'TypewriterBreadcrumb',
    component: TypewriterBreadcrumb,
    icon: Type,
    colors: { gradient: 'from-stone-400 to-stone-600', bg: 'bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-900/30' },
    code: `import React from "react";

const TypewriterBreadcrumb = () => {
  const items = ["Home", "Library", "Components", "Buttons"];
  return (
    <nav className="font-mono text-sm" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <React.Fragment key={it}>
              <li>
                <a href="#" className={\`uppercase tracking-wider px-1 \${last ? "font-bold" : "opacity-60"}\`}>
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

export default TypewriterBreadcrumb;`,
  },
  {
    name: 'ArrowBreadcrumb',
    component: ArrowBreadcrumb,
    icon: ArrowRight,
    colors: { gradient: 'from-yellow-300 to-pink-400', bg: 'bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-yellow-900/20 dark:to-pink-900/30' },
    code: `import React from "react";

const ArrowBreadcrumb = () => {
  const items = [
    { label: "Shop", color: "bg-yellow-300" },
    { label: "Music", color: "bg-pink-300" },
    { label: "Vinyl", color: "bg-cyan-300" },
  ];
  return (
    <nav className="font-mono">
      <ol className="inline-flex">
        {items.map((it, i) => (
          <li key={it.label} className={\`\${it.color} text-black border-2 border-black px-4 py-1.5 text-xs font-black uppercase\`}
            style={{
              clipPath: i === items.length - 1
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 12px 50%)"
                : "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
              marginLeft: i === 0 ? 0 : -2,
              paddingLeft: i === 0 ? 16 : 20,
              paddingRight: i === items.length - 1 ? 16 : 20,
            }}>
            {it.label}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ArrowBreadcrumb;`,
  },
  {
    name: 'PixelBreadcrumb',
    component: PixelBreadcrumb,
    icon: Square,
    colors: { gradient: 'from-lime-400 to-green-600', bg: 'bg-gradient-to-br from-lime-50 to-green-100 dark:from-lime-900/20 dark:to-green-900/30' },
    code: `import React from "react";

const PixelBreadcrumb = () => {
  const items = ["World 1", "Level 2", "Boss"];
  return (
    <nav className="font-mono">
      <ol className="inline-flex gap-1 items-center bg-stone-900 border-4 border-black shadow-[4px_4px_0px_0px_black] px-2 py-1.5">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <React.Fragment key={it}>
              <li className={\`px-2 py-0.5 text-xs uppercase \${last ? "bg-lime-400 text-black font-black" : "text-lime-300"}\`}>
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

export default PixelBreadcrumb;`,
  },
  {
    name: 'RetroPathBreadcrumb',
    component: RetroPathBreadcrumb,
    icon: Home,
    colors: { gradient: 'from-yellow-300 to-amber-500', bg: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/30' },
    code: `import React from "react";
import { Home } from "lucide-react";

const RetroPathBreadcrumb = () => {
  const items = ["Docs", "Guides", "Quickstart"];
  return (
    <nav className="font-mono inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_black]">
      <Home className="w-3.5 h-3.5" />
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it}>
            <span className="opacity-50">/</span>
            <a href="#" className={\`text-xs uppercase tracking-wider \${last ? "font-bold bg-yellow-300 px-1.5" : "hover:underline"}\`}>
              {it}
            </a>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default RetroPathBreadcrumb;`,
  },
];

export default breadcrumbComponents;
