import { test, describe, assert } from "vitest";

import { enough } from "./index";

describe("Will_there_be_enough_space tests", () => {
  test("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
