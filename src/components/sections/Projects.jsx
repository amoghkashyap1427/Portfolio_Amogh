import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import TechChip from '../ui/TechChip';
import ScrollReveal from '../ui/ScrollReveal';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GitHubIcon } from '../ui/BrandIcons';
import { featuredProjects, otherProjects, practiceProjects, cpProjects } from '../../data/projects';
import styles from './Projects.module.css';

function FeaturedProjectCard({ project, isFeatured = false }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.featuredCard} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.cardHeader}>
        <div className={styles.titleArea}>
          <span className={styles.category}>{project.category}</span>
          <h3 className={styles.projectTitle}>{project.name}</h3>
        </div>
        <div className={styles.actions}>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.iconButton}
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <GitHubIcon size={20} />
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.iconButton}
              aria-label={`Visit ${project.name} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.techRow}>
        {project.tech.map((techItem) => (
          <TechChip key={techItem} label={techItem} />
        ))}
      </div>

      <div className={styles.expandAction}>
        <button 
          className={styles.expandButton} 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.detailsArea}>
          <div className={styles.detailBlock}>
            <h4 className={styles.detailHeading}>Problem / Purpose</h4>
            <p className={styles.detailText}>{project.problem}</p>
          </div>
          <div className={styles.detailBlock}>
            <h4 className={styles.detailHeading}>What I Built</h4>
            <p className={styles.detailText}>{project.whatIBuilt}</p>
          </div>
          <div className={styles.detailBlock}>
            <h4 className={styles.detailHeading}>Technical Approach</h4>
            <p className={styles.detailText}>{project.approach}</p>
          </div>
          <div className={styles.detailBlock}>
            <h4 className={styles.detailHeading}>Key Features</h4>
            <ul className={styles.featureList}>
              {project.features.map((feature, idx) => (
                <li key={idx} className={styles.detailText}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function CompactProjectCard({ project }) {
  return (
    <div className={styles.compactCard}>
      <div className={styles.compactHeader}>
        <h4 className={styles.compactTitle}>{project.name}</h4>
        <div className={styles.compactActions}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconButton} aria-label="GitHub">
              <GitHubIcon size={16} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={styles.iconButton} aria-label="Live Demo">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      <p className={styles.compactDescription}>{project.description}</p>
      <div className={styles.compactTech}>
        {project.tech.map((techItem) => (
          <span key={techItem} className={styles.miniTech}>{techItem}</span>
        ))}
      </div>
    </div>
  );
}

function MiniProjectLink({ project }) {
  return (
    <div className={styles.miniProjectRow}>
      <span className={styles.miniProjectTitle}>{project.name}</span>
      <div className={styles.miniProjectActions}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.miniLink}>GitHub</a>
        )}
        {project.live && (
          <>
            <span className={styles.miniDivider}>·</span>
            <a href={project.live} target="_blank" rel="noreferrer" className={styles.miniLink}>Live</a>
          </>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="container">
      <ScrollReveal>
        <SectionHeader title="Projects" />
      </ScrollReveal>

      {/* Featured Projects */}
      <div className={styles.featuredSection}>
        {featuredProjects.map((project, idx) => (
          <ScrollReveal key={project.id} delay={idx + 1}>
            <FeaturedProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Other Projects */}
      <ScrollReveal delay={1} className={styles.subSection}>
        <h3 className={styles.subSectionTitle}>Other Projects</h3>
        <div className={styles.compactGrid}>
          {otherProjects.map((project) => (
            <CompactProjectCard key={project.id} project={project} />
          ))}
        </div>
      </ScrollReveal>

      {/* More Projects & CP Grid */}
      <ScrollReveal delay={2} className={styles.subSection}>
        <div className={styles.splitGrid}>
          <div>
            <h3 className={styles.subSectionTitle}>Practice & Experiments</h3>
            <div className={styles.miniList}>
              {practiceProjects.map((project, idx) => (
                <MiniProjectLink key={idx} project={project} />
              ))}
            </div>
          </div>
          <div>
            <h3 className={styles.subSectionTitle}>Competitive Programming</h3>
            <div className={styles.miniList}>
              {cpProjects.map((project, idx) => (
                <MiniProjectLink key={idx} project={project} />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}

export default Projects;
