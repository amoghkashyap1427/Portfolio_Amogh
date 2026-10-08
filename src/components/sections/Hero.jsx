import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './Hero.module.css';

/* ---------------------------------------------------------------
   Scroll helper — accounts for the fixed navbar height (64px)
--------------------------------------------------------------- */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: 'smooth' });
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const contentRef = useRef(null);

  /* Single fade-in on mount (CSS-driven via class toggle) */
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = contentRef.current;
    if (!el) return;
    // Tiny rAF delay ensures transition fires after first paint
    const id = requestAnimationFrame(() => {
      el.classList.add(styles.contentVisible);
    });
    return () => cancelAnimationFrame(id);
  }, [prefersReducedMotion]);

  return (
    <section
      className={styles.hero}
      aria-label="Introduction"
    >
      {/* Subtle radial glow — purely decorative, hidden for reduced-motion */}
      {!prefersReducedMotion && (
        <div className={styles.glow} aria-hidden="true" />
      )}

      {/* Main content — left-aligned, editorial */}
      <div className={`container ${styles.inner}`}>
        <div
          ref={contentRef}
          className={`${styles.content} ${prefersReducedMotion ? styles.contentVisible : ''}`}
        >
          {/* Overline label */}
          <span className={styles.overline} aria-hidden="true">
            Based in Jaipur, India
          </span>

          {/* Name */}
          <h1 className={styles.name}>
            Amogh Kashyap
          </h1>

          {/* Title row */}
          <div className={styles.titleRow}>
            <span className={styles.titlePrimary}>SDE Intern</span>
            <span className={styles.titleSep} aria-hidden="true">/</span>
            <span className={styles.titleSecondary}>
              Software Development &amp; AI/Agentic AI
            </span>
          </div>

          {/* Professional introduction — factual, no fluff */}
          <p className={styles.bio}>
            B.Tech Computer Science (AI &amp; ML) student at NIAT ×&nbsp;VGU,
            currently in my 3rd semester with a&nbsp;9.3&nbsp;CGPA. I build
            full-stack web applications and AI/Agentic AI systems — from
            production e-commerce platforms to multi-step Gemini-powered data
            analysis agents.
          </p>

          {/* CTA buttons */}
          <div className={styles.ctas}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
              id="hero-cta-projects"
            >
              View Projects
            </Button>

            <Button
              variant="ghost"
              size="lg"
              href="/Amogh_Kashyap_Resume.pdf"
              download="Amogh_Kashyap_Resume.pdf"
              target="_blank"
              id="hero-cta-resume"
              ariaLabel="Download Resume (PDF, opens in new tab)"
            >
              Download Resume
            </Button>
          </div>

          {/* Icon links */}
          <div className={styles.socialLinks}>
            <Button
              variant="icon"
              href="https://github.com/amoghkashyap1427"
              target="_blank"
              ariaLabel="GitHub profile"
              id="hero-link-github"
            >
              <GitHubIcon size={20} />
            </Button>

            <Button
              variant="icon"
              href="https://linkedin.com/in/amoghkashyap17"
              target="_blank"
              ariaLabel="LinkedIn profile"
              id="hero-link-linkedin"
            >
              <LinkedInIcon size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <button
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
}

export default Hero;
