import { render, screen } from "@testing-library/react";
import Home from "@/app/(root)/page";

describe("Home", () => {
  it('should have "The Tsakhkadé Hotel" text', () => {
    render(<Home />);

    const myElement = screen.getByText("The Tsakhkadé Hotel");

    expect(myElement).toBeInTheDocument();
  });

  it('should contain the text "Classic"', () => {
    render(<Home />);

    const myElement = screen.getByText(/classic/i);

    expect(myElement).toBeInTheDocument();
  });
});
