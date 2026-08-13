import { lazy, Suspense, useLayoutEffect } from "react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";

import Navbar from "./components/AppUI/Navbar";
import { Footer } from "./components/AppUI/Footer";
import ErrorBoundary from "./components/AppUI/ErrorBoundary";
import { ShowcaseLayout } from "./components/showcase";
import { Dots } from "./components/showcase/parts";

// Home is the landing route and the CLS-critical one: bundling it eagerly means
// the first paint is the real page, instead of a short loader that then gets
// replaced by much taller content (which shifts the footer by whole viewports).
import Home from "./pages/Home";

/* ---------- Lazy pages ---------- */
const About = lazy(() => import("./pages/About"));
const GettingStarted = lazy(() => import("./pages/GettingStarted"));
const Component = lazy(() => import("./pages/Component"));
const Icons = lazy(() => import("./pages/Icons"));
const ReleaseNotes = lazy(() => import("./pages/ReleaseNotes"));

const ComponentShowcaseRoute = lazy(() =>
  import("./pages/ComponentShowcaseRoute")
);

const Pages = lazy(() => import("./pagesComponents/PageShowcase"));
const PageShowcaseRoute = lazy(() =>
  import("./pagesComponents/PageShowcase/PageShowcaseRoute")
);

const PrivacyPolicy = lazy(() => import("./components/AppUI/PrivacyPolicy"));
const Terms = lazy(() => import("./components/AppUI/Terms"));
const ContactUs = lazy(() => import("./components/AppUI/ContactUs"));

/* ---------- Loader ---------- */
// Reserves a full viewport so the footer (and anything else below) starts off
// screen while a route chunk loads. When the real content swaps in, nothing
// that was visible moves — which is what Cumulative Layout Shift measures.
const PageLoader = () => <Dots className="route-loader" />;

/* Reset the viewport before the browser paints the next route. Doing this in
   individual page effects happens one frame too late and can briefly expose
   the footer at the previous page's scroll position. */
const RouteContent = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};

/* ---------- Root layout ---------- */
const rootRoute = createRootRoute({
  component: () => (
    <div className="site-shell">
      <Navbar />
      <main className="site-main">
        <RouteContent />
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => (
    <section className="site-container py-24 text-center">
      <div className="ornament-hr mb-6 max-w-xs mx-auto">
        <span className="label">ERROR · 404</span>
      </div>
      <h1
        className="display text-[48px] sm:text-[72px] leading-[1.0]"
        style={{ color: "var(--fg)" }}
      >
        Page{" "}
        <span className="display-italic" style={{ color: "var(--muted)" }}>
          not found.
        </span>
      </h1>
      <p className="mt-4 text-[15px]" style={{ color: "var(--muted)" }}>
        The page you were looking for doesn&apos;t exist or has been moved.
      </p>
    </section>
  ),
});

const makeRoute = (path, Element, parent = rootRoute) =>
  createRoute({
    getParentRoute: () => parent,
    path,
    component: () => <Element />,
  });

/* ---------- Top-level routes (no sidebar chrome) ---------- */
const topLevel = [
  ["/", Home],
  ["/about", About],
  ["/getting-started", GettingStarted],
  ["/components", Component],
  ["/icons", Icons],
  ["/pages", Pages],
  ["/release-notes", ReleaseNotes],
  ["/privacy-policy", PrivacyPolicy],
  ["/terms-conditions", Terms],
  ["/contact-us", ContactUs],
].map(([p, el]) => makeRoute(p, el));

/* ---------- Component showcase layout (sticky sidebar) ---------- */
const componentShowcaseLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "components-showcase-layout",
  component: ShowcaseLayout,
});

// One generic param route serves every category; the slug is resolved against
// COMPONENT_REGISTRY inside ComponentShowcaseRoute.
const componentShowcaseChildren = [
  makeRoute(
    "/components/$slug",
    ComponentShowcaseRoute,
    componentShowcaseLayoutRoute
  ),
];

/* ---------- Page-template showcase layout (sticky sidebar) ---------- */
const pageShowcaseLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "pages-showcase-layout",
  component: ShowcaseLayout,
});

// One generic param route serves every template; the slug is resolved against
// PAGE_REGISTRY inside PageShowcaseRoute.
const pageShowcaseChildren = [
  makeRoute("/pages/$slug", PageShowcaseRoute, pageShowcaseLayoutRoute),
];

const routeTree = rootRoute.addChildren([
  ...topLevel,
  componentShowcaseLayoutRoute.addChildren(componentShowcaseChildren),
  pageShowcaseLayoutRoute.addChildren(pageShowcaseChildren),
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});
