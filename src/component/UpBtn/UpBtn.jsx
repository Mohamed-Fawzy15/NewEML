import React from "react";
import "./UpBtnStyle.css"; // Import CSS file for styling
import { useState } from "react";
// import { FaArrowUp } from "react-icons/fa6";
import GifArrow from "../imgs/gifarrow.gif";

const UpBtn = () => {
  const [upBtn, setUpBtn] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  const upTbnDisplay = () => {
    if (window.scrollY >= 80) {
      setUpBtn(true);
    } else {
      setUpBtn(false);
    }
  };

  window.addEventListener("scroll", upTbnDisplay);

  return (
    <button
      className={upBtn ? "scroll-to-top-button" : "onScrollBtn"}
      onClick={scrollToTop}
    >
      <img src={GifArrow} alt="" className="gif" />
    </button>
  );
};

export default UpBtn;
