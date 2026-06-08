import styles from "./PageBackground.module.css";

export default function PageBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.glow} ${styles.glowOne}`} />
      <div className={`${styles.glow} ${styles.glowTwo}`} />
    </div>
  );
}
