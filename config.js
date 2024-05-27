import {
  faAws,
  faDocker,
  faJsSquare,
  faReact,
  faNodeJs,
  faAngular,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons"; // Python is also available as a brand icon

export const skills = [
  { icon: faReact, title: "React" },
  { icon: faAngular, title: "Angular" },
  { icon: faJsSquare, title: "TypeScript" }, // Using JavaScript icon for TypeScript
  { icon: faNodeJs, title: "NodeJS / NestJS" },
  { icon: faDocker, title: "Docker" },
  { icon: faAws, title: "AWS" },
  { icon: faGitAlt, title: "GIT" },
  { icon: faPython, title: "Python Scripting" },
  { icon: faDatabase, title: "Relational (MySQL) / NoSQL (MongoDB)" },
];

export const workflow = [
  { text: "API development using REST and GraphQL" },
  { text: "JWT Auth" },
  { text: "Good understanding of Flexbox and Grid systems" },
  { text: "DevOps: Docker, Jenkins, AWS, GIT, Python Scripting" },
];
export const siteMetadata = {
  title: "Ashish Sharma",
  description: "Ashish Sharma Developer Portfolio",
  keywords: "Ashish Sharma, Developer, Software Developer, Web Developer",
};

export const manifestOptions = {
  name: "Ashish Sharma Portfolio",
  short_name: "Ashish Sharma",
  start_url: "/Portfolio",
  background_color: "#663399",
  theme_color: "#663399",
  display: "standalone",
  icon: "src/assets/img/website-icon.png",
  firstName: "Ashish",
  lastName: "Sharma",
  email: "ashishsharma.sde@gmail.com",
  city: "New Delhi",
  country: "India",
  github: "https://github.com/AshishSharmaSDE",
  linkedIn: "https://www.linkedin.com/in/ashish-sharma-sde/",
  resume: "/ashish-portfolio/resume.pdf",
  x: "https://x.com/AshishSharmaSde",
};
export const personalDiscription = `I am a results-driven Full Stack Developer with a knack for enhancing user experiences and streamlining workflows. My expertise spans across various technologies including React, Redux Toolkit, Angular, TypeScript, NodeJS, NestJS, and more. I have a solid understanding of DevOps practices and database management, ensuring that I deliver comprehensive and high-performing solutions.`;
export const experience = [
  {
    role: "Sr. Software Engineer",
    company: "EXL Service, Noida, IN",
    workedFrom: "05/2023",
    workTill: "Current",
    responsibilities: [
      "Successfully led the migration of healthcare company's TCL to TypeScript, reducing processing time by 40% and eliminating 90% of errors, improving workflow efficiency and accuracy.",
      "Engineered a TypeScript-based component optimization strategy that reduced load times by 40%, resulting in an enhanced user experience and a 25% increase in user engagement metrics.",
      "Led skill development sessions in TypeScript, SQL, and project management, driving team cohesion and productivity; upskilled team led to a 30% reduction in project completion time and a 20% increase in code efficiency.",
    ],
    skillSet: ["TypeScript", "TCL", ".Net", "MySQL", "GIT", "JavaScript"],
    projects: ["JCS to JEDI", "CareRadius"],
  },
  {
    role: "Software Engineer",
    company: "GSPANN Technologies, Gurgaon",
    workedFrom: "03/2022",
    workTill: "05/2023",
    responsibilities: [
      "Spearheaded the development of Python-based customized dashboards, incorporating advanced data visualization and AI modelling, resulting in a 50% reduction in deployment time and a 30% increase in team productivity.",
      "Implemented Git version control and Jenkins CI/CD pipelines, ensuring efficient project management and delivery, aligning with industry best practices and standards.",
      "Orchestrated the successful deployment of 3 projects on AWS, optimizing for scalability and high availability; met all project deadlines and exceeded client expectations by ensuring 99.99% uptime.",
    ],
    skillSet: ["Python", "Pandas", "AWS", "GIT"],
    projects: ["Customized Dashboard & AI Modelling Project"],
  },
  {
    role: "Software Engineer",
    company: "NaviSite India Ltd., Gurgaon",
    workedFrom: "02/2020",
    workTill: "03/2022",
    responsibilities: [
      "Headed a team that developed an Angular-based application linked to a Python-Flask backend, resulting in a 25% reduction in infrastructure downtime, enhancing real-time monitoring and proactive maintenance.",
      "Led the migration of CAM Core legacy system from Python 2 to Python 3, ensuring seamless operation and system enhancement, mitigating potential risks and disruptions.",
      "Engineered innovative solutions using TypeScript, Angular, Python, Flask, and AWS, delivering projects 15% under budget and 20% ahead of schedule, ensuring stakeholder satisfaction and exceeding revenue targets.",
    ],
    skillSet: ["TypeScript", "Angular", "Python", "Flask", "GIT", "AWS"],
    projects: [
      "CAM Core Python 2 to Python 3 Migration",
      "Sentry: Alert Management System",
    ],
  },
];

export const projects = [
  {
    title: "CurlGoClone",
    description:
      "A GO lang application with functionality similar to Curl",
    sourceLink: "https://github.com/AshishSharmaSDE/curlGoClone",
  },
  {
    title: "Sudent-Alumni-Scheduler",
    description:
      "An Angular Application which allows students to connect and book timeslot for conversation.",
    sourceLink: "https://github.com/AshishSharmaSDE/Sudent-Alumni-Scheduler",
  },
  {
    title: "dummy-netflix",
    description:
      "A netflix backend service for get and fetch movies via created APIs.",
    sourceLink: "https://github.com/AshishSharmaSDE/dummy-netflix",
  },
];
