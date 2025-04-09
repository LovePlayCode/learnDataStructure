/**
 *
 * @param cost 爬楼梯的每一层的花费
 * leetcode: https://leetcode.cn/problems/min-cost-climbing-stairs/
 */
function minCostClimbingStairs(cost: number[]): number {
  const len = cost.length;

  // 设 dp[i] 为爬到 i 阶梯最低花费.
  const dp = new Array(len + 1).fill(0);
  // dp[0] = 0, dp[1] = 0
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= len; i++) {
    // 上一层的最小值  上两层的最小值。  这两者中的最小值. 注意，因为要支付体力，所以需要+cost的价值
    dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2]);
  }

  return dp[len];
}

export {};
