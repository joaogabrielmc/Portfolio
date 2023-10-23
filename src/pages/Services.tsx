import { TabsDefault } from "../components/Tabs";

const Services = () => {
  return (
    <section
      className="flex justify-center h-auto w-full pt-10 bg-darkGray"
      id="services"
    >
      <div className="w-auto">
        <div className="text-center">
          <h1 className="mb-4 text-3xl md:text-7xl font-baimj text-white">
            Serviços
          </h1>
          <h2 className="mb-4 text-sm md:text-base leading-3 font-roboto text-white">
            Um pouco dos serviços que posso oferecer!
          </h2>
        </div>
        <TabsDefault />
      </div>
    </section>
  );
};

export default Services;
