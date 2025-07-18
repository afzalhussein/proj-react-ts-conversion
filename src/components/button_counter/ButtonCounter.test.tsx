import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";

test("renders children", () => {
    render(<ButtonCounter handleClick={() => {}}>Test Button</ButtonCounter>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
});

test("calls handleClick when clicked", () => {
  const handleClick = jest.fn();
    render(<ButtonCounter handleClick={handleClick}>Click Me</ButtonCounter>);
    const button = screen.getByText(/Click me/i)
    fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
