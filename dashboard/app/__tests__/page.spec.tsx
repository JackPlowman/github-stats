import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import Home from "../page";

test("renders home page", async () => {
  // Act
  const { findByText } = render(<Home />);
  // Assert
  const heading = await findByText(/GitHub Stats/i);
  expect(heading).toBeTruthy();
  // check content
  expect(findByText).toMatchSnapshot();
});
