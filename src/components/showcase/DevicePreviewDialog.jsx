import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  RefreshCw,
} from "lucide-react";

/**
 * Full-screen preview dialog with device-size toggles.
 *
 * Renders `children` inside an iframe so the document's own viewport width
 * matches the chosen device — Tailwind's `sm:`/`md:`/`lg:` breakpoints and
 * any media-query CSS react correctly, not just the visual clipping.
 */

const DEVICES = [
  { key: "desktop", label: "Desktop", Icon: Monitor, width: 1280, height: null },
  { key: "tablet", label: "Tablet", Icon: Tablet, width: 768, height: 1024 },
  { key: "mobile", label: "Mobile", Icon: Smartphone, width: 390, height: 844 },
  { key: "responsive", label: "Responsive", Icon: Maximize2, width: null, height: null },
];

/* ---------- Inner iframe that hosts the children with its own viewport ---------- */
function PreviewFrame({ children, reloadKey }) {
  const iframeRef = useRef(null);
  const [body, setBody] = useState(null);

  // Build srcDoc so the iframe starts as same-origin about:srcdoc with
  // an empty doc. We then inject the parent's stylesheets on `load`.
  const srcDoc =
    "<!DOCTYPE html><html><head><meta charset=\"utf-8\"/></head><body></body></html>";

  const handleLoad = (e) => {
    const doc = e.currentTarget.contentDocument;
    if (!doc) return;

    // Clone every <style> and <link rel="stylesheet"> from the parent so
    // Tailwind utilities and global tokens work identically inside.
    const heads = document.head.querySelectorAll(
      'style, link[rel="stylesheet"]'
    );
    doc.head.innerHTML = "";
    const charset = doc.createElement("meta");
    charset.setAttribute("charset", "utf-8");
    doc.head.appendChild(charset);
    const viewport = doc.createElement("meta");
    viewport.setAttribute("name", "viewport");
    viewport.setAttribute("content", "width=device-width, initial-scale=1");
    doc.head.appendChild(viewport);
    heads.forEach((node) => {
      doc.head.appendChild(node.cloneNode(true));
    });

    // Mirror the parent's <html> class so dark mode stays in sync.
    doc.documentElement.className = document.documentElement.className;

    // Reset body so the preview fills the iframe with our app background.
    doc.body.style.margin = "0";
    doc.body.style.background = "var(--bg)";
    doc.body.style.color = "var(--fg)";
    doc.body.style.minHeight = "100vh";
    doc.body.style.fontFamily =
      "'Space Grotesk', ui-sans-serif, system-ui";

    setBody(doc.body);
  };

  // Keep dark mode in sync if the user toggles the theme while the
  // preview is open.
  useEffect(() => {
    if (!body) return;
    const observer = new MutationObserver(() => {
      const doc = iframeRef.current?.contentDocument;
      if (!doc) return;
      doc.documentElement.className = document.documentElement.className;
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [body]);

  return (
    <>
      <iframe
        key={reloadKey}
        ref={iframeRef}
        title="Device preview"
        srcDoc={srcDoc}
        onLoad={handleLoad}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          background: "var(--bg)",
        }}
      />
      {body && createPortal(children, body)}
    </>
  );
}

export const DevicePreviewDialog = ({
  open,
  onClose,
  title,
  subtitle,
  children,
}) => {
  const [deviceKey, setDeviceKey] = useState("responsive");
  const [reloadKey, setReloadKey] = useState(0);
  const frameRef = useRef(null);
  const [measured, setMeasured] = useState({ w: 0, h: 0 });

  // ESC to close + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // measure the rendered frame
  useEffect(() => {
    if (!open) return;
    const el = frameRef.current;
    if (!el) return;
    const update = () =>
      setMeasured({
        w: Math.round(el.clientWidth),
        h: Math.round(el.clientHeight),
      });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, deviceKey]);

  if (!open) return null;

  const device = DEVICES.find((d) => d.key === deviceKey) || DEVICES[0];

  const frameStyle = (() => {
    if (device.key === "responsive") {
      return {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "100%",
      };
    }
    return {
      width: `min(${device.width}px, 100%)`,
      maxWidth: `${device.width}px`,
      height: device.height
        ? `min(${device.height}px, calc(100vh - 180px))`
        : "calc(100vh - 180px)",
    };
  })();

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${title}`}
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: "var(--bg)" }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between gap-3 px-4 sm:px-6 h-14 flex-shrink-0"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="sticker-flat"
            style={{ background: "var(--fg)", color: "var(--bg)" }}
          >
            PREVIEW
          </span>
          <div className="min-w-0">
            <div
              className="text-[13.5px] font-semibold truncate"
              style={{ color: "var(--fg)" }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                className="text-[11px] mono truncate"
                style={{ color: "var(--muted)" }}
              >
                {subtitle}
              </div>
            )}
          </div>
        </div>

        <div
          className="hidden md:flex items-center gap-0.5 rounded-md p-0.5"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
          }}
        >
          {DEVICES.map(({ key, label, Icon }) => {
            const sel = deviceKey === key;
            return (
              <button
                key={key}
                onClick={() => setDeviceKey(key)}
                aria-label={label}
                title={label}
                className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded text-[11.5px] font-medium transition-colors mono"
                style={{
                  background: sel ? "var(--fg)" : "transparent",
                  color: sel ? "var(--bg)" : "var(--muted)",
                }}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden lg:inline">{label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span
            className="hidden sm:inline-flex items-center px-2 h-7 rounded text-[11px] mono"
            style={{
              background: "var(--bg)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            {measured.w} × {measured.h}
          </span>
          <button
            onClick={() => setReloadKey((k) => k + 1)}
            aria-label="Reload preview"
            title="Reload"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[var(--surface-2)]"
            style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            aria-label="Close preview"
            title="Close (Esc)"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[var(--surface-2)]"
            style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile-only device toggle row */}
      <div
        className="md:hidden flex items-center justify-center gap-0.5 p-2 flex-shrink-0"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="flex items-center gap-0.5 rounded-md p-0.5"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
          }}
        >
          {DEVICES.map(({ key, label, Icon }) => {
            const sel = deviceKey === key;
            return (
              <button
                key={key}
                onClick={() => setDeviceKey(key)}
                aria-label={label}
                className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded text-[11px] font-medium transition-colors mono"
                style={{
                  background: sel ? "var(--fg)" : "transparent",
                  color: sel ? "var(--bg)" : "var(--muted)",
                }}
              >
                <Icon className="w-3 h-3" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage */}
      <div
        className="flex-1 flex items-start justify-center overflow-auto nice-scroll p-4 sm:p-8"
        style={{ background: "var(--bg)" }}
      >
        <div
          ref={frameRef}
          className="mx-auto rounded-lg transition-all duration-200 overflow-hidden"
          style={{
            ...frameStyle,
            background: "var(--bg)",
            border: "1px solid var(--border-strong)",
            boxShadow:
              device.key === "responsive"
                ? "none"
                : "4px 4px 0 0 var(--border-strong)",
          }}
        >
          <PreviewFrame reloadKey={reloadKey}>{children}</PreviewFrame>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DevicePreviewDialog;
