import React from "react";
import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders with a name", () => {
    render(<Greet name="Mike" />);
    const textElement = screen.getByText("Hello Mike");
    expect(textElement).toBeInTheDocument();
  });
});
