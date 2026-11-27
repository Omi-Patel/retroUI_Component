/**
 * Product analytics (Umami). Cookieless, no personal data.
 *
 * The tracker is only loaded in production builds when
 * `VITE_UMAMI_WEBSITE_ID` is set, and only reports from the production domain
 * (`data-domains`), so localhost and Vercel preview deploys never pollute the
 * stats. Every call site goes through `track()` — swapping providers later is
 * a one-file change.
 *
 * Events (name → properties):
 *   copy_code        { category, variant }   copied a component's source
 *   copy_snippet     { label }               copied a setup / example snippet
 *   copy_icon        { icon, format }        copied an icon
 *   copy_link        { template }            copied a page-template link
 *   variant_view     { category, variant }   picked a variant chip
 *   code_tab         { category, variant }   opened the Code tab
 *   fullscreen_open  { category, variant }   opened the device preview
 *   theme_toggle     { to }                  switched light/dark
 *   cta_click        { cta }                 clicked a tagged CTA (data-umami-event)
 *   outbound_click   { url }                 clicked a link to another site
 *   scroll_depth     { page, depth }         reached 25/50/75/100% of a page
 */

const WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID;
const SCRIPT_SRC =
  import.meta.env.VITE_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js";
const DOMAINS = import.meta.env.VITE_UMAMI_DOMAINS || "retro-ui.basecase.site";

const enabled = import.meta.env.PROD && !!WEBSITE_ID;
const queue = [];

export function track(name, data) {
  if (!enabled) {
    if (import.meta.env.DEV) console.debug("[analytics]", name, data ?? "");
    return;
  }
  if (window.umami?.track) window.umami.track(name, data);
  else queue.push([name, data]);
}

function trackOutboundClicks() {
  document.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a) return;
      let url;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (!/^https?:$/.test(url.protocol) || url.host === window.location.host) return;
      track("outbound_click", { url: `${url.host}${url.pathname}` });
    },
    { capture: true }
  );
}

let initialized = false;

export function initAnalytics() {
  if (!enabled || initialized) return;
  initialized = true;

  const s = document.createElement("script");
  s.defer = true;
  s.src = SCRIPT_SRC;
  s.dataset.websiteId = WEBSITE_ID;
  s.dataset.domains = DOMAINS;
  s.onload = () => {
    while (queue.length) window.umami?.track(...queue.shift());
  };
  document.head.appendChild(s);

  trackOutboundClicks();
}
