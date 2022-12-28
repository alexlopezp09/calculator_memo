import { render } from "@testing-library/react";
import { Calculator } from "./calculator";
import { expect, test } from "@jest/globals";
import React from "react";

test("render footer module", async () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});
