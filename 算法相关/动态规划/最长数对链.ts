function findLongestChain(pairs: number[][]): number {
  const len = pairs.length;
  // 先排序
  pairs.sort((a, b) => {
    return a[0] - b[0];
  });
  // 定义dp[i]代表以 i 结尾的构成最长数队列的长度
  const dp = new Array(len).fill(1);
  // dp[i] = 前面的最大值
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[len - 1];
}

export {};
