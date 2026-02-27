import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCertificate,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import './Experience.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const workExperience = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Terapage',
    type: 'Full-time',
    location: 'Remote',
    period: 'September 2025 – Present',
    current: true,
    responsibilities: [
      'Integrated MongoDB and MySQL, ensuring efficient data handling across services.',
      'Built and optimized RESTful APIs with Node.js and Express.js.',
      'Designed and implemented APIs, handled server-side logic, and managed databases.',
      'Improved server performance by optimizing database queries and reducing response times.',
    ],
  },
  {
    id: 2,
    role: 'MERN Stack Developer',
    company: 'Quantum Tech Academy',
    type: 'Full-time',
    location: 'Peshawar, Pakistan',
    period: 'January 2022 – July 2023',
    current: false,
    responsibilities: [
      'Developed, maintained, and deployed full-stack web applications using the MERN stack.',
      'Collaborated with front-end and back-end teams to create user-friendly and efficient applications.',
      'Implemented data management solutions and user authentication processes for scalable, secure apps.',
      'Ensured responsive design and optimal user experience (UI/UX) across various devices.',
      'Integrated and managed RESTful APIs for real-time data handling and dynamic features.',
      'Optimized performance, security, and scalability in an Agile development environment.',
    ],
  },
  {
    id: 3,
    role: 'Backend Developer',
    company: 'Quantum Tech Academy',
    type: 'Part-time',
    location: 'Peshawar, Pakistan',
    period: 'January 2022 – July 2023',
    current: false,
    responsibilities: [
      'Integrated MongoDB and MySQL, ensuring efficient data handling.',
      'Built and optimized RESTful APIs with Node.js and Express.js.',
      'Designed and implemented APIs, handled server-side logic, and managed databases.',
      'Improved server performance by optimizing database queries and reducing response times.',
    ],
  },
];

const certificates = [
  {
    title: 'Angular Fundamentals: Building Responsive Web Apps with Ease',
    issuer: 'EDUCBA',
    date: 'January 2025',
    highlights: [
      'Learned core Angular concepts like components, modules, and services.',
      'Built responsive single-page applications using Angular CLI.',
    ],
    link: '#',
  },
  {
    title: 'Introduction to Front-end Development with ReactJS',
    issuer: 'Online Certification',
    date: 'February 2023',
    highlights: [
      'Understood key React concepts like components, props, and state management.',
      'Built interactive user interfaces using JSX and component-based architecture.',
    ],
    link: '#',
  },
  {
    title: 'APIs in Node.js: Write a RESTful API Backend Application',
    issuer: 'Online Certification',
    date: 'February 2023',
    highlights: [
      'Designed and built RESTful APIs with Express.js.',
      'Explored component lifecycle and rendering concepts.',
    ],
    link: '#',
  },
];

const Experience = () => {
  return (
    <section className="experience">
      {/* Hero Banner */}
      <div className="experience__hero section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">My Professional Journey</span>
            <h2>Work Experience</h2>
            <p className="section-description">
              Building impactful digital products across startups and tech
              companies, from backend systems to full-stack applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="experience__timeline section">
        <div className="container">
          <div className="experience__timeline-wrapper">
            {/* Timeline line */}
            <div className="experience__timeline-line"></div>

            {workExperience.map((job, idx) => (
              <motion.div
                key={job.id}
                className={`experience__item ${
                  idx % 2 === 0 ? 'experience__item--left' : 'experience__item--right'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={idx}
                variants={fadeInUp}
              >
                {/* Timeline dot */}
                <div
                  className={`experience__dot ${
                    job.current ? 'experience__dot--active' : ''
                  }`}
                >
                  <FaBriefcase />
                </div>

                {/* Card */}
                <div className="experience__card">
                  {job.current && (
                    <span className="experience__badge">Current Role</span>
                  )}

                  <h3 className="experience__role">{job.role}</h3>
                  <p className="experience__company">{job.company}</p>

                  <div className="experience__meta">
                    <span className="experience__meta-item">
                      <FaCalendarAlt /> {job.period}
                    </span>
                    <span className="experience__meta-item">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className="experience__type-badge">{job.type}</span>
                  </div>

                  <ul className="experience__responsibilities">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>
                        <FaCheckCircle className="experience__check-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="experience__certificates section section-maroon">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">Continuous Learning</span>
            <h2>Certifications</h2>
          </motion.div>

          <div className="experience__cert-grid">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                className="experience__cert-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeInUp}
              >
                <div className="experience__cert-icon">
                  <FaCertificate />
                </div>
                <div className="experience__cert-body">
                  <h4 className="experience__cert-title">{cert.title}</h4>
                  <div className="experience__cert-meta">
                    <span>{cert.issuer}</span>
                    <span className="experience__cert-dot">•</span>
                    <span>{cert.date}</span>
                  </div>
                  <ul className="experience__cert-highlights">
                    {cert.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                  {cert.link && cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience__cert-link"
                    >
                      View Certificate <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
