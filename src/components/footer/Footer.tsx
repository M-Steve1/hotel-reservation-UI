import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import SmallerFooter from "../smallerFooter/SmallerFooter";
import style from "../smallerFooter/BodySmallerFooter.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="icon-container">
        <FontAwesomeIcon className="fa-envelope" icon={faEnvelope} />
      </div>
      <div>
        <span className="heading">NEWS & OFFERS</span>
      </div>
      <div>
        <p>
          Enjoy many benefits and receive our promotions and special offers
          directly
        </p>
      </div>
      <div className="footer-form">
        <input
          placeholder="Enter your email address"
          style={{ marginBottom: "20px" }}
          type="text"
        />
        <button>SIGN UP</button>
      </div>
      <SmallerFooter style={style} />
    </footer>
  );
};

export default Footer;
