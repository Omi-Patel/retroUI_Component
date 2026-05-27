import { useEffect } from "react";

const setMeta = (selector, attr, value) => {
  if (!value) return null;
  let el = document.head.querySelector(selector);
  let created = false;
  if (!el) {
    el = document.createElement("meta");
    const match = selector.match(/^meta\[(name|property)="([^"]+)"\]$/);
    if (match) {
      el.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(el);
    created = true;
  }
  const previous = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return { el, previous, created };
};

const setCanonical = (href) => {
  if (!href) return null;
  let el = document.head.querySelector('link[rel="canonical"]');
  let created = false;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
    created = true;
  }
  const previous = el.getAttribute("href");
  el.setAttribute("href", href);
  return { el, previous, created };
};

/**
 * Set per-route <title>, description, OG, and canonical tags. Restores the
 * previous values on unmount so navigating between routes does not leave stale
 * metadata behind.
 *
 * @param {{ title?: string, description?: string, ogImage?: string, canonical?: string }} opts
 */
export function useDocumentMeta({ title, description, ogImage, canonical } = {}) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;

    const ops = [
      setMeta('meta[name="description"]', "content", description),
      setMeta('meta[property="og:title"]', "content", title),
      setMeta('meta[property="og:description"]', "content", description),
      setMeta('meta[property="og:image"]', "content", ogImage),
      setMeta('meta[name="twitter:title"]', "content", title),
      setMeta('meta[name="twitter:description"]', "content", description),
      setMeta('meta[name="twitter:image"]', "content", ogImage),
      setCanonical(canonical),
    ].filter(Boolean);

    return () => {
      document.title = previousTitle;
      ops.forEach((op) => {
        if (!op) return;
        if (op.created) {
          op.el.parentNode?.removeChild(op.el);
        } else if (op.previous != null) {
          const attr =
            op.el.tagName === "LINK"
              ? "href"
              : op.el.hasAttribute("content")
                ? "content"
                : null;
          if (attr) op.el.setAttribute(attr, op.previous);
        }
      });
    };
  }, [title, description, ogImage, canonical]);
}
