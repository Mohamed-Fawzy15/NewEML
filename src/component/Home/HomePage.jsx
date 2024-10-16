import { useEffect } from "react";
// import { Container } from "react-bootstrap";
import "./HomePageStyle.css";
import productImg from "../imgs/products.png";
// import CardList from "./Card/CardList/CardList";
// import { Container } from "react-bootstrap";
// import ProductCard from "./ProductCard/ProductCard";
import HomeAbout from "./HomeAbout/HomeAbout";
import Menu from "./Menu/Menu";
import NavBar from "../NavBar/NavBar";
import Information from "../Information/Information";
import Footer from "../Footer/Footer";
// import { useNavigate } from "react-router-dom";
import logo from "../imgs/logo2.png";
import UpBtn from "../UpBtn/UpBtn";
import "animate.css";

const HomePage = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homeBody">
      <Information />
      <NavBar />
      <div className="carsoul">
        <div className="HomeImg">
          <img
            src={productImg}
            alt="product"
            className="product animate__animated animate__backInLeft"
          />
        </div>
        <div className="carsoulInfo">
          <img
            src={logo}
            alt=""
            className="carsoulHeader animate__animated animate__backInDown"
          />
          {/* <h1 className="carsoulHeader">ُEML</h1> */}
          <p className="carsoulText animate__animated animate__backInUp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa
            sunt laborum, sed labore debitis inventore tempore dolorum libero,
            magnam eos pariatur rerum reprehenderit porro nemo soluta quaerat
            omnis nostrum?
          </p>
          {/* <button className="carsoulBtn" onClick={() => navigate("/about")}>
            Learn More
          </button> */}
        </div>
      </div>

      <HomeAbout />
      <Menu />
      <UpBtn />
      <Footer />
    </div>
  );
};

export default HomePage;
