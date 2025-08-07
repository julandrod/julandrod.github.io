/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

const formatMonthYear = (dateStr, locale) => {
  const [year, month] = dateStr.split("-");
  const date = new Date(year, month - 1);
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
};

const ExperienceCard = ({ experience }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const startDate = formatMonthYear(experience.date.start, locale)
  const endDate = formatMonthYear(experience.date.end, locale)

  const startDateCapitalize = startDate.charAt(0).toUpperCase() + startDate.slice(1)
  const endDateCapitalize = endDate.charAt(0).toUpperCase() + endDate.slice(1)

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1D1836", color: "#FFF" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={`${startDateCapitalize} - ${endDateCapitalize}`}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(experience.title)}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] text-wrap pl-1 tracking-wider whitespace-break-spaces"
          >
            {t(point)}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2 h-[11%]">
        {experience.tags.map((tag) => (
          <p key={`${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t("experience.mainTitle")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("experience.subTitle")}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
