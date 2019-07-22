import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Home from "Components/Home";

afterEach(cleanup);

test("Home", async () => {
  const { getByTestId } = render(<Home />);

  //nothing to test yet
});
