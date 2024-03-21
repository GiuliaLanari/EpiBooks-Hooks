//Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.

import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import LibriHistory from "../data/history.json";
// import App from "../App";

describe("user card behavior", () => {
  it("creates 150 cards when the fetch is finished", async () => {
    render(<BookList arreyLibri={LibriHistory} />);
    const cards = await screen.findAllByTestId("card");

    expect(cards).toHaveLength(LibriHistory.length);
  });
  it("component CommentArea is rendered correct", async () => {
    render(<BookList arreyLibri={LibriHistory} />);
    const commenti = screen.queryByTestId("commenti");

    expect(commenti).toBeNull();
  });
  it("filter worked", async () => {
    render(<BookList arreyLibri={LibriHistory} />);
    const searchBook = screen.getByPlaceholderText(/Cerca un libro/i);
    fireEvent.change(searchBook, { target: { value: "21 lessons for the 21st century" } });
    const cards = await screen.findAllByTestId("card");
    expect(cards).toHaveLength(1);
  });

  // it("renders CommentArea component", () => {
  //   render(<App />);
  //   const inputAddComment = screen.getAllByPlaceholderText(/inserisci qui il testo/i);
  //   expect(inputAddComment).toBeInTheDocument();
  // });
});
