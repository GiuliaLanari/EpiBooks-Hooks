import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWU0ZWFiYWQyODAwMTliZDUyZTgiLCJpYXQiOjE3MTA3NzU4ODYsImV4cCI6MTcxMTk4NTQ4Nn0.QQO5inbMAY6-SH78hrhW8FwlTFKyBlyMq8PA3h0jEFc";

const AddComment = function (props) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [elementId, setElementId] = useState(props.asin);

  useEffect(() => {
    setElementId(props.asin);
  }, [props.asin]);

  const addCommento = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify({ comment, rate, elementId }),
      headers: {
        Authorization: "Bearer " + AuthenticationKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Commento pubblicato!");
          props.fetch();
          setComment("");
          setRate(1);
          setElementId(props.asin);
        } else {
          window.alert("Riprova più tardi!");
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  return (
    <>
      <Form onSubmit={addCommento}>
        <Form.Group className="mb-3">
          <Form.Label>Aggiungi il tuo commento:</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Voto?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setRate(e.target.value);
            }}
            value={rate}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" type="submit">
          Pubblica
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
