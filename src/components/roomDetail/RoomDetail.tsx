import Carousel from "react-material-ui-carousel";
import RoomsHeader from "../roomsHeader/RoomsHeader";
import headerStyle from "../roomsHeader/RoomsHeaderStyleOne.module.css";
import { Paper } from "@mui/material";
import BookingForm from "../bookingForm/BookingForm";
import formStyle from "../bookingForm/styleForRoomDetail.module.css";
import "./RoomDetail.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SmallerFooter from "../smallerFooter/SmallerFooter";
import GotoTopArrow from "../gotoTopArrow/GotoTopArrow";
import smallFooterStyle from "../smallerFooter/SmallFooter.module.css";
import { useParams } from "react-router-dom";
import api from "../../api/apiConfig";
import Category from "../../models/Category";
import { numberWithCommas } from "../../utils/numberWithComma";

const RoomDetail = () => {
  const theCategory: Category = {
    id: {},
    price: 0,
    roomType: "",
    urls: [],
  };
  const [clicked, setClicked] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>(theCategory);
  const params = useParams();
  const roomType = params.roomType;

  const getCategory = async () => {
    try {
      const response = await api.get(`/api/v1/category/${roomType}`);
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleClick = () => {
    setClicked((clicked) => !clicked);
  };
  return (
    <>
      <RoomsHeader style={headerStyle} url={category.urls[0]}>
        {category.roomType}
      </RoomsHeader>
      <div className="room-detail">
        <div className="slide-form-container">
          <Carousel className="slide-container">
            {category.urls.map((url) => {
              return (
                <Paper style={{ boxShadow: "none" }} key={category.roomType}>
                  <img src={url} alt="" />
                </Paper>
              );
            })}
          </Carousel>
          <div className="form-container">
            <div style={{ backgroundColor: "#EF812E" }}>
              <h2>{category.roomType}</h2>
              <p style={{ color: "white" }}>
                Start from{" "}
                <span style={{ fontSize: "30px" }}>
                  ₦{numberWithCommas(category.price)}
                </span>
                /night
              </p>
              <hr />
              <p>YOUR RESERVATION</p>
            </div>
            <BookingForm
              style={formStyle}
              roomType={roomType as unknown as string}
            ></BookingForm>
          </div>
        </div>
        <div className="description-and-amenities-container">
          <div className="description-and-amenities">
            <span
              onClick={handleClick}
              style={{
                marginRight: "20px",
                fontWeight: clicked ? "800" : "none",
                opacity: clicked ? "1" : "0.6",
                borderBottom: clicked ? "1px solid #EF812E" : "none",
              }}
            >
              DESCRIPTION
            </span>
            <span
              onClick={handleClick}
              style={{
                fontWeight: !clicked ? "800" : "none",
                opacity: !clicked ? "1" : "0.6",
                borderBottom: !clicked ? "1px solid #EF812E" : "none",
              }}
            >
              AMENITIES
            </span>
          </div>
          <div
            style={{ display: clicked ? "block" : "none" }}
            className="description"
          >
            These finely appointed guest accommodations are a study in refined
            elegance . It Offers king bed with orthopedic mattress and designer
            bed linens. Complete with luxurious amenities and perfect furnished
            with Fully Air Conditioned, Energy Saver Room Key, Toilet,
            Orthopedic Mattress, Chairs, LED TV, Reading Lights, Accessories,
            Mini Bar, 24hours Room Service, Telephone & Windows Tablet Request
            Devices, Smoke Detector, Water Sprinkler, Fire Alarm
          </div>
          <div
            style={{ display: !clicked ? "block" : "none" }}
            className="amenities"
          >
            <span>
              <FontAwesomeIcon className="fa-check" icon={faCheck} />
              Allowed Pets
            </span>

            <span>
              <FontAwesomeIcon className="fa-check" icon={faCheck} />
              Free Wifi
            </span>
            <span>
              <FontAwesomeIcon className="fa-check" icon={faCheck} />
              Television
            </span>
          </div>
        </div>
      </div>
      <GotoTopArrow />
      <SmallerFooter style={smallFooterStyle}></SmallerFooter>
    </>
  );
};

export default RoomDetail;
