import Sidebar from "../components/Sidebar/index.jsx";
import AboutMe from "../components/AboutMe/index.jsx";
import Projects from "../components/Projects/index.jsx";
import Skills from "../components/Skills/index.jsx";
import Contact from "../components/Contact/index.jsx";
import "../assets/sass/portfolio.scss";
import Experience from "../components/Experience/index.jsx";
import Container from "../components/Container";
import { siteMetadata } from "../../config.js";
const IndexPage = () => (
  <Container siteMetadata={siteMetadata}>
    <Sidebar />
    <div className="container-fluid p-0">
      <AboutMe />
      <hr className="m-0" />

      <Experience />
      <hr className="m-0" />

      <Projects />
      <hr className="m-0" />

      <Skills />
      <hr className="m-0" />

      <Contact />
    </div>
  </Container>
);

export default IndexPage;
