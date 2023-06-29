import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./AboutUs.css";

const AboutUs = () => {
  const location = useLocation();
  return (
    <>
      <div
        style={{
          display: location.pathname === "/about-us" ? "block" : "none",
        }}
      >
        <Header></Header>
      </div>
      <div className="aboutus-container">
        <div className="img-container">
          <img src="src/assets/hotel-view.jpg" alt="" />
        </div>
        <div className="aboutus-writeup">
          <span className="header">ABOUT STEPHEN HOTEL</span>
          <p>
            <b>
              Hi, I'm Stephen. I am an Intelligent Software Engineer who is
              loving to work with. I am also reliable, cool headed and
              hard-working. I takes great pride in my work and always ready to
              assist others. Apart from coding I love hearing the word of God
              and playing video games.
            </b>
          </p>

          <p>
            This Hotel Web Application was built with React.js(Frontend), Java
            Spring-Boot (Backend) MongoDB (NoSQL Database).
          </p>
          <p>
            <b>
              <span> Email: Modebestephen2@gmail.com </span> <br />
              <span>GitHub:https://github.com/M-Steve1</span> <br />
              <span>LinkedIn: https://www.linkedin.com/in/modebe-stephen/</span>
            </b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: location.pathname === "/about-us" ? "block" : "none",
        }}
      >
        <Footer></Footer>
      </div>
    </>
  );
};

export default AboutUs;
