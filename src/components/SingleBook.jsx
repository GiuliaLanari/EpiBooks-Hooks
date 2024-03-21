import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import CardText from "react-bootstrap/CardText";

const SingleBook = function (props) {
  return (
    <Col xs={12} md={4} lg={3} xl={3} className=" mt-4" data-testid="card">
      <Card
        className={
          props.asin === props.libro.asin ? " bg-dark bg-gradient text-white  border-3" : " border border-light-subtle"
        }
        style={{ height: "100%" }}
      >
        <Card.Img
          variant="top"
          src={props.libro.img}
          alt={props.libro.title}
          className="h-50 object-fit-cover"
          onClick={(e) => props.changeCardSelected(props.libro.asin)}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title /*style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}*/>
            {props.libro.title}
          </Card.Title>

          <CardText className="d-flex">
            Price:
            <span className="ms-auto bg-badge">{props.libro.price + " £"}</span>
          </CardText>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
