import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import { PageShowcasePage } from "../../components/showcase";
import { Dots } from "../../components/showcase/parts";
import { pageLoaders } from "../../data/pages";
import { PAGE_REGISTRY } from "../../lib/registries";

/**
 * Single data-driven route backing every `/pages/<slug>` template showcase.
 * The template is resolved from the URL param against PAGE_REGISTRY and its
 * variant data is lazy-loaded via the matching entry in `pageLoaders`. This
 * replaces the 14 near-identical hand-written `*PageShowcase.jsx` wrappers.
 */
export default function PageShowcaseRoute() {
  const { slug } = useParams({ strict: false });
  const meta = PAGE_REGISTRY.find((p) => p.path === slug);
  const [data, setData] = useState(null);

  useEffect(() => {
    let active = true;
    setData(null);
    const load = pageLoaders[slug];
    if (load) {
      load().then((d) => {
        if (active) setData(d);
      });
    }
    return () => {
      active = false;
    };
  }, [slug]);

  if (!meta || !pageLoaders[slug]) {
    return (
      <div className="py-16 text-center" style={{ color: "var(--muted)" }}>
        Unknown page template.
      </div>
    );
  }

  if (!data) {
    return <Dots />;
  }

  return (
    <PageShowcasePage
      slug={data.slug}
      title={data.title}
      description={data.description}
      variants={data.variants}
    />
  );
}
