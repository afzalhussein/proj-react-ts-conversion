import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

test("renders children", () => {
    const { getByText } = render(<Counter>42</Counter>);
    const counterElement = getByText(/42/i);
    expect(counterElement).toBeInTheDocument();
});

test("applies className prop", () => {
    const { getByText } = render(<Counter className="my-counter">Test</Counter>);
    const counterDiv = getByText("Test");
    expect(counterDiv).toHaveClass("my-counter");
});