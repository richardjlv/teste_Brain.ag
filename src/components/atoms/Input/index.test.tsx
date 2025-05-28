import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  it("should render input with placeholder", () => {
    render(<Input placeholder="Digite aqui" />);
    expect(screen.getByPlaceholderText("Digite aqui")).toBeInTheDocument();
  });

  it("should accept and display the passed value", () => {
    render(<Input value="valor" onChange={() => {}} />);
    expect(screen.getByDisplayValue("valor")).toBeInTheDocument();
  });

  it("should call onChange when typing", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "novo" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
