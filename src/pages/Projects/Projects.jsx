import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaServer,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloudUploadAlt,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';
import './Projects.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

const projects = [
  {
    id: 1,
    title: 'TravelNest',
    tagline: 'Online Hotel Room Booking Platform',
    description:
      'A full-featured hotel booking application built with the MERN stack following MVC architecture. Users can browse hotels, book rooms, and manage reservations. Integrated Cloudinary for image storage.',
    tags: ['Full Stack'],
    tech: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Cloudinary', icon: <FaCloudUploadAlt /> },
    ],
    features: [
      'MVC Architecture',
      'Cloudinary Integration',
      'Room Booking System',
      'User Authentication',
    ],
    period: 'Sep 2024 – Dec 2024',
    liveUrl: 'https://travelnest-6zeq.onrender.com/',
    githubUrl: 'https://github.com/afridiijaz/travelNest',
    image: null,
    color: '#6B1D2A',
  },
  {
    id: 2,
    title: 'GitHub Clone',
    tagline: 'Full Stack GitHub Repository Manager',
    description:
      'A GitHub-inspired application with user authentication using bcrypt hashing and JWT. Features terminal command reading via yargs, client-side routing, and full CRUD operations on repositories.',
    tags: ['Full Stack'],
    tech: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
    ],
    features: [
      'JWT Authentication',
      'Bcrypt Hashing',
      'Terminal Commands (Yargs)',
      'Client-Side Routing',
    ],
    period: 'Apr 2025 – May 2025',
    liveUrl: null,
    githubUrl: 'https://github.com/ijaz-ahmad-afridi/github-clone',
    image: null,
    color: '#C9A84C',
  },
  {
    id: 3,
    title: 'Weather App',
    tagline: 'Real-Time Weather Forecasting',
    description:
      'A React.js weather application exploring core concepts like component rendering, hooks, and state lifting. Features client-side routing and clean, responsive UI with real-time weather data.',
    tags: ['Frontend'],
    tech: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'API Integration', icon: <FaServer /> },
    ],
    features: [
      'React Hooks',
      'State Lifting',
      'Client-Side Routing',
      'Responsive Design',
    ],
    period: 'Aug 2025',
    liveUrl: null,
    githubUrl: 'https://github.com/ijaz-ahmad-afridi/weather-app',
    image: null,
    color: '#4A0E1C',
  },
  {
    id: 4,
    title: 'Lottery Game',
    tagline: 'Interactive Lottery Simulation',
    description:
      'A fun React.js project implementing functional programming patterns. Explores component lifecycle, rendering concepts, client-side routing, and authentication with an interactive lottery mechanism.',
    tags: ['Frontend'],
    tech: [
      { name: 'React.js', icon: <FaReact /> },
    ],
    features: [
      'Functional Programming',
      'Component Lifecycle',
      'Client-Side Routing',
      'Authentication',
    ],
    period: '2025',
    liveUrl: null,
    githubUrl: 'https://github.com/ijaz-ahmad-afridi/lottery-game',
    image: null,
    color: '#8B2E3D',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="projects">
     
      <div className="projects__hero section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">What I've Built</span>
            <h2>Featured Projects</h2>
            <p className="section-description">
              A collection of real-world applications showcasing my expertise in
              full-stack development, API design, and modern frontend frameworks.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="projects__filters section">
        <div className="container">
          <motion.div
            className="projects__filter-bar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                className={`projects__filter-btn ${
                  activeFilter === filter ? 'projects__filter-btn--active' : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="projects__grid">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="projects__card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  variants={fadeInUp}
                  layout
                >
                  {/* Card Top - Visual */}
                  <div
                    className="projects__card-visual"
                    style={{
                      background: `linear-gradient(135deg, ${project.color} 0%, var(--color-secondary) 100%)`,
                    }}
                  >
                    <span className="projects__card-period">
                      {project.period}
                    </span>
                    <h3 className="projects__card-title-overlay">
                      {project.title}
                    </h3>

                    {/* Hover Overlay with Buttons */}
                    <div className="projects__card-overlay">
                      <div className="projects__card-overlay-btns">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__overlay-btn"
                          >
                            <FaExternalLinkAlt />
                            <span>Live Preview</span>
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects__overlay-btn projects__overlay-btn--code"
                        >
                          <FaGithub />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="projects__card-body">
                    <div className="projects__card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="projects__card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="projects__card-title">{project.title}</h3>
                    <p className="projects__card-tagline">{project.tagline}</p>
                    <p className="projects__card-desc">{project.description}</p>

                    {/* Features */}
                    <div className="projects__card-features">
                      {project.features.map((feat) => (
                        <span key={feat} className="projects__card-feature">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="projects__card-tech">
                      {project.tech.map((t) => (
                        <span
                          key={t.name}
                          className="projects__card-tech-item"
                          title={t.name}
                        >
                          {t.icon}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="projects__cta section-maroon">
        <div className="container">
          <motion.div
            className="projects__cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Want to See More?</h2>
            <p>
              Check out my GitHub for more projects, contributions, and
              open-source work.
            </p>
            <a
              href="https://github.com/ijaz-ahmad-afridi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              <FaGithub /> Visit My GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
