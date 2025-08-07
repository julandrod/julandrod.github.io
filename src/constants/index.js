import {
  linkedin,
  codeWars,
  arduino,
  cpp,
  css,
  express,
  html,
  java,
  javascript,
  kotlin,
  mongo,
  mysql,
  nodejs,
  postgres,
  python,
  raspberry,
  react,
  redux,
  sequelize,
  tailwind,
  typescript,
  vite,
  alkemy,
  nocountry,
  madness,
  freelance,
  autosUsados,
  shoesStore,
  barber,
  wallet,
  expenseTracker,
  classroom,
  github,
  lilaStore,
  saludarte,
  astro,
  flutter,
  dart,
  whynot,
  nextjs2,
  prisma,
  chatbotGemini,
  iPhoneLanding,
  cargologik,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "navlinks.about",
  },
  {
    id: "work",
    title: "navlinks.work",
  },
  {
    id: "stack",
    title: "navlinks.stack",
  },
  {
    id: "projects",
    title: "navlinks.projects",
  },
  {
    id: "contact",
    title: "navlinks.contact",
  },
];

const socials = [
  {
    title: "Github",
    icon: github,
    link: "https://github.com/julandrod",
  },
  {
    title: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/julandrod",
  },
  {
    title: "Codewars",
    icon: codeWars,
    link: "https://www.codewars.com/users/julandrod",
  },
];

const proficientStack = [
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "NodeJs",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Astro",
    icon: astro,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Next.js",
    icon: nextjs2,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Sequelize",
    icon: sequelize,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
];

const begginerStack = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "Raspberry",
    icon: raspberry,
  },
];

const learningStack = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
];

const experiences = [
  {
    title: "experience.cargologik.position",
    company_name: "Cargologik",
    icon: cargologik,
    iconBg: "#E6DEDD",
    date: { start: "2024-08", end: "2025-08" },
    points: ["experience.cargologik.description"],
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "prisma",
        color: "text-red-900",
      },
      {
        name: "postgresql",
        color: "",
      },
    ],
  },
  {
    title: "experience.freelance.position",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: { start: "2022-04", end: "2024-08" },
    points: ["experience.freelance.description"],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "prisma",
        color: "text-red-900",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "",
      },
      {
        name: "postgresql",
        color: "text-red-900",
      },
      {
        name: "mysql",
        color: "text-slate-500",
      },
      {
        name: "arduino",
        color: "text-green-500",
      },
      {
        name: "raspberry",
        color: "text-purple-500",
      },
    ],
  },
  {
    title: "experience.whynot.position",
    company_name: "Whynot? mih",
    icon: whynot,
    iconBg: "#E6DEDD",
    date: { start: "2023-12", end: "2024-02" },
    points: ["experience.whynot.description"],
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "prisma",
        color: "text-red-900",
      },
      {
        name: "postgresql",
        color: "",
      },
    ],
  },
  {
    title: "experience.noCountry.position",
    company_name: "No Country",
    icon: nocountry,
    iconBg: "#E6DEDD",
    date: { start: "2023-02", end: "2023-05" },
    points: ["experience.noCountry.description"],
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "text-yellow-700",
      },
      {
        name: "mongo",
        color: "text-red-700",
      },
    ],
  },
  {
    title: "experience.alkemy.position",
    company_name: "Alkemy",
    icon: alkemy,
    iconBg: "#E6DEDD",
    date: { start: "2022-11", end: "2022-12" },
    points: ["experience.alkemy.description"],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "",
      },
    ],
  },
  {
    title: "experience.madness.position",
    company_name: "Madness Electronics",
    icon: madness,
    iconBg: "#E6DEDD",
    date: { start: "2012-11", end: "2020-08" },
    points: ["experience.madness.description"],
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "text-green-500",
      },
      {
        name: "raspberrypi",
        color: "text-purple-500",
      },
      {
        name: "IoT",
        color: "text-red-400",
      },
      {
        name: "DIY",
        color: "text-yellow-600",
      },
      {
        name: "hardware",
        color: "text-blue-200",
      },
      {
        name: "C++",
        color: "text-yellow-200",
      },
      {
        name: "microcontrollers",
        color: "text-white",
      },
    ],
  },
];

const projects = [
  {
    name: "IPhone Landing Page - Clon",
    description: "projects.iphone.description",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iPhoneLanding,
    project_link: "https://i-phone-landing-clone-blush.vercel.app/",
    source_code_link: "https://github.com/julandrod/iPhone-landing-clone",
  },
  {
    name: "Chatbot - Gemini",
    description: "projects.chatbot.description",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "gemini",
        color: "",
      },
    ],
    image: chatbotGemini,
    project_link: "https://gemini-chatbot-silk.vercel.app/",
    source_code_link: "https://github.com/julandrod/Gemini-Chatbot",
  },
  {
    name: "Saludarte",
    description: "projects.saludarte.description",
    tags: [
      {
        name: "astrojs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "bun",
        color: "",
      },
    ],
    image: saludarte,
    project_link: "https://salud-arte.com.co/",
  },
  {
    name: "Lila Store",
    description: "projects.lilaStore.description",
    tags: [
      {
        name: "Wordpress",
        color: "orange-text-gradient",
      },
      {
        name: "Woocommerce",
        color: "green-text-gradient",
      },
    ],
    image: lilaStore,
    project_link: "https://www.lilastore.com.co/",
  },
  {
    name: "Shoes Store",
    description: "projects.shoesStore.description",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styledComponents",
        color: "pink-text-gradient",
      },
    ],
    image: shoesStore,
    source_code_link: "https://github.com/julandrod/Ecommerce-MERN",
  },
  {
    name: "Autos Usados",
    description: "projects.autosUsados.description",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: autosUsados,
    source_code_link: "https://github.com/julandrod/marketplace-used-cars",
  },
  {
    name: "Virtual Wallet",
    description: "projects.wallet.description",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wallet,
    source_code_link: "https://github.com/Alex0711/Skill-Up-JS-Backend",
  },
  {
    name: "The Boss Barber Shop",
    description: "projects.barber.description",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "sequelize",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "remixjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: barber,
    source_code_link: "https://github.com/No-Country/S7-21-NodeReact",
  },
  {
    name: "Expense Tracker",
    description: "projects.expenseTracker.description",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "postgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styledComponents",
        color: "pink-text-gradient",
      },
    ],
    image: expenseTracker,
    source_code_link:
      "https://github.com/julandrod/Expense-Tracker-Alkemy-Challenge",
  },
  {
    name: "ClassRoom",
    description: "projects.classRoom.description",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styledComponents",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: classroom,
    source_code_link: "https://github.com/julandrod/Classroom",
  },
];

export {
  socials,
  proficientStack,
  begginerStack,
  learningStack,
  experiences,
  projects,
};
