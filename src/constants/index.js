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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "stack",
    title: "Tecnologias",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
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
    title: "Full Stack Developer",
    company_name: "Whynot? mih",
    icon: whynot,
    iconBg: "#E6DEDD",
    date: "Diciembre 2023 - Febrero 2024",
    points: [
      "Desarrollador Full Stack de aplicaciones web utilizando tecnologías como NextJs, Tailwind,  Nodejs, Express y Prisma.",
    ],
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
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Abril 2022 - Actualidad",
    points: [
      "Desarrollo de aplicaciones web full stack usando tecnologías como React, Tailwind, Nodejs, Express y bases de datos como PostgreSQL, MySQL y MongoDB.",
      "Creación de sitios web y landing page usando tecnologías como Vite y Astro Js.",
      "Configuración y puesta en marcha de sitios con Wordpress.",
    ],
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
        color: "green-text-gradient",
      },
    ],
  },
  {
    title: "Backend Developer",
    company_name: "No Country",
    icon: nocountry,
    iconBg: "#E6DEDD",
    date: "Febrero 2023 - Mayo 2023",
    points: [
      "Desarrollador Backend realizando Api's para diferentes proyectos usando tecnologías como Nodejs, Express, Sequelize y PostgreSQL.",
    ],
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
        color: "text-yellow-900",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Alkemy",
    icon: alkemy,
    iconBg: "#E6DEDD",
    date: "Noviembre 2022",
    points: [
      "Skill Up de Fullstack JS junto con el Skill Up de Metodologías de trabajo y de Soft Skills en Alkemy.",
      "Desarrollo de una billetera virtual usando tecnologias como Javascript, NodeJs, Express, MySql, Vite",
    ],
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
    title: "Fundador, Ingeniero",
    company_name: "Madness Electronics",
    icon: madness,
    iconBg: "#E6DEDD",
    date: "Noviembre 2012 - Agosto 2020",
    points: [
      "Creador de la tienda en línea Madness Electronics especializada en componentes electrónicos..",
      "Diseñar, administrar y mantener el sitio web, utilizando WordPress y WooCommerce.",
      "Creación de proyectos basados en Arduino y Raspberry Pi.",
      "Elaboración de artículos y tutoriales sobre tecnología, electrónica y sistemas embebidos.",
    ],
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "pink-text-gradient",
      },
      {
        name: "raspberrypi",
        color: "",
      },
    ],
  },
];

const projects = [
  {
    name: "Saludarte",
    description:
      "Sitio web de salud para la empresa Saludarte, construida usando Astro Js, Tailwind y Bun como runtime.",
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
    project_link: "",
  },
  {
    name: "Lila Store",
    description:
      "E-commerce especializado en la venta de productos de belleza. Desarrollado usando Wordpress y Woocommerce.",
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
    description:
      "Plataforma Full Stack de un e-commerce especializado en zapatos deportivos que permite al cliente comprar y hacer sus pedidos directamente desde la pagina, cuenta ademas con Dashboard para el administrador.",
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
    description:
      "Marketplace Full Stack, permite a los usuarios vender y comprar autos usados, los usuarios pueden contactarse a traves de mensajes en la misma plataforma.",
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
    description:
      "Billetera virtual realizada con un equipo de desarrolladores Full Stack como parte del proceso de emulacion y skill up en Alkemy.",
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
    description:
      "Plataforma para la gestion completa de una barberia, permite elegir un barbero para asignar un turno y los servicios requeridos, ademas el administrador puede gsetionar todos los servicios ofrecidos, precios y pagos a los barberos. ",
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
    description:
      "Aplicacion para la gestion de gastos personales, el usuario puede ver estadisticas y un resumen sobre sus ingresos y gastos personales.",
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
    description:
      "Esta aplicacion permite crear un salon virtual de clases donde los alumnos pueden ver clases previamente grabadas e interactuar entre alumnos y profesores por un chat en tiempo real.",
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
