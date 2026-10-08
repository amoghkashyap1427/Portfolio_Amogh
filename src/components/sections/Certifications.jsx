import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { certifications } from '../../data/certifications';
import { Award } from 'lucide-react';
import styles from './Certifications.module.css';

function Certifications() {
  return (
    <div className="container">
      <ScrollReveal>
        <SectionHeader title="Certifications" />
      </ScrollReveal>

      <div className={styles.grid}>
        {certifications.map((cert, idx) => (
          <ScrollReveal key={cert.id} delay={idx + 1} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.iconWrapper} aria-hidden="true">
                <Award size={24} className={styles.icon} />
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.title}>{cert.name}</h3>
                
                <div className={styles.meta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.divider} aria-hidden="true">·</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>
              </div>
              
              {/* If a verification link is added in the future, it can render here */}
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className={styles.link} aria-label={`View certification for ${cert.name}`}>
                  Verify Credential
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
