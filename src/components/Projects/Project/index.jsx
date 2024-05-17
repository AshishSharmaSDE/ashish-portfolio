import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = (props) => {
  return (
    <article
      className={`${classes.Project} ${props.inVisible ? "invisible" : ""}`}
    >
      <div className="mx-3 mx-md-0">
        <h3>{props.title}</h3>
        <p className="lead">{props.description}</p>

        <a
          href={props.sourceLink}
          // eslint-disable-next-line react/no-unknown-property
          variant="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEye} />
          &nbsp;Source Code
        </a>
      </div>
    </article>
  );
};

Project.propTypes = {
  demoLink: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  sourceLink: PropTypes.string,
  title: PropTypes.string,
  inVisible: PropTypes.bool,
};

export default Project;
