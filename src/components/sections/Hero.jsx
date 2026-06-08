import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { about, site, traits } from "../../data/content";
import { identityTiles } from "../../data/visual";
import profilePicture from "../../assets/img/profile_picture.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.mesh} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.bento}>
          {/* Photo block — dominant visual */}
          <motion.div
            className={styles.photoBlock}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={profilePicture}
              alt={site.title}
              className={styles.photo}
              width={400}
              height={400}
            />
            <div className={styles.photoOverlay}>
              <span className={styles.photoBadge}>{about.floatingCard.value}</span>
            </div>
            {identityTiles.map((tile, i) => (
              <motion.span
                key={tile.id}
                className={`${styles.floatChip} ${styles[`chip${i}`]}`}
                style={{ "--chip-color": tile.color }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.12 }}
              >
                <span className={styles.chipEmoji}>{tile.emoji}</span>
                {tile.title}
              </motion.span>
            ))}
          </motion.div>

          {/* Identity block — bold type, minimal copy */}
          <motion.div
            className={styles.identityBlock}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <p className={styles.greeting}>{site.title}</p>
            <h1 className={styles.headline}>
              I turn messy data into{" "}
              <span className={styles.highlight}>stories</span> people act on.
            </h1>

            <div className={styles.traitRow}>
              {traits.map((t) => (
                <span key={t.id} className={styles.trait}>
                  {t.title}
                </span>
              ))}
            </div>

            <p className={styles.role}>{site.role}</p>

            <div className={styles.meta}>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                {site.location}
              </span>
            </div>

            <div className={styles.story}>
              {about.story.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.stats}>
              {about.stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="#projects" className="btn btn-primary">
                See my work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                aria-label="Download resume"
              >
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>

            <div className={styles.social}>
              <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
