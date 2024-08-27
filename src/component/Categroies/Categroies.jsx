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
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
          id: 1,
        },
        {
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
          id: 2,
        },
        {
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
          id: 3,
        },
        {
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Tea",
      id: 2,
      prodcuts: [
        {
          img: "/Imgs/tea/tea.png",
          productName: "Tea",
          productPrice: "99.9$",
          id: 1,
        },
        {
          img: "/Imgs/tea/tea.png",
          productName: "Tea",
          productPrice: "99.9$",
          id: 2,
        },
        {
          img: "/Imgs/tea/tea.png",
          productName: "Tea",
          productPrice: "99.9$",
          id: 3,
        },
        {
          img: "/Imgs/tea/tea.png",
          productName: "Tea",
          productPrice: "99.9$",
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
          img: "/Imgs/chips/chips.png",
          productName: "Chips",
          productPrice: "99.9$",
          id: 1,
        },
        {
          img: "/Imgs/chips/chips.png",
          productName: "Chips",
          productPrice: "99.9$",
          id: 2,
        },
        {
          img: "/Imgs/chips/chips.png",
          productName: "Chips",
          productPrice: "99.9$",
          id: 3,
        },
        {
          img: "/Imgs/chips/chips.png",
          productName: "Chips",
          productPrice: "99.9$",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "Biscuit",
      id: 4,
      prodcuts: [
        {
          img: "/Imgs/biscuit/biscuit.png",
          productName: "Biscuit",
          productPrice: "99.9$",
          id: 1,
        },
        {
          img: "/Imgs/biscuit/biscuit.png",
          productName: "Biscuit",
          productPrice: "99.9$",
          id: 2,
        },
        {
          img: "/Imgs/biscuit/biscuit.png",
          productName: "Biscuit",
          productPrice: "99.9$",
          id: 3,
        },
        {
          img: "/Imgs/biscuit/biscuit.png",
          productName: "Biscuit",
          productPrice: "99.9$",
          id: 4,
        },
      ],
    },
    {
      logo: catLogo,
      catName: "EML",
      id: 5,
      prodcuts: [
        {
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
          id: 1,
        },
        {
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
          id: 2,
        },
        {
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
          id: 3,
        },
        {
          img: product,
          productName: "Splited Beans",
          productPrice: "99.9$",
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
