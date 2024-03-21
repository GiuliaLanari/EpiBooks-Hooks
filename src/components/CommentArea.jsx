import { useState, useEffect } from "react";

import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWU0ZWFiYWQyODAwMTliZDUyZTgiLCJpYXQiOjE3MTA3NzU4ODYsImV4cCI6MTcxMTk4NTQ4Nn0.QQO5inbMAY6-SH78hrhW8FwlTFKyBlyMq8PA3h0jEFc";

const ComponentArea = function (props) {
  const [commenti, setCommenti] = useState([]);

  const fetchCommenti = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
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
        setCommenti(commentiArrey);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
  useEffect(() => {
    fetchCommenti();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  return (
    <div data-testid="commenti">
      <CommentsList commenti={commenti} />
      <AddComment asin={props.asin} fetch={fetchCommenti} />
    </div>
  );
};

export default ComponentArea;
