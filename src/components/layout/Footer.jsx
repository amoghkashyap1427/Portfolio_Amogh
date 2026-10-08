import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import Button from '../ui/Button';
import styles from './Footer.module.css';

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/amoghkashyap1427',
    icon: <GitHubIcon size={18} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/amoghkashyap17',
    icon: <LinkedInIcon size={18} />,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:amoghkashyap1427@gmail.com',
    icon: <Mail size={18} />,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Identity */}
        <div className={styles.identity}>
          <span className={`text-mono ${styles.name}`}>Amogh Kashyap</span>
          <span className={`text-body-sm ${styles.title}`}>SDE Intern</span>
        </div>

        {/* Social icon links */}
        <nav className={styles.social} aria-label="Social links">
          {SOCIAL_LINKS.map(({ id, label, href, icon }) => (
            <Button
              key={id}
              variant="icon"
              href={href}
              target={id !== 'email' ? '_blank' : undefined}
              ariaLabel={label}
            >
              {icon}
            </Button>
          ))}
        </nav>

        {/* Copyright */}
        <p className={`text-label ${styles.copy}`}>
          &copy; {year} Amogh Kashyap
        </p>
      </div>
    </footer>
  );
}

export default Footer;
