import { useEffect, useState } from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const projects = [
    {
        name: "Simone-Olivia",
        imgPath: "/computer-engineer-typing-keyboard-writing-code-build-firewalls.jpg",
        tech: "UI/UX",
        description: "Professional portfolio website with modern design and smooth user experience",
        href: "https://github.com/72tommy72/Simone-Olivia",
        web: "https://simone-olivia.netlify.app/",
    },
    {
        name: "Fokir",
        imgPath: "/slider-01.jpg",
        tech: "UI/UX",
        description: "Interactive portfolio with dynamic effects and engaging design",
        href: "https://github.com/72tommy72/Fokir",
        web: "https://fokir-27.netlify.app/",
    },
    {
        name: "Morgan-Freeman",
        imgPath: "/hero-bg.jpg",
        tech: "UI/UX",
        description: "Professional portfolio featuring work gallery and interactive resume",
        href: "https://github.com/72tommy72/Morgan-Freeman",
        web: "https://morgan-freeman.netlify.app/",
    },
    {
        name: "To-DO-List-FE",
        imgPath: "/todo.png",
        tech: "Vanilla JS",
        description: "Task management app with add, delete, and edit functionality",
        href: "https://github.com/72tommy72/To-DO-List-FE",
        web: "https://to-do-list-fe.netlify.app/",
    },
    {
        name: "CRUD",
        imgPath: "/CRUDs.png",
        tech: "Vanilla JS",
        description: "Data management application with Create, Read, Update, and Delete operations",
        href: "https://github.com/72tommy72/CRUD",
        web: "https://cruds-by-js-css-html.netlify.app/",
    },
    {
        name: "Weather-app",
        imgPath: "/ps_weather icons __ Behance.jpeg",
        tech: "React.js",
        description: "Weather application showing current conditions and forecasts",
        href: "https://github.com/72tommy72/Weather-app",
        web: "https://weather-app-aapi.netlify.app/",
    },
    {
        name: "Noxe-app",
        imgPath: "/man-watching-streaming-service-his-tv.jpg",
        tech: "React.js",
        description: "Movie and TV show platform with advanced user interface",
        href: "https://github.com/72tommy72/Noxe-app",
        web: "https://noxe-react-app.netlify.app/",
    },
    {
        name: "Dashboard",
        imgPath: "/digital-tablet-online-learning.jpg",
        tech: "React.js",
        description: "React.js & Material UI to make comprehensive admin dashboard with charts and statistics",
        href: "https://github.com/72tommy72/Dashboard-",
        web: "https://dashboard-react-matrialui.netlify.app/",
    },
    {
        name: "Prayer times",
        imgPath: "/teenage-girl-with-praying-peace-hope-dreams-concept.jpg",
        tech: "React.js",
        description: "Prayer times application with notifications and advanced settings",
        href: "https://github.com/72tommy72/prayer-times",
        web: "https://t-prayer-times.netlify.app/",
    },
    
    {
        name: "To-DO-List-BE",
        imgPath: "/todo.png",
        tech: "Node.js",
        description: "Backend for todo list application with complete API",
        href: "https://github.com/72tommy72/To-Do-BC",
    },
    {
        name: "Anemia detection (Graduation project)",
        imgPath: "/yusupjune47.jpg",
        tech: "Node.js",
        description: "Anemia detection system using artificial intelligence",
        href: "https://github.com/72tommy72/graduation-project",
    },
    {
        name: "E-commerce ",
        imgPath: "/39225770.jpg",
        tech: "Node.js",
        description: "Complete e-commerce platform with payment and product management",
        href: "https://github.com/72tommy72/e-commerce",
    },
    {
        name: "Task",
        imgPath: "/gradient-sql-illustration_52683-80408.avif",
        tech: "Node.js ",
        description: "Backend application for relational database management with SQL",
        href: "https://github.com/72tommy72/SQL",
    },
    {
        name: "Market",
        imgPath: "/sequelize.jpg",
        tech: "Node.js",
        description: "Database management system using Sequelize ORM",
        href: "https://github.com/72tommy72/-sequelize-and-express",
    },
    {
        name: "Saraha",
        imgPath: "/mongoose.png",
        tech: "Node.js",
        description: "Backend application using MongoDB with Mongoose",
        href: "https://github.com/72tommy72/mongoose-and-express",
    },
    {
        name: "Task",
        imgPath: "/Task.png",
        tech: "MERN Stack",
        description: "Full-stack task management app with advanced UI and backend services",
        href: "https://github.com/72tommy72/task",
        web: "https://jupiter-task.netlify.app/",   
    },
];

export default function Main() {
    const [active, setActive] = useState("all");
    const [arr, setArr] = useState(projects);
    const [loadedImages, setLoadedImages] = useState({});

    const handleClick = (buttonTitle) => {
        setActive(buttonTitle);
        if (buttonTitle === "all") {
            setArr(projects);
        } else {
            const newArr = projects.filter((item) => item.tech === buttonTitle);
            setArr(newArr);
        }
    };

    const handleImageLoad = (imgPath) => {
        setLoadedImages(prev => ({
            ...prev,
            [imgPath]: true
        }));
    };

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div className="row">
            <div className="left-section col-md-3">
                <div className="buttons d-flex">
                    <button
                        onClick={() => handleClick("all")}
                        className={active === "all" ? "active" : ""}
                    >
                        All Projects
                    </button>
                    <button
                        onClick={() => handleClick("UI/UX")}
                        className={active === "UI/UX" ? "active" : ""}
                    >
                        UI/UX
                    </button>
                    <button
                        onClick={() => handleClick("Vanilla JS")}
                        className={active === "Vanilla JS" ? "active" : ""}
                    >
                        Vanilla JS
                    </button>
                    <button
                        onClick={() => handleClick("React.js")}
                        className={active === "React.js" ? "active" : ""}
                    >
                        React.js
                    </button>
                    <button
                        onClick={() => handleClick("Node.js")}
                        className={active === "Node.js" ? "active" : ""}
                    >
                        Node.js
                    </button>
                    <button
                        onClick={() => handleClick("MERN Stack")}
                        className={active === "MERN Stack" ? "active" : ""}
                    >
                        MERN Stack
                    </button>
                </div>
            </div>
            <div className="col-md-9 right-section">
                <div className="row">
                    {arr.map((project, idx) => (
                        <div key={idx} className="col-lg-4 px-3 mt-3 rounded-3">
                            <div data-aos="zoom-in-up">
                                <div className="card">
                                    <div className="image-container">
                                        {!loadedImages[project.imgPath] && (
                                            <div className="image-placeholder">
                                                <div className="spinner"></div>
                                            </div>
                                        )}
                                        <img
                                            className={`card-img-top w-100 ${loadedImages[project.imgPath] ? 'loaded' : ''}`}
                                            src={project.imgPath}
                                            alt={project.description}
                                            onLoad={() => handleImageLoad(project.imgPath)}
                                        />
                                    </div>
                                    <div className="card-body my-2">
                                        <h5 className="card-title">{project.name}</h5>
                                        <p className="card-text mt-2 mb-2">{project.description}</p>
                                        <h5 className="card-title my-4">{project.tech}</h5>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <a href={project.href} target="_blank" rel="noopener noreferrer">
                                                    <span className="icon-github"></span>
                                                </a>
                                            </div>
                                            {project.web && (
                                                <a
                                                    href={project.web}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="d-flex align-items-center justify-content-center"
                                                >
                                                    <span className="mt-1">more</span>
                                                    <span className="icon-arrow-right align-self-end ms-1"></span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
