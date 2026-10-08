import SectionHeader from '../ui/SectionHeader';
import TechChip from '../ui/TechChip';
import ScrollReveal from '../ui/ScrollReveal';
import { ExternalLink } from 'lucide-react';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

function Experience() {
  return (
    <div className="container">
      <ScrollReveal>
        <SectionHeader title="Experience" />
      </ScrollReveal>

      <div className={styles.timeline}>
        {experience.map((exp, index) => (
          <ScrollReveal 
            key={exp.id} 
            delay={1} 
            className={styles.entry}
          >
            {/* Timeline dot */}
            <div className={styles.timelineDot} aria-hidden="true" />

            <div className={styles.entryHeader}>
              <div className={styles.titleRow}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.company}>@ {exp.company}</span>
              </div>
              
              <div className={styles.meta}>
                <span className={styles.metaItem}>{exp.duration}</span>
                <span className={styles.metaDivider} aria-hidden="true">|</span>
                <span className={styles.metaItem}>{exp.location}</span>
                {exp.type === 'learning' && (
                  <>
                    <span className={styles.metaDivider} aria-hidden="true">|</span>
                    <span className={styles.learningTag}>Learning Program</span>
                  </>
                )}
              </div>
            </div>

            {exp.website && (
              <a 
                href={exp.website} 
                target="_blank" 
                rel="noreferrer"
                className={styles.companyLink}
                aria-label={`Visit ${exp.company} website`}
              >
                {exp.website.replace('https://', '').replace('www.', '')}
                <ExternalLink size={14} />
              </a>
            )}

            <ul className={styles.bullets}>
              {exp.responsibilities.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {exp.projects && exp.projects.length > 0 && (
              <div className={styles.projects}>
                <h4 className={styles.projectsLabel}>Projects Completed:</h4>
                <div className={styles.projectList}>
                  {exp.projects.map((proj, i) => (
                    <div key={i} className={styles.projectItem}>
                      <span className={styles.projectName}>{proj.name}</span>
                      <div className={styles.projectLinks}>
                        {proj.github && (
                          <a href={proj.github} target="_blank" rel="noreferrer" className={styles.projectLink}>
                            GitHub
                          </a>
                        )}
                        {proj.live && (
                          <a href={proj.live} target="_blank" rel="noreferrer" className={styles.projectLink}>
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.techList}>
              {exp.tech.map((techItem) => (
                <TechChip key={techItem} label={techItem} />
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default Experience;
