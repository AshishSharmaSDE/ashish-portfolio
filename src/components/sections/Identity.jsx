import { motion } from "framer-motion";
import { identityTiles } from "../../data/visual";
import { approach } from "../../data/content";
import PipelineVisual from "../visual/PipelineVisual";
import DashboardPreview from "../visual/DashboardPreview";
import styles from "./Identity.module.css";

export default function Identity() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <header className={styles.sectionHead}>
          <span className={styles.sectionLabel}>How I work</span>
          <h2 className={styles.sectionTitle}>Thinker · Problem solver · Storyteller</h2>
        </header>

        <div className={styles.traitsRow}>
          {identityTiles.map((tile, i) => (
            <motion.article
              key={tile.id}
              className={styles.traitTile}
              style={{ "--tile-accent": tile.color }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              whileHover={{ y: -3 }}
            >
              <span className={styles.tileEmoji}>{tile.emoji}</span>
              <div className={styles.traitText}>
                <h3 className={styles.tileTitle}>{tile.title}</h3>
                <p className={styles.tileMetric}>{tile.metric}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.workBlock}>
          <span className={styles.cellLabel}>What I build</span>
          <div className={styles.workRow}>
            <motion.div
              className={styles.pipelineCol}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <PipelineVisual />
            </motion.div>

            <motion.div
              className={styles.dashboardCol}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <DashboardPreview large />
            </motion.div>
          </div>
        </div>

        <div className={styles.footerRow}>
          <motion.blockquote
            className={styles.quoteCell}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
            <p>{approach.quote}</p>
          </motion.blockquote>

          <motion.div
            className={styles.processCell}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {approach.process.map((step) => (
              <div key={step.step} className={styles.processItem}>
                <span className={styles.processNum}>{step.step}</span>
                <div>
                  <span className={styles.processTitle}>{step.title}</span>
                  <p className={styles.processText}>{step.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
