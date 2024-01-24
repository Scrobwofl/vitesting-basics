import { test, expect } from "vitest";
import { sum, subtract, divide, multiply } from "../challenge.js";

test("sum", function () {
  const expected = 2;
  const actual = sum(1, 1);

  expect(actual).toBe(expected);
});
test("subtract", function () {
  const expected = 2;
  const actual = subtract(4, 2);

  expect(actual).toBe(expected);
});
test("divide", function () {
  const expected = 5;
  const actual = divide(10, 2);

  expect(actual).toBe(expected);
});
test("multiply", function () {
  const expected = 30;
  const actual = multiply(10, 3);

  expect(actual).toBe(expected);
});
