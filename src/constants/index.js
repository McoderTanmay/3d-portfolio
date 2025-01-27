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
    threejs,
    ATG,
    Fam,
    alma,
    crud,
    ecom
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competative Programmer",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Famark",
      icon: Fam,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Spearheaded the development of 30% of the e-commerce website’s UI using HTML, CSS, and JavaScript, enhancing user experience",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Engineered 60% of the website’s authentication and authorization mechanisms with Express.js and JWT, strengthening security protocols",
        "Led the development of a robust cloud-based data transaction system, improving API response time by 25%  ",
      ],
    },
    {
      title: "MERN Developer Intern",
      company_name: "Across The Globe(ATG)",
      icon: ATG,
      iconBg: "#E6DEDD",
      date: "June 2024 - Aug 202$",
      points: [
        "Architected scalable React frontend, reducing load time by 20%",
        "Developed critical backend features, improving chat support efficiency by 40%",
        "Presented 40% of project architecture to client, clarifying technical decisions",
        "Created 90% of frontend and 80% of backend for AI-driven project using React.js, Node.js, and Express",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Aiumni Student Interaction Platform",
      description:
        "Created a web platform connecting students and alumni for mentorship and networking. Features include profiles, messaging, and event management. Finalist in Smart India Hackathon 2024.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: alma,
      source_code_link: "https://github.com/McoderTanmay/Alma",
    },
    {
      name: "E-commerce platform",
      description:
        "Developed a scalable e-commerce platform using ReactJS, Redux, and Tailwind CSS, featuring a seamless user experience and efficient state management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Taillwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/McoderTanmay/EcomTanmay",
    },
    {
      name: "CRUD Operations",
      description:
        "Built a full-stack web application that performs CRUD operations on a MongoDB database. Features include user authentication, data validation, and error handling.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MingiDBe",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_code_link: "https://github.com/McoderTanmay/CRUD",
    },
  ];
  
  export { services, technologies, experiences, projects };