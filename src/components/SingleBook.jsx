import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import CardText from "react-bootstrap/CardText";
// import CommentArea from "./CommentArea";
class SingleBook extends Component {
  // state = {
  //   selected: false,
  // };

  render() {
    return (
      <Col xs={6} md={4} lg={3} xl={2} className=" mt-4">
        <Card
          className={
            this.props.asin === this.props.libro.asin ? " bg-warning  border-3" : " border border-light-subtle"
          }
          style={{ height: "100%" }}
        >
          <Card.Img
            variant="top"
            src={this.props.libro.img}
            alt={this.props.libro.title}
            className="h-50 object-fit-cover"
            // onClick={() => this.setState({ selected: !this.state.selected })}
            onClick={(e) => this.props.changeCardSelected(this.props.libro.asin)}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title /*style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}*/>
              {this.props.libro.title}
            </Card.Title>
            {/* {this.state.selected === true && <CommentArea asin={this.props.libro.asin} />} */}
            <CardText className="d-flex">
              Price:
              <Badge className="ms-auto bg-info">{this.props.libro.price + " £"}</Badge>
            </CardText>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
