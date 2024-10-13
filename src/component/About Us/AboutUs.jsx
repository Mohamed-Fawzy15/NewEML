import "./AboutUsStyle.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Information from "../Information/Information";
import UpBtn from "../UpBtn/UpBtn";
import premium from "../imgs/logo2.png";
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

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

      <div className="founderBio">
        <div className="container">
          <div className="founder-data">
            <div class="founder">
              <div class="founder-photo">
                <img
                  src="/eng-mostafa.jpeg"
                  alt="an image for myslef"
                  class="founder-img"
                />

                <div class="founder-social">
                  <div class="founder-links">
                    <a href="#">
                      <FaFacebook className="founder-icon" />
                    </a>
                    <a href="#">
                      <FaInstagramSquare className="founder-icon" />
                    </a>
                    <a href="#">
                      <FaLinkedin className="founder-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="founder-info">
              <h2>Founder Bio</h2>
              <p>
                Mostafa Lamei is an Egyptian American entrepreneur with a robust
                engineering background and a passion for the global food market.
                After earning his degree in engineering, he pivoted to the
                export and import industry, where he has built a reputation for
                excellence in sourcing and distributing high-quality food
                products. With a keen eye for market trends and a commitment to
                sustainability, Mostafa Lamei has successfully bridged cultural
                and culinary gaps, bringing authentic flavors from the Middle
                East to diverse markets. His journey reflects a blend of
                innovation and tradition, positioning him as a leading figure in
                the food trade.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="vision">
        <div className="container">
          <div className="vision-info">
            <h1 className="vision-header">
              <FaEye className="vision-icon" />
              <span>Vision and Mission</span>
            </h1>
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
