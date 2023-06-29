import BookingForm from "../bookingForm/BookingForm";
import Header from "../header/Header";
import "./CheckAvailability.css";
import style from "../bookingForm/StyleForCheckAvailability.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Category from "../../models/Category";
import { numberWithCommas } from "../../utils/numberWithComma";
import { useEffect, useState } from "react";
import api from "../../api/apiConfig";
import { useParams } from "react-router-dom";
import PaymentForm from "../paymentForm/PaymentForm";
import { calculateNumberOfDays } from "../../utils/calculateDate";
import { formatDate } from "../../utils/formatDate";
import { addToCart, removeFromCart } from "../../utils/cart";
import GotoTopArrow from "../gotoTopArrow/GotoTopArrow";

interface Props {
  roomCategories: Category[];
}

const CheckAvailability = ({ roomCategories }: Props) => {
  const theCategory: Category = {
    id: {},
    price: 0,
    roomType: "",
    urls: [],
  };

  const [category, setCategory] = useState<Category>(theCategory);
  const [numberOfAvailableRooms, setNumberOfAvailableRooms] = useState<
    number[]
  >([]);
  const [cart, setCart] = useState<Category>(theCategory);

  const params = useParams();
  const bookingDetails = params.bookingDetails;

  const arr = bookingDetails!.split("_");
  let roomType = arr[0];
  const adultNumber = parseInt(arr[1]);
  const childrenNumber = parseInt(arr[2]);
  const checkIn = arr[3];
  const checkOut = arr[4];

  const getCategory = async (roomType: string): Promise<void> => {
    try {
      const response = await api.get(`/api/v1/category/${roomType}`);

      setCategory(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getNumberOfRoomsInCategory = () => {
    try {
      const response = roomCategories.map(async (item) => {
        return await api.post(
          "/api/v1/room/available-rooms-in-category/count",
          {
            checkInDate: checkIn,
            checkOutDate: checkOut,
            roomType: item.roomType,
          }
        );
      });

      Promise.all(response).then((values) => {
        let numberOfRooms: number[] = [];
        values.forEach((value) => {
          numberOfRooms.push(value.data);
        });
        setNumberOfAvailableRooms(numberOfRooms);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory(roomType);
  }, []);

  if (roomType === "all") {
    roomCategories = roomCategories;
  } else {
    roomCategories = [];
    roomCategories.push(category);
  }

  const calculateTotalAmount = (
    numberOfNights: number,
    roomPrice: number
  ): number => {
    return numberOfNights * roomPrice;
  };

  return (
    <>
      <Header></Header>
      <div className="check-availability-container">
        <BookingForm style={style} roomType={roomType}></BookingForm>
        <div className="available-rooms-and-cart-container">
          <div className="available-rooms-container">
            {roomCategories.map((category, index) => {
              numberOfAvailableRooms.length <= 0 && index === 0
                ? getNumberOfRoomsInCategory()
                : null;
              return (
                <div
                  key={category.roomType}
                  style={{ border: "1px solid #DDDD", marginBottom: "30px" }}
                >
                  <h2>{category.roomType}</h2>
                  <div
                    onScroll={() => console.log("good")}
                    className="room-container"
                  >
                    <div className="image-container">
                      <img src={category.urls[0]} alt="" />
                    </div>

                    <div className="room-deal-container">
                      <span className="heading">Choose your deal</span>
                      <ul>
                        <p>
                          <b>Inclusions</b>
                        </p>
                        <li>
                          <span className="icon">
                            <FontAwesomeIcon
                              className="fa-check"
                              icon={faCheck}
                            />
                            Breakfast included
                          </span>
                        </li>
                        <li>
                          <span className="icon">
                            <FontAwesomeIcon
                              className="fa-check"
                              icon={faCheck}
                            />
                            Breakfast included
                          </span>
                        </li>
                        <li>
                          <span className="icon">
                            <FontAwesomeIcon
                              className="fa-check"
                              icon={faCheck}
                            />
                            Breakfast included
                          </span>
                        </li>
                      </ul>
                      <ul>
                        <p>
                          <b>Policies</b>
                        </p>
                        <li>
                          <span className="icon">
                            <FontAwesomeIcon
                              className="fa-check"
                              icon={faCheck}
                            />
                            Breakfast included
                          </span>
                        </li>
                        <li>
                          <span className="icon">
                            <FontAwesomeIcon
                              className="fa-check"
                              icon={faCheck}
                            />
                            Breakfast included
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="room-price-container">
                      <span className="heading">Price</span>
                      <span className="price">
                        <i>
                          <b>₦{numberWithCommas(category.price)}</b>
                        </i>
                      </span>
                      <span>
                        <i>
                          <b style={{ fontSize: "14px" }}>Cost for 1 night</b>
                        </i>
                      </span>
                    </div>
                    <div className="booknow-and-room-number-container">
                      <button
                        onClick={() => {
                          addToCart(category, category.roomType, setCart),
                            getNumberOfRoomsInCategory();
                        }}
                      >
                        BOOK NOW
                      </button>
                      <span style={{ fontSize: "small" }}>
                        <i
                          style={{
                            display:
                              numberOfAvailableRooms.length === 0
                                ? "inline"
                                : "none",
                          }}
                        >
                          Loading....
                        </i>
                        <i
                          onClick={() => getNumberOfRoomsInCategory()}
                          style={{
                            cursor: "pointer",
                            display:
                              numberOfAvailableRooms.length !== 0
                                ? "inline"
                                : "none",
                          }}
                        >
                          {numberOfAvailableRooms[index] === 0
                            ? "click here (available rooms)"
                            : `${numberOfAvailableRooms[index]} of rooms left`}
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: cart.price !== 0 ? "none" : "block",
            }}
            className="empty-cart-message"
          >
            No Item has been added
          </div>
          <div
            style={{
              display: cart.price === 0 ? "none" : "block",
            }}
            className="cart"
          >
            <div className="booking-date-container">
              <div className="check-in">
                <span style={{ fontSize: "12px" }}>CHECK IN</span>
                <div style={{ display: "flex" }}>
                  <span className="day">{checkIn.split("-")[2]}</span>
                  <span className="weekday-and-month">
                    {formatDate(checkIn)}
                  </span>
                </div>
              </div>
              <FontAwesomeIcon
                style={{
                  alignSelf: "center",
                  fontSize: "30px",
                  marginRight: "25px",
                }}
                icon={faAngleRight}
              ></FontAwesomeIcon>
              <div className="check-out">
                <span style={{ fontSize: "12px" }}>CHECK OUT</span>
                <div style={{ display: "flex" }}>
                  <span className="day">{checkOut.split("-")[2]}</span>
                  <span className="weekday-and-month">
                    {formatDate(checkOut)}
                  </span>
                </div>
              </div>
            </div>
            <div className="booked-room-container">
              <div className="booked-room">
                <div>
                  <p>Room</p>
                  <p>Stay</p>
                  <p>
                    Price ({calculateNumberOfDays(checkIn, checkOut)} night(s) x
                    1 room)
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "end" }}>{cart.roomType}</p>
                  <p style={{ textAlign: "end" }}>
                    {calculateNumberOfDays(checkIn, checkOut)} night(s),{" "}
                    {adultNumber} adult(s), {`children: ${childrenNumber}`}
                  </p>
                  <p style={{ textAlign: "end" }}>
                    ₦
                    {numberWithCommas(
                      calculateTotalAmount(
                        calculateNumberOfDays(checkIn, checkOut),
                        cart.price
                      )
                    )}
                  </p>
                </div>
              </div>
              <button onClick={() => removeFromCart(setCart, theCategory)}>
                Remove
              </button>
            </div>
            <div className="total">
              <span>Total</span>
              <span style={{ fontSize: "22px" }}>
                ₦
                {numberWithCommas(
                  calculateTotalAmount(
                    calculateNumberOfDays(checkIn, checkOut),
                    cart.price
                  )
                )}
              </span>
            </div>
            <button className="check-out-button">CHECKOUT</button>
            <PaymentForm
              checkInDate={checkIn}
              checkOutDate={checkOut}
              numberOfAdults={adultNumber}
              numberOfChildren={childrenNumber}
              roomType={cart.roomType}
            ></PaymentForm>
          </div>
        </div>
      </div>
      <GotoTopArrow></GotoTopArrow>
    </>
  );
};

export default CheckAvailability;
