import { useEffect } from 'react';

/**
 * Hook to scroll to top on component mount
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

