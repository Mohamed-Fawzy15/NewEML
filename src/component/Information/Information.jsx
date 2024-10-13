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
        <h3>+1-347-435-5225</h3>
      </div>

      <div className="mail">
        {/* <MdEmail /> */}
        <img src={emailGif} alt="" className="Gif" />
        <h3>Info@EMLexport.com</h3>
      </div>
    </div>
  );
};

export default Information;
