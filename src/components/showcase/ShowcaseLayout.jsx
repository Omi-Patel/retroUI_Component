import { Suspense } from "react";
import {
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ChevronRight, Book, Mail, Box, ArrowUpRight, Bug } from "lucide-react";
import { COMPONENT_REGISTRY } from "../../lib/registries";

function PaneLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex space-x-2">
        <span
          className="w-2 h-2 rounded-full animate-bounce"
          style={{ background: "var(--fg)", animationDelay: "0s" }}
        />
        <span
          className="w-2 h-2 rounded-full animate-bounce"
          style={{ background: "var(--fg)", animationDelay: "0.15s" }}
        />
        <span
          className="w-2 h-2 rounded-full animate-bounce"
          style={{ background: "var(--fg)", animationDelay: "0.3s" }}
        />
      </div>
    </div>
  );
}

/**
 * Docs-style chrome shared by every individual component showcase.
 * Rendered via a pathless layout route so it stays mounted while
 * the user navigates between component categories.
 */
export const ShowcaseLayout = () => {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const slug = pathname.split("/")[2] || "";
  const current = COMPONENT_REGISTRY.find((c) => c.path === slug);
  const idx = COMPONENT_REGISTRY.findIndex((c) => c.path === slug);
  const prev = COMPONENT_REGISTRY[idx - 1];
  const next = COMPONENT_REGISTRY[idx + 1];

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb + Edit on GitHub */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div
          className="flex items-center gap-2 text-[12px] mono"
          style={{ color: "var(--muted)" }}
        >
          <Link to="/" className="hover:!text-[var(--fg)] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-[11px] h-[11px]" />
          <Link
            to="/components"
            className="hover:!text-[var(--fg)] transition-colors"
          >
            Components
          </Link>
          {current && (
            <>
              <ChevronRight className="w-[11px] h-[11px]" />
              <span style={{ color: "var(--fg)" }}>{current.name}</span>
            </>
          )}
        </div>
        <a
          href="https://github.com/Omi-Patel/retroUI_Component"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[12px] mono hover:!text-[var(--fg)] transition-colors"
          style={{ color: "var(--muted)" }}
        >
          <Bug className="w-3 h-3" />
          <span className="hidden sm:inline">Edit on GitHub</span>
          <ArrowUpRight className="w-[11px] h-[11px]" />
        </a>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* SIDEBAR — stays mounted across navigations */}
        <aside className="hidden lg:block col-span-3 xl:col-span-2">
          <div className="sticky top-[72px] max-h-[calc(100vh-88px)] overflow-y-auto nice-scroll pr-2">
            <div className="mb-4">
              <div
                className="text-[11px] font-semibold uppercase tracking-wider mb-2 px-2"
                style={{ color: "var(--muted)" }}
              >
                Library
              </div>
              <ul className="space-y-0.5">
                {COMPONENT_REGISTRY.map((c) => {
                  const isActive = c.path === slug;
                  return (
                    <li key={c.path}>
                      <Link
                        to={`/components/${c.path}`}
                        className="w-full text-left px-2 py-1.5 rounded-md text-[13px] flex items-center gap-2 transition-colors hover:!text-[var(--fg)]"
                        style={{
                          background: isActive
                            ? "var(--surface-2)"
                            : "transparent",
                          color: isActive ? "var(--fg)" : "var(--muted)",
                          fontWeight: isActive ? 500 : 400,
                        }}
                      >
                        <c.Icon className="w-3.5 h-3.5 opacity-70" />
                        <span className="truncate">{c.name}</span>
                        <span
                          className="ml-auto text-[10px] mono opacity-50"
                          style={{ color: "var(--muted)" }}
                        >
                          {c.count}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 px-2">
              <div
                className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--muted)" }}
              >
                Resources
              </div>
              <ul className="space-y-0.5">
                {[
                  { name: "Page Templates", to: "/pages", Icon: Box },
                  { name: "Documentation", to: "/about", Icon: Book },
                  { name: "Contact", to: "/contact-us", Icon: Mail },
                ].map((r) => (
                  <li key={r.name}>
                    <Link
                      to={r.to}
                      className="w-full text-left px-2 py-1.5 rounded-md text-[13px] flex items-center gap-2 transition-colors hover:!text-[var(--fg)]"
                      style={{ color: "var(--muted)" }}
                    >
                      <r.Icon className="w-3.5 h-3.5 opacity-70" />
                      <span>{r.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* MAIN — only this part re-renders when the child changes */}
        <main className="col-span-12 lg:col-span-9 xl:col-span-10 min-w-0">
          <Suspense fallback={<PaneLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>

      {/* Prev / Next pager */}
      <div
        className="mt-16 pt-8 grid grid-cols-2 gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {prev ? (
          <Link
            to={`/components/${prev.path}`}
            className="rounded-lg p-4 text-left transition-colors block"
            style={{ border: "1px solid var(--border)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--surface)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div
              className="text-[11px] uppercase tracking-wider mb-1 inline-flex items-center gap-1"
              style={{ color: "var(--muted)" }}
            >
              <ChevronRight className="w-3 h-3 rotate-180" /> Previous
            </div>
            <div
              className="text-[14px] font-semibold"
              style={{ color: "var(--fg)" }}
            >
              {prev.name}
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/components/${next.path}`}
            className="rounded-lg p-4 text-right transition-colors block"
            style={{ border: "1px solid var(--border)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--surface)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div
              className="text-[11px] uppercase tracking-wider mb-1 inline-flex items-center gap-1 justify-end w-full"
              style={{ color: "var(--muted)" }}
            >
              Next <ChevronRight className="w-3 h-3" />
            </div>
            <div
              className="text-[14px] font-semibold"
              style={{ color: "var(--fg)" }}
            >
              {next.name}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default ShowcaseLayout;
