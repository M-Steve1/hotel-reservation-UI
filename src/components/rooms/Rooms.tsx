import "./Rooms.css";
import style from "../roomsHeader/RoomsHeaderStyleOne.module.css";
import RoomsHeader from "../roomsHeader/RoomsHeader";
import { Link } from "react-router-dom";
import Room from "../../models/Category";
import GotoTopArrow from "../gotoTopArrow/GotoTopArrow";
import SmallerFooter from "../smallerFooter/SmallerFooter";
import smallFooterStyle from "../smallerFooter/SmallFooter.module.css";
import { numberWithCommas } from "../../utils/numberWithComma";

interface Props {
  roomCategories: Room[];
}

const Rooms = ({ roomCategories }: Props) => {
  return (
    <>
      <RoomsHeader style={style} url="/src/assets/hotel-view.jpg">
        STEPHEN ACCOMMODATION
      </RoomsHeader>
      <div className="rooms-container">
        <div className="writeup">
          <p>
            <span>OUR ROOMS:</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            laudantium inventore saepe sapiente culpa, excepturi neque quo enim
            commodi aperiam velit et molestiae ea omnis cupiditate ratione qui
            officiis dicta! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Error, distinctio! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Consectetur autem modi doloremque vel maxime
            laudantium incidunt necessitatibus soluta facere odit.
          </p>
          <div className="discount">
            <img src="/public/assets/discount.jpg" alt="" />
          </div>
        </div>
        {roomCategories.map((category, index) => {
          return (
            <div
              key={category.roomType}
              className="room"
              style={{ flexDirection: index % 2 !== 0 ? "row-reverse" : "row" }}
            >
              <div className="room-image">
                <Link className="link" to={`/room_type/${category.roomType}`}>
                  <img src={category.urls[0]} alt="" />
                </Link>
              </div>
              <div className="room-details">
                <p>
                  <Link
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    to={`/room_type/${category.roomType}`}
                  >
                    <span>{category.roomType.replace("_", " ")}</span>
                  </Link>
                  START FROM ₦{numberWithCommas(category.price)} PER DAY <br />
                  <br /> Standard Furnished Room, Fully Air Conditioned, Energy
                  Saver Room Key, Toilet, Orthopedic Mattress, Chairs, LED TV,
                  Reading Lights, Accessories, Mini Bar, 24hours Room Service,
                  Telephone & Windows Tablet Request Devices, Smoke Detector,
                  Water Sprinkler, Fire Alarm
                </p>
                <ul>
                  <li>Max: 4 Person(s)</li>
                  <li>Size: 35 m2 / 376 ft2</li>
                  <li>Bed: King-size</li>
                </ul>
                <Link
                  className="button-link"
                  to={`/room_type/${category.roomType}`}
                >
                  <button>VIEW DETAILS</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <GotoTopArrow />
      <SmallerFooter style={smallFooterStyle} />
    </>
  );
};

export default Rooms;
