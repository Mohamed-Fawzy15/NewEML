import React from "react";
import "./findUsStyle.css";
import NavBar from "../NavBar/NavBar";
import UpBtn from "../UpBtn/UpBtn";
import Footer from "../Footer/Footer";
import Information from "../Information/Information";
import store1 from "../imgs/store1.jpg";
import store2 from "../imgs/store2.jpg";
import store3 from "../imgs/store3.jpg";
import store4 from "../imgs/store4.jpg";
import store5 from "../imgs/store5.jpg";
import logo from "../imgs/logo2.png";

const FindUs = () => {
  const storesData = [
    {
      img: store1,
      id: 1,
      logo: logo,
      name: "Walmart",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt porro, eius dicta quos cupiditate rem. Aut nihil expedita, eum sapiente est provident ut recusandae veritatis odio, deserunt ab facere!",
    },
    {
      img: store2,
      id: 2,
      logo: logo,
      name: "Carrefour",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt porro, eius dicta quos cupiditate rem. Aut nihil expedita, eum sapiente est provident ut recusandae veritatis odio, deserunt ab facere!",
    },
    {
      img: store3,
      id: 3,
      logo: logo,
      name: "Wegmans",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt porro, eius dicta quos cupiditate rem. Aut nihil expedita, eum sapiente est provident ut recusandae veritatis odio, deserunt ab facere!",
    },
    {
      img: store4,
      logo: logo,
      id: 4,
      name: "Hy-Vee",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt porro, eius dicta quos cupiditate rem. Aut nihil expedita, eum sapiente est provident ut recusandae veritatis odio, deserunt ab facere!",
    },
    {
      img: store5,
      logo: logo,
      id: 5,
      name: "New Seasons",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt porro, eius dicta quos cupiditate rem. Aut nihil expedita, eum sapiente est provident ut recusandae veritatis odio, deserunt ab facere!",
    },
  ];

  return (
    <div className="findUs">
      <Information />
      <NavBar />
      <div className="findus-header">
        <div className="firtsCol">
          <div className="firstStore">
            <p className="store">Walmart</p>
          </div>
          <div className="secondStore">
            <p className="store">Carrefour</p>
          </div>
        </div>
        <div className="secondCol">
          <div className="thirdStore">
            <p className="storeName">Wegmans</p>
          </div>
        </div>

        <div className="thirdCol">
          <div className="forthStore">
            <p className="store">Hy-Vee</p>
          </div>
          <div className="fifthStore">
            <p className="store">New Seasons</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="findUs-holder">
        {storesData?.map((s) => (
          <div className="store-holder" key={s.id}>
            <div>
              <img src={s.img} alt="" className="storeImg" />
            </div>
            <div>
              <div className="StoreInfo">
                <img src={s.logo} alt="" className="storeLogo" />
                <h1>{s.name}</h1>
              </div>
              <p className="storeDesc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
};

export default FindUs;
