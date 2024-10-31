import { Link, ProjectInfo} from './type'


export const links: Link[] = [
    {
        nameEng: "Home",
        hash: "#home"
    },
    {
        nameEng: "About",
        hash: "#about"
    },
    {
        nameEng: "Projects",
        hash: "#projects"
    },
    {
        nameEng: "Skills",
        hash: "#skills"
    },
    
];

export const projectsData: ProjectInfo[] = [
    {
        title: "Coffee Shop App",
        description: "A React Native coffee shop app with smooth navigation and Redux for state management, and Immer for immutability.",
        tags: ["React Native", "React Navigation", "Redux", "Immer",],
        imageUrl: "/CoffeShop.mp4",
        link: "https://github.com/noumanhafeez/Coffee_Shop"
    },
    {
        title: "Pizza App",
        description: "A React Native pizza app featuring an intuitive interface, allowing users to easily browse the menu and place orders seamlessly.",
        tags: ["React", "React Navigation", "User Experience"],
        imageUrl: "/pizza.png",
        link: "https://github.com/noumanhafeez/FoodApp"
    },
    {
        title: "Login and SignUp App",
        description: "A React Native login and signup app featuring a user-friendly interface for secure account management.",
        tags: ["React", "React Navigation", "Authentication"],
        imageUrl: "/login.png",
        link: "https://github.com/noumanhafeez/user_profile"
    },
    
]


export const skillsData = [
    "TypeScript",
    "React Native",
    "React",
    "HTML",
    "CSS",
    "Node js",
    "Firebase",
    "MongoDB",
    "Git",
    "Redux"
]