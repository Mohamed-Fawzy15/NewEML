import { React } from "react";
import CardInfo from "../CardInfo/CardInfo";
import "./CardListStyle.css";
import { Container } from "react-bootstrap";

const CardList = () => {
  return (
    <div className="cardHolder">
      <Container>
        <div>
          <h1 className="catTitle">Why to choose Abu Heiba?</h1>
        </div>
        <div className="card-list">
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </Container>
    </div>
  );
};

export default CardList;
