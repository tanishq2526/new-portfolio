import { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import { projects } from './data/projects.js';

const skills = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'REST + API design',
  'Responsive UI',
  'Modern frontends',
];

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">MERN developer</p>
          <h1>Tanishq Soni</h1>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Builds that feel deliberate and dependable</p>
            <h2>MERN product experiences with clean architecture and confident execution.</h2>
            <p>
              I design and ship polished full-stack interfaces with React, Node.js, Express and MongoDB. My work is focused on clarity, maintainability and thoughtful engineering.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">View recent work</a>
              <a className="button button--ghost" href="/Tanishq_resume.pdf" download>Download resume</a>
              <a className="button button--ghost" href="mailto:tanishq.25.ts@gmail.com">Email me</a>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="section-label">About</p>
            <h2>Focused MERN engineering with a refined visual system.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                Hello! I&apos;m Tanishq Soni — a self-taught developer with a deep curiosity for technology and a relentless drive to build meaningful digital experiences. What began as a fascination with how things work soon evolved into a passion for full-stack web development, backend systems, and scalable architecture. I thrive on turning complex problems into elegant, functional solutions — and I&apos;m always exploring new tools, technologies, and ideas to push my craft forward.
              </p>
            </div>
            <div className="skill-panel">
              <p className="skill-panel__title">Core focus</p>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Currently pursuing internship work at College Dekho.</h2>
          </div>
          <div className="experience-panel">
            <p className="experience-role">
              Full Stack Developer intern <span className="experience-company">@ College Dekho</span>
            </p>
            <p>
              Actively pursuing an internship opportunity that deepens MERN delivery, backend operations, and product-led frontend systems.
            </p>
            <div className="experience-details">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Full stack delivery</span>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading section-heading--wide">
            <p className="section-label">Projects</p>
            <h2>Thoughtful case-study cards for serious work.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="footer-title">Tanishq Soni</p>
          <p className="footer-copy">MERN developer with a product-grade frontend sensibility.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/tanishq2526" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com/TanishqSon28125" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.linkedin.com/in/tanishq-soni2005/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:tanishq.25.ts@gmail.com">Email</a>
        </div>
      </footer>
      <div className="page-flame" aria-hidden="true" />
    </div>
  );
}
