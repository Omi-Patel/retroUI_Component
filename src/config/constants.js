/**
 * Application Constants
 * Centralized configuration for the application
 */

export const APP_CONFIG = {
  name: 'RetroUI',
  version: '1.0.0',
  description: 'A collection of retro-themed UI components',
  author: 'RetroUI Team',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact-us',
  PRIVACY: '/privacy-policy',
  TERMS: '/terms-conditions',
  
  // Component Routes
  COMPONENTS: '/components',
  COMPONENTS_BUTTONS: '/components/buttons',
  COMPONENTS_CARDS: '/components/cards',
  COMPONENTS_INPUTS: '/components/inputs',
  COMPONENTS_AVATARS: '/components/avatars',
  COMPONENTS_SIGNIN: '/components/signin',
  COMPONENTS_SIGNUP: '/components/signup',
  COMPONENTS_LOADERS: '/components/loaders',
  COMPONENTS_NAVBARS: '/components/navbars',
  COMPONENTS_FOOTERS: '/components/footers',
  COMPONENTS_SWITCHES: '/components/switch',
  COMPONENTS_TABLES: '/components/tables',
  COMPONENTS_PRICING: '/components/pricing',
  
  // Page Templates Routes
  PAGES: '/pages',
  PAGES_HOME: '/pages/home',
  PAGES_ABOUT: '/pages/about',
  PAGES_SERVICE: '/pages/service',
  PAGES_CONTACT: '/pages/contact',
  PAGES_DASHBOARD: '/pages/dashboard',
  PAGES_ERROR: '/pages/error',
  PAGES_ECOMMERCE: '/pages/ecommerce',
  PAGES_BLOG: '/pages/blog',
};

export const NAV_LINKS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.COMPONENTS, label: 'Components' },
  { path: ROUTES.PAGES, label: 'Pages' },
  { path: ROUTES.ABOUT, label: 'About' },
];

export const COMPONENT_CATEGORIES = [
  { id: 'buttons', name: 'Buttons', path: ROUTES.COMPONENTS_BUTTONS },
  { id: 'cards', name: 'Cards', path: ROUTES.COMPONENTS_CARDS },
  { id: 'inputs', name: 'Inputs', path: ROUTES.COMPONENTS_INPUTS },
  { id: 'avatars', name: 'Avatars', path: ROUTES.COMPONENTS_AVATARS },
  { id: 'loaders', name: 'Loaders', path: ROUTES.COMPONENTS_LOADERS },
  { id: 'navbars', name: 'Navbars', path: ROUTES.COMPONENTS_NAVBARS },
  { id: 'footers', name: 'Footers', path: ROUTES.COMPONENTS_FOOTERS },
  { id: 'switches', name: 'Switches', path: ROUTES.COMPONENTS_SWITCHES },
  { id: 'tables', name: 'Tables', path: ROUTES.COMPONENTS_TABLES },
  { id: 'signin', name: 'Sign In', path: ROUTES.COMPONENTS_SIGNIN },
  { id: 'signup', name: 'Sign Up', path: ROUTES.COMPONENTS_SIGNUP },
  { id: 'pricing', name: 'Pricing', path: ROUTES.COMPONENTS_PRICING },
];

export const PAGE_TEMPLATES = [
  { id: 'home', name: 'Home Pages', path: ROUTES.PAGES_HOME },
  { id: 'about', name: 'About Pages', path: ROUTES.PAGES_ABOUT },
  { id: 'service', name: 'Service Pages', path: ROUTES.PAGES_SERVICE },
  { id: 'contact', name: 'Contact Pages', path: ROUTES.PAGES_CONTACT },
  { id: 'dashboard', name: 'Dashboard', path: ROUTES.PAGES_DASHBOARD },
  { id: 'error', name: 'Error Pages', path: ROUTES.PAGES_ERROR },
  { id: 'ecommerce', name: 'E-commerce', path: ROUTES.PAGES_ECOMMERCE },
  { id: 'blog', name: 'Blog Pages', path: ROUTES.PAGES_BLOG },
];

export const THEME_COLORS = {
  neon: '#39ff14',
  retro: {
    primary: '#ff6b9d',
    secondary: '#c06bf8',
    accent: '#39ff14',
  },
};
