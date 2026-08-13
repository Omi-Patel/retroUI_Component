import { Suspense } from "react";
import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Box,
  Bug,
  ChevronDown,
  ChevronRight,
  Layers3,
  Mail,
} from "lucide-react";
import { COMPONENT_REGISTRY, PAGE_REGISTRY } from "../../lib/registries";
import { Dots } from "./parts";

const SECTIONS = {
  components: {
    registry: COMPONENT_REGISTRY,
    base: "/components",
    crumb: "Components",
    heading: "Component index",
    editOnGitHub: "https://github.com/Omi-Patel/retroUI_Component",
    resources: [
      { name: "Page templates", to: "/pages", Icon: Box },
      { name: "Getting started", to: "/getting-started", Icon: BookOpen },
      { name: "Contact", to: "/contact-us", Icon: Mail },
    ],
  },
  pages: {
    registry: PAGE_REGISTRY,
    base: "/pages",
    crumb: "Page templates",
    heading: "Template index",
    editOnGitHub: null,
    resources: [
      { name: "Components", to: "/components", Icon: Layers3 },
      { name: "Getting started", to: "/getting-started", Icon: BookOpen },
      { name: "Contact", to: "/contact-us", Icon: Mail },
    ],
  },
};

export const ShowcaseLayout = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const section = SECTIONS[pathname.split("/")[1]] || SECTIONS.components;
  const { registry, base, crumb, heading, editOnGitHub, resources } = section;
  const slug = pathname.split("/")[2] || "";
  const current = registry.find((entry) => entry.path === slug);
  const index = registry.findIndex((entry) => entry.path === slug);
  const previous = registry[index - 1];
  const next = registry[index + 1];

  return (
    <div className="site-container py-7 sm:py-10">
      <div className="grid gap-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-0">
        <aside
          className="hidden border-r pr-5 lg:block"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="sticky top-[88px] max-h-[calc(100vh-112px)] overflow-y-auto nice-scroll">
            <div className="px-2 pb-2 pt-1">
              <p className="label" style={{ color: "var(--muted)" }}>
                {heading}
              </p>
            </div>

            <nav aria-label={heading}>
              <ul className="space-y-0.5">
                {registry.map((entry) => {
                  const active = entry.path === slug;

                  return (
                    <li key={entry.path}>
                      <Link
                        to={`${base}/${entry.path}`}
                        className="group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] transition-colors"
                        style={{
                          background: active ? "var(--accent-soft)" : "transparent",
                          color: active ? "var(--accent)" : "var(--muted)",
                          fontWeight: active ? 700 : 550,
                        }}
                      >
                        <entry.Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="min-w-0 flex-1 truncate">{entry.name}</span>
                        <span className="mono text-[9px] opacity-60">{entry.count}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className="mt-6 border-t px-2 pt-5"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="label" style={{ color: "var(--muted)" }}>
                Keep exploring
              </p>
              <ul className="mt-2 space-y-0.5">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      to={resource.to}
                      className="flex items-center gap-2.5 rounded-lg px-0 py-2 text-[12px] font-semibold transition-colors hover:!text-[var(--fg)]"
                      style={{ color: "var(--muted)" }}
                    >
                      <resource.Icon className="h-3.5 w-3.5" /> {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="min-w-0 max-w-full lg:pl-9 xl:pl-11">
          <div className="mb-7 flex min-h-7 w-full items-center justify-between gap-4">
            <div className="page-breadcrumb mb-0 min-w-0">
              <Link
                to="/"
                className="transition-colors hover:!text-[var(--fg)]"
              >
                Home
              </Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <Link
                to={base}
                className="transition-colors hover:!text-[var(--fg)]"
              >
                {crumb}
              </Link>
              {current && (
                <>
                  <ChevronRight className="h-3 w-3 shrink-0" />
                  <span className="truncate" style={{ color: "var(--fg)" }}>
                    {current.name}
                  </span>
                </>
              )}
            </div>

            {editOnGitHub && (
              <a
                href={editOnGitHub}
                target="_blank"
                rel="noreferrer"
                className="hidden shrink-0 items-center gap-1.5 text-[11px] font-semibold transition-colors hover:!text-[var(--fg)] sm:inline-flex"
                style={{ color: "var(--muted)" }}
              >
                <Bug className="h-3 w-3" /> Suggest an edit
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>

          <div className="relative mb-7 lg:hidden">
            <select
              value={slug}
              onChange={(event) => navigate({ to: `${base}/${event.target.value}` })}
              className="site-input appearance-none px-4 pr-10 font-semibold"
              aria-label={`Choose a ${crumb.toLowerCase()} category`}
            >
              {registry.map((entry) => (
                <option key={entry.path} value={entry.path}>
                  {entry.name} · {entry.count}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2"
              style={{ color: "var(--muted)" }}
            />
          </div>

          <main className="min-w-0 max-w-full">
            <Suspense fallback={<Dots className="min-h-screen" />}>
              <Outlet />
            </Suspense>
          </main>

          <nav
            className="mt-14 grid grid-cols-2 gap-3 border-t pt-7"
            style={{ borderColor: "var(--border)" }}
            aria-label="Adjacent entries"
          >
            {previous ? (
              <Link
                to={`${base}/${previous.path}`}
                className="site-card-flat group p-4 sm:p-5"
              >
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: "var(--muted)" }}
                >
                  <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                  Previous
                </span>
                <span
                  className="mt-2 block text-[13.5px] font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  {previous.name}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`${base}/${next.path}`}
                className="site-card-flat group p-4 text-right sm:p-5"
              >
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: "var(--muted)" }}
                >
                  Next
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span
                  className="mt-2 block text-[13.5px] font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  {next.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseLayout;
