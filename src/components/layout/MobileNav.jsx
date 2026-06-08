import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faWrench,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { mobileNav } from "../../data/content";
import styles from "./MobileNav.module.css";

const icons = {
  home: faHouse,
  about: faUser,
  work: faBriefcase,
  skills: faWrench,
  contact: faEnvelope,
};

export default function MobileNav() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = mobileNav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav} aria-label="Mobile section navigation">
      <ul className={styles.list}>
        {mobileNav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`${styles.link} ${active === item.href ? styles.active : ""}`}
              aria-current={active === item.href ? "page" : undefined}
            >
              <FontAwesomeIcon icon={icons[item.icon]} className={styles.icon} />
              <span className={styles.label}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
