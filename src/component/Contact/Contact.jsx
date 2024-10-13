import "./ContactStyle.css";
import NavBar from "../NavBar/NavBar";
import Information from "../Information/Information";
import Footer from "../Footer/Footer";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                      <p>+1-347-435-5225</p>
                    </div>
                  </div>

                  <div className="contactInfo">
                    <MdEmail className="contactInfo-icon" />
                    <div className="contactInfo-header">
                      <h4>Email Address</h4>
                      <p>Info@EMLexport.com</p>
                    </div>
                  </div>
                </div>
                <div className="contactInfo">
                  <IoLocation className="contactInfo-icon" />
                  <div className="contactInfo-header">
                    <h4>Address</h4>
                    <p>9 Bay 50th St, Brooklyn, NY 11214, USA</p>
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
          <div className="contact-map">
            <div className="container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.8855206681687!2d-73.98647372431218!3d40.58828227141248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ad387a2f9b%3A0xd396b1779adfaf9c!2s9%20Bay%2050th%20St%2C%20Brooklyn%2C%20NY%2011214%2C%20USA!5e0!3m2!1sen!2seg!4v1727853707112!5m2!1sen!2seg"
                height="500"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
