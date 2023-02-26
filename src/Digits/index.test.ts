import { it, describe, assert } from "vitest";

import { game } from "./index";

describe("Test game", function () {
  const answer = [1, 2, 3, 4];

  it(`Searching digits are ${answer}`, function () {
    let digits;
    let times = 0;
    let matches = -1;

    while (times < 111 && matches < 4) {
      console.log("digits", digits, matches);

      digits = game(matches);

      matches = 0;

      for (let i = 0; i < 4; i += 1) {
        if (digits[i] == answer[i]) {
          matches++;
        }
      }

      times += 1;
    }

    assert.ok(
      times < 17,
      times > 100
        ? `More than 100 calls, 16 calls maximum! Your last digits were ${digits}`
        : `${times} calls, 16 calls maximum!`
    );
  });

  const answer2 = [8, 0, 5, 2];

  it(`Searching digits are ${answer2}`, function () {
    let digits;
    let times = 0;
    let matches = -1;

    while (times < 111 && matches < 4) {
      console.log("digits", digits, matches);

      digits = game(matches);

      matches = 0;

      for (let i = 0; i < 4; i += 1) {
        if (digits[i] == answer2[i]) {
          matches++;
        }
      }

      times++;
    }

    assert.ok(
      times < 17,
      times > 100
        ? `More than 100 calls, 16 calls maximum! Your last digits were ${digits}`
        : `${times} calls, 16 calls maximum!`
    );
  });
});
