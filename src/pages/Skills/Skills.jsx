import { motion } from 'framer-motion';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNpm,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiRender,
  SiMongoose,
  SiSequelize,
  SiMui,
  SiJira,
  SiSlack,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './Skills.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const skillCategories = [
  {
    title: 'Languages',
    description: 'Core programming languages I write production code in daily.',
    color: 'var(--color-primary)',
    skills: [
      { name: 'JavaScript', icon: <FaJs />, level: 92 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'SQL', icon: <FaDatabase />, level: 78 },
    ],
  },
  {
    title: 'Frameworks',
    description: 'Frameworks & runtime environments for building robust applications.',
    color: 'var(--color-accent)',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
      { name: 'Express.js', icon: <SiExpress />, level: 88 },
      { name: 'React.js', icon: <FaReact />, level: 88 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
      { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
    ],
  },
  {
    title: 'Libraries',
    description: 'Key libraries that power my database and UI layer.',
    color: 'var(--color-primary-light)',
    skills: [
      { name: 'Mongoose', icon: <SiMongoose />, level: 88 },
      { name: 'Sequelize', icon: <SiSequelize />, level: 78 },
      { name: 'Material UI', icon: <SiMui />, level: 80 },
    ],
  },
  {
    title: 'Tools',
    description: 'Development tools and collaboration platforms I work with.',
    color: 'var(--color-accent)',
    skills: [
      { name: 'VS Code', icon: <VscCode />, level: 95 },
      { name: 'Git', icon: <FaGitAlt />, level: 88 },
      { name: 'GitHub', icon: <FaGithub />, level: 90 },
      { name: 'Postman', icon: <SiPostman />, level: 85 },
      { name: 'npm', icon: <FaNpm />, level: 90 },
      { name: 'Jira', icon: <SiJira />, level: 75 },
      { name: 'Slack', icon: <SiSlack />, level: 80 },
    ],
  },
  {
    title: 'Platforms',
    description: 'Cloud & hosting platforms I deploy applications on.',
    color: 'var(--color-primary)',
    skills: [
      { name: 'MongoDB Atlas', icon: <SiMongodb />, level: 88 },
      { name: 'MySQL', icon: <SiMysql />, level: 80 },
      { name: 'AWS', icon: <FaAws />, level: 70 },
      { name: 'Vercel', icon: <SiVercel />, level: 85 },
      { name: 'Netlify', icon: <SiNetlify />, level: 82 },
      { name: 'Heroku', icon: <SiHeroku />, level: 78 },
      { name: 'Render', icon: <SiRender />, level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills">
      {/* Hero Banner */}
      <div className="skills__hero section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">What I Bring to the Table</span>
            <h2>Skills & Expertise</h2>
            <p className="section-description">
              A comprehensive toolkit refined through years of building real-world
              applications, from front-end interfaces to scalable backend systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills Categories */}
      <div className="skills__content section">
        <div className="container">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className={`skills__category ${
                catIdx % 2 !== 0 ? 'skills__category--alt' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              {/* Category Header */}
              <div className="skills__category-header">
                <div
                  className="skills__category-indicator"
                  style={{ backgroundColor: category.color }}
                ></div>
                <div>
                  <h3 className="skills__category-title">{category.title}</h3>
                  <p className="skills__category-desc">{category.description}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="skills__grid">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="skills__card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  >
                    <div className="skills__card-icon">{skill.icon}</div>
                    <h4 className="skills__card-name">{skill.name}</h4>
                    <div className="skills__card-bar">
                      <motion.div
                        className="skills__card-fill"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                      ></motion.div>
                    </div>
                    <span className="skills__card-level">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="skills__marquee section-maroon">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-subtitle">Core Stack</span>
            <h2>Technologies I Love</h2>
          </motion.div>

          <div className="skills__stack-grid">
            {[
              { name: 'MongoDB', icon: <SiMongodb /> },
              { name: 'Express.js', icon: <SiExpress /> },
              { name: 'React.js', icon: <FaReact /> },
              { name: 'Node.js', icon: <FaNodeJs /> },
              { name: 'TypeScript', icon: <SiTypescript /> },
              { name: 'Next.js', icon: <SiNextdotjs /> },
              { name: 'AWS', icon: <FaAws /> },
              { name: 'Git', icon: <FaGitAlt /> },
            ].map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="skills__stack-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              >
                <span className="skills__stack-icon">{tech.icon}</span>
                <span className="skills__stack-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
