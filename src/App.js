import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import LibriHistory from "../src/data/history.json";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <SingleBook libro={LibriHistory[0]} /> */}
      {/* <AllTheBooks /> */}
      <Container fluid>
        <BookList arreyLibri={LibriHistory} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
