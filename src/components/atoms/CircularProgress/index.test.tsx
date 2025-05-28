import React from "react";
import { render, screen } from "@testing-library/react";
import CircularProgress from ".";

describe("CircularProgress", () => {
  it("should render the component with progressbar role", () => {
    render(<CircularProgress />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should accept size and color props", () => {
    render(<CircularProgress size={60} color="#123456" />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
