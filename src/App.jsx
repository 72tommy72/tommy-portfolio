import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/1-Header/Header.jsx";
import Hero from "./Components/2-Hero/Hero.jsx";
import Main from "./Components/3-Main-content/Main.jsx";
import ContactUs from "./Components/4-ContactUs/ContactUs.jsx";
import Footer from "./Components/5-Footer/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <div id="up" className="container px-5">
                <div className="d-flex justify-content-end">
                    {/* <button
                        className="btn btn-link"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        <FontAwesomeIcon
                            icon={darkMode ? faSun : faMoon}
                            className={darkMode ? "text-warning" : "text-dark"}
                        />
                    </button> */}
                </div>
                <Header />
                <div id="hero">
                    <Hero />
                </div>
                <div className="divider"></div>
                <div id="main">
                    <Main />
                </div>
                <div className="divider"></div>
                <div id="contactUs">
                    <ContactUs />
                </div>
                <div className="divider"></div>
                <div id="footer">
                    <Footer />
                </div>
                <a href="#up">
                    <button className="scrollToTop icon-circle-up"></button>
                </a>
            </div>
        </>
    );
}

export default App;
