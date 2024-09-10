import { cn } from "../utils";
import { expect, it } from "@jest/globals";

it("Should render classnames", () => {
  // Arrange
  const classNames = "flex justify-center items-center";
  const expectedClassNames = "flex justify-center items-center";
  // Act
  const result = cn(classNames);
  // Assert
  expect(result).toBe(expectedClassNames);
});
