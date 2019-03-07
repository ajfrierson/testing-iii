// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("CONTROLS", () => {
  it("Render buttons to toggle.", () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);

    expect(lockButton).toHaveTextContent(/lock gate/i);
    expect(closeButton).toHaveTextContent(/close gate/i);
  });

  it("Show open button when closed button is clicked.", () => {
    const { getByText } = render(<Controls closed={true} locked={false} />);
    const closedButton = getByText(/close gate/i);

    fireEvent.click(closedButton);

    const openedButton = getByText(/open gate/i);
    expect(openedButton).toHaveTextContent(/open gate/i);
  });

  it("Show closed button when open button is clicked.", () => {
    const { getByText } = render(<Controls />);
    const openedButton = getByText(/open gate/i);

    fireEvent.click(openedButton);

    const closedButton = getByText(/close gate/i);
    expect(closedButton).toHaveTextContent(/close gate/i);
  });
})