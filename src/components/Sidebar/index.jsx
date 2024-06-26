import { useState } from "react";
import Scrollspy from "react-scrollspy";
import Scroll from "../Scroll";

import picture from "../../assets/img/profile_picture.jpg";
import { manifestOptions } from "../../../config";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  const tabs = useState([
    {
      content: "About Me",
      href: "about",
    },
    {
      content: "Experience",
      href: "experience",
    },
    {
      content: "Projects",
      href: "projects",
    },
    {
      content: "Skills",
      href: "skills",
    },
    {
      content: "Contact",
      href: "contact",
    },
  ])[0];

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    if (window.innerWidth < 992) {
      setExpanded((prevState) => {
        return !prevState;
      });
    }
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      bg="primary"
      id="sideNav"
      expanded={expanded}
    >
      <Navbar.Brand href="#page-top">
        <span className="d-block d-lg-none">
          {manifestOptions.firstName} {manifestOptions.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className={`img-fluid img-profile rounded-circle mx-auto mb-2`}
            src={picture}
            alt=""
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        onClick={toggleExpanded}
      >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarSupportedContent">
        <Scrollspy
          items={tabs.map((s) => s.href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {tabs.map((tab) => {
            const { href, content } = tab;

            if (tab.external) {
              return (
                <Nav.Item key={href}>
                  <Nav.Link href={href} target="_blank">
                    {content}
                  </Nav.Link>
                </Nav.Item>
              );
            }

            return (
              <Nav.Item key={href} onClick={toggleExpanded}>
                <Scroll type="id" element={href}>
                  <Nav.Link href={`#${href}`}>{content}</Nav.Link>
                </Scroll>
              </Nav.Item>
            );
          })}
          {/* Resume Button */}
          <Nav.Item>
            <Nav.Link
              href={manifestOptions.resume}
              target="_blank"
              rel="noreferrer"
              onClick={toggleExpanded}
            >
              Resume
            </Nav.Link>
          </Nav.Item>
        </Scrollspy>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
