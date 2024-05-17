import PropTypes from "prop-types";
import { projects } from "../../../config";
import Project from "./Project";

const Projects = () => {
  return (
    <section
      className="portfolio-section px-0 py-3 px-md-3 px-lg-5 py-lg-5 d-flex justify-content-center align-items-center"
      id="projects"
    >
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center px-3 px-md-0">
          <h2>Projects</h2>
        </div>

        <div className="portfolio-item d-flex flex-column justify-content-between mb-5">
          {projects.map((project) => (
            <Project
              {...project}
              key={project.title}
              inVisible={project.inVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default Projects;
