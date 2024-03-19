import { Col, Container, Row, Card, Button } from "react-bootstrap";

import items from "../data/fantasy.json";

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="row-gap-4">
        {items.map((libro) => {
          return (
            <Col xs={12} md={4} lg={3} key={libro.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={libro.img} alt={libro.title} className="h-50 object-fit-cover" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text>
                    {libro.asin} | {libro.category} {libro.price} £
                  </Card.Text>
                  <Button variant="info fw-bolder">Aggiungi al Carrello</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
