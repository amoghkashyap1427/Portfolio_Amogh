import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { competitiveProgramming, competitions, leadership } from '../../data/achievements';
import { Code2, Trophy, Users, ExternalLink } from 'lucide-react';
import styles from './Achievements.module.css';

function Achievements() {
  return (
    <div className="container">
      <ScrollReveal>
        <SectionHeader title="Achievements & Leadership" />
      </ScrollReveal>

      <div className={styles.sectionsWrapper}>
        
        {/* A. Competitive Programming */}
        <ScrollReveal delay={1} className={styles.subSection}>
          <div className={styles.subSectionHeader}>
            <Code2 className={styles.headerIcon} size={24} aria-hidden="true" />
            <h3 className={styles.subSectionTitle}>Competitive Programming</h3>
          </div>
          
          <div className={styles.cpGrid}>
            {/* LeetCode (Primary) */}
            <a href={competitiveProgramming.leetcode.url} target="_blank" rel="noreferrer" className={`${styles.cpCard} ${styles.leetcodeCard}`}>
              <div className={styles.cardTop}>
                <h4 className={styles.platformName}>LeetCode</h4>
                <ExternalLink size={16} className={styles.linkIcon} aria-hidden="true" />
              </div>
              
              <div className={styles.lcStats}>
                <div className={styles.lcMainStat}>
                  <span className={styles.lcNumber}>{competitiveProgramming.leetcode.problemsSolved}</span>
                  <span className={styles.lcLabel}>Problems Solved</span>
                </div>
                <div className={styles.lcBreakdown}>
                  <span className={styles.lcEasy}>{competitiveProgramming.leetcode.breakdown.easy} Easy</span>
                  <span className={styles.lcDivider}>·</span>
                  <span className={styles.lcMedium}>{competitiveProgramming.leetcode.breakdown.medium} Medium</span>
                  <span className={styles.lcDivider}>·</span>
                  <span className={styles.lcHard}>{competitiveProgramming.leetcode.breakdown.hard} Hard</span>
                </div>
              </div>
              
              <div className={styles.lcMetaGrid}>
                <div className={styles.metaBadge}>
                  <span className={styles.metaValue}>{competitiveProgramming.leetcode.rating}</span>
                  <span className={styles.metaKey}>Contest Rating</span>
                </div>
                <div className={styles.metaBadge}>
                  <span className={styles.metaValue}>{competitiveProgramming.leetcode.contests}</span>
                  <span className={styles.metaKey}>Contests</span>
                </div>
                <div className={styles.metaBadge}>
                  <span className={styles.metaValue}>{competitiveProgramming.leetcode.maxStreak}-Day</span>
                  <span className={styles.metaKey}>Max Streak</span>
                </div>
              </div>
            </a>

            <div className={styles.cpSecondaryCol}>
              {/* Codeforces */}
              <a href={competitiveProgramming.codeforces.url} target="_blank" rel="noreferrer" className={styles.cpCard}>
                <div className={styles.cardTop}>
                  <h4 className={styles.platformName}>Codeforces</h4>
                  <ExternalLink size={16} className={styles.linkIcon} aria-hidden="true" />
                </div>
                <div className={styles.secondaryStat}>
                  <span className={styles.secondaryNumber}>{competitiveProgramming.codeforces.problemsSolved}</span>
                  <span className={styles.secondaryLabel}>Problems Solved</span>
                </div>
              </a>
              
              {/* CodeChef */}
              <a href={competitiveProgramming.codechef.url} target="_blank" rel="noreferrer" className={styles.cpCard}>
                <div className={styles.cardTop}>
                  <h4 className={styles.platformName}>CodeChef</h4>
                  <ExternalLink size={16} className={styles.linkIcon} aria-hidden="true" />
                </div>
                <div className={styles.secondaryStat}>
                  <span className={styles.secondaryNumberActive}>{competitiveProgramming.codechef.status}</span>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* B. Competitions & Hackathons */}
        <ScrollReveal delay={2} className={styles.subSection}>
          <div className={styles.subSectionHeader}>
            <Trophy className={styles.headerIcon} size={24} aria-hidden="true" />
            <h3 className={styles.subSectionTitle}>Competitions & Hackathons</h3>
          </div>
          
          <div className={styles.compGrid}>
            {competitions.map((comp) => (
              <div key={comp.id} className={styles.compCard}>
                <h4 className={styles.compTitle}>{comp.title}</h4>
                <ul className={styles.compList}>
                  {comp.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.compListItem}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* C. Leadership & Campus */}
        <ScrollReveal delay={3} className={styles.subSection}>
          <div className={styles.subSectionHeader}>
            <Users className={styles.headerIcon} size={24} aria-hidden="true" />
            <h3 className={styles.subSectionTitle}>Leadership & Campus</h3>
          </div>
          
          <div className={styles.leadershipGrid}>
            {leadership.map((item) => (
              <div key={item.id} className={styles.leadershipCard}>
                <div className={styles.leadershipTop}>
                  <h4 className={styles.leadershipOrg}>{item.organization}</h4>
                  <span className={styles.leadershipRole}>{item.role}</span>
                </div>
                {item.context && <p className={styles.leadershipContext}>{item.context}</p>}
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

export default Achievements;
