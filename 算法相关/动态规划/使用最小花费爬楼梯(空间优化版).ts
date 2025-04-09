/**
 *
 * @param cost 爬楼梯的每一层的花费
 * leetcode: https://leetcode.cn/problems/min-cost-climbing-stairs/
 */
function minCostClimbingStairs(cost: number[]): number {
  const len = cost.length;

  const dp = new Array(3).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < len; i++) {
    // 上一层的最小值  上两层的最小值。  这两者中的最小值. 注意，因为要支付体力，所以需要+cost的价值
    dp[i % 3] = Math.min(cost[i] + dp[(i - 1) % 3], cost[i] + dp[(i - 2) % 3]);
  }
  return Math.min(dp[(len - 1) % 3], dp[(len - 2) % 3]);
}

export {};
