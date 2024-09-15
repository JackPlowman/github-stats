import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import About from "../page";

test("renders about page", async () => {
  // Act
  const { findByText } = render(<About />);
  // Assert
  const heading = await findByText(/This is the about page/i);
  expect(heading).toBeTruthy();
  // check content
  expect(findByText).toMatchSnapshot();
});
