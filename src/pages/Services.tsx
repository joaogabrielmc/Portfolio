import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="w-full h-[auto] xl:p-15 p-20 flex justify-center bg-darkGray">
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
          viewport={{ once: false, amount: 0.0 }}
          className="mt-10"
        >
          <div className="container mx-auto flex flex-col lg:flex-row gap-8">
            <div className="w fill bg-secondary/75 min-h-[200px] w-[300px] transition  duration-300  font-popp mx-auto items-center pb-6 rounded-b-[1.2rem] hover:scale-[1.2]">
              <p className="text-lg mb-3 bg-lblue w-[300px] flex items-center justify-center p-6 rounded-b-[1.5rem] drop-shadow-[0_5px_30px_rgba(0,0,0,1)]">
                UI/UX Design
              </p>
              <div className="flex flex-col text-base font-roboto p-3 leading-[2] text-white">
                <li>
                  Esboço o produto para alinhar as necessidades do usuário.
                </li>
                <li>Transformo sua ideia para conceito em MVP.</li>
                <li>Converto o design em uma aplicação web.</li>
              </div>
            </div>
            <div className="w fill bg-secondary/75 min-h-[200px] w-[300px] transition  duration-300  font-popp mx-auto items-center pb-6 rounded-b-[1.2rem] hover:scale-[1.2]">
              <p className="text-lg mb-3 bg-lblue w-[300px] flex items-center justify-center p-6 rounded-b-[1.5rem] drop-shadow-[0_5px_30px_rgba(0,0,0,1)]">
                Desenvolvimento
              </p>
              <div className="flex flex-col text-base font-roboto p-3 leading-[2] text-white">
                <li>Design Moderno.</li>
                <li>Melhores Tecnologias.</li>
                <li>Facilmente Personalizável.</li>
                <li>Responsivo para Celular.</li>
                <li>Robusto Fluxo de Trabalho.</li>
              </div>
            </div>
            <div className="w fill bg-secondary/75 min-h-[200px] w-[300px] transition  duration-300  font-popp mx-auto items-center pb-6 rounded-b-[1.2rem] hover:scale-[1.2]">
              <p className="text-lg mb-3 bg-lblue w-[300px] flex items-center justify-center p-6 rounded-b-[1.5rem] drop-shadow-[0_5px_30px_rgba(0,0,0,1)]">
                Criação do Conteúdo
              </p>
              <div className="flex flex-col text-base font-roboto p-3 leading-[2] text-white">
                <li>Planejamento.</li>
                <li>Atento aos detalhes para impedir erros.</li>
                <li>Conteúdo bem Organizado.</li>
                <li>Múltiplos Blocos.</li>
                <li>Escaneabilidade.</li>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
