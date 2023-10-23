import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import contact from "../assets/img/new-message-animate.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section
      className="w-auto h-auto bg-darkGray text-white md:flex justify-center md:pt-2 items-center py-5"
      id="portfolio"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col justify-center h-full md:text-2xl text-1xl font-popp w-auto text-center"
      >
        <h1 className="text-4xl pb-2 border-b-2">Fale Comigo!</h1>
        <a
          className="flex gap-2 items-center  justify-center md:justify-normal pt-4"
          href="mailto:joaog.martinsc@gmail.com"
        >
          <BsFillEnvelopeFill />
          joaog.martinsc@gmail.com
        </a>
        <a
          className="flex gap-2 items-center justify-center md:justify-normal "
          href=""
        >
          <BsLinkedin />
          João Gabriel
        </a>
        <a
          className="flex gap-2 items-center justify-center md:justify-normal "
          href="https://github.com/joaogabrielmc"
        >
          <BsGithub />
          joaogabrielmc
        </a>
      </motion.div>
      <motion.img
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        src={contact}
        className="lg:w-[32rem] w-64 lg:p-10 mx-auto md:m-0"
      />
    </section>
  );
};
export default Contact;
