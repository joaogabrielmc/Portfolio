import { motion } from "framer-motion";
import { CarouselWithContent } from "../components/Carrosel";
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <section className="w-auto h-auto bg-darkGray pt-2" id="portfolio">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="h-full md:h-[500px]"
      >
        <CarouselWithContent />
      </motion.div>
    </section>
  );
};

export default Projects;
