import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = (props) => {
  const combinedClassName = `text-[30px] gap-4 ${props.className}`;

  return (
    <div className={combinedClassName}>
      <a
        href="mailto:joaog.martinsc@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsFillEnvelopeFill className="text-primary transition delay duration-300 hover:scale-125 hover:text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/joaogabrielcoelho/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="text-primary transition delay duration-300 hover:scale-125 hover:text-white" />
      </a>
      <a href="https://github.com/joaogabrielmc" target="_blank" rel="noreferrer">
        <BsGithub className="text-primary transition delay duration-300 hover:scale-125 hover:text-white" />
      </a>
    </div>
  );
};
