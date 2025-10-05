import React from "react";
import { ROUTES } from "./constants";

// Lazy load pages for better performance
const Home = React.lazy(() => import("@/features/showcase/pages/Home"));
const About = React.lazy(() => import("@/features/docs/pages/About"));
const Component = React.lazy(() =>
  import("@/features/showcase/pages/Component")
);
const ComponentShowcase = React.lazy(() =>
  import("@/features/showcase/pages/ComponentShowcase")
);
const CardShowcase = React.lazy(() =>
  import("@/features/showcase/pages/CardShowcase")
);
const InputShowcase = React.lazy(() =>
  import("@/features/showcase/pages/InputShowcase")
);
const AvatarShowcase = React.lazy(() =>
  import("@/features/showcase/pages/AvtarShowcase")
);
const SigninShowcase = React.lazy(() =>
  import("@/features/showcase/pages/SigninShowcase")
);
const SignupShowcase = React.lazy(() =>
  import("@/features/showcase/pages/SignupShowcase")
);
const LoaderShowcase = React.lazy(() =>
  import("@/features/showcase/pages/LoaderShowcase")
);
const NavbarShowcase = React.lazy(() =>
  import("@/features/showcase/pages/NavbarShowcase")
);
const FooterShowcase = React.lazy(() =>
  import("@/features/showcase/pages/FooterShowcase")
);
const SwitchShowcase = React.lazy(() =>
  import("@/features/showcase/pages/SwitchShowcase")
);
const TableShowcase = React.lazy(() =>
  import("@/features/showcase/pages/TableShowcase")
);
const PricingShowcase = React.lazy(() =>
  import("@/features/showcase/pages/PricingShowcase")
);

// Page Template Showcases
const Pages = React.lazy(() =>
  import("@/features/showcase/pages/templates/index.jsx")
);
const HomePageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/HomePageShowcase")
);
const AboutPageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/AboutPageShowcase")
);
const ServicePageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/ServicePageShowcase")
);
const ContactPageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/ContactPageShowcase")
);
const DashboardPageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/DashboardPageShowcase")
);
const ErrorPageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/ErrorPageShowcase")
);
const EcomPageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/EcomPageShowcase")
);
const BlogPageShowcase = React.lazy(() =>
  import("@/features/showcase/pages/templates/BlogPageShowcase")
);

// Static Pages
const PrivacyPolicy = React.lazy(() =>
  import("@/features/docs/pages/PrivacyPolicy")
);
const Terms = React.lazy(() => import("@/features/docs/pages/Terms"));
const ContactUs = React.lazy(() => import("@/features/docs/pages/ContactUs"));

/**
 * Application Routes Configuration
 * Centralized route definitions for better maintainability
 */
export const appRoutes = [
  {
    path: ROUTES.HOME,
    element: Home,
    title: "Home",
  },
  {
    path: ROUTES.ABOUT,
    element: About,
    title: "About",
  },
  {
    path: ROUTES.COMPONENTS,
    element: Component,
    title: "Components",
  },
  {
    path: ROUTES.COMPONENTS_BUTTONS,
    element: ComponentShowcase,
    title: "Buttons",
  },
  {
    path: ROUTES.COMPONENTS_CARDS,
    element: CardShowcase,
    title: "Cards",
  },
  {
    path: ROUTES.COMPONENTS_INPUTS,
    element: InputShowcase,
    title: "Inputs",
  },
  {
    path: ROUTES.COMPONENTS_AVATARS,
    element: AvatarShowcase,
    title: "Avatars",
  },
  {
    path: ROUTES.COMPONENTS_SIGNIN,
    element: SigninShowcase,
    title: "Sign In",
  },
  {
    path: ROUTES.COMPONENTS_SIGNUP,
    element: SignupShowcase,
    title: "Sign Up",
  },
  {
    path: ROUTES.COMPONENTS_LOADERS,
    element: LoaderShowcase,
    title: "Loaders",
  },
  {
    path: ROUTES.COMPONENTS_NAVBARS,
    element: NavbarShowcase,
    title: "Navbars",
  },
  {
    path: ROUTES.COMPONENTS_FOOTERS,
    element: FooterShowcase,
    title: "Footers",
  },
  {
    path: ROUTES.COMPONENTS_SWITCHES,
    element: SwitchShowcase,
    title: "Switches",
  },
  {
    path: ROUTES.COMPONENTS_TABLES,
    element: TableShowcase,
    title: "Tables",
  },
  {
    path: ROUTES.COMPONENTS_PRICING,
    element: PricingShowcase,
    title: "Pricing",
  },
  // Page Templates
  {
    path: ROUTES.PAGES,
    element: Pages,
    title: "Page Templates",
  },
  {
    path: ROUTES.PAGES_HOME,
    element: HomePageShowcase,
    title: "Home Page Templates",
  },
  {
    path: ROUTES.PAGES_ABOUT,
    element: AboutPageShowcase,
    title: "About Page Templates",
  },
  {
    path: ROUTES.PAGES_SERVICE,
    element: ServicePageShowcase,
    title: "Service Page Templates",
  },
  {
    path: ROUTES.PAGES_CONTACT,
    element: ContactPageShowcase,
    title: "Contact Page Templates",
  },
  {
    path: ROUTES.PAGES_DASHBOARD,
    element: DashboardPageShowcase,
    title: "Dashboard Templates",
  },
  {
    path: ROUTES.PAGES_ERROR,
    element: ErrorPageShowcase,
    title: "Error Page Templates",
  },
  {
    path: ROUTES.PAGES_ECOMMERCE,
    element: EcomPageShowcase,
    title: "E-commerce Templates",
  },
  {
    path: ROUTES.PAGES_BLOG,
    element: BlogPageShowcase,
    title: "Blog Templates",
  },
  // Static Pages
  {
    path: ROUTES.PRIVACY,
    element: PrivacyPolicy,
    title: "Privacy Policy",
  },
  {
    path: ROUTES.TERMS,
    element: Terms,
    title: "Terms & Conditions",
  },
  {
    path: ROUTES.CONTACT,
    element: ContactUs,
    title: "Contact Us",
  },
];
