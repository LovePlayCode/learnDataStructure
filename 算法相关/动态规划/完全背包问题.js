/**
 *
 * 完全背包问题
 */

/**
 *
 * @param {number[]} wgt
 * @param {number[]} val
 * @param {number} cpp
 */
function unboundedKnapsackDP(wgt, val, cpp) {
  const n = wgt.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: cap + 1 }, () => 0)
  );

  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      if (wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      } else {
        // 因为完全背包可以重复被选取，所以选择的时候可以从第 i 个开始选取。 选择的就是当前的价值 + 减去当前重量的，以前 i 个的价值
        dp[i][c] = Math.max(dp[i - 1][c], dp[i][c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }
}
