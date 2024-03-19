import { Component } from "react";

import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWU0ZWFiYWQyODAwMTliZDUyZTgiLCJpYXQiOjE3MTA3NzU4ODYsImV4cCI6MTcxMTk4NTQ4Nn0.QQO5inbMAY6-SH78hrhW8FwlTFKyBlyMq8PA3h0jEFc";

class ComponentArea extends Component {
  state = {
    commenti: [],
  };

  fetchCommenti = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization: "Bearer " + AuthenticationKey,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((commentiArrey) => {
        this.setState({
          commenti: commentiArrey,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchCommenti();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchCommenti();
    }
  }

  render() {
    return (
      <>
        <CommentsList commenti={this.state.commenti} />
        <AddComment asin={this.props.asin} fetch={this.fetchCommenti} />
      </>
    );
  }
}

export default ComponentArea;
