type twoSumResultItem = [number, number];

/**
 * 1. генерируем новый массив, со всеми возможными вариантами.
 * 2. фильтруем варианты с разными значениями (условие задачи).
 * 3. фильтруем варианты, суммирование которых дает нужный результат.
 * 4. возвращаем первый результат.
 */
export const twoSum = (numbers: number[], target: number) =>
  numbers
    .reduce(
      (arr, _, index1) =>
        [
          ...arr,
          ...numbers.map((_, index2) => [index1, index2]),
        ] as twoSumResultItem[],

      [] as twoSumResultItem[]
    )
    .filter((item) => item[0] !== item[1])
    .filter((item) => numbers[item[0]] + numbers[item[1]] === target)
    .at(0);
