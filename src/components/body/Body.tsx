import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Body.css";
import BookNowContactUsButton from "../booknow-contactus-button/BookNowContactUsButton";
import BookingForm from "../bookingForm/BookingForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import style from "../bookingForm/StyleForBody.module.css";
import PreviewRooms from "../previewRooms/PreviewRooms";
import AboutUs from "../aboutUs/AboutUs";
import OurBest from "../ourBest/OurBest";
import Footer from "../footer/Footer";
import GotoTopArrow from "../gotoTopArrow/GotoTopArrow";
import Header from "../header/Header";
import Category from "../../models/Category";

interface Props {
  roomCategories: Category[];
}
const Body = ({ roomCategories }: Props) => {
  return (
    <div>
      <Header />
      <Carousel className="carousel-container">
        <Paper className="slide animate__animated animate__fadeInRightBig">
          <div>
            <p style={{ color: "rgb(199, 199, 204)" }}>
              It's Fast,Easy & Secure...
            </p>
            <div className="buttons-container">
              <BookNowContactUsButton />
            </div>
          </div>
        </Paper>
        <Paper className="slide animate__animated animate__fadeInRightBig">
          <div>
            <p style={{ color: "rgba(239, 129, 46)" }}>
              &Also Very Comfortable...
            </p>
            <div className="buttons-container">
              <BookNowContactUsButton />
            </div>
          </div>
        </Paper>
        <Paper className="slide animate__animated animate__fadeInRightBig">
          <div>
            <p style={{ color: "rgba(239, 129, 46)" }}>Easily Accessible</p>
            <div className="buttons-container">
              <BookNowContactUsButton />
            </div>
          </div>
        </Paper>
      </Carousel>
      <div className="form-in-body-component">
        <div className="check-availability-div">
          <div className="icon">
            <FontAwesomeIcon
              className="fa-check-circle"
              icon={faCheckCircle}
            ></FontAwesomeIcon>
          </div>
          <p>CHECK AVAILABILITY</p>
        </div>
        <BookingForm style={style} roomType="all" />
      </div>
      <PreviewRooms roomCategories={roomCategories} />
      <AboutUs />
      <OurBest />
      <Footer />
      <GotoTopArrow />
    </div>
  );
};

export default Body;
