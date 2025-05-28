import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from ".";

describe("Card", () => {
  it("should render the content correctly", () => {
    render(<Card>Conteúdo do Card</Card>);
    expect(screen.getByText("Conteúdo do Card")).toBeInTheDocument();
  });

  it("should render header and footer when provided", () => {
    render(
      <Card header={<span>Header</span>} footer={<span>Footer</span>}>
        Conteúdo
      </Card>
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Clique</Card>);
    fireEvent.click(screen.getByText("Clique"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
