import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import './Contact.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'afridiijaz520@gmail.com',
    href: 'mailto:afridiijaz520@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone / WhatsApp',
    value: '+92 309 9624982',
    href: 'https://wa.me/923099624982',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Peshawar, Pakistan',
    href: null,
  },
];

const socials = [
  {
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ijaz-ahmad-afridi-46a0b5252',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/ijaz-ahmad-afridi',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    href: 'https://wa.me/923099624982',
  },
  {
    icon: <FaTwitter />,
    label: 'Twitter',
    href: 'https://twitter.com',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simulate submission. You can hook this up to EmailJS, Formspree, etc.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact">
      {/* Hero Banner */}
      <div className="contact__hero section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">Let's Work Together</span>
            <h2>Get in Touch</h2>
            <p className="section-description">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you. Drop me a message and I'll get back to you soon.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact__content section">
        <div className="container">
          <div className="contact__grid">
            {/* Left - Info */}
            <motion.div
              className="contact__info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="contact__info-heading">Contact Information</h3>
              <p className="contact__info-text">
                Feel free to reach out through any of the channels below. I'm
                always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="contact__info-list">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    className="contact__info-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx + 1}
                    variants={fadeInUp}
                  >
                    <div className="contact__info-icon">{info.icon}</div>
                    <div>
                      <span className="contact__info-label">{info.label}</span>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact__info-value contact__info-value--link"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact__info-value">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact__socials">
                <h4 className="contact__socials-title">Find Me On</h4>
                <div className="contact__socials-list">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      aria-label={social.label}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              className="contact__form-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUp}
            >
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name" className="contact__form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="contact__form-input"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="contact__form-input"
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="contact__form-input"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows="6"
                    className="contact__form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__form-btn"
                  disabled={submitted}
                >
                  {submitted ? (
                    'Message Sent! ✓'
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map / CTA Section */}
      <div className="contact__cta section-maroon">
        <div className="container">
          <motion.div
            className="contact__cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Let's Build Something Amazing</h2>
            <p>
              I'm currently open to freelance projects, full-time opportunities,
              and exciting collaborations. Let's turn your ideas into reality.
            </p>
            <div className="contact__cta-actions">
              <a href="mailto:afridiijaz520@gmail.com" className="btn btn-light">
                <FaEnvelope /> Email Me Directly
              </a>
              <a
                href="https://wa.me/923099624982"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <FaWhatsapp /> WhatsApp Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
