import { isEqual } from "lodash";

import DigitsGame from "./5kyu/Digits";

import MexicanWave from "./6kyu/Mexican_Wave";

/**
 * DigitsGame
 */
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

/**
 * MexicanWave
 */
(() => {
  console.log('MexicanWave',  MexicanWave.wave('two words'));
})()
