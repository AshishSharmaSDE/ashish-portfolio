import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { experience } from "../../data/content";
import styles from "./Experience.module.css";

export default function Experience() {
  const [expandedId, setExpandedId] = useState(experience[0]?.id ?? null);

  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <span className={styles.sectionHint}>Data engineering · Full stack</span>
        </div>

        <div className={styles.timeline}>
          {experience.map((job, index) => {
            const isOpen = expandedId === job.id;

            return (
              <motion.article
                key={job.id}
                className={`card ${styles.item}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  type="button"
                  className={styles.header}
                  onClick={() =>
                    setExpandedId(isOpen ? null : job.id)
                  }
                  aria-expanded={isOpen}
                >
                  <span className={styles.companyAvatar} aria-hidden="true">
                    {job.company
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div className={styles.meta}>
                    <div className={styles.metaTop}>
                      <span className={styles.period}>
                        {job.start} — {job.end}
                      </span>
                      {job.track && (
                        <span
                          className={`${styles.trackBadge} ${
                            job.track === "data" ? styles.trackData : styles.trackFullstack
                          }`}
                        >
                          {job.track === "data" ? "Data Engineering" : "Full Stack"}
                        </span>
                      )}
                    </div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>
                      {job.company} · {job.location}
                    </p>
                    {!isOpen && (
                      <p className={styles.summary}>{job.summary}</p>
                    )}
                  </div>
                  <span className={`${styles.chevron} ${isOpen ? styles.open : ""}`}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.body}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ul className={styles.responsibilities}>
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className={styles.tags}>
                        <span className={styles.tagGroupLabel}>Skills</span>
                        <div className={styles.tagList}>
                          {job.skills.map((skill) => (
                            <span key={skill} className="badge">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      {job.projects?.length > 0 && (
                        <div className={styles.tags}>
                          <span className={styles.tagGroupLabel}>Projects</span>
                          <div className={styles.tagList}>
                            {job.projects.map((project) => (
                              <span key={project} className={styles.projectTag}>
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
