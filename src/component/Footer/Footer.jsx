import "./FooterStyle.css";
import { NavLink } from "react-router-dom";
import logo from "../imgs/white logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Picture1 from "../imgs/pic1.jpeg";
import Picture2 from "../imgs/pic2.jpeg";
import Picture3 from "../imgs/pic3.jpeg";
import Picture4 from "../imgs/pic4.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const foodImg = [
    {
      id: 1,
      image: Picture1,
    },
    {
      id: 2,
      image: Picture2,
    },
    {
      id: 3,
      image: Picture3,
    },
    {
      id: 4,
      image: Picture4,
    },
  ];
  return (
    <div className="footer">
      <div className="footer-holder">
        <div className="firstCard">
          <img src={logo} alt="" className="logoFooterImg" />
          <p className="footerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa
            excepturi hic optio ipsum voluptatum atque mollitia velit.
            Necessitatibus nesciunt exercitationem adipisci laborum quis nihil
            pariatur dolore, atque quas aperiam?
          </p>
          <div className="socialmedia">
            <a href="https://www.linkedin.com/company/city-farm-usa/">
              <FaFacebookSquare className="socialImg" />
            </a>
            <a href="https://www.facebook.com/cityfarmusa">
              <FaInstagramSquare className="socialImg" />
            </a>
            <a href="https://twitter.com/cityfarmusa">
              <FaLinkedin className="socialImg" />
            </a>
          </div>
        </div>

        <div className="secondCard">
          <ul>
            <li className="footer-menu">
              <NavLink to="/" className="footer-links">
                Home
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/about" className="footer-links">
                About
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/categroies" className="footer-links">
                Categories
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/" className="footer-links">
                Media
              </NavLink>
            </li>
            <li className="footer-menu">
              <NavLink to="/" className="footer-links">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="thirdCard">
          <div className="pic-holder">
            {foodImg?.map((r) => (
              <div className="foodImage" key={r.id}>
                <img src={r.image} alt="" className="footerImage" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="CopyRight">
        <p>Copyright © 1964 - {currentYear} EML- All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
