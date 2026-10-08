import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { Mail, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import styles from './Contact.module.css';

const contactLinks = [
  {
    id: 'email',
    label: 'amoghkashyap1427@gmail.com',
    href: 'mailto:amoghkashyap1427@gmail.com',
    icon: <Mail size={20} />,
    isExternal: false
  },
  {
    id: 'phone',
    label: '+91 7488908709',
    href: 'tel:+917488908709',
    icon: <Phone size={20} />,
    isExternal: false
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/amoghkashyap17',
    icon: <LinkedInIcon size={20} />,
    isExternal: true
  },
  {
    id: 'github',
    label: 'GitHub Profile',
    href: 'https://github.com/amoghkashyap1427',
    icon: <GitHubIcon size={20} />,
    isExternal: true
  }
];

function Contact() {
  return (
    <div className="container" id="contact">
      <ScrollReveal>
        <SectionHeader title="Contact" />
      </ScrollReveal>

      <ScrollReveal delay={1} className={styles.wrapper}>
        <div className={styles.contentLeft}>
          <h3 className={styles.heading}>Let’s Build Something Useful.</h3>
          <p className={styles.supportingText}>
            I am currently open to Software Development and AI / Agentic AI internship opportunities.
            If you have a role that fits, or simply want to connect, my inbox is always open.
          </p>
          <div className={styles.location}>
            <span className={styles.locationLabel}>Location:</span>
            <span className={styles.locationValue}>Jaipur, Rajasthan, India</span>
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.linksGrid}>
            {contactLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
                className={styles.contactCard}
                aria-label={`Contact via ${link.id}`}
              >
                <div className={styles.iconWrapper} aria-hidden="true">
                  {link.icon}
                </div>
                <span className={styles.linkLabel}>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Contact;
