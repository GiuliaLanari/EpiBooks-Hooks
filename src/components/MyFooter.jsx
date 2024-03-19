import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container fluid className="mt-5 text-center bg-dark text-white  ">
      <Row>
        <Col xs={12} md={4} className="mt-4">
          <a className="text-decoration-none text-white " href="./job.html">
            Jobs
          </a>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <a className="text-decoration-none text-white " href="./help.html">
            Hepl center
          </a>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <a className="text-decoration-none text-white " href="./privacy.html">
            Privacy
          </a>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <a className="text-decoration-none text-white " href="./contact.html">
            Contact us
          </a>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <a className="text-decoration-none text-white " href="./cookie.html">
            Cookie Preferences
          </a>
        </Col>
        <Col xs={12} md={4} className="mt-4">
          <a className="text-decoration-none text-white " href="./legal.html">
            Legal Notices
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4 border-top pt-2">
          <p> &copy; EpiBooks</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
