import { useEffect, useState } from "react";
import "./Main.css";
import Aos from "aos";
// import { AnimatePresence, motion } from "framer-motion";
// import 'app.js'

const projects = [

    {
        imgPath: "../public/digital-tablet-online-learning.jpg",
        title: "React",
        description: "Dashboard",
        href: "https://github.com/72tommy72/Dashboard-",
        web: "https://dashboard-react-matrialui.netlify.app/",
    },
    {
        imgPath:
            "../public/teenage-girl-with-praying-peace-hope-dreams-concept.jpg",
        title: "React",
        description: "Prayer-times",
        href: "https://github.com/72tommy72/prayer-times",
        web: "https://t-prayer-times.netlify.app/",
    },
    {
        imgPath: "../public/man-watching-streaming-service-his-tv.jpg",
        title: "React",
        description: "Noxe App",
        href: "https://github.com/72tommy72/Noxe-app",
        web: "https://noxe-react-app.netlify.app/",
    },
    {
        imgPath: "../public/todo.png",
        title: "JavaScript",
        description: "TO DO List FE",
        href: "https://github.com/72tommy72/To-DO-List-FE",
        web: "https://to-do-list-fe.netlify.app/",
    },
    // {
    //     imgPath: "../public/    ",
    //     title: "JavaScript",
    //     description: "Weather app ",
    //     href: "https://github.com/72tommy72/CRUD",
    // },
    {
        imgPath: "../public/CRUDs.png     ",
        title: "JavaScript",
        description: "CRUDs",
        href: "https://github.com/72tommy72/CRUD",
        web: "https://cruds-by-js-css-html.netlify.app/",
    },
    {
        imgPath: "../public/gradient-sql-illustration_52683-80408.avif",
        title: "Node & Express",
        description: "SQL",
        href: "https://github.com/72tommy72/SQL",
    },
    {
        imgPath: "../public/sequelize.jpg",
        title: "Node & Express",
        description: "Sequelize",
        href: "https://github.com/72tommy72/-sequelize-and-express",
    },
    {
        imgPath: "../public/mongoose.png",
        title: "Node & Express",
        description: "Mongoose",
        href: "https://github.com/72tommy72/mongoose-and-express",
    },
    {
        imgPath: "../public/todo.png",
        title: "Node & Express",
        description: "TODO LIST BC",
        href: "https://github.com/72tommy72/To-Do-BC",
    },
    {
        imgPath: "../public/yusupjune47.jpg",
        title: "Node & Express",
        description: "Detect anemia",
        href: "https://github.com/72tommy72/graduation-project",
    },
    {
        imgPath: "../public/39225770.jpg",
        title: "Node & Express",
        description: "E-commerce",
        href: "https://github.com/72tommy72/e-commerce",
    },
    /* {
        imgPath: "../public/hero-bg.jpg",
        title: "HTML & CSS",
        description: "Simone-Olivia ",
        href: "https://github.com/72tommy72/Simone-Olivia",
        web: "https://simone-olivia.netlify.app/",
    },
    {
        imgPath:
            "../public/computer-engineer-typing-keyboard-writing-code-build-firewalls.jpg",
        title: "HTML & CSS",
        description: "Morgan-Freeman ",
        href: "https://github.com/72tommy72/Morgan-Freeman",
        web: "https://morgan-freeman.netlify.app/",
    },
    {
        imgPath: "../public/slider-01.jpg",
        title: "HTML & CSS",
        description: "Fokir ",
        href: "https://github.com/72tommy72/Fokir",
        web: "https://fokir-27.netlify.app/",
    }, */
];
export default function Main() {
    const [active, setActive] = useState("all");
    const [arr, setArr] = useState(projects);
    const handelClick = (buttonTitle) => {
        setActive(buttonTitle);
        const newArr = projects.filter((item) => {
            return item.title === buttonTitle;
        });
        setArr(newArr);
    };
    useEffect(() => {
        Aos.init({ duration: 1500 });  // Initialize AOS and set duration if needed
    }, []);
    return (
        <>
            <div className="row ">
                <div className="left-section col-md-3 ">
                    <div className="buttons  d-flex">
                        <button
                            onClick={() => {
                                setActive("all");
                                setArr(projects);
                            }}
                            className={active === "all" ? "active" : null}
                        >
                            All Projects
                        </button>


                        <button
                            onClick={() => {
                                handelClick("React");
                            }}
                            className={active === "React" ? "active" : null}
                        >
                            React
                        </button>
                        <button
                            onClick={() => {
                                handelClick("JavaScript");
                            }}
                            className={active === "JavaScript" ? "active" : null}
                        >
                            JavaScript
                        </button>
                        {/* <button
                            onClick={() => {
                                handelClick("HTML & CSS");
                            }}
                            className={active === "HTML & CSS" ? "active" : null}
                        >
                            HTML & CSS
                        </button> */}
                        <button
                            onClick={() => {
                                handelClick("Node & Express");
                            }}
                            className={active === "Node & Express" ? "active" : null}
                        >
                            Node & Express
                        </button>
                    </div>
                </div>
                <div className="col-md-9 right-section">
                    <div className="row">
                        {arr.map((project, idx) => {
                            return (
                                //framer-motion
                                <div key={idx} className="col-lg-4 px-3 mt-3 rounded-3">
                                    <div data-aos="zoom-in-up">
                                        <div className="card">
                                            <img
                                                className="card-img-top w-100 "
                                                src={project.imgPath}
                                                alt=""
                                            />
                                            <div className="card-body my-2 ">
                                                <h5 className="card-title my-2">
                                                    {project.description}
                                                </h5>
                                                <p className="card-text mt-2 mb-4">{project.title}</p>
                                                <div className=" d-flex justify-content-between">
                                                    <div className="d-flex">
                                                        {/* <a href=""><span className="icon-link mx-2"></span></a> */}
                                                        <a href={project.href} target="_blank">
                                                            <span className="icon-github"></span>
                                                        </a>
                                                    </div>
                                                    <a
                                                        href={project.web}
                                                        target="_blank"
                                                        className="d-flex "
                                                    >
                                                        {project.title === "Node & Express" ? (
                                                            <></>
                                                        ) : (
                                                            <>
                                                                <span>more</span>
                                                                <span className="icon-arrow-right align-self-end ms-1"></span>
                                                            </>
                                                        )}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
