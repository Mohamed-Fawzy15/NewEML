import "./AboutUsStyle.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Information from "../Information/Information";
import vision from "../imgs/vision.png";
import aboutImage from "../imgs/products.png";
import UpBtn from "../UpBtn/UpBtn";
import premium from "../imgs/logo2.png";
import { useEffect } from "react";

const AboutUs = () => {
  const premiumData = [
    {
      img: premium,
      id: 1,
      desc: "Consistent inspections and evaluations to promote ongoing progress",
    },
    {
      img: premium,
      id: 2,
      desc: "Examining all remarks and correspondence obtained from all relevant departments",
    },
    {
      img: premium,
      id: 3,
      desc: "Guaranteeing that suggestions made by end users are taken into account",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <Information />
      <NavBar />
      <div className="about-Header">
        <div className="aboutUsInfo">
          <h1 className="aboutUsHeader">About Us</h1>
          <p className="aboutUsText">Vision and Mission - Message</p>
        </div>
      </div>

      <div className="container">
        <div className="aboutUs-data">
          <div>
            <img src={aboutImage} alt="" className="aboutImg" />
          </div>
          <div className="about-info">
            <h1>We provide you and your family with diffirent type of food</h1>
            <p>
              The Idea of starting EML was born while observing how the world is
              going by in such a fast pace, our days are being shorten by our
              hectic schedules starting from work, school, running errands and
              doing laundry to getting gas; by the time we get home, we barely
              have the energy to stand in the kitchen and prepare a healthy
              nutritious meal starting from scratch. In order to save you time
              in the kitchen and allow you to spend more time with your family
              enjoying the cuisine and less time cooking it, we came up with the
              idea of EML to assist you by providing you with the basic
              fundamentals of all healthy yummy meals!
            </p>
          </div>
        </div>
        <div className="aboutUs-data">
          <div className="about-info">
            <h1>Vision and Mission</h1>
            <p>
              We refuse to stop trying to make things better for you; We
              collaborate closely with our suppliers to create goods that meet
              the demands and specifications of our clients while maintaining an
              exceptionally high level of ingenuity. Through the use of the
              precautionary principle, we run extensive quality control systems
              that are reinforced by multiple onsite inspections and product
              testing. We take pride in taking care of every little detail to
              ensure the quality and safety of our product line inorder to
              guarantee both the satisfaction and health of our customers
            </p>
          </div>
          <div>
            <img src={vision} alt="" className="aboutImg" />
          </div>
        </div>
      </div>

      <div className="premium">
        {premiumData?.map((p) => (
          <div className="premium-holder" key={p.id}>
            <img src={p.img} alt="" className="premiumImg" />
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
};

export default AboutUs;
