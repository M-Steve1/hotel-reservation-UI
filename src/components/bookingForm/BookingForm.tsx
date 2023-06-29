import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateDate } from "../../utils/validateDate";

interface Props {
  style: CSSModuleClasses;
  roomType: string;
}

const BookingForm = ({ style, roomType }: Props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adultNumber: "",
    childrenNumber: "",
    checkIn: "",
    checkOut: "",
  });
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event: any): void => {
    const target = event.target as HTMLButtonElement;
    const { name, value } = target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const bookingDetails = `${roomType}_${formData.adultNumber}_${formData.childrenNumber}_${formData.checkIn}_${formData.checkOut}`;

  const handleDateValidation = () => {
    const interval = validateDate(formData.checkIn, formData.checkOut);
    if (interval <= 0) {
      alert("Please Pick a Valid Check Out Date");
      setDisabled(true);
    } else if (interval > 0) setDisabled(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(`/check-availability/${bookingDetails}`);
  };

  return (
    <div className={style["form-container"]}>
      <form onSubmit={handleSubmit} className={style["form"]}>
        <div className={style["input-container"]}>
          <input
            required
            value={formData.checkIn}
            placeholder="Check In"
            type="text"
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            name="checkIn"
            id="checkInDate"
            onChange={handleChange}
          />
          <input
            required
            value={formData.checkOut}
            placeholder="Check Out"
            type="text"
            name="checkOut"
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            id="checkOutDate"
            onChange={handleChange}
            onBlurCapture={handleDateValidation}
          />
          <select
            id="adultNumber"
            required
            name="adultNumber"
            value={formData.adultNumber}
            onChange={handleChange}
          >
            <option value="">Adults</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <select
            required
            id="childrenNumber"
            name="childrenNumber"
            value={formData.childrenNumber}
            onChange={handleChange}
          >
            <option value="">Children</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className={style["form-link"]}>
          <button
            disabled={disabled}
            style={{
              backgroundColor: disabled ? "#cccccc" : "#EF812E",
              border: disabled ? "1px solid #999999" : "1px solid EF812E",
              color: disabled ? "color: #666666" : "white",
            }}
            type="submit"
            className={style["form-button"]}
          >
            CHECK AVAILABILITY
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
