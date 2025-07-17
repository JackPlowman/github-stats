import Home from "../repositories/page";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

test("renders home page", async () => {
  // Act
  const { findByText } = render(<Home />);
  // Assert
  const heading = await findByText(/Repositories/i);
  expect(heading).toBeTruthy();
  // check content
  expect(findByText).toMatchSnapshot();
});
