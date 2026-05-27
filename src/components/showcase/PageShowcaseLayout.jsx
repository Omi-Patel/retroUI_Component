import { Suspense } from "react";
import {
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ChevronRight, Book, Mail, Layers } from "lucide-react";
import { PAGE_REGISTRY } from "../../lib/registries";

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
 * Shared chrome for individual page-template showcases. Stays mounted
 * across navigations so only the right pane swaps when the user picks
 * a different template in the sidebar.
 */
export const PageShowcaseLayout = () => {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const slug = pathname.split("/")[2] || "";
  const current = PAGE_REGISTRY.find((p) => p.path === slug);
  const idx = PAGE_REGISTRY.findIndex((p) => p.path === slug);
  const prev = PAGE_REGISTRY[idx - 1];
  const next = PAGE_REGISTRY[idx + 1];

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div
        className="flex items-center gap-2 text-[12px] mono mb-6"
        style={{ color: "var(--muted)" }}
      >
        <Link to="/" className="hover:!text-[var(--fg)] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-[11px] h-[11px]" />
        <Link to="/pages" className="hover:!text-[var(--fg)] transition-colors">
          Pages
        </Link>
        {current && (
          <>
            <ChevronRight className="w-[11px] h-[11px]" />
            <span style={{ color: "var(--fg)" }}>{current.name}</span>
          </>
        )}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* SIDEBAR */}
        <aside className="hidden lg:block col-span-3">
          <div className="sticky top-[72px] max-h-[calc(100vh-88px)] overflow-y-auto nice-scroll pr-2">
            <div
              className="text-[11px] font-semibold uppercase tracking-wider mb-2 px-2"
              style={{ color: "var(--muted)" }}
            >
              Page templates
            </div>
            <ul className="space-y-0.5">
              {PAGE_REGISTRY.map((p) => {
                const isActive = p.path === slug;
                return (
                  <li key={p.path}>
                    <Link
                      to={`/pages/${p.path}`}
                      className="w-full text-left px-2 py-1.5 rounded-md text-[13px] flex items-center gap-2 transition-colors hover:!text-[var(--fg)]"
                      style={{
                        background: isActive ? "var(--surface-2)" : "transparent",
                        color: isActive ? "var(--fg)" : "var(--muted)",
                        fontWeight: isActive ? 500 : 400,
                      }}
                    >
                      <p.Icon className="w-3.5 h-3.5 opacity-70" />
                      <span className="truncate">{p.name}</span>
                      <span
                        className="ml-auto text-[10px] mono opacity-50"
                        style={{ color: "var(--muted)" }}
                      >
                        {p.count}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 px-2">
              <div
                className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--muted)" }}
              >
                Resources
              </div>
              <ul className="space-y-0.5">
                {[
                  { name: "Components", to: "/components", Icon: Layers },
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

        {/* MAIN */}
        <main className="col-span-12 lg:col-span-9 min-w-0">
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
            to={`/pages/${prev.path}`}
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
            to={`/pages/${next.path}`}
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

export default PageShowcaseLayout;
