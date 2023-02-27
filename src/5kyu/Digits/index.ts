const createOptions = () =>
  [...Array(10000)]
    .map((_, i) => i)
    .map((item) =>
      [...String(item).padStart(4, "0")].map((str) => Number.parseInt(str, 10))
    )
    .filter((item) => [...new Set(item)].length === 4);

export const optionCompareCounter = (arr1: number[], arr2: number[]) =>
  [...Array(arr1.length > arr2.length ? arr1.length : arr2.length)].reduce(
    (counter, _, index) =>
      arr1[index] === arr2[index] ? counter + 1 : counter,
    0
  );

let options: number[][] = [];

export const game = (matches: number) => {
  if (matches < 0) {
    options = createOptions();
  } else {
    options = options.filter(
      (item) => optionCompareCounter(item, options.at(0)!) === matches
    );
  }

  return options.at(0)!;
};

export default {
  game,
  optionCompareCounter,
};
