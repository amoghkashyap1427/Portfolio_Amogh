import styles from './SectionHeader.module.css';

/**
 * SectionHeader
 *
 * Reusable section title + optional subtitle block.
 * Used at the top of every section to maintain visual consistency.
 *
 * @param {string} overline  - Small uppercase label above the title (optional)
 * @param {string} title     - Section heading (h2)
 * @param {string} subtitle  - Descriptive text below the title (optional)
 * @param {string} align     - 'left' (default) | 'center'
 */
function SectionHeader({ overline, title, subtitle, align = 'left' }) {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      {overline && (
        <span className={`text-overline ${styles.overline}`}>{overline}</span>
      )}
      <h2 className={`text-section-title ${styles.title}`}>{title}</h2>
      {subtitle && (
        <p className={`text-section-subtitle ${styles.subtitle}`}>{subtitle}</p>
      )}
    </header>
  );
}

export default SectionHeader;
