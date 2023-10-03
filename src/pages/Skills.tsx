import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  return (
    <section className="w-full h-screen bg-darkGray">
      {/* Tittle and sub-tittle */}

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-white text-center"
      >
        <h1 className="font-baimj text-8xl">Habilidades</h1>
        <h2 className="font-roboto text-base leading mt-4 ">
          Tecnologias que utilizo!
        </h2>
      </motion.div>

      <div>
        {/* {renderImageUp.map((index) => (
          <Image
            alt={"text"}
            className="w-[300px] p-5 "
            objectCover=""
            image={renderImageUp(index)}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Skills;
