import Helmet from "react-helmet";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageBackground from "./components/layout/PageBackground";
import MobileNav from "./components/layout/MobileNav";
import BackToTop from "./components/layout/BackToTop";
import Marquee from "./components/visual/Marquee";
import Hero from "./components/sections/Hero";
import Identity from "./components/sections/Identity";
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
          { name: "theme-color", content: "#0a0a0f" },
        ]}
      />
      <PageBackground />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Identity />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
      <BackToTop />
    </>
  );
}
