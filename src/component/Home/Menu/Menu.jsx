import "./MenuStyle.css";
import productImg from "../../imgs/abuheiba.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const menuProduct = [
    {
      id: 1,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
    {
      id: 2,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
    {
      id: 3,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
    {
      id: 4,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
  ];

  return (
    <div className="menuHolder">
      <div className="menu-data">
        <h1>Our Product</h1>
        <div className="menuContainer">
          {menuProduct?.map((m) => (
            <div className="menuCard" key={m.id}>
              <img src={m.img} alt="" className="productImg" />
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
              <button onClick={() => navigate("/categroies")}>Discover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Menu;
