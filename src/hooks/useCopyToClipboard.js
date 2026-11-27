import { useState, useCallback } from 'react';

/**
 * Hook for clipboard copy functionality with success state
 * @param {number} resetDelay - Delay before resetting success state
 * @returns {[boolean, (text: string) => Promise<boolean>]} copy resolves true on success
 */
export const useCopyToClipboard = (resetDelay = 2000) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), resetDelay);
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  }, [resetDelay]);

  return [copySuccess, copy];
};

