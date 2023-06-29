import { Link } from "react-router-dom";
import "./PreviewRooms.css";
import Category from "../../models/Category";
import { numberWithCommas } from "../../utils/numberWithComma";

interface Props {
  roomCategories: Category[];
}
const PreviewRooms = ({ roomCategories }: Props) => {
  return (
    <div className="our-rooms-container">
      <div className="our-rooms-heading-container">
        <p className="our-rooms-header">OUR ROOMS</p>
        <p className="our-rooms-write-up">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sint
          autem dolores aut praesentium fugit, quia laborum delectus et modi in.
          Sunt assumenda, adipisci tempora odio quo placeat harum magni.
        </p>
      </div>
      <div className="room-categories-container">
        {roomCategories.map((category, index) => {
          if (index <= 5) {
            return (
              <div
                key={category.roomType}
                style={{
                  marginRight: index === 2 || index === 5 ? "0px" : "30px",
                }}
                className="category-container"
              >
                <img src={category.urls[0]} alt="" />
                <Link className="link" to={`/room_type/${category.roomType}`}>
                  <div className="transparent-div">
                    <span className="header">{category.roomType}</span>
                    <span className="price">
                      START FROM ₦{numberWithCommas(category.price)} PER DAY
                    </span>
                    <p>
                      Standard Furnished Room, Fully Air Conditioned, Energy
                      Saver Room Key, Toilet, Orthopedic Mattress, Chairs, LED
                      TV, Reading Lights, Accessories,
                    </p>
                    <button>VIEW DETAILS</button>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PreviewRooms;
