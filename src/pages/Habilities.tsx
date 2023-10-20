import { VerticalTabs } from "../components/VerticalTabs";

const Habilities = () => {
  return (
    <section className="h-auto bg-darkGray px-10 pb-10">
      <h1 className="mb-6 text-3xl md:text-7xl font-baimj text-white text-center">
        Habilidades
      </h1>
      <div className="px-10">
        <VerticalTabs />
      </div>
    </section>
  );
};

export default Habilities;
