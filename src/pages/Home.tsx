import About from "../pages/About";
import HeroSection from "../pages/HeroSection";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
// import Skills from "../pages/Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      {/* <Skills /> */}
      <Projects />
    </>
  );
};

export default Home;
