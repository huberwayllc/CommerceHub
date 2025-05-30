
export function cartesian(arrays: string[][]): string[][] {
  return arrays.reduce<string[][]>(
    (acc, curr) =>
      acc.flatMap(a => curr.map(c => [...a, c])),
    [[]]
  );
}
