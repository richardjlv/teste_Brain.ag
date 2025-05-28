import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from ".";

describe("Select", () => {
  const options = [
    { value: "1", label: "Opção 1" },
    { value: "2", label: "Opção 2" },
  ];

  it("should render the options correctly", () => {
    render(<Select options={options} />);
    expect(screen.getByText("Selecione uma opção")).toBeInTheDocument();
    expect(screen.getByText("Opção 1")).toBeInTheDocument();
    expect(screen.getByText("Opção 2")).toBeInTheDocument();
  });

  it("should call onChange when an option is selected", () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "2" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
