/**
 *
 * @param {number[]} wgt 重量
 * @param {number[]} val 价值
 * @param {number} cap 容量
 * 每个物品只能选择一次...
 * https://www.hello-algo.com/chapter_dynamic_programming/knapsack_problem/
 */
function knapsackDP(wgt, val, cap) {
  const n = wgt.length;
  // dp 数组含义： 在重量为 i 的情况下j 表示容量  [i,j]表示在当前 i 物品重量情况下，j 容量下，最大价值
  const dp = new Array(n + 1).fill(0).map((item) => {
    return new Array(cap + 1).fill(0);
  });
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      // 如果当前容量大于 c，只能选择上一轮的最大价值
      if (wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      } else {
        dp[i][c] = Math.max(
          dp[i - 1][c],
          dp[i - 1][c - wgt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  return dp[n][cap];
}

console.log("价值为::", knapsackDP([1, 2, 3], [5, 11, 15], 4));
