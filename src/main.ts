import { isEqual } from "lodash";

import DigitsGame from "./Digits";

(function digitsGame() {
  let counter = 0;
  let matches = -1;
  const answer2 = [8, 0, 5, 2];

  while (counter < 100) {
    const result = DigitsGame.game(matches);

    matches = DigitsGame.optionCompareCounter(answer2, result);

    console.log("game Digits", result, matches);

    if (isEqual(answer2, result)) {
      console.log(`game Digits, result finded in ${counter} steps`);

      return;
    }

    counter += 1;
  }
})();
