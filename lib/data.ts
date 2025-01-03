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
        title: "Music Player.Apk",
        description: "Click to access .apk file. It is safe to use. Note: The app size is around about 248 mb because I store my fav songs in Mood Screen.",
        tags: ["React Native", "Expo", "Expo av", "Expo Build",],
        imageUrl: "/musicPlayer.mp4",
        link: "https://drive.google.com/drive/folders/1_0YjjIz8YB5D8bLcTOFizsq8SmRlXQuC?usp=drive_link"
    },
    {
        title: "Music Player",
        description: "I developed a custom music player app with built-in emotion-based song categories, allowing users to play, stop, and resume tracks seamlessly. Integrated features for liking songs and dynamic state management for a personalized experience.",
        tags: ["React Native", "Expo", "Expo av", "React Native Reanimated",],
        imageUrl: "/short music.mp4",
        link: "https://vimeo.com/1034572951?share=copy"
    },
    {
        title: "Zoom Clone App",
        description: "I built a custom video conferencing app inspired by Zoom, featuring a reimagined UI! Used Firebase for secure login, GetStream for conference, and Next.js on the backend.",
        tags: ["React Native", "Firebase", "GetStream", "NextJS",],
        imageUrl: "/zoomClone.mp4",
        link: "https://vimeo.com/1026401195?autoplay=1&muted=1&stream_id=Y2xpcHN8MjI5NzY3MjEwfGlkOmRlc2N8eyJyZW1vdmVfdm9kX3RpdGxlcyI6ZmFsc2V9"
    },
    {
        title: "Uber Clone App",
        description: "I developed an UberClone application where I enjoyed working with Apple Maps for navigation and data management using Redux.",
        tags: ["React Native", "React Navigation", "Redux", "React Native Maps",],
        imageUrl: "/uber_trans.mp4",
        link: "https://vimeo.com/1026401195?autoplay=1&muted=1&stream_id=Y2xpcHN8MjI5NzY3MjEwfGlkOmRlc2N8eyJyZW1vdmVfdm9kX3RpdGxlcyI6ZmFsc2V9"
    },
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