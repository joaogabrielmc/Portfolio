import { motion } from "framer-motion";
import { skillsData } from "../data/Data.tsx";
import { fadeIn } from "../variants.ts";

const Skills = () => {
  return (
    <section className="h-auto bg-darkGray p-16 text-center flex flex-col justify-center items-center">
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-4 text-3xl md:text-7xl font-baimj text-white"
      >
        Habilidades
      </motion.h1>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="config-grid mt-5 lg:w-[90vh] md:w-[80vw] xl:w-full w-screen rounded-3xl"
      >
        {skillsData.map(({ imageUrl, title }) => (
          <>
            <div className="">
              <img src={imageUrl} alt={title} className="h-20 w-h-20 p-2 " />
              <h2 className="text-white font-baimj uppercase text-center">
                {title}
              </h2>
            </div>
          </>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
