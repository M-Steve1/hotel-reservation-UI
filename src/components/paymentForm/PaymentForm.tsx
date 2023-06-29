import { useState } from "react";
import "../paymentForm/PaymentForm.css";
import api from "../../api/apiConfig";
import Room from "../../models/Room";
import Reservation from "../../models/Reservation";

interface Props {
  checkInDate: string;
  checkOutDate: string;
  numberOfAdults: number;
  numberOfChildren: number;
  roomType: string;
}

const PaymentForm = ({
  checkInDate,
  checkOutDate,
  numberOfAdults,
  numberOfChildren,
  roomType,
}: Props) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
  });

  const [disabled, setDisabled] = useState(true);

  const handleFormValidation = () => {
    if (
      formData.fullName !== "" &&
      formData.email !== "" &&
      formData.cardNumber !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = (event: any) => {
    const target = event.target as HTMLButtonElement;
    if (target) {
      const name = target.name;
      const value = target.value;

      setFormData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    }
  };

  const findARoom = async (): Promise<Room[]> => {
    const response = await api.post(
      "/api/v1/room/available-rooms-in-category",
      {
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        roomType: roomType,
      }
    );

    return response.data;
  };
  const reserveARoom = async (roomNumber: string): Promise<Reservation> => {
    const response = await api.post("/api/v1/reservation/create", {
      email: formData.email,
      roomNumber: roomNumber,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      numberOfAdults: numberOfAdults,
      numberOfChildren: numberOfChildren,
    });

    return response.data;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setDisabled(true);
    const rooms = await findARoom();

    if (rooms.length > 0) {
      const room = rooms[0];
      await reserveARoom(room.roomNumber);
      alert(
        `Room with Room Number: ${room.roomNumber} Has Been Reserved Successfully`
      );
    } else {
      alert("No room available in this category");
    }
  };

  return (
    <>
      <form
        onFocus={handleFormValidation}
        onBlur={handleFormValidation}
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="inputs-container">
          <input
            id="fullName"
            onChange={handleChange}
            value={formData.fullName}
            required
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
          <input
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            id="cardNumber"
            onChange={handleChange}
            value={formData.cardNumber}
            style={{ marginBottom: "0px" }}
            required
            type="text"
            name="cardNumber"
            placeholder="Card Number"
          />
        </div>
        <button
          disabled={disabled}
          style={{
            backgroundColor: disabled ? "#cccccc" : "#EF812E",
            border: disabled ? "1px solid #999999" : "1px solid EF812E",
            color: disabled ? "color: #666666" : "white",
          }}
          className="payment-form-button"
          type="submit"
        >
          Make Payment
        </button>
      </form>
    </>
  );
};

export default PaymentForm;
