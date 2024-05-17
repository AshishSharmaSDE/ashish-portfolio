import { experience } from "../../../config";
import "./Experience.scss";

const Experience = () => {
  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {experience.map((job, index) => (
          <div
            key={index}
            className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div>
              <h3 className="mb-0">{job.role}</h3>
              <div className="subheading mb-3">{job.company}</div>
              <p>{job.responsibilities.join(" ")}</p>
              <p className="my-3">Skills: {job.skillSet.join(", ")}</p>
              <p>Projects: {job.projects.join(", ")}</p>
            </div>
            <div className="portfolio-date text-md-right">
              <span className="text-primary">
                {job.workedFrom} - {job.workTill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
