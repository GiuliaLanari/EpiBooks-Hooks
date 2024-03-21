//Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.

import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import LibriHistory from "../data/history.json";

describe("user card behavior", () => {
  it("creates 150 cards when the fetch is finished", async () => {
    render(<BookList arreyLibri={LibriHistory} />);
    const cards = await screen.findAllByTestId("cards");

    expect(cards).toHaveLength(150);
  });
});
