/**
 * experience.js
 * Source of truth for professional experience entries.
 */

export const experience = [
  {
    id: 'techverse',
    company: 'TechVerse',
    role: 'Frontend Developer',
    duration: 'Feb 2026 – Jul 2026',
    location: 'Jaipur',
    type: 'professional', // distinguish from 'learning'
    website: 'https://www.techverseconnect.in',
    teamSize: 10,
    responsibilities: [
      'Built the complete TechVerse information website using React.js',
      'Connected the website to Firebase and configured Firebase Firestore',
      'Implemented Firebase Authentication for user management',
      'Collaborated as part of a 10-member development team',
      'Website is publicly live at techverseconnect.in',
    ],
    tech: ['React.js', 'Firebase', 'Firebase Firestore', 'Firebase Authentication'],
  },
  {
    id: 'kodbud',
    company: 'KodBud',
    role: 'Web Development Intern',
    duration: 'Jun 2026 – Aug 2026',
    location: 'Remote',
    type: 'professional',
    website: null,
    teamSize: null,
    responsibilities: [
      'Completed four web development projects as part of the internship programme',
      'Built a responsive landing page deployed on Vercel',
      'Developed a form with client-side validation deployed on Netlify',
      'Created a Google Homepage clone as a pixel-fidelity exercise',
      'Built a personal portfolio website',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'GitHub', 'Vercel', 'Netlify', 'VS Code'],
    projects: [
      {
        name: 'Responsive Landing Page',
        github: 'https://github.com/amoghkashyap1427/Responsive-Landing-Page',
        live: 'https://brave-cafe-website.vercel.app/',
      },
      {
        name: 'Form + Validation',
        github: 'https://github.com/amoghkashyap1427/Valid-Form',
        live: 'https://validform-17.netlify.app/',
      },
      {
        name: 'Google Homepage Clone',
        github: 'https://github.com/amoghkashyap1427/Google-Clone',
        live: 'https://google-17.netlify.app/',
      },
    ],
  },
  {
    id: '3skill',
    company: '3Skill',
    role: 'AI/ML Learning Program',
    duration: 'Feb 2026 – Apr 2026',
    location: 'Remote',
    // IMPORTANT: This was a structured learning program, not production employment.
    type: 'learning',
    website: null,
    teamSize: null,
    responsibilities: [
      'Completed structured AI/ML learning curriculum',
      'Practised Python-based data analysis with NumPy and Pandas',
      'Performed Exploratory Data Analysis (EDA) on sample datasets',
      'Studied data preprocessing techniques and ML model fundamentals',
      'Practised hyperparameter tuning exercises using Scikit-learn',
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    note: 'Learning programme — structured curriculum, not production employment.',
  },
];
