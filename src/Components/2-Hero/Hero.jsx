import Lottie from "lottie-react";
import "./Hero.css";
import developerAnimation from "../../../public/animation/Animation - 1727177595965.json";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <>
            <section className="hero mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <div data-aos="fade-right">
                            <div className="left-section d-flex position-relative">
                                <motion.img
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                                    className="avatar rounded-circle"
                                    src="../../../public/WhatsApp Image 2024-09-21 at 09.50.07_8b6fe70d-modified.png"
                                    alt="Mohamed Hatem - MERN Stack Developer"
                                />
                                <div className="icon-verified text-info"></div>
                            </div>
                            <div className="title mt-2">
                                <h1>Mohamed Hatem</h1>
                                <p className="mt-2">MERN STACK DEVELOPER</p>
                            </div>
                            <div className="subtitle my-3">
                                <p>
                                    Recent graduate from the Higher Institute of Tenth of Ramadan
                                    for Science and Technology, specializing in web application
                                    development using the MERN Stack (MongoDB, Express, React,
                                    Node.js). I have experience building full-stack applications,
                                    with a strong focus on high-performance applications and
                                    excellent user experience. Throughout my studies, I worked on
                                    several personal projects that helped enhance my coding skills
                                    and problem-solving abilities. I am eager to join an innovative
                                    team where I can contribute to exceptional projects and further
                                    develop my technical skills.
                                </p>
                            </div>
                            <div className="icons d-flex text-white">
                                <a href="https://www.facebook.com/72tommy" target="blank">
                                    <div className="icon icon-facebook"></div>
                                </a>
                                <a href="https://www.instagram.com/_mohamedhatemm" target="blank">
                                    <div className="icon icon-instagram"></div>
                                </a>
                                <a
                                    href="https://github.com/72tommy72?tab=repositories"
                                    target="blank"
                                >
                                    <div className="icon icon-github"></div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mohamed-hatem-661383346"
                                    target="blank"
                                >
                                    <div className="icon icon-linkedin-square"></div>
                                </a>
                                <a
                                    href="https://drive.google.com/file/d/1XWp1_Yk2Pg_yQuEZvv87tlNF6RnwxrNV/view?usp=sharing"
                                    target="blank"
                                >
                                    <FontAwesomeIcon className="icon" icon={faFile} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div data-aos="fade-left">
                            <div className="right-hero-animation">
                                <div className="">
                                    <Lottie animationData={developerAnimation} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
