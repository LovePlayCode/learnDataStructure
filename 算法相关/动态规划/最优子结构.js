/**
 *
 * 给定一个楼梯，每步可以上1阶或2阶，每阶楼梯上都贴有一个非负整数，表示你在该台阶所需付出的代价。
 * 给定一个cost，其中cost[i]表示i个台阶需要付出代价
 */

/**
 *
 * @param {number[]} cost
 */
function minCostClimbingStairsDP(cost) {
  const n = cost.length - 1;
  if (n === 1 || n === 2) {
    return cost[n];
  }
  dp[1] = cost[1];
  dp[2] = cost[2];
  const dp = new Array(n + 1);
  for (let i = 3; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i]) + cost[i];
  }
  return dp[n];
}

const res = minCostClimbingStairsDP([]);
