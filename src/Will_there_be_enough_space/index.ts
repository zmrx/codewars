export const enough = (cap: number, on: number, wait: number) => {
  const result = cap - on - wait;

  return result >= 0 ? 0 : -(result);
}
