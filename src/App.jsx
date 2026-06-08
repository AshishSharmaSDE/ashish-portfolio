import Helmet from "react-helmet";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageBackground from "./components/layout/PageBackground";
import MobileNav from "./components/layout/MobileNav";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/sections/Hero";
import Approach from "./components/sections/Approach";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { site } from "./data/content";

export default function App() {
  return (
    <>
      <Helmet
        title={`${site.title} | ${site.tagline}`}
        meta={[
          { name: "description", content: site.description },
          { name: "keywords", content: site.keywords },
          { name: "theme-color", content: "#6366f1" },
        ]}
      />
      <PageBackground />
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
      <BackToTop />
    </>
  );
}
