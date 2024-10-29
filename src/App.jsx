import Header from "./Components/1-Header/Header.jsx";
import Footer from "./Components/5-Footer/Footer.jsx";
import Hero from "./Components/2-Hero/Hero.jsx";
import Main from "./Components/3-Main-content/Main.jsx";
import ContactUs from "./Components/4-ContactUs/ContactUs.jsx";
import "aos/dist/aos.css"; 
import "./App.css";
import "../src/app.js";

function App() {
  return (
    <>
      <div id="up" className="container px-5">
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
