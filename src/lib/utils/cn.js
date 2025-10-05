/**
 * Utility function to merge class names
 * Useful for combining Tailwind classes conditionally
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Conditional class utility
 * @param {string} base - Base classes
 * @param {Object} conditionals - Object with class: condition pairs
 * @returns {string} - Merged class string
 */
export function classNames(base, conditionals = {}) {
  const classes = [base];
  
  Object.entries(conditionals).forEach(([className, condition]) => {
    if (condition) {
      classes.push(className);
    }
  });
  
  return classes.filter(Boolean).join(' ');
}
