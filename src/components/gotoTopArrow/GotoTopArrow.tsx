import { useEffect, useState } from "react";
import "./GotoTopArrow.css";

const GotoTopArrow = () => {
  const [scrollTop, setScrollTop] = useState(0);

  /**
   * We call addEventListener() in the useEffect hook to register the listener once the component renders as the page loads.
   * We pass an empty dependencies array to useEffect so this registration happens only once.
   * In the cleanup function, we call the removeEventListener() method to unregister the event listener and prevent a memory
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <a
      style={{ display: scrollTop >= 200 ? "block" : "none" }}
      className="arrow"
      href="#"
    >
      <button className="goto-top-arrow">↑</button>
    </a>
  );
};

export default GotoTopArrow;
