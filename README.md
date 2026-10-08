# Amogh Kashyap — Developer Portfolio

A professional, responsive, and performance-optimized developer portfolio built to showcase software engineering and AI/Agentic AI projects. Designed with an "Engineered Clarity" aesthetic inspired by modern developer tooling platforms (Linear, Vercel, Stripe).

## 🚀 Overview

This portfolio is built with a focus on fast rendering, strict typography, and accessible UX. It highlights technical projects, competitive programming achievements, and professional experience without relying on generic fluff or heavy external animation libraries.

- **Live URL:** [Add Vercel/Netlify URL here]
- **Role Focus:** SDE Intern / Software Development / AI & Agentic AI

## 🛠 Tech Stack

- **Framework:** React.js + Vite
- **Styling:** Vanilla CSS & CSS Modules (CSS Custom Properties for design tokens)
- **Icons:** Lucide React
- **Typography:** Inter (Sans-serif) & JetBrains Mono (Monospace)
- **Deployment:** Ready for Vercel / Netlify

## ✨ Key Features

- **Component-Driven Architecture:** Modular `<Section>` components mapped to centralized data sources in `src/data/`.
- **Responsive "Engineered Clarity" Design:** Strict CSS Grid and Flexbox rules ensuring pixel-perfect layouts from 320px mobile viewports up to ultra-wide 1600px screens.
- **Scroll Spy Navigation:** Custom React hook tracking intersection observers to seamlessly update active navbar states.
- **Accessibility (a11y) First:** Semantic HTML structure, fully keyboard-navigable focus states, descriptive `aria-label`s, and built-in `prefers-reduced-motion` respecting transitions.
- **Data-Driven:** All projects, skills, experience, and achievements are decoupled from JSX and driven by JS data models for extremely easy updates.

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg              # Custom scalable vector favicon
│   └── Amogh_Kashyap_Resume.pdf # SDE Intern Resume
├── src/
│   ├── components/
│   │   ├── layout/              # Navbar, Footer
│   │   ├── sections/            # Hero, About, Projects, Education, etc.
│   │   └── ui/                  # Reusable primitives (Buttons, TechChips, ScrollReveal)
│   ├── data/                    # JSON-like config files driving the portfolio content
│   ├── hooks/                   # Custom React hooks (useScrollSpy, useReducedMotion)
│   ├── styles/
│   │   └── global.css           # CSS Reset and Custom Properties / Design Tokens
│   ├── App.jsx                  # Main routing/section wrapper
│   └── main.jsx                 # React Entry Point
```

## ⚙️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amoghkashyap1427/Portfolio_Amogh.git
   cd Portfolio_Amogh
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

The portfolio utilizes strict design tokens (Custom CSS Properties) declared in `global.css` to maintain visual consistency:
- **Surfaces:** Deep dark mode (`#0A0C10` background, `#0F1117` cards).
- **Accents:** Restrained blue accent (`#3B82F6`) used strictly for active states, vital metadata, and call-to-action emphasis.
- **Borders:** Subtle hierarchical borders replacing heavy drop-shadows to define depth.

## 📝 Updating Content

To update the portfolio in the future, simply edit the corresponding files in `src/data/`:
- `projects.js`: Add or modify featured and practice projects.
- `achievements.js`: Update LeetCode, Codeforces, and Hackathon stats.
- `experience.js`: Add new internships or roles.
- `education.js`: Update semester, CGPA, or certifications.

## 📄 License

This project is open-source and available under the MIT License.
