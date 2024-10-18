/**
 *
 * 给定一个共有n阶的楼梯，每步可以上1阶或2阶，但不能连续跳1阶，有多少种方案
 * // 1. 状态转移方程
 * // 2. 定义dp[i]  像做数学题一样
 * dp[i][j] 表示在i层下，j是第几步走上来的
 * dp[i][1] = dp[i-1,2]
 * dp[i][2] = dp[i-2,1] + dp[i-2,2]
 * dp[i][j] = dp[n][1] = dp[n][2]
 */

function climbingStairsConstraintDP(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  // 初始化dp数组
  const dp = Array.from(new Array(n + 1), () => new Array(3));
  // 初始化状态变量
  dp[1][1] = 1;
  dp[1][2] = 0;
  dp[2][1] = 0;
  dp[2][2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i][1] = dp[i - 1][2];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
  }
  return dp[n][1] + dp[n][2];
}
const res = climbingStairsConstraintDP(3);
console.log("res==", res);
