import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Welcome = function () {
  return (
    <Row className="justify-content-around">
      <Col xs={6} className="justify-content-center">
        {
          <Alert className="m-3 " id="bg-alert">
            Sconto super conveniente fino al primo Giugno 2024!
          </Alert>
        }
        <h2 className="text-center my-4">Shop Online</h2>
      </Col>
    </Row>
  );
};

export default Welcome;
