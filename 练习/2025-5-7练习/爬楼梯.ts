function climbStairs(n: number): number {
  // dp[i] 表示爬到第x级台阶的方案数。
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  //   const dp = [1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
export {};
