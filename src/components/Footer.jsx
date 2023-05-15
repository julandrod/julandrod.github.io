import { git, gmail } from "../assets";
import { socials } from "../constants";

const Footer = () => {
  return (
    <div className="bg-black-100 flex flex-col sm:flex-row justify-evenly">
      <div className="flex flex-1 justify-center px-10 py-6">
        <a
          href="https://github.com/julandrod/julandrod.github.io"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center "
        >
          <img src={git} alt="this-page-code" className="w-8 h-8" />
          <span className="pl-2 font-bold">Codigo de esta pagina</span>
        </a>
      </div>
      <div className="flex flex-1 px-10 py-6 justify-center items-center">
        <img src={gmail} alt="my-email" className="w-8 h-8" />
        <span className="pl-2 font-bold">
          julian.andres.rodriguez@gmail.com
        </span>
      </div>
      <div className="flex flex-1 justify-center  px-10 py-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="px-2"
          >
            <img src={social.icon} alt={social.title} className="w-8 h-8" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
