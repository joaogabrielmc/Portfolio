import { skillsData } from "../data/Data.tsx";

const Skills = () => {
  return (
    <section className="h-auto bg-darkGray p-16 text-center flex flex-col justify-center items-center">
      <h1 className="mb-4 text-3xl md:text-7xl font-baimj text-white">
        Habilidades
      </h1>
      <div className="config-grid mt-5 lg:w-[70vh] md:w-[80vw] xl:w-screen w-screen rounded-3xl">
        {skillsData.map(({ imageUrl, title }) => (
          <>
            <div className="">

              <img src={imageUrl} alt={title} className="h-20 w-h-20 p-2 " />
              <h2 className="text-white font-baimj uppercase text-center">{title}</h2>

            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Skills;
