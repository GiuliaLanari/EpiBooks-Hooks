import { Component } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import LibriHistory from "../src/data/history.json";

class MySerch extends Component {
  state = {};
  render() {
    return (
      <Form inline onChange={(e) => {}}>
        <Row>
          <Col xs="auto">
            <Form.Control type="text" placeholder="inserici il titolo" className=" mr-sm-2" />
          </Col>
          <Col xs="auto">
            <Button type="submit">Cerca</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default MySerch;
