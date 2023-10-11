import { TabsDefault } from "../components/Tabs";
import { Typography } from "@material-tailwind/react";

const Services = () => {
  return (
    <section
      className="flex justify-center min-h-[600px] w-full pt-10 bg-gray"
      id="services"
    >
      <div className="w-[80%]">
        <div className="text-center">
          <Typography
            variant="h1"
            color="black"
            className="mb-4 text-3xl md:text-7xl font-baimj"
          >
            Serviços
          </Typography>
          <Typography
            variant="h2"
            color="black"
            className="mb-4 text-sm md:text-base leading-3 font-roboto"
          >
            Um pouco dos serviços que posso oferecer!
          </Typography>
        </div>
        <TabsDefault />;
      </div>
    </section>
  );
};

export default Services;
