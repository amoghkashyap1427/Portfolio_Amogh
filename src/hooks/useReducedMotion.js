import { useEffect, useState } from 'react';

/**
 * useReducedMotion
 *
 * Returns true if the user has set "prefers-reduced-motion: reduce"
 * in their operating system accessibility settings.
 *
 * Use this hook in components that apply JS-driven animations so
 * they can skip or simplify those animations accordingly.
 *
 * CSS-side reduced-motion is handled in animations.css via the
 * @media (prefers-reduced-motion: reduce) block.
 *
 * @returns {boolean} prefersReducedMotion
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    // SSR-safe check
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
