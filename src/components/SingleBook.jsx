import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import CardText from "react-bootstrap/CardText";

const SingleBook = function (props) {
  return (
    <Col xs={6} md={4} lg={3} xl={2} className=" mt-4">
      <Card
        className={props.asin === props.libro.asin ? " bg-warning  border-3" : " border border-light-subtle"}
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
            <Badge className="ms-auto bg-info">{props.libro.price + " £"}</Badge>
          </CardText>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
