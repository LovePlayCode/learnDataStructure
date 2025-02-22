/**
 *
 * @param {number[]} wgt
 * @param {number[]} val
 * @param {number} cap
 */
function unboundedKnapsackDP(wgt, val, cap) {
  const n = wgt.length;
  const dp = new Array(n + 1).fill(0).map((item) => {
    return new Array(n + 1).fill(0);
  });

  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      // 当前物品容量超过背包容量，只能选择上一个物品的价值
      if (wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      } else {
        dp[i][c] = Math.max(dp[i - 1][c], dp[i][c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }
  return dp[n][cap];
}
