import { motion } from "framer-motion";
import { pipelineSteps } from "../../data/visual";
import styles from "./PipelineVisual.module.css";

export default function PipelineVisual() {
  return (
    <div className={styles.pipeline} aria-label="Data pipeline flow visualization">
      {pipelineSteps.map((step, i) => (
        <motion.div
          key={step.label}
          className={styles.step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <div className={styles.icon}>{step.icon}</div>
          <div className={styles.stepText}>
            <span className={styles.label}>{step.label}</span>
            <span className={styles.sub}>{step.sub}</span>
          </div>
          {i < pipelineSteps.length - 1 && (
            <span className={styles.arrow} aria-hidden="true">
              <span className={styles.arrowLine} />
              <span className={styles.arrowHead} />
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
