import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Body from "./components/body/Body";
import { useEffect, useState } from "react";
import api from "./api/apiConfig";
import RoomDetail from "./components/roomDetail/RoomDetail";
import Rooms from "./components/rooms/Rooms";
import CheckAvailability from "./components/checkAvailability/CheckAvailability";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  const [roomCategories, setRoomCategories] = useState([]);

  const getRoomCategories = async () => {
    try {
      const response = await api.get("/api/v1/category/categories");
      setRoomCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRoom = async () => {
    try {
      await api.get("/api/v1/room/update-rooms");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRoomCategories();
    updateRoom();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<Body roomCategories={roomCategories} />}
          ></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route
            path="/stephen-accommodation"
            element={<Rooms roomCategories={roomCategories} />}
          ></Route>
          <Route path="/room_type/:roomType" element={<RoomDetail />}></Route>
          <Route
            path="/check-availability/:bookingDetails"
            element={<CheckAvailability roomCategories={roomCategories} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
