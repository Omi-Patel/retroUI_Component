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
  charts: () => import('./charts').then((m) => m.chartComponents),
  stats: () => import('./stats').then((m) => m.statComponents),
  chat: () => import('./chat').then((m) => m.chatComponents),
  steppers: () => import('./steppers').then((m) => m.stepperComponents),
  'web-badges': () => import('./webBadges').then((m) => m.webBadgeComponents),
  'radio-checkbox': () => import('./radioCheckbox').then((m) => m.radioCheckboxComponents),
  sliders: () => import('./sliders').then((m) => m.sliderComponents),
  calendars: () => import('./calendars').then((m) => m.calendarComponents),
  ratings: () => import('./ratings').then((m) => m.ratingComponents),
  selects: () => import('./selects').then((m) => m.selectComponents),
  textareas: () => import('./textareas').then((m) => m.textareaComponents),
  sidebars: () => import('./sidebars').then((m) => m.sidebarComponents),
  'file-uploads': () => import('./fileUploads').then((m) => m.fileUploadComponents),
  timelines: () => import('./timelines').then((m) => m.timelineComponents),
  'empty-states': () => import('./emptyStates').then((m) => m.emptyStateComponents),
  'media-players': () => import('./mediaPlayers').then((m) => m.mediaPlayerComponents),
  windows: () => import('./windows').then((m) => m.windowComponents),
};
