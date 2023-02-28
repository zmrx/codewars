import { test, expect } from "vitest";

import { twoSum } from "./index";

type TestCase = [number[], number, number[]];

const testCases: TestCase[] = [
  [[1, 2, 3], 4, [0, 2]],
  [[1234, 5678, 9012], 14690, [1, 2]],
  [[2, 2, 3], 4, [0, 1]],
  [[2, 3, 1], 4, [1, 2]],
];

test("Two_Sum", function () {
  testCases.forEach((testCase: TestCase) => {
    const [arr, target, expected] = testCase;

    expect(twoSum(arr, target)).toStrictEqual(expected);
  });
});
