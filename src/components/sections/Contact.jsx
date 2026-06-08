import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { contact, site } from "../../data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    setStatus("submitting");
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{contact.heading}</h2>
          <a href={`mailto:${site.email}`} className={styles.emailLink}>
            {site.email}
          </a>
        </div>

        <div className={styles.layout}>
          <motion.aside
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={`card ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Direct reach</h3>
              <ul className={styles.infoList}>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{site.location}</span>
                </li>
              </ul>

              <div className={styles.social}>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href={site.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.form
            className={`card ${styles.form}`}
            action={contact.formAction}
            method="POST"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <input type="hidden" name="_subject" value="Portfolio contact form" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://ashishsharmasde.github.io/ashish-portfolio/#contact"
            />
            <input type="text" name="_honey" className={styles.honey} tabIndex={-1} autoComplete="off" />

            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submit}`}
              disabled={status === "submitting"}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
