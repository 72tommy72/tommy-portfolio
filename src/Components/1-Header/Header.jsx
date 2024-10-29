import { useEffect, useState } from "react";
import "./Header.css";
import "./Header.js";

export default function Header() {
    // const [showModel, setShowModel] = useState(false);
    const [Mode, setMode] = useState(
        localStorage.getItem("currentMode") ?? "dark"
    );
    useEffect(() => {
        if (Mode === "light") {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [Mode]);
    return (
        <>
            <header className="d-flex justify-content-between align-items-center mt-3 ">
                <button
                    onClick={() => {
                        // setShowModel(true)
                    }}
                    className="menu"
                >
                    <span className="icon-menu"></span>
                </button>
                <div></div>
                <nav className=" align-items-center">
                    <ul className="d-flex pt-3">
                        <li>
                            <a href="#hero">About</a>
                        </li>
                        {/* <li>
                            <a href="">Articles</a>
                        </li> */}
                        <li>
                            <a href="#main">Projects</a>
                        </li>
                        <li className="pe-4">
                            <a href="#contactUs">ContactUs</a>
                        </li>
                        {/* <li className="pe-4">
                            <a href="">Uses</a>
                        </li> */}
                    </ul>
                </nav>
                <button
                    onClick={() => {
                        //save local storage
                        localStorage.setItem(
                            "currentMode",
                            Mode === "dark" ? "light" : "dark"
                        );
                        // set in local storage
                        setMode(localStorage.getItem("currentMode"));
                    }}
                    className="moon-icon"
                >
                    {Mode === "dark" ?<span className="icon-moon"></span>:<span className="icon-sun"></span>}
                </button>
                
                <div className="layer-model">
                    <ul>
                        <li>
                            <button className="close">
                                <span className="icon-close"></span>
                            </button>
                        </li>
                        <li>
                            <a href="#hero">About</a>
                        </li>
                        {/* <li>
                            <a href="">Articles</a>
                        </li> */}
                        <li>
                            <a href="#main">Projects</a>
                        </li>
                        <li className="pe-4">
                            <a href="#contactUs">ContactUs</a>
                        </li>
                        {/* <li className="pe-4">
                            <a href="">Uses</a>
                        </li> */}
                    </ul>
                </div>
            </header>
        </>
    );
}
