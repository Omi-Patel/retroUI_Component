import {
  Square,
  LayoutGrid,
  Type,
  User,
  LogIn,
  UserPlus,
  Loader,
  PanelLeft,
  Layers,
  ToggleRight,
  Table as TableIcon,
  Tag,
  Home,
  Info,
  Briefcase,
  Mail,
  LayoutDashboard,
  AlertTriangle,
  ShoppingBag,
  Rss,
} from "lucide-react";

/**
 * Master registry of all component categories shown in the docs-style sidebar.
 * `path` is the URL slug (after /components/), `count` is the number of variants.
 */
export const COMPONENT_REGISTRY = [
  { name: "Button", path: "buttons", Icon: Square, count: 5, category: "Basic" },
  { name: "Card", path: "cards", Icon: LayoutGrid, count: 5, category: "Layout" },
  { name: "Input", path: "inputs", Icon: Type, count: 5, category: "Form" },
  { name: "Avatar", path: "avatars", Icon: User, count: 5, category: "Display" },
  { name: "Sign in", path: "signin", Icon: LogIn, count: 1, category: "Auth" },
  { name: "Sign up", path: "signup", Icon: UserPlus, count: 5, category: "Auth" },
  { name: "Loader", path: "loaders", Icon: Loader, count: 8, category: "Feedback" },
  { name: "Navbar", path: "navbars", Icon: PanelLeft, count: 5, category: "Navigation" },
  { name: "Footer", path: "footers", Icon: Layers, count: 6, category: "Layout" },
  { name: "Switch", path: "switch", Icon: ToggleRight, count: 5, category: "Form" },
  { name: "Table", path: "tables", Icon: TableIcon, count: 5, category: "Data" },
  { name: "Pricing", path: "pricing", Icon: Tag, count: 3, category: "Display" },
];

/**
 * Master registry of all page templates shown in the pages sidebar.
 */
export const PAGE_REGISTRY = [
  { name: "Home Page", path: "home", Icon: Home, count: 3, category: "Landing", desc: "Marketing & landing page templates." },
  { name: "About Page", path: "about", Icon: Info, count: 2, category: "Content", desc: "Company and project information." },
  { name: "Service Page", path: "service", Icon: Briefcase, count: 1, category: "Content", desc: "Services and feature showcases." },
  { name: "Contact Page", path: "contact", Icon: Mail, count: 3, category: "Contact", desc: "Contact forms and information." },
  { name: "Dashboard", path: "dashboard", Icon: LayoutDashboard, count: 1, category: "Admin", desc: "Dashboard and analytics interfaces." },
  { name: "Error / 404", path: "error", Icon: AlertTriangle, count: 4, category: "System", desc: "Error states and 404 pages." },
  { name: "Ecommerce", path: "ecommerce", Icon: ShoppingBag, count: 4, category: "Shop", desc: "Product listings and detail pages." },
  { name: "Blog", path: "blog", Icon: Rss, count: 3, category: "Content", desc: "Blog index and article layouts." },
];
