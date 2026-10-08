import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section components — stubs in Stage 1, implemented in later stages
import Hero          from './components/sections/Hero';
import About         from './components/sections/About';
import Skills        from './components/sections/Skills';
import Experience    from './components/sections/Experience';
import Projects      from './components/sections/Projects';
import Education     from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Achievements  from './components/sections/Achievements';
import Contact       from './components/sections/Contact';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" className={styles.main}>
        {/* Each section has a matching id for scroll-spy and anchor navigation */}
        <div id="home">
          <Hero />
        </div>

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="certifications" className="section">
          <Certifications />
        </section>

        <section id="achievements" className="section">
          <Achievements />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
 
