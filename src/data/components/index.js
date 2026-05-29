/**
 * Lazy loaders for each component category's variant data, keyed by the
 * registry slug (COMPONENT_REGISTRY[].path). Each resolves to the array of
 * variant objects ({ name, component, code }).
 *
 * Dynamic imports preserve per-category code-splitting, so visiting one
 * showcase route only pulls in that category's data + components instead of
 * the entire library. The single generic `/components/$slug` route looks the
 * loader up here — there is no longer a hand-written page file per category.
 */
export const componentLoaders = {
  buttons: () => import('./buttons').then((m) => m.buttonComponents),
  cards: () => import('./cards').then((m) => m.cardComponents),
  inputs: () => import('./inputs').then((m) => m.inputComponents),
  avatars: () => import('./avatars').then((m) => m.avatarComponents),
  signin: () => import('./signin').then((m) => m.signinComponents),
  signup: () => import('./signup').then((m) => m.signupComponents),
  loaders: () => import('./loaders').then((m) => m.loaderComponents),
  navbars: () => import('./navbars').then((m) => m.navbarComponents),
  footers: () => import('./footers').then((m) => m.footerComponents),
  switch: () => import('./switches').then((m) => m.switchComponents),
  tables: () => import('./tables').then((m) => m.tableComponents),
  pricing: () => import('./pricing').then((m) => m.pricingComponents),
  modals: () => import('./modals').then((m) => m.modalComponents),
  toasts: () => import('./toasts').then((m) => m.toastComponents),
  dropdowns: () => import('./dropdowns').then((m) => m.dropdownComponents),
  tabs: () => import('./tabs').then((m) => m.tabsComponents),
  accordions: () => import('./accordions').then((m) => m.accordionComponents),
  badges: () => import('./badges').then((m) => m.badgeComponents),
  tooltips: () => import('./tooltips').then((m) => m.tooltipComponents),
  alerts: () => import('./alerts').then((m) => m.alertComponents),
  progress: () => import('./progress').then((m) => m.progressComponents),
  breadcrumbs: () => import('./breadcrumbs').then((m) => m.breadcrumbComponents),
  paginations: () => import('./paginations').then((m) => m.paginationComponents),
  skeletons: () => import('./skeletons').then((m) => m.skeletonComponents),
  polaroids: () => import('./polaroids').then((m) => m.polaroidComponents),
  'sticky-notes': () => import('./stickyNotes').then((m) => m.stickyNoteComponents),
  receipts: () => import('./receipts').then((m) => m.receiptComponents),
  tickers: () => import('./tickers').then((m) => m.tickerComponents),
};
