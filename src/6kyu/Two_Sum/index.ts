export const twoSum = (numbers: number[], target: number) =>
  numbers
    .reduce(
      (arr, _, index1) => [
        ...arr,
        ...numbers.map((_, index2) => [index1, index2]),
      ],
      [] as number[][]
    )
    .filter((item) => item[0] !== item[1])
    .filter((item) => numbers[item[0]] + numbers[item[1]] === target)
    .at(0);
