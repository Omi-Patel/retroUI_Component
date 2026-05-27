import { useState, useCallback } from 'react';

/**
 * Hook for clipboard copy functionality with success state
 * @param {number} resetDelay - Delay before resetting success state
 * @returns {[boolean, (text: string) => void]}
 */
export const useCopyToClipboard = (resetDelay = 2000) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), resetDelay);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [resetDelay]);

  return [copySuccess, copy];
};

