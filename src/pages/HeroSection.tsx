import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="bg-site bg-cover bg-center" id="home">
      <div className="lg:flex-row flex-col justify-center flex items-center lg:gap-10 h-screen">
        <div className="text-center lg:text-left flex flex-col justify-center items-center">
          <h3 className="text-white xl:text-3xl font-roboto ">
            Bem vindo👋, Me chamo
          </h3>
          <h1 className="text-5xl xl:text-9xl lg:text-7xl font-baumans text-white p-2">
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
            className="text-primary font-roboto xl:text-3xl"
            repeat={Infinity}
          />
          {/* buttons */}
          <div className="flex max-w-max gap-x-6 items-center mb-3 mx-auto lg:mx-0 pt-4 ">
            <button className="rounded-none bg-transparent p-1.5 xl:px-10 xl:py-5 px-7 py-3 ssm:text-xs border-2 border-primary text-primary  duration-300 hover:scale-125 font-roboto  hover:bg-primary hover:text-black">
              Download CV
            </button>
            <button className="rounded-none bg-primary p-1.5 xl:px-10 xl:py-5 px-7 py-3 ssm:text-xs border-2 border-primary text-black   duration-300  font-roboto hover:scale-125 hover:bg-transparent hover:text-primary">
              Fale Comigo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
