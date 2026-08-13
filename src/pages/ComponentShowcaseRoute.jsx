import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import { ComponentShowcasePage } from "../components/showcase";
import { Dots } from "../components/showcase/parts";
import { componentLoaders } from "../data/components";
import { COMPONENT_REGISTRY } from "../lib/registries";

/**
 * Single data-driven route backing every `/components/<slug>` page. The
 * category is resolved from the URL param against COMPONENT_REGISTRY, and the
 * variant data is lazy-loaded via the matching entry in `componentLoaders`.
 * This replaces the ~28 near-identical hand-written `*Showcase.jsx` files.
 */
export default function ComponentShowcaseRoute() {
  const { slug } = useParams({ strict: false });
  const meta = COMPONENT_REGISTRY.find((c) => c.path === slug);
  const [components, setComponents] = useState(null);

  useEffect(() => {
    let active = true;
    setComponents(null);
    const load = componentLoaders[slug];
    if (load) {
      load().then((data) => {
        if (active) setComponents(data);
      });
    }
    return () => {
      active = false;
    };
  }, [slug]);

  if (!meta || !componentLoaders[slug]) {
    return (
      <div className="py-16 text-center" style={{ color: "var(--muted)" }}>
        Unknown component category.
      </div>
    );
  }

  if (!components) {
    // Full-viewport reservation: keeps the layout's pager and the footer below
    // the fold while the variant data loads, so the swap-in costs no CLS.
    return <Dots className="min-h-screen" />;
  }

  return (
    <ComponentShowcasePage
      components={components}
      title={meta.name}
      description={meta.description}
      folder={meta.folder}
      slug={meta.path}
    />
  );
}
