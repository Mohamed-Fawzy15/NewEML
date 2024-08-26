import "./HomeAboutStyle.css";
import aboutimage from "../../imgs/products.png";
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="homeabout-holder">
      <div className="homaAbout-data">
        <div>
          <img src={aboutimage} alt="" className="homeAbout-image" />
        </div>
        <div className="homeAbout-info">
          <h1>We provide you and your family with diffirent type of food</h1>
          <p>
            The Idea of starting EML was born while observing how the world is
            going by in such a fast pace, our days are being shorten by our
            hectic schedules starting from work, school, running errands and
            doing laundry to getting gas; by the time we get home, we barely
            have the energy to stand in the kitchen and prepare a healthy
            nutritious meal starting from scratch. In order to save you time in
            the kitchen and allow you to spend more time with your family
            enjoying the cuisine and less time cooking it, we came up with the
            idea of EML to assist you by providing you with the basic
            fundamentals of all healthy yummy meals!
          </p>
          <button className="homeabout-btn" onClick={() => navigate("/about")}>
            Know More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
