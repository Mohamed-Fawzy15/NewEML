import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../imgs/abuheiba.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productCardStyle.css";
import { Container } from "react-bootstrap";

const ProductCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="homeProduct-holder">
      <Container className="container">
        <h1 className="homeProduct-header">Our Product</h1>
        <p className="homeProduct-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptastemporibus quisquam nam,quae vitae eius hic aut! Dignissimos
          quos,
        </p>
        <p className="homeProduct-text">
          tempora voluptate iusto, aperiam cum, sit praesentium eum voluptas
          corporis perferendis.
        </p>
        <Carousel responsive={responsive}>
          <div className="productCard-holder">
            <Card className="homeProduct-container">
              <Card.Img variant="top" src={img1} className="productImg" />
              <Card.Body>
                <Card.Title className="homeProduct-card">
                  Splited Beans
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&aposs content.
                </Card.Text>
                <Button variant="primary" className="homeProduct-btn">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="productCard-holder">
            <Card className="homeProduct-container">
              <Card.Img variant="top" src={img1} className="productImg" />
              <Card.Body>
                <Card.Title className="homeProduct-card">
                  Splited Beans
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&aposs content.
                </Card.Text>
                <Button variant="primary" className="homeProduct-btn">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="productCard-holder">
            <Card className="homeProduct-container">
              <Card.Img variant="top" src={img1} className="productImg" />
              <Card.Body>
                <Card.Title className="homeProduct-card">
                  Splited Beans
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&aposs content.
                </Card.Text>
                <Button variant="primary" className="homeProduct-btn">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="productCard-holder">
            <Card className="homeProduct-container">
              <Card.Img variant="top" src={img1} className="productImg" />
              <Card.Body>
                <Card.Title className="homeProduct-card">
                  Splited Beans
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&aposs content.
                </Card.Text>
                <Button variant="primary" className="homeProduct-btn">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="productCard-holder">
            <Card className="homeProduct-container">
              <Card.Img variant="top" src={img1} className="productImg" />
              <Card.Body>
                <Card.Title className="homeProduct-card">
                  Splited Beans
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&aposs content.
                </Card.Text>
                <Button variant="primary" className="homeProduct-btn">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="productCard-holder">
            <Card className="homeProduct-container">
              <Card.Img variant="top" src={img1} className="productImg" />
              <Card.Body>
                <Card.Title className="homeProduct-card">
                  Splited Beans
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&aposs content.
                </Card.Text>
                <Button variant="primary" className="homeProduct-btn">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="productCard-holder">
            <Card className="homeProduct-container">
              <Card.Img variant="top" src={img1} className="productImg" />
              <Card.Body>
                <Card.Title className="homeProduct-card">
                  Splited Beans
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&aposs content.
                </Card.Text>
                <Button variant="primary" className="homeProduct-btn">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default ProductCard;
