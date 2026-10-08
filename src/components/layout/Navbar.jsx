import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'experience',   label: 'Experience' },
  { id: 'projects',     label: 'Projects' },
  { id: 'education',    label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact',      label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const activeId                    = useScrollSpy(SECTION_IDS, { offsetTop: 80 });

  // Detect scroll to apply solid nav background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Account for fixed nav height
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <button
            className={styles.logo}
            onClick={handleLogoClick}
            aria-label="Scroll to top"
          >
            <span className={styles.logoText}>AK</span>
          </button>

          {/* Desktop nav links */}
          <ul className={styles.desktopLinks} role="list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${styles.navLink} ${activeId === id ? styles.active : ''}`}
                  onClick={() => handleNavClick(id)}
                  aria-current={activeId === id ? 'location' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Resume CTA */}
          <div className={styles.desktopCta}>
            <Button
              variant="ghost"
              size="sm"
              href="/Amogh_Kashyap_Resume.pdf"
              download="Amogh_Kashyap_Resume.pdf"
              target="_blank"
              ariaLabel="Download Resume (opens in new tab)"
            >
              Resume
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <ul className={styles.mobileLinks} role="list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${styles.mobileNavLink} ${activeId === id ? styles.active : ''}`}
                  onClick={() => handleNavClick(id)}
                  aria-current={activeId === id ? 'location' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
            <li className={styles.mobileResume}>
              <Button
                variant="ghost"
                size="md"
                href="/Amogh_Kashyap_Resume.pdf"
                download="Amogh_Kashyap_Resume.pdf"
                target="_blank"
                ariaLabel="Download Resume"
              >
                Download Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
