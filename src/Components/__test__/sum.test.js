import { sum } from "../sum";

test("Add the two numbers", () => {
  const result = sum(3, 4);
  //Assertion to be included
  expect(result).toBe(7);
});
