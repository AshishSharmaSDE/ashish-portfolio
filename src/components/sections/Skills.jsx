import { motion } from "framer-motion";
import { skills } from "../../data/content";
import styles from "./Skills.module.css";

const categoryMeta = {
  dataEngineering: { label: "Data", color: "#6366f1" },
  cloud: { label: "Cloud", color: "#0ea5e9" },
  visualization: { label: "Viz", color: "#f59e0b" },
  databases: { label: "DB", color: "#10b981" },
  fullStack: { label: "Stack", color: "#ec4899" },
};

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Tools I ship with</h2>
          <p className={styles.hint}>Tap a cluster — each color is a domain I work in.</p>
        </div>

        <div className={styles.mosaic}>
          {entries.map(([key, items], catIndex) => {
            const meta = categoryMeta[key] ?? { label: key, color: "#6366f1" };
            return (
              <motion.div
                key={key}
                className={styles.cluster}
                style={{ "--cluster-color": meta.color }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: catIndex * 0.05, duration: 0.35 }}
              >
                <span className={styles.clusterLabel}>{meta.label}</span>
                <div className={styles.tags}>
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className={styles.tag}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.05 + i * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
