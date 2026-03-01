import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaTwitter, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
import './Home.css';

const ROLES = [
  'MERN Stack Developer',
  'Software Developer',
  'Open Source Contributor',
  'Freelancer',
];

const useRotatingTypewriter = (phrases, typeSpeed = 80, eraseSpeed = 40, pauseDelay = 1500, startDelay = 2000) => {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    const currentPhrase = phrases[phraseIdx];
    let timer;

    if (isTyping) {
      if (displayed.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayed(currentPhrase.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => setIsTyping(false), pauseDelay);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, eraseSpeed);
      } else {
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, isTyping, phraseIdx, phrases, typeSpeed, eraseSpeed, pauseDelay, started]);

  return { displayed, isTyping };
};

const Home = () => {
  const { displayed, isTyping } = useRotatingTypewriter(ROLES, 80, 40, 1500, 2000);

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <motion.span
              className="hero__greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              Ijaz Ahmad
            </motion.h1>

            <motion.div
              className="hero__title-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <div className="hero__decorative-line"></div>
              <h2 className="hero__title">
                {displayed}
                <span className="hero__cursor hero__cursor--blink">|</span>
              </h2>
            </motion.div>

            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              Passionate about building modern, scalable web applications with
              clean code and exceptional user experiences. Specializing in React,
              Node.js, and cloud technologies.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work <FaArrowRight />
              </Link>
              <a href="/Ijaz_Ahmad_CV.pdf" download="Ijaz_Ahmad_CV.pdf" className="btn btn-outline">
                <FaDownload /> Download CV
              </a>
            </motion.div>

            <motion.div
              className="hero__socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/ijaz-ahmad-afridi-46a0b5252/"
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
              <a
                href="https://x.com/IjazAhmad936"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image (appears FIRST) */}
          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="hero__image-frame">
              <div className="hero__image-placeholder">
                <img
                  src="/ijazprofile.jpeg"
                  alt="Ijaz Ahmad"
                  className="hero__profile-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hero__image-initials" style={{ display: 'none' }}>IA</span>
              </div>
              <div className="hero__image-border"></div>
            </div>

            {/* Floating Stats - appear right after image */}
            <motion.div
              className="hero__stat hero__stat--1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">Years Experience</span>
            </motion.div>

            <motion.div
              className="hero__stat hero__stat--2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
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
          transition={{ delay: 3.4, duration: 0.6 }}
        >
          <span className="hero__scroll-text">Scroll Down</span>
          <HiOutlineChevronDown className="hero__scroll-icon" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
