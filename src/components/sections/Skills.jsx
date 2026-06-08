import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../layout/SectionHeading";
import { skills, workflow } from "../../data/content";
import styles from "./Skills.module.css";

const categoryLabels = {
  dataEngineering: "Data Engineering",
  cloud: "Cloud & DevOps",
  visualization: "Analytics & Viz",
  databases: "Databases",
  fullStack: "Full Stack (Background)",
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Data stack with a product engineering edge"
          subtitle="Core data engineering tools today — plus the full-stack skills that let me ship end-to-end when the problem demands it."
        />

        <div className={styles.grid}>
          {categories.map(([key, items], index) => (
            <motion.div
              key={key}
              className={`card ${styles.category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3 className={styles.categoryTitle}>
                {categoryLabels[key] ?? key}
              </h3>
              <ul className={styles.skillList}>
                {items.map((skill) => (
                  <li key={skill}>
                    <span className="badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`card ${styles.workflow}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className={styles.workflowTitle}>Workflow highlights</h3>
          <ul className={styles.workflowList}>
            {workflow.map((item) => (
              <li key={item}>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
