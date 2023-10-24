import { Typography } from "@material-tailwind/react";
import { SocialLinks } from "../components/Social";

const Footer = () => {
  return (
    <footer className="relative w-full bg-darkGray">
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between md:px-24 border-t-2 border-y-primary">
        <Typography
          variant="small"
          className="mb-4 pt-2 text-center font-popp text-primary md:mb-0"
        >
          Site desenvolvido por João Gabriel
        </Typography>
        <div className="flex gap-4 text-white sm:justify-center">
          <SocialLinks className="flex text-white pb-4 md:p-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
