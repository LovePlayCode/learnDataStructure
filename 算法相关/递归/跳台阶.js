/**
 *
 * @param {number} n
 * @returns
 * 可以用动态规划实现
 * 动态规划的状态转移方程为:
 * dp[i] = dp[i-1] + dp[i-2] + ... + dp[i-n]
 */
function numWays(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let j = 2; j <= n; j++) {
    for (let i = 1; i <= j && i <= n; i++) {
      dp[j] += dp[j - i];
    }
  }
  return dp[n];
}

const num = numWays(4);
console.log(num);
