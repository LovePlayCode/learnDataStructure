function maxScore(cardPoints: number[], k: number): number {
  let maxVal = 0;
  const n = cardPoints.length;
  // 先全部从最左边取
  for (let i = 0; i < k; i++) {
    maxVal += cardPoints[i];
  }
  let s = maxVal;
  // 左边换出，右边换入, 注意这里有一个小细节 [1,2,3,4,5,6,7] k 如果是 3 的话， 如果我们选择[1,2,3]
  // 当要换出的时候，需要这样换出 [1,2] [7] 也就是说只能换出已选择数组最右侧的元素
  for (let i = 1; i <= k; i++) {
    s = s - cardPoints[k - i] + cardPoints[n - i];

    maxVal = Math.max(s, maxVal);
  }
  return maxVal;
}

export {};
