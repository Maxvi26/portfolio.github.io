export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "EpicGames",
    description:"projects.epicgames.description",
    technologies: [
      "Rest API & SocketIO",
      "Express.js",
      "TypeScript",
      "ReactJS",
      "MariaDB"
    ],
    image: "/projects/Epicgames.png",
    featured: true,
  },
  {
    title: "DashBoard",
    description:"projects.dashboard.description",
    technologies: [
      "Spring Boot",
      "React",
      "MariaDB"
    ],
    image: "/projects/DashBoard.png",
    featured: true,
  },
  {
    title: "Wask",
    description:"projects.wask.description",
    technologies: [
      "Spring Boot",
      "React",
      "Mysql"
    ],
    image: "/projects/wask.png",
    featured: true,
  },
  {
    title: "ChatTech",
    description:"projects.chattech.description",
    technologies: [
      "Node JS",
      "React",
      "MongoDB"
    ],
    image: "/projects/chatTech.png",
    featured: true,
  },
  {
    title: "Industrial Monitoring System",
    description:
      "Création d'une interface de supervision industrielle permettant l'affichage de données temps réel issues de systèmes de production.",
    technologies: [
      "Ignition",
      "PI System",
      "SQL",
      "Industrial IT"
    ],
    image: "/projects/industrial.png",
    featured: false,
  }
];