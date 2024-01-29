import {
    mobile,
    // backend,
    creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    // mongodb,
    git,
    figma,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    artwave,
    threejs,
    UBC,
    varsity,
    chatsync,
    // businesscard,
    hangman
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
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
      title: "Student worker",
      company_name: "Open Kitchen (UBC)",
      icon: UBC,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2023",
      points: [
        "Served food and beverages to students with excellent customer service, resulting in a 95% satisfaction rating on student surveys.",
        "Helped prepare ingredients for meals served to 100+ students in a timely manner, ensuring a consistent dining experience.",
        "Collaborated with kitchen staff to streamline ingredient preparation processes."
      ],
    },
    {
      title: "Varisty Event Staff",
      company_name: "UBC Athletics & Recreation",
      icon: varsity,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      points: [
        "Ensuring the professional execution of varsity sporting events including basketball, volleyball, football, hockey and soccer of the UBC Thunderbirds.",
        "Contribute to the in-game atmosphere through promotions and fan engagement including greeting, way-finding etc."
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
      name: "Art Wave",
      description:
        "A creative platform empowering users to share and showcase their artistic creations fostering a vibrant online art community.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: artwave,
      source_code_link: "https://github.com/parthkumar-patel/Art-Gallery",
    },
    {
      name: "Chat Sync",
      description:
        "A chatbot powered by ChatGPT's API within a Chrome extension, enriching online interactions with fluid responses.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chatsync,
      source_code_link: "https://github.com/loganihrishi/ChatSync",
    },
    {
      name: "Hangman",
      description:
        "A word-guessing fun game! Featuring both single-player and two-player modes, utilizing Java Swing GUI for an interactive user experience.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SwingUI",
          color: "green-text-gradient",
        },
      ],
      image: hangman,
      source_code_link: "https://github.com/parthkumar-patel/Hangman-Game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };