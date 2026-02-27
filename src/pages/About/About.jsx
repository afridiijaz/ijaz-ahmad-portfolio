import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaArrowRight,
  FaDownload,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import './About.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const education = [
  {
    degree: 'BS Computer Systems Engineering',
    institution: 'University of Engineering & Technology, Peshawar',
    location: 'Peshawar, Pakistan',
    period: 'Nov 2021 – Aug 2025',
    grade: 'CGPA: 3.2',
  },
  {
    degree: 'FSC Computer Science',
    institution: 'Government Degree College Kohi Sher Haider Bara',
    location: 'Bara Khyber, Pakistan',
    period: 'Aug 2019 – Jun 2021',
    grade: 'Grade: A1',
  },
];

const highlights = [
  { icon: <FaBriefcase />, value: '2+', label: 'Years Experience' },
  { icon: <FaCode />, value: '20+', label: 'Projects Completed' },
  { icon: <FaGraduationCap />, value: 'BS CSE', label: 'UET Peshawar' },
];

const About = () => {
  return (
    <section className="about">
      {/* Hero Banner */}
      <div className="about__hero section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">Get to Know Me</span>
            <h2>About Me</h2>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="about__content section">
        <div className="container">
          <div className="about__grid">
            {/* Left - Image & Quick Info */}
            <motion.div
              className="about__left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="about__image-card">
                <div className="about__image-placeholder">
                  <span className="about__image-initials">IA</span>
                </div>
                <div className="about__image-accent"></div>
              </div>

              <div className="about__quick-info">
                <div className="about__info-item">
                  <HiOutlineMail className="about__info-icon" />
                  <span>afridiijaz520@gmail.com</span>
                </div>
                <div className="about__info-item">
                  <HiOutlinePhone className="about__info-icon" />
                  <span>+92 309 9624982</span>
                </div>
                <div className="about__info-item">
                  <FaMapMarkerAlt className="about__info-icon" />
                  <span>Peshawar, Pakistan</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Bio */}
            <motion.div
              className="about__right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUp}
            >
              <h3 className="about__name">
                Ijaz Ahmad <span className="about__name-accent">Afridi</span>
              </h3>
              <p className="about__role">Full Stack Developer (MERN Stack)</p>

              <div className="about__decorative-line"></div>

              <p className="about__bio">
                Enthusiastic and detail-oriented MERN Stack Developer with strong
                expertise in backend development using Node.js. Adept at building
                full-stack web applications, developing scalable APIs, and ensuring
                robust server-side logic.
              </p>
              <p className="about__bio">
                Passionate about writing clean, efficient code and delivering
                high-performance, user-focused solutions. Currently working as a
                Full Stack Developer at <strong>Terapage</strong>, contributing
                technical skills and problem-solving abilities in a dynamic
                development environment.
              </p>

              {/* Highlights */}
              <div className="about__highlights">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="about__highlight-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx + 2}
                    variants={fadeInUp}
                  >
                    <span className="about__highlight-icon">{item.icon}</span>
                    <span className="about__highlight-value">{item.value}</span>
                    <span className="about__highlight-label">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Actions */}
              <div className="about__actions">
                <a href="/resume.pdf" download className="btn btn-primary">
                  <FaDownload /> Download CV
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Let's Talk <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="about__education section section-maroon">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">Academic Background</span>
            <h2>Education</h2>
          </motion.div>

          <div className="about__edu-timeline">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="about__edu-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeInUp}
              >
                <div className="about__edu-icon">
                  <FaGraduationCap />
                </div>
                <div className="about__edu-content">
                  <h4 className="about__edu-degree">{edu.degree}</h4>
                  <p className="about__edu-institution">{edu.institution}</p>
                  <div className="about__edu-meta">
                    <span className="about__edu-meta-item">
                      <FaMapMarkerAlt /> {edu.location}
                    </span>
                    <span className="about__edu-meta-item">
                      <FaCalendarAlt /> {edu.period}
                    </span>
                  </div>
                  <span className="about__edu-grade">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Section */}
      <div className="about__volunteer section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">Giving Back</span>
            <h2>Volunteer Work</h2>
          </motion.div>

          <div className="about__volunteer-grid">
            <motion.div
              className="about__volunteer-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="about__volunteer-badge">Leadership</div>
              <h4>Finance Minister</h4>
              <p className="about__volunteer-org">
                Nojawan Hamdard Committee Bara
              </p>
              <p className="about__volunteer-period">April 2020 – Present</p>
              <p className="about__volunteer-desc">
                Youth organization working to promote social welfare and
                education in the community.
              </p>
            </motion.div>

            <motion.div
              className="about__volunteer-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUp}
            >
              <div className="about__volunteer-badge">Community</div>
              <h4>General Member</h4>
              <p className="about__volunteer-org">
                Bara Educational Society (BES)
              </p>
              <p className="about__volunteer-period">August 2019 – Present</p>
              <p className="about__volunteer-desc">
                A chain of shining students with the objective of bringing
                awareness and spreading education to the community.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
