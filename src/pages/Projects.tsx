import { motion } from "framer-motion";
import { CarouselWithContent } from "../components/Carrosel";
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <section className="w-full h-[100vh] bg-darkGray pt-16" id="portfolio">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="h-full md:h-[500px]"
      >
        <CarouselWithContent />
      </motion.div>
    </section>
  );
};

export default Projects;
