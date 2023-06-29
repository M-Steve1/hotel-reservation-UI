import { Link } from "react-router-dom";
import "./BookNowContactUsButton.css";

const BookNowContactUsButton = () => {
  return (
    <>
      <Link className="booknow-link" to={"/room"}>
        <button>BOOK NOW!</button>
      </Link>
      <Link className="contactus-link" to={"/contact"}>
        <button>CONTACT US</button>
      </Link>
    </>
  );
};

export default BookNowContactUsButton;
