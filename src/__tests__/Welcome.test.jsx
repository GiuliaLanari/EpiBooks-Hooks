import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

//Verifica che il componente Welcome venga montato correttamente.
describe("verificated that conponent Welcome is fixed", () => {
  it("mounts correctly the Alert at launch", () => {
    render(<Welcome />);
    const alert = screen.getByText("Sconto super conveniente fino al primo Giugno 2024!");

    expect(alert).toBeInTheDocument();
  });
});
