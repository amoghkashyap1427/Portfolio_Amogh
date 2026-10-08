import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './About.module.css';

function About() {
  return (
    <div className="container">
      <ScrollReveal>
        <SectionHeader title="About Me" />
      </ScrollReveal>

      <div className={styles.grid}>
        {/* Left Column: Text */}
        <ScrollReveal className={styles.textContent} delay={1}>
          <p className="text-body">
            I am a B.Tech Software Engineering student specializing in Computer Science – AI & ML, currently in my 3rd semester. My primary interests are software development and AI/Agentic AI. I build full-stack applications and intelligent AI-powered systems, focusing on clean architecture and practical implementations.
          </p>
        </ScrollReveal>

        {/* Right Column: Stat Grid */}
        <div className={styles.statGrid}>
          <ScrollReveal delay={2} className={styles.statCard}>
            <span className={styles.statValue}>9.3</span>
            <span className={styles.statLabel}>CGPA</span>
          </ScrollReveal>
          
          <ScrollReveal delay={3} className={styles.statCard}>
            <span className={styles.statValue}>196</span>
            <span className={styles.statLabel}>LeetCode Problems</span>
          </ScrollReveal>
          
          <ScrollReveal delay={4} className={styles.statCard}>
            <span className={styles.statValue}>3rd</span>
            <span className={styles.statLabel}>Semester</span>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default About;
