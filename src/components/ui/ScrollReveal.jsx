import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * ScrollReveal
 *
 * Wraps children in a div that fades in + translates up when
 * it enters the viewport. Uses IntersectionObserver, not scroll events.
 *
 * Animations are disabled if the user prefers reduced motion.
 *
 * @param {React.ReactNode} children  - Content to reveal
 * @param {number}          delay     - Stagger delay index (1–5), optional
 * @param {string}          className - Additional class names
 * @param {string}          as        - HTML element to render ('div', 'section', etc.)
 */
function ScrollReveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If reduced motion is preferred, make immediately visible
    if (prefersReducedMotion) {
      element.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          // Unobserve after triggering — one-shot animation
          observer.unobserve(element);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={['reveal', delayClass, className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  );
}

export default ScrollReveal;
