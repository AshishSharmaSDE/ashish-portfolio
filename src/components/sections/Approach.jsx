import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faLightbulb,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../layout/SectionHeading";
import { traits, approach } from "../../data/content";
import styles from "./Approach.module.css";

const traitIcons = {
  thinker: faBrain,
  solver: faLightbulb,
  storyteller: faBookOpen,
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Approach() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          label="How I work"
          title="Thinker. Problem solver. Storyteller."
          subtitle="Three lenses I bring to every pipeline, dashboard, and stakeholder conversation."
        />

        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <p>{approach.quote}</p>
        </motion.blockquote>

        <div className={styles.traits}>
          {traits.map((trait, index) => (
            <motion.article
              key={trait.id}
              className={`card ${styles.traitCard}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.traitIcon}>
                <FontAwesomeIcon icon={traitIcons[trait.id]} />
              </div>
              <h3 className={styles.traitTitle}>{trait.title}</h3>
              <p className={styles.traitTagline}>{trait.tagline}</p>
              <p className={styles.traitDesc}>{trait.description}</p>
            </motion.article>
          ))}
        </div>

        <div className={styles.process}>
          {approach.process.map((step, index) => (
            <motion.div
              key={step.step}
              className={styles.processStep}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <span className={styles.stepNum}>{step.step}</span>
              <div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
