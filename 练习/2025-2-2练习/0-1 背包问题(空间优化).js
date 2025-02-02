/* 0-1 背包：空间优化后的动态规划 */
function knapsackDPComp(wgt, val, cap) {
  const n = wgt.length;
  // 初始化 dp 表
  const dp = Array(cap + 1).fill(0);
  // 状态转移
  for (let i = 1; i <= n; i++) {
    // 倒序遍历
    // 倒序的原因：总共分为选择和不选，正序遍历会重复选，导致状态不对
    // 倒序的话，每次更新dp[c]时，只会受到上一次迭代的影响，不受当前物品的影响。
    for (let c = cap; c >= 1; c--) {
      if (wgt[i - 1] <= c) {
        // 不选和选物品 i 这两种方案的较大值
        dp[c] = Math.max(dp[c], dp[c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }

  return dp[cap];
}

console.log("价值为::", knapsackDPComp([1, 2, 3], [5, 11, 15], 4));
