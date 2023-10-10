import About from "../pages/About";
import HeroSection from "../pages/HeroSection";
// import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Footer from "../pages/Footer";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      {/* <Services /> */}
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
