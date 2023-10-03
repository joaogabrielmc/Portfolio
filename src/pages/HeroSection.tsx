import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const HeroSection = () => {
  return (
    <section className="bg-site md:h-screen h-auto bg-cover bg-center py-10 flex justify-center">
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col justify-center text-center pt-20 md:pt-0"
      >
        <h3 className="text-white font-baimj leading-7 ssm:text-xl text-sm">
          Bem vindo👋, Me chamo
        </h3>
        <h1 className="text-white font-baumans ssm:text-6xl text-5xl md:text-8xl">
          João Coelho
        </h1>
        <h3 className="text-primary ssm:text-xl text-sm font-baimj leading-7">
          FullStack Developer
        </h3>
        <div className="flex justify-center gap-5 p-5">
          <button className="rounded transition delay duration-300 ssm:py-4 ssm:px-5 p-2 text-base bg-transparent border-2 border-primary text-primary hover:scale-125 hover:bg-primary hover:text-black">
            Download CV
          </button>
          <button className="rounded transition delay duration-300 ssm:py-4 ssm:px-5 p-2 text-base bg-primary border-2 border-primary text-black hover:scale-125 hover:bg-transparent hover:text-primary">
            Fale Comigo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
