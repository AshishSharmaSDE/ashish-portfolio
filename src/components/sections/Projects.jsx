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
import SectionHeading from "../layout/SectionHeading";
import { projects, projectFilters } from "../../data/content";
import styles from "./Projects.module.css";

const categoryIcons = {
  dataEngineering: faDatabase,
  fullStack: faLayerGroup,
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Pipelines, dashboards & products"
          subtitle="Professional healthcare data work alongside open-source and full-stack projects from earlier in my career."
        />

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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.length === 0 ? (
              <p className={styles.empty}>No projects in this category yet.</p>
            ) : (
              <>
                {featured.length > 0 && (
                  <div className={styles.featured}>
                    {featured.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        featured
                        index={index}
                      />
                    ))}
                  </div>
                )}

                <div className={styles.grid}>
                  {(featured.length > 0 ? rest : filtered).map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false, index }) {
  const icon = categoryIcons[project.category] ?? faCode;

  return (
    <motion.article
      className={`card ${styles.card} ${featured ? styles.featuredCard : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconBox}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className={styles.badges}>
          {project.featured && (
            <span className={styles.featuredBadge}>Featured</span>
          )}
          <span className={styles.categoryBadge}>
            {project.category === "dataEngineering" ? "Data" : "Full Stack"}
          </span>
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className="badge">
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
          <span className={styles.internalNote}>Professional / internal project</span>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Live demo
          </a>
        )}
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
  featured: PropTypes.bool,
  index: PropTypes.number,
};
