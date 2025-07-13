function maxScore(cardPoints: number[], k: number): number {
  // 要算当前数组，从左右两边选元素的最大值， 那么可以看成从剩余元素选择最小的和 也就是：计算长为 n−k 的连续子数组和的最小值。
  const n = cardPoints.length;

  const m = n - k;
  let s = 0;
  for (let i = 0; i < m; i++) {
    s += cardPoints[i];
  }
  let total = s;
  let minVal = s;
  for (let i = m; i < n; i++) {
    total += cardPoints[i];
    s += cardPoints[i] - cardPoints[i - m];
    minVal = Math.min(s, minVal);
  }
  return total - minVal;
}

export {};
