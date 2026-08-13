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
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {Icon && (
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            <Icon className="w-4 h-4" />
          </span>
        )}
        <h1 className="display text-[34px] tracking-[-0.04em] sm:text-[42px]" style={{ color: "var(--fg)" }}>
          {title}
        </h1>
        {category && (
          <span
            className="inline-flex items-center rounded-md px-2 py-1 text-[9.5px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "var(--muted)", background: "var(--surface-2)" }}
          >
            {category}
          </span>
        )}
      </div>
      {description && (
        <p className="max-w-2xl text-[14.5px] leading-7" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}

/** A single horizontally-scrolling row of selectable variant chips. */
export function VariantChips({ items, isActive, onSelect, getKey, renderLabel, renderTrailing }) {
  return (
    <div className="variant-switcher">
      <div className="variant-switcher__label" aria-hidden="true">
        <span>Variants</span>
        <span className="variant-switcher__count">{items.length}</span>
      </div>

      <div className="variant-switcher__options nice-scroll" aria-label="Available variants">
        {items.map((item, i) => {
          const sel = isActive(item, i);

          return (
            <button
              key={getKey(item, i)}
              type="button"
              onClick={() => onSelect(item, i)}
              className="variant-tab"
              data-active={sel}
              aria-pressed={sel}
            >
              <span>{renderLabel(item, i)}</span>
              {renderTrailing && renderTrailing(item, i)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Bordered info card with an icon + uppercase title and arbitrary body. */
export function InfoCard({ title, Icon, children }) {
  return (
    <div className="site-card-flat p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.09em]" style={{ color: "var(--muted)" }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}
