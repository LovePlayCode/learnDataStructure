function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  const map = new Map();
  map.set(0, 0);
  map.set(1, 0);
  const n = customers.length;
  let maxS1 = 0;
  for (let i = 0; i < n; i++) {
    map.set(grumpy[i], map.get(grumpy[i]) + customers[i]);
    const left = i - minutes + 1;

    if (left < 0) {
      continue;
    }
    console.log(maxS1, map.get(1));
    maxS1 = Math.max(map.get(1), maxS1);

    if (grumpy[left] === 1) {
      map.set(1, map.get(1) - customers[left]);
    }
  }
  return map.get(0) + maxS1;
}

export {};
