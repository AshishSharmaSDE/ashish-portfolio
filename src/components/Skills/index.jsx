import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { skills, workflow } from "../../../config";

const Skills = () => {
  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          {skills.map((item, index) => (
            <li className="list-inline-item" key={index}>
              <i>
                <FontAwesomeIcon icon={item.icon} title={item.title} />
              </i>
            </li>
          ))}
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0 list-none ml-0">
          {workflow.map((item, index) => (
            <li className="" key={index}>
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;{item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
