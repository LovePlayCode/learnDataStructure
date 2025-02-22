/**
 * 完全背包问题，空间优化版本
 * @param {number[]} wgt
 * @param {number[]} val
 * @param {number} cap
 */
function unboundedKnapsackDP(wgt, val, cap) {
  const n = wgt.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      // 当前物品容量超过背包容量，只能选择上一个物品的价值
      if (wgt[i - 1] > c) {
        dp[c] = dp[c];
      } else {
        dp[c] = Math.max(dp[c], dp[c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }

  return dp[cap];
}
