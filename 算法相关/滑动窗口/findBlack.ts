function minimumRecolors(blocks: string, k: number): number {
  const len = blocks.length;
  let right = 0;
  let minVal = 0;
  for (let left = 0; left < k; left++) {
    if (blocks[left] === "W") {
      minVal++;
    }
  }
  let curVal = minVal;
  for (let i = k; i < len; i++) {
    if (blocks[i] === "W") {
      curVal++;
    }
    if (blocks[i - k] === "W") {
      curVal--;
    }
    minVal = Math.min(curVal, minVal);
  }
  return minVal;
}

export {};
