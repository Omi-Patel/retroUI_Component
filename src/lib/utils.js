/**
 * Utility functions for the application
 */

/**
 * Copy text to clipboard with success callback
 * @param {string} text - Text to copy
 * @param {Function} onSuccess - Callback on success
 * @param {number} resetDelay - Delay before resetting success state
 */
export const copyToClipboard = async (text, onSuccess, resetDelay = 2000) => {
  try {
    await navigator.clipboard.writeText(text);
    onSuccess?.(true);
    setTimeout(() => onSuccess?.(false), resetDelay);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

/**
 * Format component name for display (e.g., "RetroButton" -> "Retro Button")
 * @param {string} name - Component name in PascalCase
 * @returns {string} Formatted name with spaces
 */
export const formatComponentName = (name) => {
  return name.replace(/([A-Z])/g, ' $1').trim();
};

/**
 * Scroll to top of page
 * @param {boolean} smooth - Use smooth scrolling
 */
export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
};

/**
 * Generate CSS class string from conditions
 * @param {...(string|[boolean, string])} classes 
 * @returns {string}
 */
export const cn = (...classes) => {
  return classes
    .filter(Boolean)
    .map(c => (Array.isArray(c) ? (c[0] ? c[1] : '') : c))
    .filter(Boolean)
    .join(' ');
};

