import { lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Component = lazy(() => import('../pages/Component'));

// Component Showcases
const ButtonShowcase = lazy(() => import('../pages/ComponentShowcase'));
const CardShowcase = lazy(() => import('../pages/CardShowcase'));
const InputShowcase = lazy(() => import('../pages/InputShowcase'));
const LoaderShowcase = lazy(() => import('../pages/LoaderShowcase'));
const SwitchShowcase = lazy(() => import('../pages/SwitchShowcase'));
const NavbarShowcase = lazy(() => import('../pages/NavbarShowcase'));
const FooterShowcase = lazy(() => import('../pages/FooterShowcase'));
const TableShowcase = lazy(() => import('../pages/TableShowcase'));
const AvatarShowcase = lazy(() => import('../pages/AvtarShowcase'));
const SigninShowcase = lazy(() => import('../pages/SigninShowcase'));
const SignupShowcase = lazy(() => import('../pages/SignupShowcase'));
const PricingShowcase = lazy(() => import('../pages/PricingShowcase'));

// Page Showcases
const Pages = lazy(() => import('../pagesComponents/PageShowcase'));
const HomePageShowcase = lazy(() => import('../pagesComponents/PageShowcase/HomePageShowcase'));
const AboutPageShowcase = lazy(() => import('../pagesComponents/PageShowcase/AboutPageShowcase'));
const ServicePageShowcase = lazy(() => import('../pagesComponents/PageShowcase/ServicePageShowcase'));
const ContactPageShowcase = lazy(() => import('../pagesComponents/PageShowcase/ContactPageShowcase'));
const DashboardPageShowcase = lazy(() => import('../pagesComponents/PageShowcase/DashboardPageShowcase'));
const ErrorPageShowcase = lazy(() => import('../pagesComponents/PageShowcase/ErrorPageShowcase'));
const EcomPageShowcase = lazy(() => import('../pagesComponents/PageShowcase/EcomPageShowcase'));
const BlogPageShowcase = lazy(() => import('../pagesComponents/PageShowcase/BlogPageShowcase'));

// Static Pages
const PrivacyPolicy = lazy(() => import('../components/AppUI/PrivacyPolicy'));
const Terms = lazy(() => import('../components/AppUI/Terms'));
const ContactUs = lazy(() => import('../components/AppUI/ContactUs'));

/**
 * Application routes configuration
 * Centralized route definitions for better maintainability
 */
export const routes = [
  // Main pages
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '/components', element: Component },

  // Component showcases
  { path: '/components/buttons', element: ButtonShowcase },
  { path: '/components/cards', element: CardShowcase },
  { path: '/components/inputs', element: InputShowcase },
  { path: '/components/loaders', element: LoaderShowcase },
  { path: '/components/switch', element: SwitchShowcase },
  { path: '/components/navbars', element: NavbarShowcase },
  { path: '/components/footers', element: FooterShowcase },
  { path: '/components/tables', element: TableShowcase },
  { path: '/components/avatars', element: AvatarShowcase },
  { path: '/components/signin', element: SigninShowcase },
  { path: '/components/signup', element: SignupShowcase },
  { path: '/components/pricing', element: PricingShowcase },

  // Page showcases
  { path: '/pages', element: Pages },
  { path: '/pages/home', element: HomePageShowcase },
  { path: '/pages/about', element: AboutPageShowcase },
  { path: '/pages/service', element: ServicePageShowcase },
  { path: '/pages/contact', element: ContactPageShowcase },
  { path: '/pages/dashboard', element: DashboardPageShowcase },
  { path: '/pages/error', element: ErrorPageShowcase },
  { path: '/pages/ecommerce', element: EcomPageShowcase },
  { path: '/pages/blog', element: BlogPageShowcase },

  // Static pages
  { path: '/privacy-policy', element: PrivacyPolicy },
  { path: '/terms-conditions', element: Terms },
  { path: '/contact-us', element: ContactUs },
];

export default routes;

