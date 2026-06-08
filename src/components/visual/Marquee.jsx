import { marqueeItems } from "../../data/visual";
import styles from "./Marquee.module.css";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
