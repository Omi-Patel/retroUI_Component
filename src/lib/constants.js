/**
 * Centralized constants and shared data
 */

// Navigation items used by Navbar and mobile menu
export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Components", href: "/components" },
  { name: "Pages Example", href: "/pages" },
];

// Footer links
export const FOOTER_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Components", path: "/components" },
  { name: "Pages Example", path: "/pages" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-conditions" },
  { name: "Contact Us", path: "/contact-us" },
];

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/Omi-Patel/retroUI_Component",
  githubProfile: "https://github.com/Omi-Patel",
  instagram: "https://www.instagram.com/omipatel_7113/",
  twitter: "https://x.com/om_patel07",
  linkedin: "https://www.linkedin.com/in/ompatel7113/",
  email: "mailto:contact@retroui.com",
};

// Site metadata
export const SITE_META = {
  name: "retroUI",
  version: "v1",
  tagline: "Retro-themed UI components for modern web apps",
  description:
    "A collection of retro-themed UI components built with Tailwind CSS for modern web applications.",
  author: "Omi Patel",
};

// Component categories for the listing page
export const COMPONENT_CATEGORIES = [
  {
    name: "Button",
    path: "buttons",
    category: "Basic",
    description: "Interactive elements for user actions",
  },
  {
    name: "Card",
    path: "cards",
    category: "Layout",
    description: "Containers for organizing content",
  },
  {
    name: "Input",
    path: "inputs",
    category: "Form",
    description: "Fields for user data entry",
  },
  {
    name: "Avatar",
    path: "avatars",
    category: "Display",
    description: "User profile representations",
  },
  {
    name: "Signin",
    path: "signin",
    category: "Auth",
    description: "Authentication entry points",
  },
  {
    name: "Signup",
    path: "signup",
    category: "Auth",
    description: "User registration interfaces",
  },
  {
    name: "Loader",
    path: "loaders",
    category: "Feedback",
    description: "Loading state indicators",
  },
  {
    name: "Navbar",
    path: "navbars",
    category: "Navigation",
    description: "Site navigation headers",
  },
  {
    name: "Footer",
    path: "footers",
    category: "Layout",
    description: "Page footer sections",
  },
  {
    name: "Switch",
    path: "switch",
    category: "Form",
    description: "Toggle controls for binary options",
  },
  {
    name: "Table",
    path: "tables",
    category: "Data",
    description: "Structured data displays",
  },
  {
    name: "Pricing",
    path: "pricing",
    category: "Display",
    description: "Product pricing displays",
  },
];

// Category color map for component badges
export const CATEGORY_COLORS = {
  Basic: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Layout:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Form: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Display:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Auth: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Feedback:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Navigation:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  Data: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
};

/**
 * Get category color classes
 * @param {string} category
 * @returns {string}
 */
export const getCategoryColor = (category) => {
  return (
    CATEGORY_COLORS[category] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  );
};
