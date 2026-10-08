import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { education } from '../../data/education';
import styles from './Education.module.css';

function Education() {
  const primaryEducation = education.find((item) => item.primary);
  const secondaryEducation = education.filter((item) => !item.primary);

  return (
    <div className="container">
      <ScrollReveal>
        <SectionHeader title="Education" />
      </ScrollReveal>

      {/* Featured Primary Education */}
      {primaryEducation && (
        <ScrollReveal delay={1} className={styles.primaryContainer}>
          <div className={styles.primaryCard}>
            <div className={styles.primaryHeader}>
              <h3 className={styles.primaryDegree}>{primaryEducation.degree}</h3>
              <span className={styles.primarySpecialisation}>{primaryEducation.specialisation}</span>
            </div>
            
            <p className={styles.primaryInstitution}>{primaryEducation.institution}</p>
            
            <div className={styles.primaryMetaRow}>
              <div className={styles.primaryMetaItem}>
                <span className={styles.metaIcon} aria-hidden="true">📅</span>
                {primaryEducation.duration}
              </div>
              <div className={styles.primaryMetaItem}>
                <span className={styles.metaLabel}>{primaryEducation.scoreLabel}</span>
                <span className={styles.metaValue}>{primaryEducation.score}</span>
              </div>
              {primaryEducation.status && (
                <div className={styles.primaryMetaItem}>
                  <span className={styles.metaValue}>{primaryEducation.status}</span>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Secondary School Education */}
      {secondaryEducation.length > 0 && (
        <ScrollReveal delay={2} className={styles.secondaryContainer}>
          <h4 className={styles.secondarySectionTitle}>School Education</h4>
          <div className={styles.secondaryGrid}>
            {secondaryEducation.map((item) => (
              <div key={item.id} className={styles.secondaryCard}>
                <h5 className={styles.secondaryInstitution}>{item.institution}</h5>
                <div className={styles.secondaryMeta}>
                  <span>{item.degree}</span>
                  <span className={styles.divider} aria-hidden="true">·</span>
                  <span>{item.specialisation}</span>
                  <span className={styles.divider} aria-hidden="true">·</span>
                  <span>{item.duration}</span>
                  <span className={styles.divider} aria-hidden="true">·</span>
                  <span className={styles.score}>{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

export default Education;
