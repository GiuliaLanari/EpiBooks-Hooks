import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWU0ZWFiYWQyODAwMTliZDUyZTgiLCJpYXQiOjE3MTA3NzU4ODYsImV4cCI6MTcxMTk4NTQ4Nn0.QQO5inbMAY6-SH78hrhW8FwlTFKyBlyMq8PA3h0jEFc";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      });
    }
  }

  addCommento = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        Authorization: "Bearer " + AuthenticationKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Commento pubblicato!");
          this.props.fetch();
          this.setState({
            comment: {
              comment: "",
              rate: 1,
              elementId: this.props.asin,
            },
          });
        } else {
          window.alert("Riprova più tardi!");
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addCommento}>
          <Form.Group className="mb-3">
            <Form.Label>Aggiungi il tuo commento:</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              onChange={(e) => {
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                });
              }}
              value={this.state.comment.comment}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Voto?</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                });
              }}
              value={this.state.comment.rate}
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
  }
}

export default AddComment;
