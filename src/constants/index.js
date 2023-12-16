import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  liveLink,
  carrent,
  jobit,
  tripguide,
  threejs,
  Degen,
  studiobyprithviraj,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Degen Money",
    icon: Degen,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
     "Developed the whole trading platfrom from scratch",
     " Collaborated with design and backend teams to implement UI/UX designs and integrate APIs.",
    " Streamlined UI for user-friendly and accessible trading experiences.",
      "Contributed to code reviews and adhered to established coding standards.",

    ],
  },
  {
    title: "Website Intern",
    company_name: "Studiobyprithviraj",
    icon: studiobyprithviraj,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Optimized e-commerce site, resolving 10+ bugs.",
      "Implemented 5+ new website functionalities.",
      "Successfully uploaded 50+ products, ensuring accuracy.",
      "Enhanced website performance through meticulous maintenance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Resume Builder (Working)",
    description:
      "I am crafting a dynamic and responsive resume builder in React, incorporating AI for personalized content suggestions. Utilizing Firebase ensures seamless data management and real-time updates. Additionally, I am developing a system generating dynamic portfolios from user resumes.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "working",
        color: "red-text-gradient",
      },
    ],
    image: carrent,
    source_live_link: "https://resume-builder-fd3ff.web.app/my-resume",
    source_code_link: "https://github.com/Energizer-Bunny/resume-builder-website",
  },
  {
    name: "Admin Dashboard",
    description:
      "I engineered a robust admin interface tailored for the e-commerce sector, integrating key metrics, sales data, and transactions through interactive charts. The implementation included features highlighting total revenue, sales insights, and order statistics. Additionally, I focused on identifying and highlighting top-selling cities to facilitate strategic decision-making processes.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Charts",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_live_link: "https://admin-dashboard1212.netlify.app/",
    source_code_link: "https://github.com/DEV-SHUKLA-GITHUB/Admin-Dashboard",
  },
  {
    name: "Kwiz: The Quiz App",
    description:
      "I crafted a sophisticated quiz application, featuring diverse subject categories include sports , movies ,coding and General quiz , to provide a multifaceted learning experience. Incorporating sophisticated time-tracking features ensured precise user assessments, while meticulous time calculations enhanced the accuracy of quiz evaluations, offering users a comprehensive and refined educational platform.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_live_link: "https://kwiz-app-1212.netlify.app/",
    source_code_link: "https://github.com/DEV-SHUKLA-GITHUB/Quiz-App-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
