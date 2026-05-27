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
import {
  ShowcaseLayout,
  PageShowcaseLayout,
} from "./components/showcase";

/* ---------- Lazy pages ---------- */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Component = lazy(() => import("./pages/Component"));

const ButtonShowcase = lazy(() => import("./pages/ComponentShowcase"));
const CardShowcase = lazy(() => import("./pages/CardShowcase"));
const InputShowcase = lazy(() => import("./pages/InputShowcase"));
const LoaderShowcase = lazy(() => import("./pages/LoaderShowcase"));
const SwitchShowcase = lazy(() => import("./pages/SwitchShowcase"));
const NavbarShowcase = lazy(() => import("./pages/NavbarShowcase"));
const FooterShowcase = lazy(() => import("./pages/FooterShowcase"));
const TableShowcase = lazy(() => import("./pages/TableShowcase"));
const AvatarShowcase = lazy(() => import("./pages/AvatarShowcase"));
const SigninShowcase = lazy(() => import("./pages/SigninShowcase"));
const SignupShowcase = lazy(() => import("./pages/SignupShowcase"));
const PricingShowcase = lazy(() => import("./pages/PricingShowcase"));
const ModalShowcase = lazy(() => import("./pages/ModalShowcase"));
const ToastShowcase = lazy(() => import("./pages/ToastShowcase"));
const DropdownShowcase = lazy(() => import("./pages/DropdownShowcase"));
const TabsShowcase = lazy(() => import("./pages/TabsShowcase"));
const AccordionShowcase = lazy(() => import("./pages/AccordionShowcase"));
const BadgeShowcase = lazy(() => import("./pages/BadgeShowcase"));
const TooltipShowcase = lazy(() => import("./pages/TooltipShowcase"));
const AlertShowcase = lazy(() => import("./pages/AlertShowcase"));
const ProgressShowcase = lazy(() => import("./pages/ProgressShowcase"));
const BreadcrumbShowcase = lazy(() => import("./pages/BreadcrumbShowcase"));
const PaginationShowcase = lazy(() => import("./pages/PaginationShowcase"));
const SkeletonShowcase = lazy(() => import("./pages/SkeletonShowcase"));

const Pages = lazy(() => import("./pagesComponents/PageShowcase"));
const HomePageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/HomePageShowcase")
);
const AboutPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/AboutPageShowcase")
);
const ServicePageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/ServicePageShowcase")
);
const ContactPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/ContactPageShowcase")
);
const DashboardPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/DashboardPageShowcase")
);
const ErrorPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/ErrorPageShowcase")
);
const EcomPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/EcomPageShowcase")
);
const BlogPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/BlogPageShowcase")
);
const AuthPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/AuthPageShowcase")
);
const PricingPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/PricingPageShowcase")
);
const ComingSoonPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/ComingSoonPageShowcase")
);
const SettingsPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/SettingsPageShowcase")
);
const DocsPageShowcase = lazy(() =>
  import("./pagesComponents/PageShowcase/DocsPageShowcase")
);

const PrivacyPolicy = lazy(() => import("./components/AppUI/PrivacyPolicy"));
const Terms = lazy(() => import("./components/AppUI/Terms"));
const ContactUs = lazy(() => import("./components/AppUI/ContactUs"));

/* ---------- Loader ---------- */
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
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

/* ---------- Root layout ---------- */
const rootRoute = createRootRoute({
  component: () => (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
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
  ["/components", Component],
  ["/pages", Pages],
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

const componentShowcaseChildren = [
  ["/components/buttons", ButtonShowcase],
  ["/components/cards", CardShowcase],
  ["/components/inputs", InputShowcase],
  ["/components/loaders", LoaderShowcase],
  ["/components/switch", SwitchShowcase],
  ["/components/navbars", NavbarShowcase],
  ["/components/footers", FooterShowcase],
  ["/components/tables", TableShowcase],
  ["/components/avatars", AvatarShowcase],
  ["/components/signin", SigninShowcase],
  ["/components/signup", SignupShowcase],
  ["/components/pricing", PricingShowcase],
  ["/components/modals", ModalShowcase],
  ["/components/toasts", ToastShowcase],
  ["/components/dropdowns", DropdownShowcase],
  ["/components/tabs", TabsShowcase],
  ["/components/accordions", AccordionShowcase],
  ["/components/badges", BadgeShowcase],
  ["/components/tooltips", TooltipShowcase],
  ["/components/alerts", AlertShowcase],
  ["/components/progress", ProgressShowcase],
  ["/components/breadcrumbs", BreadcrumbShowcase],
  ["/components/paginations", PaginationShowcase],
  ["/components/skeletons", SkeletonShowcase],
].map(([p, el]) => makeRoute(p, el, componentShowcaseLayoutRoute));

/* ---------- Page-template showcase layout (sticky sidebar) ---------- */
const pageShowcaseLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "pages-showcase-layout",
  component: PageShowcaseLayout,
});

const pageShowcaseChildren = [
  ["/pages/home", HomePageShowcase],
  ["/pages/about", AboutPageShowcase],
  ["/pages/service", ServicePageShowcase],
  ["/pages/contact", ContactPageShowcase],
  ["/pages/dashboard", DashboardPageShowcase],
  ["/pages/error", ErrorPageShowcase],
  ["/pages/ecommerce", EcomPageShowcase],
  ["/pages/blog", BlogPageShowcase],
  ["/pages/auth", AuthPageShowcase],
  ["/pages/pricing", PricingPageShowcase],
  ["/pages/coming-soon", ComingSoonPageShowcase],
  ["/pages/settings", SettingsPageShowcase],
  ["/pages/docs", DocsPageShowcase],
].map(([p, el]) => makeRoute(p, el, pageShowcaseLayoutRoute));

const routeTree = rootRoute.addChildren([
  ...topLevel,
  componentShowcaseLayoutRoute.addChildren(componentShowcaseChildren),
  pageShowcaseLayoutRoute.addChildren(pageShowcaseChildren),
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});
