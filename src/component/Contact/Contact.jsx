import "./ContactStyle.css";
import NavBar from "../NavBar/NavBar";
import Information from "../Information/Information";
import Footer from "../Footer/Footer";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function ContactUs() {
  return (
    <div className="contact-holder">
      <Information />
      <NavBar />
      <div className="contact">
        <div className="contact-body">
          <div className="contact-head">
            <h1 className="contact-header">
              Contact <span className="contact-span">Us</span>
            </h1>
          </div>

          <div className="contact-data">
            <div className="contact-info">
              <h2 className="contactInfo-head">
                Get in <span className="contactInfo-span">Touch</span>
              </h2>
              <p className="contactInfo-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore magnam cumque ut consectetur velit omnis veritatis
                excepturi quia vel nihil maxime eos dicta illo laudantium labore
                illum a, natus tempora.
              </p>
              <div className="contactInfo-data">
                <div className="contactInfo-email-phone">
                  <div className="contactInfo">
                    <FaPhoneVolume className="contactInfo-icon" />
                    <div className="contactInfo-header">
                      <h4>Phone Number</h4>
                      <p>+18 889 630 111</p>
                    </div>
                  </div>

                  <div className="contactInfo">
                    <MdEmail className="contactInfo-icon" />
                    <div className="contactInfo-header">
                      <h4>Email Address</h4>
                      <p>Info@EML.com</p>
                    </div>
                  </div>
                </div>
                <div className="contactInfo">
                  <IoLocation className="contactInfo-icon" />
                  <div className="contactInfo-header">
                    <h4>Address</h4>
                    <p>Info@EML.com</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <label className="contact-label">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="contact-input"
                />
              </label>
              <label className="contact-label">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="contact-input"
                />
              </label>
              <label className="contact-label">
                <textarea
                  rows="10"
                  cols="50"
                  placeholder="Enter Your Message"
                  className="contact-textarea"
                />
              </label>

              <button className="contact-btn">Send</button>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
