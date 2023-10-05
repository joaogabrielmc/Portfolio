import { motion } from "framer-motion";
import Photo from "../assets/img/photo.svg";
import { Image } from "../components/Image";
import { fadeIn } from "../variants";
import { Text } from "../components/Text";
import { AboutText } from "../data/Data";

const About = () => {
  return (
    <section
      className="w-full h-auto flex items-center md:justify-center md:pt-10 lg:pb-20 bg-darkGray"
      id="about"
    >
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center lg:flex-row lg:gap-5 pt-16"
      >
        <Image
          alt={"Imag"}
          className="md:w-[320px] w-[288px]"
          objectCover=""
          image={Photo}
        />

        <div className="text-white md:w-[580px] w-auto text-center lg:text-start">
          <h1 className="text-6xl font-baimj p-1">Sobre mim</h1>
          <Text as="p" className="md:text-xl p-1 font-roboto leading-8 md:mt-3">
            {AboutText}
          </Text>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
