import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import "animate.css/animate.css";
import NavigationBar from "../navigationBar/NavigationBar";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((current) => !current);
  };

  return (
    <>
      <header>
        <div className="div-container">
          <div className="logo">
            <Link className="lg-screen-logo" to={"/"}>
              <img src="/assets/logos/logo-white-background.svg" alt="" />
            </Link>
            <Link className="sm-screen-logo" to={"/"}>
              <img src="/assets/logos/logo-orange-background.svg" alt="" />
            </Link>
          </div>
          <div
            onClick={handleClick}
            className="navigation-button"
            style={{
              backgroundColor: click ? "white" : "",
            }}
          >
            <div className="icons-container">
              <div
                style={{
                  transform: click ? "rotate(40deg)" : "",
                  height: click ? "4px" : "",
                  backgroundColor: click ? "#ef8b43" : "",
                }}
                className="icon1"
              ></div>
              <div
                style={{
                  display: click ? "none" : "",
                }}
                className="icon2"
              ></div>
              <div
                style={{
                  transform: click ? "rotate(-40deg)" : "",
                  height: click ? "4px" : "",
                  marginTop: click ? "10px" : "",
                  backgroundColor: click ? "#ef8b43" : "",
                }}
                className="icon3"
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: click ? "var(---make-it-visible)" : "var(--not-visible)",
          }}
          className="animate__animated animate__fadeInRight nav-link"
        >
          <NavigationBar />
        </div>
      </header>
    </>
  );
};

export default Header;
