export const arrayRange = (count: number, startIndex = 0, step = 1) => {
  return Array.from(
    { length: (count - startIndex) / step },
    (value, index) => null,
  );
};
