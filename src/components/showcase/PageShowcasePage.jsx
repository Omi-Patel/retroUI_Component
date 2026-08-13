import { useEffect, useState } from "react";
import {
  ExternalLink,
  Slash,
  Package,
  Layers,
  Download,
  Copy,
  Check,
  Maximize2,
} from "lucide-react";
import { useCopyToClipboard, useDocumentMeta } from "../../hooks";
import { SITE_META } from "../../lib/constants";
import { PAGE_REGISTRY } from "../../lib/registries";
import { DevicePreviewDialog } from "./DevicePreviewDialog";
import { ShowcaseHeader, VariantChips, InfoCard } from "./parts";

/**
 * Renders the contents of a single page-template showcase (header + variant
 * chips + browser-frame preview + info cards). The surrounding chrome —
 * breadcrumb, sidebar, prev/next pager — is provided by `ShowcaseLayout`.
 */
export const PageShowcasePage = ({ slug, title, description, variants }) => {
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [, copy] = useCopyToClipboard();

  useDocumentMeta({
    title: `${title} | ${SITE_META.name}`,
    description:
      description ||
      `Retro-themed ${title.toLowerCase()} page template — fully responsive.`,
    canonical: `${SITE_META.url}/pages/${slug}`,
  });

  useEffect(() => {
    setActive(0);
  }, [slug]);

  const meta = PAGE_REGISTRY.find((p) => p.path === slug);
  const Icon = meta?.Icon;
  const ActivePage = variants[active]?.component;
  const externalLink = variants[active]?.githubUrl;

  return (
    <div>
      <ShowcaseHeader
        Icon={Icon}
        title={title}
        category={meta?.category}
        description={description}
        className="mb-6"
      />

      {/* Variant chips */}
      <VariantChips
        items={variants}
        getKey={(v) => v.name}
        isActive={(v, i) => i === active}
        onSelect={(v, i) => setActive(i)}
        renderLabel={(v) => v.label || v.name}
      />

      {/* Browser-frame preview */}
      <div
        className="site-card overflow-hidden"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="flex items-center gap-3 px-4 py-2.5"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "#e07b67" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "#e3b762" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "#7da567" }}
            />
          </div>
          <div
            className="flex-1 max-w-md mx-auto inline-flex items-center gap-2 h-7 px-2.5 rounded text-[11.5px] mono"
            style={{
              background: "var(--surface)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            <Slash className="w-[10px] h-[10px]" />
            <span>retroui.dev/templates/{slug}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFullscreen(true)}
              title="Preview at device sizes"
              className="inline-flex items-center justify-center gap-1.5 h-7 px-3 rounded-md text-[12px] font-medium transition-colors hover:bg-[var(--surface-2)]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--fg)",
              }}
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 h-7 px-3 rounded-md text-[12px] font-medium transition-colors hover:bg-[var(--surface-2)]"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                }}
              >
                <ExternalLink className="w-3 h-3" />
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
          </div>
        </div>

        <div
          className="overflow-auto nice-scroll"
          style={{
            background: "var(--bg)",
            maxHeight: "70vh",
            minHeight: 480,
          }}
        >
          {ActivePage ? (
            <div className="component-sandbox origin-top">
              <ActivePage />
            </div>
          ) : (
            <div className="p-10 text-center" style={{ color: "var(--muted)" }}>
              Preview unavailable
            </div>
          )}
        </div>
      </div>

      {/* Info cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard title="Includes" Icon={Package}>
          <ul className="space-y-2 text-[13.5px]" style={{ color: "var(--fg)" }}>
            {["Navbar + Footer", "Hero with CTA", "Responsive layout", "Dark mode"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
                {t}
              </li>
            ))}
          </ul>
        </InfoCard>
        <InfoCard title="Built with" Icon={Layers}>
          <div className="flex flex-wrap gap-1.5">
            {["Buttons", "Cards", "Inputs", "Navbar", "Footer"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-[4px] border"
                style={{ color: "var(--muted)", borderColor: "var(--border)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </InfoCard>
        <InfoCard title="Get template" Icon={Download}>
          <div className="space-y-2">
            <button
              onClick={() =>
                externalLink ? copy(externalLink) : copy(window.location.href)
              }
              className="inline-flex items-center justify-center gap-2 w-full h-8 px-3 rounded-md text-[12.5px] font-medium transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
            >
              <Copy className="w-3 h-3" /> Copy link
            </button>
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-8 px-3 rounded-md text-[12.5px] font-medium transition-colors hover:bg-[var(--surface-2)]"
                style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
              >
                <Download className="w-3 h-3" /> View source
              </a>
            )}
          </div>
        </InfoCard>
      </div>

      {/* Fullscreen device-preview dialog */}
      <DevicePreviewDialog
        open={fullscreen}
        onClose={() => setFullscreen(false)}
        title={`${title} · ${variants[active]?.label || variants[active]?.name}`}
        subtitle={`retroui.dev/templates/${slug}`}
      >
        {ActivePage && <div className="component-sandbox min-h-full"><ActivePage /></div>}
      </DevicePreviewDialog>
    </div>
  );
};

export default PageShowcasePage;
