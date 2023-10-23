import codeTyping from "../assets/img/code-typing-animate.svg";
import { TypeAnimation } from "react-type-animation";
import { SocialLinks } from "../components/Social";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-site bg-cover bg-center" id="home">
      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 h-screen">
        <SocialLinks className="flex lg:flex-col pb-5" />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center lg:text-left "
        >
          <h3 className="text-white font-baumans ssm:text-base">
            Bem vindo👋, Me chamo
          </h3>
          <h1 className="text-5xl xl:text-7xl lg:text-5xl font-baimj text-white lg:leading-[4.25rem]">
            João Coelho
          </h1>
          <TypeAnimation
            sequence={[
              "Front-End Developer",
              2000,
              "Back-End Developer",
              2000,
              "FullStack Developer",
              2000,
            ]}
            speed={50}
            className="text-primary font-baumans text-[20px] xl:text-[30px] lg:text-2xl "
            repeat={Infinity}
          />
          {/* buttons */}
          <div className="flex max-w-max gap-x-6 items-center mb-3 mx-auto lg:mx-0 pt-4 ">
            <button className="rounded-none bg-transparent p-1.5 lg:p-2.5 border-2 border-primary text-primary transition delay duration-300 hover:scale-125 font-roboto  hover:bg-primary hover:text-black">
              Download CV
            </button>
            <button className="rounded-none bg-primary p-1.5 lg:p-2.5 border-2 border-primary text-black font-black btn-link transition delay duration-300  font-roboto hover:scale-125 hover:bg-transparent hover:text-primary">
              Fale Comigo
            </button>
          </div>
        </motion.div>
        <motion.img
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          src={codeTyping}
          className="lg:w-[32rem] w-64 lg:p-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
