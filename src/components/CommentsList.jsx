import ListGroup from "react-bootstrap/ListGroup";

const CommentsList = (props) => {
  return (
    <div>
      <h4>Commenti</h4>
      <ListGroup>
        {props.commenti.map((commento) => (
          <ListGroup.Item key={commento._id}>{commento.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentsList;
