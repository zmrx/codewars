export const wave = (str: string) =>
  [...str]
    .reduce(
      (result, _, index, arr) => [
        ...result,
        arr
          .map((item, i) => (i === index ? item.toLocaleUpperCase() : item))
          .join(""),
      ],
      [] as string[]
    )
    .filter((item) => item !== str);

export default {
  wave,
};
