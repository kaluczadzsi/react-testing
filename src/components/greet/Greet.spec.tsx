import React from "react";
import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

describe("Greet", () => {
  fit("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  xit("renders with a name", () => {
    render(<Greet name="Mike" />);
    const textElement = screen.getByText("Hello Mike");
    expect(textElement).toBeInTheDocument();
  });
});
