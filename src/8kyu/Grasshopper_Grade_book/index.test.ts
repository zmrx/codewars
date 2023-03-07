import { describe, it, assert, test, expect } from "vitest";

import { getGrade, getGrade2 } from "./index";

describe("grade book", function () {
  it("should return an A", function () {
    assert.equal(getGrade(95, 90, 93), "A");
    assert.equal(getGrade(100, 85, 96), "A");
    assert.equal(getGrade(92, 93, 94), "A");
  });
  it("should return a B", function () {
    assert.equal(getGrade(70, 70, 100), "B");
    assert.equal(getGrade(82, 85, 87), "B");
    assert.equal(getGrade(84, 79, 85), "B");
    assert.equal(getGrade(89, 89, 90), "B");
  });
  it("should return a C", function () {
    assert.equal(getGrade(70, 70, 70), "C");
    assert.equal(getGrade(75, 70, 79), "C");
    assert.equal(getGrade(60, 82, 76), "C");
  });
  it("should return a D", function () {
    assert.equal(getGrade(65, 70, 59), "D");
    assert.equal(getGrade(66, 62, 68), "D");
    assert.equal(getGrade(58, 62, 70), "D");
  });
  it("should return an F", function () {
    assert.equal(getGrade(44, 55, 52), "F");
    assert.equal(getGrade(48, 55, 52), "F");
    assert.equal(getGrade(58, 59, 60), "F");
  });
});

describe("grade book, version 2", () => {
  test("should return an A", () => {
    expect(getGrade2(95, 90, 93)).toBe("A");
    expect(getGrade2(100, 85, 96)).toBe("A");
    expect(getGrade2(92, 93, 94)).toBe("A");
  });

  test("should return a B", () => {
    expect(getGrade2(70, 70, 100)).toBe("B");
    expect(getGrade2(82, 85, 87)).toBe("B");
    expect(getGrade2(84, 79, 85)).toBe("B");
    expect(getGrade2(89, 89, 90)).toBe("B");
  });

  test("should return a C", () => {
    expect(getGrade2(70, 70, 70)).toBe("C");
    expect(getGrade2(75, 70, 79)).toBe("C");
    expect(getGrade2(60, 82, 76)).toBe("C");
  });

  test("should return a D", () => {
    expect(getGrade2(65, 70, 59)).toBe("D");
    expect(getGrade2(66, 62, 68)).toBe("D");
    expect(getGrade2(58, 62, 70)).toBe("D");
  });

  test("should return an F", () => {
    expect(getGrade2(44, 55, 52)).toBe("F");
    expect(getGrade2(48, 55, 52)).toBe("F");
    expect(getGrade2(58, 59, 60)).toBe("F");
  });
});
