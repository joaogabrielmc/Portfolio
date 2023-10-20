import About from "../pages/About";
import HeroSection from "../pages/HeroSection";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Habilities from "./Habilities";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Habilities />
      <Projects />
    </>
  );
};

export default Home;
