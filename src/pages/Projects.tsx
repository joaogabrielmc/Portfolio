import { CarouselWithContent } from "../components/Carrosel";

const Projects = () => {
  return (
    <section className="w-auto h-auto bg-darkGray pt-2" id="portfolio">
      <div className="h-full md:h-[500px]">
        <CarouselWithContent />
      </div>
    </section>
  );
};

export default Projects;
