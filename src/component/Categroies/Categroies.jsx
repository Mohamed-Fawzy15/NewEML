import "./CategroiesStyle.css";
import Information from "../Information/Information";
import NavBar from "../NavBar/NavBar";
import UpBtn from "../UpBtn/UpBtn";
import Footer from "../Footer/Footer";
import catLogo from "../imgs/logo2.png";
import product from "../imgs/abuheiba.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "animate.css";
import { useRef } from "react";
import { useIsVisible } from "react-is-visible";

const Categroies = () => {
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const isVisible = useIsVisible(nodeRef);
  console.log(isVisible);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CategoriesData = [
    {
      logo: catLogo,
      catName: "Abu Heiba",
      id: 1,
      prodcuts: [
        {
          img: "/Imgs/abuheiba/blackeyedpeas.webp",
          productName: "Black Eyed Peas",
          id: 1,
        },
        {
          img: "/Imgs/abuheiba/brownlentils.webp",
          productName: "Brown Lentils",
          id: 2,
        },
        {
          img: "/Imgs/abuheiba/chickpeas.webp",
          productName: "Chickpeas",
          id: 3,
        },
        {
          img: "/Imgs/abuheiba/favabeansCan.webp",
          productName: "Fava Beans Can",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Juices",
      id: 2,
      prodcuts: [
        {
          img: "/Imgs/juices/almarai-apple.webp",
          productName: "Almarai Apple",
          id: 1,
        },
        {
          img: "/Imgs/juices/fayrouz-apple.webp",
          productName: "Fayrouz Apple",
          id: 2,
        },
        {
          img: "/Imgs/juices/schweppes-goldPineapple.webp",
          productName: "Gold Pineapple",
          id: 3,
        },
        {
          img: "/Imgs/juices/schweppes-pomgranate.webp",
          productName: "Pomgranate",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Chips",
      id: 3,
      prodcuts: [
        {
          img: "/Imgs/chips/cheese.webp",
          productName: "Cheese",
          id: 1,
        },
        {
          img: "/Imgs/chips/kebabback.webp",
          productName: "Kebabback",
          id: 2,
        },
        {
          img: "/Imgs/chips/Sweet chili.webp",
          productName: "Sweet Chili",
          id: 3,
        },
        {
          img: "/Imgs/chips/tomato.webp",
          productName: "Tomato",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Pasta",
      id: 4,
      prodcuts: [
        {
          img: "/Imgs/regina/lametna-penne.webp",
          productName: "Penne",
          id: 1,
        },
        {
          img: "/Imgs/regina/lametna-RIngs.webp",
          productName: "Rings",
          id: 2,
        },
        {
          img: "/Imgs/regina/lametna-vermicelli.webp",
          productName: "Vermicelli",
          id: 3,
        },
        {
          img: "/Imgs/regina/lametna-rice.webp",
          productName: "Rice",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Biscuit",
      id: 5,
      prodcuts: [
        {
          img: "/Imgs/biscuit/elshamadan-katakito.webp",
          productName: "Katakito",
          id: 1,
        },
        {
          img: "/Imgs/biscuit/elshamadan-choco.webp",
          productName: "Elshamadan Chocolate",
          id: 2,
        },
        {
          img: "/Imgs/biscuit/elshamadan-biscoWhite.webp",
          productName: "Bisco Wafers",
          id: 3,
        },
        {
          img: "/Imgs/biscuit/ulker-hazelnut.webp",
          productName: "Ulker Hazelnut",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Cheese",
      id: 6,
      prodcuts: [
        {
          img: "/Imgs/cheese/almarai-fetaCheese.webp",
          productName: "Almarai Feta Cheese",
          id: 1,
        },
        {
          img: "/Imgs/cheese/panda-fetaCheese.webp",
          productName: "Panda Feta Cheese",
          id: 2,
        },
        {
          img: "/Imgs/cheese/panda-istanbully.webp",
          productName: "Panda Istanbully",
          id: 3,
        },
        {
          img: "/Imgs/cheese/panda-olive.webp",
          productName: "Panda Olive Cheese",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Spices",
      id: 7,
      prodcuts: [
        {
          img: "/Imgs/maggi/maggi-chiken.webp",
          productName: "Maggi Chicken",
          id: 1,
        },
        {
          img: "/Imgs/maggi/maggi-volaille.webp",
          productName: "Maggi Volailla",
          id: 2,
        },
        {
          img: "/Imgs/maggi/spysi-beefBurger.webp",
          productName: "Spysi Beaf Burger",
          id: 3,
        },
        {
          img: "/Imgs/maggi/spysi-grilledChicken.webp",
          productName: "Spysi Grilled Chicken",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Middle Eastern Desserts",
      id: 8,
      prodcuts: [
        {
          img: "/Imgs/7lwElsham/7lwElsham-basbousa.webp",
          productName: "Basbousa",
          id: 1,
        },
        {
          img: "/Imgs/7lwElsham/elrashidi-blueberryJam.webp",
          productName: "BlueBerry Jam",
          id: 2,
        },
        {
          img: "/Imgs/7lwElsham/elrashidi-raspberryJam.webp",
          productName: "Resperry Jam",
          id: 3,
        },
        {
          img: "/Imgs/7lwElsham/elrashidi-halwaFosd2.webp",
          productName: "Halawa With Pistachios",
          id: 4,
        },
      ],
    },
  ];

  useEffect(() => {
    if (isVisible) {
      nodeRef.current.classList.remove(
        "animate__animated",
        "animate__backInDown"
      );
      void nodeRef.current.offsetWidth; // Trigger reflow
      nodeRef.current.classList.add("animate__animated", "animate__backInDown");
    }
  }, [isVisible]);
  return (
    <div className="categories">
      <Information />
      <NavBar />
      <div className="categories-holder">
        {CategoriesData?.map((c) => (
          <div className="category" key={c.id}>
            <img
              src={c.logo}
              alt=""
              className="category-logo animate__animated animate__bounceInLeft"
            />
            <h1>{c.catName}</h1>
            <div className="category-product">
              {c.prodcuts.map((catproduct) => (
                <div key={catproduct.id} className="catPro">
                  <img
                    src={catproduct.img}
                    alt=""
                    className="product-logo animate__animated animate__bounce"
                  />
                  <h2>{catproduct.productName}</h2>
                  <h3>{catproduct.productPrice}</h3>
                </div>
              ))}
            </div>
            <div className="btn">
              <button
                className="catBtn"
                onClick={() => navigate(`/categroies/${c.id}`)}
              >
                Show More
              </button>
            </div>

            <hr />
          </div>
        ))}
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
};

export default Categroies;
