import SectionHeader from '../ui/SectionHeader';
import TechChip from '../ui/TechChip';
import ScrollReveal from '../ui/ScrollReveal';
import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

function Skills() {
  return (
    <div className="container">
      <ScrollReveal>
        <SectionHeader title="Skills" align="center" />
      </ScrollReveal>
      
      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <ScrollReveal 
            key={category.id} 
            delay={(index % 3) + 1} 
            className={styles.categoryCard}
          >
            <h3 className={styles.categoryTitle}>{category.label}</h3>
            <div className={styles.chipGroup}>
              {category.skills.map(skill => (
                <TechChip key={skill} label={skill} />
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default Skills;
