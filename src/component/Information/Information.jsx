import "./InformationStyle.css";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
import phoneGif from "../imgs/phone.gif";
import emailGif from "../imgs/mail.gif";

const Information = () => {
  return (
    <div className="info-header">
      <div className="phone">
        {/* <FaPhoneAlt /> */}
        <img src={phoneGif} alt="" className="Gif" />
        <h3>+18 889 630 111</h3>
      </div>

      <div className="mail">
        {/* <MdEmail /> */}
        <img src={emailGif} alt="" className="Gif" />
        <h3>Info@EML.com</h3>
      </div>
    </div>
  );
};

export default Information;
