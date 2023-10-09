import { Card } from "../components/ServiceCard";
import { ServicesData } from "../data/Data";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      className="w-full h-[auto] xl:p-15 p-20 flex justify-center bg-darkGray"
      id="services"
    >
      <div>
        {/* Tittle */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-white text-center"
        >
          <h1 className="font-baimj text-6xl md:text-8xl">Serviços</h1>
          <h2 className="font-roboto text-sm md:text-base leading mt-4 ">
            Um pouco dos serviços que posso oferecer!
          </h2>
        </motion.div>
        {/* Cards */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-10"
        >
          <div className="container mx-auto flex flex-col lg:flex-row gap-8">
            {ServicesData.serviceList.map(
              (item: { title: string; items: string[] }, index: number) => (
                <Card key={index} title={item.title} listItems={item.items} />
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
