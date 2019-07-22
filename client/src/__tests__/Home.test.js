import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Home from "../components/Home";

afterEach(cleanup);

test("Home", async () => {
  const { getByTestId } = render(<Home />);

  //nothing to test yet
});
