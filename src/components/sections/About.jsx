import { motion } from "framer-motion";
import SectionHeading from "../layout/SectionHeading";
import { about } from "../../data/content";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          label="About"
          title="The engineer behind the narrative"
          subtitle="Six years shipping software. Two years engineering data. One through-line — make complex things understandable and actionable."
        />
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {about.stats.map((stat) => (
            <div key={stat.label} className={`card ${styles.stat}`}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
