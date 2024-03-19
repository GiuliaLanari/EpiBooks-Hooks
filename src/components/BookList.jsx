import { useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const BookList = function (props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [asin, setAsin] = useState("");

  const changeCardSelected = (newSelectedValue) => {
    setAsin(newSelectedValue);
  };

  return (
    <>
      <Row className="justify-content-center row-gap-2 mt-3">
        <Col xs={6} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-center row-gap-2 mt-3">
        <Col xs={12} md={9} className="text-center">
          <Row>
            {props.arreyLibri
              .filter((element) => element.title.toLowerCase().includes(searchQuery))
              .map((element) => (
                <SingleBook libro={element} asin={asin} changeCardSelected={changeCardSelected} key={element.asin} />
              ))}
          </Row>
        </Col>
        <Col xs={12} md={3} className="text-center">
          <div className="sticky-sm-top text-white bg-comment p-2">{asin !== "" && <CommentArea asin={asin} />}</div>
        </Col>
      </Row>
    </>
  );
};

export default BookList;
