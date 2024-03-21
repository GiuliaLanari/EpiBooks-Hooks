//Verifica che il componente CommentArea venga renderizzato correttamente.
//Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.
//Verifica che, cliccando su un libro, il suo bordo cambi colore.

import { fireEvent, render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import LibriHistory from "../data/history.json";

describe("CommentArea render", () => {
  it("component CommentArea is rendered correct", async () => {
    render(<BookList arreyLibri={LibriHistory} />);
    const commenti = screen.queryByTestId("commenti");

    expect(commenti).toBeNull();
  });

  it("filter worked", async () => {
    render(<BookList arreyLibri={LibriHistory} />);
    const searchBook = screen.getByPlaceholderText(/Cerca un libro/i);
    fireEvent.change(searchBook, { target: { value: "21 lessons for the 21st century" } });
    const cards = await screen.findAllByTestId("cards");
    expect(cards).toHaveLength(1);
  });

  it("book color changed on click", async () => {
    render(<BookList />);
    const cards = await screen.findAllByTestId("cards");
    fireEvent.click(cards[0]);

    expect().toBeInTheDocument();
  });
});
