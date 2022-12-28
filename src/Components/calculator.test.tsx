import { render } from "@testing-library/react";
import { Calculator } from "./calculator";
import { expect, test } from "@jest/globals";

test("render footer module", async () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});
