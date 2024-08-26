import "./AbuHeibaStyle.css";
import Information from "../../Information/Information";
import NavBar from "../../NavBar/NavBar";
import UpBtn from "../../UpBtn/UpBtn";
import Footer from "../../Footer/Footer";
import Abuheiba from "../AbuHeiba.json";
import Tea from "../tea.json";
import Chips from "../chips.json";
import Biscuit from "../biscuit.json";

import { useParams } from "react-router-dom";

const AbuHeiba = () => {
  const { id } = useParams();
  console.log(id);

  let menuProducts;

  if (id === "1") {
    menuProducts = Abuheiba;
  } else if (id === "2") {
    menuProducts = Tea;
  } else if (id === "3") {
    menuProducts = Chips;
  } else if (id === "4") {
    menuProducts = Biscuit;
  } else if (!id) {
    menuProducts("/about");
  }

  return (
    <div className="Abu-heiba">
      <Information />
      <NavBar />
      {menuProducts.map((p) => (
        <div className="company-info" key={p.id}>
          <div className="company-header">
            <div>
              <img src={p.image} alt="Company Logo" className="companyLogo" />
            </div>
            <div className="companyData">
              <h1 className="companyDesc">{p.categories}</h1>
              <p className="companyDesc">{p.desc}</p>
            </div>
          </div>
          {/* <div>
            <img src={p.images} alt="Products" className="companyImg" />
          </div> */}
        </div>
      ))}

      <div className="product-holder">
        {menuProducts.map((product) =>
          product.pro.map((proItem) => (
            <div className="productCard" key={proItem.id}>
              <img src={proItem.img} alt={proItem.name} className="pro-img" />
              <h3 className="productInfo">{proItem.name}</h3>
              <h3 className="productInfo">{proItem.price}</h3>
              <p className="productInfo">{proItem.desc}</p>
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
