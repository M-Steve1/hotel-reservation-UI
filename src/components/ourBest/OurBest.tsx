import "./OurBest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faParking,
  faTv,
  faLuggageCart,
  faAirFreshener,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";

const OurBest = () => {
  return (
    <div className="ourbest-container">
      <div className="ourbest-writeup">
        <span className="header">OUR BEST</span>
        <p>
          I love to give my best in every task I am assigned to. I always
          deliver. I never miss.
        </p>

        <div className="icon-container">
          <div>
            <FontAwesomeIcon className="icon" icon={faWifi}></FontAwesomeIcon>
            <span>Free Wifi</span>
          </div>
          <div>
            <FontAwesomeIcon
              className="icon"
              icon={faParking}
            ></FontAwesomeIcon>
            <span>Car Parking</span>
          </div>
          <div style={{ marginRight: "0px" }}>
            <FontAwesomeIcon
              className="icon"
              icon={faConciergeBell}
            ></FontAwesomeIcon>
            <span>Service Room</span>
          </div>
          <div>
            <FontAwesomeIcon
              className="icon"
              icon={faAirFreshener}
            ></FontAwesomeIcon>
            <span>Air Conditional</span>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faTv}></FontAwesomeIcon>
            <span>Digital TV</span>
          </div>
          <div style={{ marginRight: "0px" }}>
            <FontAwesomeIcon
              className="icon"
              icon={faLuggageCart}
            ></FontAwesomeIcon>
            <span>Luggage</span>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="src/assets/ourbest-image.jpg" alt="" />
      </div>
    </div>
  );
};

export default OurBest;
