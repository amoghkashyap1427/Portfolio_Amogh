import { useEffect, useState } from 'react';

/**
 * useScrollSpy
 *
 * Tracks which section is currently visible in the viewport
 * and returns its ID as the active section identifier.
 *
 * Used by the Navbar to highlight the active nav link.
 *
 * @param {string[]} sectionIds - Array of section element IDs to observe.
 * @param {object}   options    - IntersectionObserver options.
 * @returns {string|null} activeId - The ID of the currently visible section.
 */
export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const defaultOptions = {
      root: null,
      // Trigger when the section reaches the top third of the viewport
      rootMargin: `-${options.offsetTop || 80}px 0px -60% 0px`,
      threshold: 0,
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, defaultOptions);

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, options.offsetTop]);

  return activeId;
}
