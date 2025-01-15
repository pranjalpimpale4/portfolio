import {
  mobile,
  backend,
  creator,
  dev,
  cpp,
  java,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mysql,
  git,
  adobexd,
  docker,
  meta,
  starbucks,
  siemens,
  SPIT,
  tesla,
  shopify,
  chatbot,
  ChargeEasy,
  cfv,
  bank,
  DTMF,
  matlab,
  python,
  mendix,
  sm,
  RoundTechSquare
} from "../assets";

export const navLinks = [
  {
    id: "Resume",
    title: "Resume",
  },
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
    title: "Software Developer",
    icon: dev,
  },
  {
    title: "SCRUM Master",
    icon: sm,
  },
];


const technologies = [
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Mendix",
    icon: mendix,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Adobe XD",
    icon: adobexd,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "AI & Full Stack Developer",
    company_name: "RoundTechSquare",
    icon: RoundTechSquare,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Engineered an AI-driven employee career development system, integrating ChatGPT 3.5 Turbo after comprehensive API analysis, resulting in improved cost-efficiency and increased employee engagement with the platform. ",
      "Developed a recursive API for goal management using NestJS, optimizing query efficiency for complex hierarchical structures and enhancing overall system scalability. ",
      "Designed and implemented an asynchronous architecture for AI tasks, improving system responsiveness and user experience by allowing concurrent processing of multiple operations without performance degradation. ",
      "Leveraged advanced NLP techniques including LSTM and zero-shot classification for an AI project management assistant, enhancing query understanding accuracy and expanding intent recognition capabilities across a broader range of user inputs. ",
    ],
  },
  {
    title: "Software Engineer Associate",
    company_name: "Siemens Digital Industries Software",
    icon: siemens,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Aug 2023",
    points: [
      "Led full-stack development of end-to-end SDLC for a supply chain management application. Performed data modeling from scratch to design efficient database structures.",
      "Developed RESTful APIs and optimized frontend performance, achieving 80% code coverage with testing tools. Implemented containerization and improved CI/CD pipelines for streamlined deployment.",
      "Enhanced API testing efficiency, resulting in a 4x increase in testing speed. Automated post-testing tasks with server-side scripts. Managed RESTful API testing using data storage and caching solutions.",
      "Mentored 7 junior developers in best practices. Led the backend Performance Department, addressing scalability challenges. Demonstrated proficiency in infrastructure management and automation.",
    ],
  },
  {
    title: "Training Placement Co-ordinator",
    company_name: "Sardar Patel Instiute of Technology",
    icon: SPIT,
    iconBg: "#FFFFFF",
    date: "July 2020 - Oct 2021",
    points: [
      "Actively contributed to the university's Research Team, focusing on expanding campus corporate engagement, resulting in a 20% increase in the number of visiting companies.",
      "Held the role of the official point of contact (POC) for chosen visiting companies, overseeing placement and internship initiatives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pranjal is a dedicated software developer and proficient Scrum Master who, during his tenure at Siemens, demonstrated outstanding adaptability and leadership.",
    name: "Charubrata Ray",
    designation: "Director Software Engineering",
    company: "Siemens",
    image: "",
  },
  {
    testimonial:
      "Pranjal is a remarkably skilled individual who seamlessly navigated the dual responsibilities of Software Engineer and Scrum Master. His creative thinking and ability to come up with unique solutions were crucial in shaping our strategy and ensuring the success of the application.",
    name: "Atul Jadhav",
    designation: "Senior Software Architecture",
    company: "Siemens",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Pranjal effectively combined technical expertise with agile leadership, demonstrating exceptional collaboration skills that greatly benefited both product development and team dynamics.",
    name: "Arvind Divekar",
    designation: "Product Owner",
    company: "Siemens",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "College Enquiry Chatbot",
    description:
      "A chatbot featuring a custom algorithm, meticulously designed to optimize accuracy (more than 95%) and provide precise, context-aware responses for enhanced user interactions and satisfaction.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Kiwi",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/pranjalpimpale4/College_Enquiry_Chatbot",
    research_paper_link: "https://drive.google.com/file/d/1FxUasJsF3A8DaF8PG_CY-xDxVosaZi7H/view?usp=sharing",
  },
  {
    name: "ChargeEasy",
    description:
      "Developed a full-stack web application to assist electric vehicle (EV) drivers with navigation, utilizing the Angular framework for the frontend and Firebase for the backend.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: ChargeEasy,
    source_code_link: "https://github.com/pranjalpimpale4/ChargeEasy",
    research_paper_link: "https://drive.google.com/file/d/1jBjI5_pBLD1MJ6_msf-n9DB0alx0NM36/view?usp=sharing",
  },
  {
    name: "Contactless Fingerprint Verification",
    description:
      "Implemented pre-processing and a CNN model using deep learning on the Keras framework, achieving fingerprint recognition accuracy exceeding 90%.",
    tags: [
      {
        name: "CCN",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MATLAB",
        color: "blue-text-gradient",
      },
    ],
    image: cfv,
    source_code_link: "https://github.com/pranjalpimpale4/Contactless-Fingerprint-Verification-using-Neural-Networks",
    research_paper_link: "https://ieeexplore.ieee.org/document/9510036",
  },
  {
    name: "Bank DBMS",
    description:
      "Developed an entire Bank database management system using MySQL Workbench and SQL queries required for it considering most of the use cases of a bank.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/pranjalpimpale4/Bank-Database-Management-System",
    research_paper_link: "https://drive.google.com/file/d/1QG-dN4OuhoRlsMDa62uPeXHuC9CWfuF8/view?usp=sharing",
  },
  {
    name: "DTMF Encoder Decoder",
    description:
      "Developed a Dual Tone Multi-Frequency MATLAB web app for encoding and decoding in text and audio format based on frequencies of the input using Gonzalez algorithm",
    tags: [
      {
        name: "MATLAB",
        color: "blue-text-gradient",
      },
    ],
    image: DTMF,
    source_code_link: "https://github.com/pranjalpimpale4/Bank-Database-Management-System",
    research_paper_link: "https://drive.google.com/file/d/1vzQwEaY9_SmQfxN8SoC63_FUKKqyc-Rw/view?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
