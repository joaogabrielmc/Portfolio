import { Button, Typography } from "@material-tailwind/react";

const HeroSection = () => {
  return (
    <section
      className="bg-site md:h-screen h-auto bg-cover bg-center py-10 flex justify-center"
      id="home"
    >
      <div className="flex flex-col justify-center text-center pt-20 md:pt-0">
        <Typography
          variant="paragraph"
          color="white"
          className="font-baimj leading-7 ssm:text-xl text-sm"
        >
          Bem vindo👋, Me chamo
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className=" font-baumans text-6xl md:text-8xl"
        >
          João Coelho
        </Typography>{" "}
        <Typography
          variant="paragraph"
          color="white"
          className="font-baimj leading-7 ssm:text-xl text-sm text-primary"
        >
          FullStack Developer
        </Typography>
        <div className="flex justify-center gap-5 p-5">
          <Button
            size="sm"
            color="white"
            variant="text"
            className="ssm:py-4 ssm:px-5 p-2 hover:scale-125 border-primary border-2 font-baimj  delay duration-300 text-primary flex items-center gap-1 hover:bg-primary hover:text-black"
          >
            Download CV
          </Button>
          <Button
            size="sm"
            color="white"
            variant="text"
            className="ssm:py-4 ssm:px-5 p-2 hover:scale-125 border-primary border-2 delay duration-300 font-baimj text-black flex items-center gap-1 bg-primary hover:bg-transparent hover:text-primary"
          >
            Fale Comigo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
