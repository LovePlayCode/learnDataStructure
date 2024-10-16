/**
 *
 * 动态规划
 */
function climbingStairsDP(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  const dp = new Array(n + 1).fill(-1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
const res = climbingStairsDP(3);
console.log(res);
