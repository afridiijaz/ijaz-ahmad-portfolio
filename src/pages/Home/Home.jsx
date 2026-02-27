import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
import './Home.css';

const Home = () => {
  return (
    <section className="hero">
      {/* Background Decorative Elements */}
      <div className="hero__bg-pattern"></div>
      <div className="hero__bg-circle hero__bg-circle--1"></div>
      <div className="hero__bg-circle hero__bg-circle--2"></div>

      <div className="hero__container container">
        <div className="hero__content">
          {/* Left Content */}
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="hero__greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Ijaz Ahmad
              <span className="hero__name-accent"> Afridi</span>
            </motion.h1>

            <motion.div
              className="hero__title-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="hero__decorative-line"></div>
              <h2 className="hero__title">Full Stack Developer</h2>
            </motion.div>

            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Passionate about building modern, scalable web applications with
              clean code and exceptional user experiences. Specializing in React,
              Node.js, and cloud technologies.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work <FaArrowRight />
              </Link>
              <a href="/resume.pdf" download className="btn btn-outline">
                <FaDownload /> Download CV
              </a>
            </motion.div>

            <motion.div
              className="hero__socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/ijaz-ahmad-afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/ijaz-ahmad-afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image Area */}
          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="hero__image-frame">
              <div className="hero__image-placeholder">
                <span className="hero__image-initials">IA</span>
              </div>
              <div className="hero__image-border"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="hero__stat hero__stat--1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">Years Experience</span>
            </motion.div>

            <motion.div
              className="hero__stat hero__stat--2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <span className="hero__stat-number">20+</span>
              <span className="hero__stat-label">Projects Done</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className="hero__scroll-text">Scroll Down</span>
          <HiOutlineChevronDown className="hero__scroll-icon" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
