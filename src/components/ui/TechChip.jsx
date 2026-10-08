import styles from './TechChip.module.css';

/**
 * TechChip
 *
 * Small technology/skill badge rendered in JetBrains Mono.
 * Avoids progress bars or subjective percentage ratings.
 *
 * @param {string}  label    - Technology name
 * @param {boolean} accent   - If true, uses accent blue border (for featured tech)
 */
function TechChip({ label, accent = false }) {
  return (
    <span
      className={`${styles.chip} ${accent ? styles.accent : ''} text-mono-xs`}
    >
      {label}
    </span>
  );
}

export default TechChip;
