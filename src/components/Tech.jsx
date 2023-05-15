import { begginerStack, learningStack, proficientStack } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const TechContainer = ({ technologies, title }) => {
  return (
    <>
      <p className={`${styles.sectionSubText} mt-4 mb-4`}>{title}</p>

      <div className="flex flex-row flex-wrap justify-left gap-8 mb-8 ">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("right", "spring", index * 0.1, 0.25)}
            key={technology.name}
          >
            <div className="w-24 h-32 p-1 bg-tertiary rounded-2xl flex flex-col justify-center items-center hover:scale-110">
              <div
                className={`${
                  technology.name === "Express" ? "bg-white" : ""
                } flex justify-center h-4/5`}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-10/12 h-full"
                />
              </div>
              <div className="h-1/5">
                <p className="text-sm p-1">{technology.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Lenguajes, frameworks y tecnologias
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stack</h2>
      </motion.div>
      <TechContainer
        technologies={proficientStack}
        title="Tecnologias que uso frecuentemente:"
      />
      <TechContainer
        technologies={begginerStack}
        title="Tecnologias que conozco pero uso poco:"
      />
      <TechContainer
        technologies={learningStack}
        title="Tecnologias que estoy aprendiendo:"
      />
    </>
  );
};

export default SectionWrapper(Tech, "stack");
