import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("tech.title")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("tech.subtitle")}</h2>
      </motion.div>
      <TechContainer
        technologies={proficientStack}
        title={t("tech.frequently")}
      />
      <TechContainer
        technologies={begginerStack}
        title={t("tech.rarelyUsed")}
      />
      <TechContainer
        technologies={learningStack}
        title={t("tech.learning")}
      />
    </>
  );
};

export default SectionWrapper(Tech, "stack");
