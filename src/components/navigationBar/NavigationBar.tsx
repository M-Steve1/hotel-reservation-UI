import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li>
          <Link
            style={{ color: location.pathname === "/" ? "black" : "white" }}
            className="link"
            to={"/"}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            style={{
              color:
                location.pathname === "/stephen-accommodation"
                  ? "black"
                  : "white",
            }}
            className="link"
            to={"/stephen-accommodation"}
          >
            OUR ROOMS
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: location.pathname === "/about-us" ? "black" : "white",
            }}
            className="link"
            to={"/about-us"}
          >
            ABOUT
          </Link>
        </li>
        <li style={{ marginRight: "0px" }}>
          <Link
            style={{
              color: location.pathname === "/about-us" ? "black" : "white",
            }}
            className="link"
            to={"/about-us"}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
