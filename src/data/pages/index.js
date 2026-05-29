/**
 * Lazy loaders for each page-template's showcase data, keyed by the registry
 * slug (PAGE_REGISTRY[].path). Each resolves to { slug, title, description,
 * variants } where variants is the list of { name, label, component, githubUrl }.
 *
 * Dynamic imports preserve per-template code-splitting (some templates, e.g.
 * the dashboard, are large). The single generic `/pages/$slug` route resolves
 * the loader here — there is no longer a hand-written wrapper per template.
 */
export const pageLoaders = {
  home: () => import('./home').then((m) => m.default),
  about: () => import('./about').then((m) => m.default),
  service: () => import('./service').then((m) => m.default),
  contact: () => import('./contact').then((m) => m.default),
  dashboard: () => import('./dashboard').then((m) => m.default),
  error: () => import('./error').then((m) => m.default),
  ecommerce: () => import('./ecommerce').then((m) => m.default),
  blog: () => import('./blog').then((m) => m.default),
  auth: () => import('./auth').then((m) => m.default),
  pricing: () => import('./pricing').then((m) => m.default),
  'coming-soon': () => import('./coming-soon').then((m) => m.default),
  settings: () => import('./settings').then((m) => m.default),
  docs: () => import('./docs').then((m) => m.default),
  zine: () => import('./zine').then((m) => m.default),
};
