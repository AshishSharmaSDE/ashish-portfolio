import { manifestOptions } from "../../../config";

const Contact = () => {
  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-start"
      id="contact"
    >
      <div className="w-100">
        <h2>Contact</h2>
        <p className="lead">
          Email:{" "}
          <a
            href={`mailto:${manifestOptions.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {manifestOptions.email}
          </a>
        </p>
        <p className="lead">
          LinkedIn:{" "}
          <a href={manifestOptions.linkedIn} target="_blank" rel="noreferrer">
            Ashish Sharma
          </a>
        </p>
        <p className="lead">
          X/Twitter:{" "}
          <a href={manifestOptions.x} target="_blank" rel="noreferrer">
            AshishSharmaSDE
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
