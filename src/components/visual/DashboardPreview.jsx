import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { dashboardMetrics } from "../../data/visual";
import styles from "./DashboardPreview.module.css";

export default function DashboardPreview({ large = false }) {
  return (
    <div
      className={`${styles.dashboard} ${large ? styles.large : ""}`}
      aria-label="Dashboard preview mockup"
    >
      <div className={styles.header}>
        <span className={styles.title}>Medicare Sales Dashboard</span>
        <span className={styles.live}>
          <span className={styles.liveDot} />
          Live
        </span>
      </div>
      <div className={styles.metrics}>
        {dashboardMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            className={styles.metric}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className={styles.metricTop}>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricTrend}>{m.trend}</span>
            </div>
            <span className={styles.metricValue}>{m.value}</span>
            <div className={styles.barTrack}>
              <motion.div
                className={styles.barFill}
                initial={{ width: 0 }}
                whileInView={{ width: m.width }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.chartWrap}>
        <span className={styles.chartLabel}>Weekly enrollment trend</span>
        <div className={styles.chart}>
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
            <motion.div
              key={i}
              className={styles.bar}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

DashboardPreview.propTypes = {
  large: PropTypes.bool,
};
