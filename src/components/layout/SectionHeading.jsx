import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./SectionHeading.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  id,
}) {
  return (
    <motion.header
      id={id}
      className={`${styles.heading} ${styles[align]}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {label && (
        <motion.p className="section-label" variants={fadeUp}>
          {label}
        </motion.p>
      )}
      <motion.h2 className="section-title" variants={fadeUp}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="section-subtitle" variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}

SectionHeading.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
  id: PropTypes.string,
};
