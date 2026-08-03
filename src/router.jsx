import { lazy, Suspense } from "react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

import Navbar from "./components/AppUI/Navbar";
import { Footer } from "./components/AppUI/Footer";
import ErrorBoundary from "./components/AppUI/ErrorBoundary";
import { ShowcaseLayout } from "./components/showcase";
import { Dots } from "./components/showcase/parts";

/* ---------- Lazy pages ---------- */
const Home = lazy(() => import("./pages/Home"));
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
const PageLoader = () => <Dots className="min-h-[60vh]" />;

/* ---------- Root layout ---------- */
const rootRoute = createRootRoute({
  component: () => (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  ),
  notFoundComponent: () => (
    <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 text-center">
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
