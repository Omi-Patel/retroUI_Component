import { useEffect, useState } from "react";
import {
  Eye,
  Code,
  Copy,
  Check,
  Info,
  Zap,
  Maximize2,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCopyToClipboard, useDocumentMeta } from "../../hooks";
import { SITE_META, buildOgImageUrl } from "../../lib/constants";
import { getComponentStatus } from "../../lib/componentStatus";
import { formatComponentName } from "../../lib/utils";
import { COMPONENT_REGISTRY } from "../../lib/registries";
import { DevicePreviewDialog } from "./DevicePreviewDialog";

/**
 * Renders the contents of a component showcase (header + variant chips +
 * preview/code tabs + info cards). The surrounding chrome (sidebar,
 * breadcrumb, prev/next pager) is provided by the parent route's
 * `ShowcaseLayout`.
 */
export const ComponentShowcasePage = ({
  components,
  title,
  description,
  folder,
}) => {
  const [active, setActive] = useState(components[0]?.name || "");
  const [tab, setTab] = useState("preview");
  const [fullscreen, setFullscreen] = useState(false);
  const [copied, copy] = useCopyToClipboard();

  useDocumentMeta({
    title: `${title} Components | ${SITE_META.name}`,
    description:
      description ||
      `Retro-themed ${title.toLowerCase()} components — copy and paste ready.`,
    canonical: `${SITE_META.url}/components/${folder.toLowerCase()}`,
    ogImage: buildOgImageUrl({
      title,
      subtitle: `${components.length} retro ${title.toLowerCase()} variants`,
      kind: "component",
    }),
  });

  useEffect(() => {
    setActive(components[0]?.name || "");
    setTab("preview");
  }, [components]);

  const meta = COMPONENT_REGISTRY.find(
    (c) => c.path === folder.toLowerCase() || c.name === title
  );
  const Icon = meta?.Icon;

  const activeComp = components.find((c) => c.name === active) || components[0];
  if (!activeComp) return null;
  const ActiveComponent = activeComp.component;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          {Icon && (
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded"
              style={{
                background: "var(--surface)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              <Icon className="w-4 h-4" />
            </span>
          )}
          <h1
            className="display text-[36px] tracking-tight"
            style={{ color: "var(--fg)" }}
          >
            {title}
          </h1>
          {meta?.category && (
            <span
              className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-[4px] border"
              style={{
                color: "var(--muted)",
                borderColor: "var(--border)",
              }}
            >
              {meta.category}
            </span>
          )}
        </div>
        {description && (
          <p
            className="text-[15px] max-w-2xl leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Variant chips */}
      <div
        className="mb-4 flex items-center gap-1.5 overflow-x-auto nice-scroll"
        style={{ paddingBottom: 4 }}
      >
        {components.map((v) => {
          const sel = v.name === active;
          const status = getComponentStatus(v.name);
          return (
            <button
              key={v.name}
              onClick={() => setActive(v.name)}
              className="px-3 h-8 rounded-md text-[12.5px] font-medium whitespace-nowrap transition-colors mono inline-flex items-center gap-1.5"
              style={{
                background: sel ? "var(--fg)" : "var(--bg)",
                color: sel ? "var(--bg)" : "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              <span>{formatComponentName(v.name)}</span>
              {status && (
                <span
                  className="inline-flex items-center px-1.5 rounded-sm"
                  style={{
                    fontSize: 9,
                    lineHeight: "14px",
                    height: 14,
                    letterSpacing: "0.06em",
                    background:
                      status === "new" ? "var(--accent)" : "var(--surface-2)",
                    color:
                      status === "new" ? "var(--accent-fg)" : "var(--fg)",
                    border: "1px solid var(--border)",
                  }}
                  aria-label={status === "new" ? "New component" : "Updated component"}
                >
                  {status === "new" ? "NEW" : "UPD"}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Preview / Code tab card */}
      <div
        className="rounded-lg overflow-hidden"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div
            className="flex items-center gap-1 rounded-md p-0.5"
            style={{ background: "var(--surface)" }}
          >
            {[
              { key: "preview", label: "Preview", Icon: Eye },
              { key: "code", label: "Code", Icon: Code },
            ].map(({ key, label, Icon: TabIcon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="inline-flex items-center gap-1.5 px-3 h-7 rounded text-[12px] font-medium transition-colors capitalize"
                style={{
                  background: tab === key ? "var(--bg)" : "transparent",
                  color: tab === key ? "var(--fg)" : "var(--muted)",
                  border:
                    tab === key
                      ? "1px solid var(--border)"
                      : "1px solid transparent",
                }}
              >
                <TabIcon className="w-3 h-3" />
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFullscreen(true)}
              title="Preview at device sizes"
              className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-md text-[12px] font-medium transition-colors hover:bg-[var(--surface-2)]"
              style={{
                background: "var(--bg)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
            <button
              onClick={() => copy(activeComp.code)}
              className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-md text-[12px] font-medium transition-colors"
              style={{
                background: "var(--surface-2)",
                color: "var(--fg)",
                border: "1px solid var(--border)",
              }}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {tab === "preview" ? (
          <div
            className="flex items-center justify-center p-10 min-h-[320px] overflow-x-auto"
            style={{ background: "var(--surface)" }}
          >
            <ActiveComponent />
          </div>
        ) : (
          <div
            style={{
              background: "#1d1f21",
              maxHeight: 540,
              overflow: "auto",
            }}
          >
            <div
              className="px-4 py-2 flex items-center gap-2 text-[11px] mono"
              style={{
                background: "#15171a",
                color: "#7a7d80",
                borderBottom: "1px solid #2a2c30",
              }}
            >
              components/{folder}/{activeComp.name}.jsx
            </div>
            <SyntaxHighlighter
              language="jsx"
              style={atomDark}
              showLineNumbers
              wrapLines
              customStyle={{
                margin: 0,
                background: "transparent",
                fontSize: 12.5,
              }}
            >
              {activeComp.code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>

      {/* Info cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="rounded-lg p-5"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
            <h3
              className="text-[13px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              Features
            </h3>
          </div>
          <ul
            className="space-y-2 text-[13.5px]"
            style={{ color: "var(--fg)" }}
          >
            {[
              "Retro-inspired with pixel-perfect detail",
              "Interactive hover & active states",
              "Fully responsive",
              "AA-accessible color contrast",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--muted)" }}
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-lg p-5"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
            <h3
              className="text-[13px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              Dependencies
            </h3>
          </div>
          <div className="space-y-2 mono text-[12.5px]">
            {[
              { name: "react", v: "^18.0.0" },
              { name: "tailwindcss", v: "^3.4.0" },
              { name: "framer-motion", v: "^11.0.0" },
              { name: "lucide-react", v: "^0.300.0" },
            ].map((d) => (
              <div key={d.name} className="flex items-center justify-between">
                <span style={{ color: "var(--fg)" }}>{d.name}</span>
                <span style={{ color: "var(--muted)" }}>{d.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen device-preview dialog */}
      <DevicePreviewDialog
        open={fullscreen}
        onClose={() => setFullscreen(false)}
        title={`${title} · ${formatComponentName(activeComp.name)}`}
        subtitle={`components/${folder}/${activeComp.name}.jsx`}
      >
        <div className="flex items-center justify-center p-10 min-h-full">
          <ActiveComponent />
        </div>
      </DevicePreviewDialog>
    </div>
  );
};

export default ComponentShowcasePage;
