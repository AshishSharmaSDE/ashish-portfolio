import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { manifestOptions, personalDiscription } from "../../../config";

const AboutMe = () => {
  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {manifestOptions.firstName}
          <span className="text-primary">{manifestOptions.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {manifestOptions.city}
          {" - "}{" "}
          <span className="text-primary">{manifestOptions.country}</span>
        </div>
        <p className="lead mb-5">{personalDiscription}</p>
        <div className="social-icons">
          <a
            href={manifestOptions.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={manifestOptions.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={manifestOptions.x} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href={manifestOptions.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
