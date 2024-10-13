import "./AbuHeibaStyle.css";
import Information from "../../Information/Information";
import NavBar from "../../NavBar/NavBar";
import UpBtn from "../../UpBtn/UpBtn";
import Footer from "../../Footer/Footer";
import Abuheiba from "../AbuHeiba.json";
import Pasta from "../pasta.json";
import Chips from "../chips.json";
import Biscuit from "../biscuit.json";
import Juices from "../juices.json";
import Cheese from "../cheese.json";
import Spices from "../spices.json";
import middleDesert from "../MED.json";
import { useEffect } from "react";
import "animate.css";
import { useParams } from "react-router-dom";

const AbuHeiba = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let menuProducts;

  if (id === "1") {
    menuProducts = Abuheiba;
  } else if (id === "2") {
    menuProducts = Juices;
  } else if (id === "3") {
    menuProducts = Chips;
  } else if (id === "4") {
    menuProducts = Pasta;
  } else if (id === "5") {
    menuProducts = Biscuit;
  } else if (id === "6") {
    menuProducts = Cheese;
  } else if (id === "7") {
    menuProducts = Spices;
  } else if (id === "8") {
    menuProducts = middleDesert;
  }else if (!id) {
    menuProducts("/about");
  }

  return (
    <div className="Abu-heiba">
      <Information />
      <NavBar />
      {menuProducts.map((p) => (
        <div className="company-info" key={p.id}>
            <div className="companyData">
              <h1 className="companyDesc">{p.categories}</h1>
            </div>
        </div>
      ))}

      <div className="product-holder">
        {menuProducts.map((product) =>
          product.pro.map((proItem) => (
            <div className="productCard" key={proItem.id}>
              <img src={proItem.img} alt={proItem.name} className="pro-img animate__animated animate__rubberBand" />
              <h3 className="productInfo">{proItem.name}</h3>
            </div>
          ))
        )}
      </div>

      <UpBtn />
      <Footer />
    </div>
  );
};

export default AbuHeiba;
