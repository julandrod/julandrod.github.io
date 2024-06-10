/* eslint-disable react/prop-types */
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { github, www } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[520px]">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-11/12 h-11/12 object-contain"
              />
            </div>
          )}
          {project_link && (
            <div
              onClick={() => window.open(project_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={www}
                alt="source code"
                className="w-11/12 h-11/12 object-contain"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 h-[35%]">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 h-[11%]">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>Algo de mi trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos</h2>
      </div>
      <div className="w-full flex">
        <div className="text-secondary text-[17px] max-w-3xl leading-[30px]">
          <p className="mt-3 mb-4">
            Estos son algunos de los proyectos que he realizado y que demuestran
            mis habilidades y conocimientos. Cada proyecto tiene una pequeña
            descripcion y algunas etiquetas con las tecnologias usadas en cada
            uno, tambien links a sus correspondientes repositorios y demos.
          </p>
          <span>
            Si quieres ver mas de mi codigo puedes pasar por mi cuenta de{" "}
            <span className="text-[#915EFF] hover:text-[#4f348a]">
              <a
                href="https://github.com/julandrod"
                target="_blank"
                rel="noreferrer"
              >
                Github 🔗.
              </a>
            </span>
            .
          </span>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
