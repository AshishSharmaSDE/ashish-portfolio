import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faDownload,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { about, site, traits } from "../../data/content";
import profilePicture from "../../assets/img/profile_picture.jpg";
import styles from "./Hero.module.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.text} variants={item}>
            <p className={styles.greeting}>
              <span className={styles.wave}>👋</span> Hello, I&apos;m
            </p>
            <h1 className={styles.name}>{site.title}</h1>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.role}>{site.role}</p>

            <div className={styles.traitPills} aria-label="Core strengths">
              {traits.map((trait) => (
                <span key={trait.id} className={styles.traitPill}>
                  {trait.title}
                </span>
              ))}
            </div>

            <p className={styles.location}>
              <FontAwesomeIcon icon={faLocationDot} />
              {site.location}
            </p>
            <p className={styles.headline}>{about.headline}</p>
            <p className={styles.bio}>{about.bio}</p>

            <ul className={styles.highlights}>
              {about.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className={styles.cta}>
              <a href="#contact" className={`btn btn-primary ${styles.ctaPrimary}`}>
                Get in touch
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-secondary ${styles.ctaSecondary}`}
              >
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </a>
            </div>

            <div className={styles.social}>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.visual} variants={item}>
            <div className={styles.imageFrame}>
              <img
                src={profilePicture}
                alt={site.title}
                className={styles.profileImg}
                width={360}
                height={360}
              />
              <div className={styles.imageRing} aria-hidden="true" />
              <div className={styles.imageGlow} aria-hidden="true" />
            </div>
            <div className={styles.floatingCard}>
              <span className={styles.cardLabel}>{about.floatingCard.label}</span>
              <span className={styles.cardValue}>{about.floatingCard.value}</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className={styles.scrollHint}
          aria-label="Scroll to about section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className={styles.scrollText}>Explore</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </motion.a>
      </div>
    </section>
  );
}
