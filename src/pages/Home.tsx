import About from "../pages/About";
import HeroSection from "../pages/HeroSection";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
