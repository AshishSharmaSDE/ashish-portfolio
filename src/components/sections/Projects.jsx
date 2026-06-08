import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faDatabase,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { projects, projectFilters } from "../../data/content";
import styles from "./Projects.module.css";

const categoryIcons = {
  dataEngineering: faDatabase,
  fullStack: faLayerGroup,
};

const categoryGradients = {
  dataEngineering: "linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)",
  fullStack: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Work & projects</h2>
          <div className={styles.filters} role="tablist" aria-label="Project categories">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`${styles.filterBtn} ${
                  activeFilter === filter.id ? styles.filterActive : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.length === 0 ? (
              <p className={styles.empty}>No projects in this category yet.</p>
            ) : (
              <div className={styles.grid}>
                {filtered.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const icon = categoryIcons[project.category] ?? faCode;
  const gradient =
    categoryGradients[project.category] ?? categoryGradients.fullStack;

  return (
    <motion.article
      className={`card ${styles.card} ${project.featured ? styles.featured : ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
    >
      <div
        className={styles.visualBanner}
        style={{ background: gradient }}
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={icon} className={styles.bannerIcon} />
        {project.featured && <span className={styles.featuredBadge}>★ Featured</span>}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.sourceLink ? (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faCode} />
              Source
            </a>
          ) : (
            <span className={styles.internalNote}>Internal project</span>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    sourceLink: PropTypes.string,
    liveLink: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number,
};
