import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-testing-library";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders successfully", () => {
  render(<App />);
});

it("renders hello world", () => {
  const { getByText, queryByText, debug } = render(<App />);

  //debug();

  // getByText(/hello world/i);
  expect(queryByText(/hello world/i)).not.toBeNull();
});
