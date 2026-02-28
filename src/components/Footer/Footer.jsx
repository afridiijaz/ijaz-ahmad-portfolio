import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Top Section */}
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">Ijaz</span>
              <span className="footer__logo-accent"> Ahmad</span>
            </Link>
            <p className="footer__tagline">
              Full Stack Developer crafting digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__connect">
            <h4 className="footer__nav-title">Let's Connect</h4>
            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/ijaz-ahmad-afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/ijaz-ahmad-afridi"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:afridiijaz520@gmail.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="footer__email">afridiijaz520@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Ijaz Ahmad Afridi. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed & Built with <span className="footer__heart">♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
