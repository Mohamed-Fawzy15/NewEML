import Card from "react-bootstrap/Card";
import vector1 from "../pngwing.com.png";
import "./CardStyle.css";

function CardInfo() {
  // const navigate = useNavigate();
  return (
    <div className="cardInfoHolder">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={vector1} className="cardImg" />
        <Card.Body>
          <Card.Title className="cardHeader">High In Protein</Card.Title>
          <Card.Text className="cardText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            voluptate et ullam, similique eos voluptas veritatis, doloribus, ad
            unde magnam provident? Alias eius iure quos tempore mollitia fugit.
            Temporibus, architecto.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardInfo;
