const averageOfNumArray = (arg: number[]) =>
  arg.reduce((summ, item) => summ + item, 0) / arg.length;

const grade = (value: number) => {
  if (value >= 90 && value <= 100) return "A";
  if (value >= 80 && value < 90) return "B";
  if (value >= 70 && value < 80) return "C";
  if (value >= 60 && value < 70) return "D";

  return "F";
};

// version 1
export const getGrade = (s1: number, s2: number, s3: number) =>
  grade(averageOfNumArray([s1, s2, s3]));

// version 2
export const getGrade2 = (...arg: number[]) =>
  [averageOfNumArray, grade].reduce((state, func) => func(state), arg as any);
