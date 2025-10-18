import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Layers,
  FileText,
  Sparkles,
  Grid,
  MousePointer,
  Type,
  User,
  LogIn,
  UserPlus,
  Loader,
  Menu as MenuIcon,
  ToggleLeft,
  Table,
  DollarSign,
  Layout,
  PanelBottom,
  Star,
  Info,
  Mail,
  Shield,
  FileCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation structure with categories and items
const navigationItems = [
  {
    title: "Getting Started",
    icon: Home,
    items: [
      { name: "Introduction", path: "/", icon: Star },
      { name: "About", path: "/about", icon: Info },
    ],
  },
  {
    title: "Components",
    icon: Layers,
    items: [
      { name: "Overview", path: "/components", icon: Grid },
      { name: "Buttons", path: "/components/buttons", icon: MousePointer },
      { name: "Cards", path: "/components/cards", icon: Layers },
      { name: "Inputs", path: "/components/inputs", icon: Type },
      { name: "Avatars", path: "/components/avatars", icon: User },
      { name: "Loaders", path: "/components/loaders", icon: Loader },
      { name: "Switches", path: "/components/switch", icon: ToggleLeft },
      { name: "Tables", path: "/components/tables", icon: Table },
      { name: "Pricing", path: "/components/pricing", icon: DollarSign },
    ],
  },
  {
    title: "Forms",
    icon: FileText,
    items: [
      { name: "Sign In", path: "/components/signin", icon: LogIn },
      { name: "Sign Up", path: "/components/signup", icon: UserPlus },
    ],
  },
  {
    title: "Layout",
    icon: Layout,
    items: [
      { name: "Navbars", path: "/components/navbars", icon: MenuIcon },
      { name: "Footers", path: "/components/footers", icon: PanelBottom },
    ],
  },
  {
    title: "Page Templates",
    icon: FileText,
    items: [
      { name: "Overview", path: "/pages", icon: Grid },
      { name: "Home Pages", path: "/pages/home", icon: Home },
      { name: "About Pages", path: "/pages/about", icon: Info },
      { name: "Service Pages", path: "/pages/service", icon: Sparkles },
      { name: "Contact Pages", path: "/pages/contact", icon: Mail },
      { name: "Dashboard", path: "/pages/dashboard", icon: Layout },
      { name: "Error Pages", path: "/pages/error", icon: FileText },
      { name: "E-commerce", path: "/pages/ecommerce", icon: DollarSign },
      { name: "Blog Pages", path: "/pages/blog", icon: FileText },
    ],
  },
  {
    title: "Resources",
    icon: FileCheck,
    items: [
      { name: "Contact Us", path: "/contact-us", icon: Mail },
      { name: "Privacy Policy", path: "/privacy-policy", icon: Shield },
      {
        name: "Terms & Conditions",
        path: "/terms-conditions",
        icon: FileCheck,
      },
    ],
  },
];

const NavSection = ({ section, isOpen, toggleSection }) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const SectionIcon = section.icon;

  // Check if any item in this section is active
  const isActiveSection = section.items.some(
    (item) =>
      location.pathname === item.path ||
      (item.path !== "/" && location.pathname.startsWith(item.path))
  );

  return (
    <div className="mb-1">
      <button
        onClick={toggleSection}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          w-full flex items-center justify-between px-3 py-2.5 rounded-lg 
          text-sm font-semibold transition-all duration-200
          ${
            isActiveSection
              ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
          }
        `}
      >
        <div className="flex items-center gap-2.5">
          <SectionIcon
            className={`w-4 h-4 ${
              isActiveSection ? "text-teal-600 dark:text-teal-400" : ""
            }`}
          />
          <span>{section.title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 ml-2 space-y-0.5 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              {section.items.map((item) => {
                const ItemIcon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center gap-2.5 px-3 py-2 rounded-md text-sm 
                      transition-all duration-200 group
                      ${
                        isActive
                          ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/30"
                      }
                    `}
                  >
                    <ItemIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="flex-1">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1.5 h-1.5 rounded-full bg-teal-500"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function DocsSidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({});

  // Initialize open sections based on current route
  useEffect(() => {
    const initialOpenSections = {};
    navigationItems.forEach((section, index) => {
      const isActive = section.items.some(
        (item) =>
          location.pathname === item.path ||
          (item.path !== "/" && location.pathname.startsWith(item.path))
      );
      initialOpenSections[index] = isActive;
    });
    setOpenSections(initialOpenSections);
  }, [location.pathname]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar - Always visible on desktop, slide-in on mobile */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 z-40
          bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-800
          overflow-y-auto overflow-x-hidden
          scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 
          scrollbar-track-transparent
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:sticky lg:top-16
        `}
      >
        <div className="p-4 space-y-1">
          {/* Search Bar */}
          <div className="mb-4 sticky top-0 bg-white dark:bg-gray-900 pt-2 pb-4 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-2.5 pl-10 text-sm rounded-lg 
                  bg-gray-50 dark:bg-gray-800/50 
                  border border-gray-200 dark:border-gray-700
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                  text-gray-900 dark:text-gray-100 
                  placeholder-gray-500 dark:placeholder-gray-400
                  transition-all duration-200"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <nav className="space-y-1">
            {navigationItems.map((section, index) => (
              <NavSection
                key={index}
                section={section}
                isOpen={openSections[index]}
                toggleSection={() => toggleSection(index)}
              />
            ))}
          </nav>

          {/* Version Badge */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="px-3 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg border border-teal-200 dark:border-teal-800/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-900 dark:text-teal-300">
                  Version 1.0.0
                </span>
                <span className="text-xs px-2 py-0.5 bg-teal-500 text-white rounded-full font-medium">
                  New
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
