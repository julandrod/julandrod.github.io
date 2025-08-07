import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { socials } from "../constants";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ index, title, icon, link }) => (
  <div className="xs:w-[100px] w-full hover:scale-110">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-2 px-4 min-h-[100px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-12 h-12 object-contain mb-2"
          />
          <h3 className="text-white text-[12px] text-center">{title}</h3>
        </div>
      </a>
    </motion.div>
  </div>
);

const About = () => {
  const {t} = useTranslation()

  return (
    <>
      <motion.div variants={textVariant()}>
         <p className={`${styles.sectionSubText}`}>
          {t("aboutMe.subTitle")}
        </p>
        <h2 className={styles.sectionHeadText}>{t("aboutMe.mainTitle")}</h2>
      </motion.div>
      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] whitespace-pre-line"
        >
          {t("aboutMe.description")}
        </motion.p>
        <div className="grid grid-cols-1 mt-8">
          <a
            href="src/assets/Currículum - Julian Andres Rodriguez.pdf"
            download
            className="bg-tertiary rounded-[20px] py-2 px-4 min-h-[50px] w-64 flex justify-evenly items-center flex-col"
          >
            {t("aboutMe.downloadCV")}
          </a>
        </div>
      </div>
      <div className="mt-10 flex justify-start items-start">
        <p className={styles.sectionSubText}>{t("aboutMe.findMe")}</p>
      </div>
      <div className="mt-10 flex flex-wrap gap-10">
        {socials.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
