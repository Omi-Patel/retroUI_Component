/**
 * Small presentational pieces shared by both showcase renderers
 * (ComponentShowcasePage + PageShowcasePage) and their routes/layout.
 * Extracted to kill the chrome that was previously copy-pasted between the
 * two parallel showcase systems.
 */

/** Three bouncing dots — the canonical loading indicator across the app. */
export function Dots({ className = "min-h-[40vh]" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex space-x-2">
        <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: "var(--fg)", animationDelay: "0s" }} />
        <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: "var(--fg)", animationDelay: "0.15s" }} />
        <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: "var(--fg)", animationDelay: "0.3s" }} />
      </div>
    </div>
  );
}

/** Showcase header: optional icon, title, optional category chip, description. */
export function ShowcaseHeader({ Icon, title, category, description, className = "mb-8" }) {
  return (
    <div className={className}>
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
        <h1 className="display text-[36px] tracking-tight" style={{ color: "var(--fg)" }}>
          {title}
        </h1>
        {category && (
          <span
            className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-[4px] border"
            style={{ color: "var(--muted)", borderColor: "var(--border)" }}
          >
            {category}
          </span>
        )}
      </div>
      {description && (
        <p className="text-[15px] max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}

/** A single horizontally-scrolling row of selectable variant chips. */
export function VariantChips({ items, isActive, onSelect, getKey, renderLabel, renderTrailing }) {
  return (
    <div className="mb-4 flex items-center gap-1.5 overflow-x-auto nice-scroll" style={{ paddingBottom: 4 }}>
      {items.map((item, i) => {
        const sel = isActive(item, i);
        return (
          <button
            key={getKey(item, i)}
            onClick={() => onSelect(item, i)}
            className="px-3 h-8 rounded-md text-[12.5px] font-medium whitespace-nowrap transition-colors mono inline-flex items-center gap-1.5"
            style={{
              background: sel ? "var(--fg)" : "var(--bg)",
              color: sel ? "var(--bg)" : "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            <span>{renderLabel(item, i)}</span>
            {renderTrailing && renderTrailing(item, i)}
          </button>
        );
      })}
    </div>
  );
}

/** Bordered info card with an icon + uppercase title and arbitrary body. */
export function InfoCard({ title, Icon, children }) {
  return (
    <div className="rounded-lg p-5" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
        <h3 className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}
