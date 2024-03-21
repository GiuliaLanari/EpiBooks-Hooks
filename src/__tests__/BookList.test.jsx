//Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.

import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";

describe("user card behavior", () => {
  it("creates 150 cards when the fetch is finished", async () => {
    render(<BookList />);
    const cards = await screen.findAllByTestId("cards");
    console.log(cards);
    expect(cards).toHaveLength(150);
  });
});
