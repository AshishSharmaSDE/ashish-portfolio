import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={styles.iconWrap} data-theme-icon={isDark ? "moon" : "sun"}>
        <FontAwesomeIcon icon={faSun} className={styles.sun} />
        <FontAwesomeIcon icon={faMoon} className={styles.moon} />
      </span>
    </button>
  );
}
