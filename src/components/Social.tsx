import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

interface SocialLinksProps {
  className?: string; 
}

export const SocialLinks: React.FC<SocialLinksProps> = (props) => {
  const combinedClassName = `flex lg:flex-col text-[30px] gap-4 p-10 ${props.className}`;

  return (
    <div className={combinedClassName}>
      <a href="https://github.com/joaoccoelho" target="_blank" rel="noreferrer">
        <BsGithub className="text-primary transition delay duration-300 hover:scale-125 hover:text-white" />
      </a>
      <a
        href="https://www.instagram.com/joaoccoelho/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="text-primary transition delay duration-300 hover:scale-125 hover:text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/joaoccoelho/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="text-primary transition delay duration-300 hover:scale-125 hover:text-white" />
      </a>
    </div>
  );
};
