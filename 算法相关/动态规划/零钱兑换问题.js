function coinChange(coins, amt) {
  const n = coins.length;
  const dp = Array.from({ length: n + 1 }, () => Array(amt + 1).fill(Infinity));

  // 初始化
  for (let i = 0; i <= n; i++) dp[i][0] = 0;

  // 填表
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amt; j++) {
      // 当前目标金额大于硬币价值，才可以状态转移，否则用之前的
      if (j >= coins[i - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][amt] === Infinity ? -1 : dp[n][amt];
}

// 测试用例
console.log("最少硬币数量：", coinChange([1, 2, 5], 11)); // 输出 3
console.log("无法凑出目标金额：", coinChange([2], 3)); // 输出 -1
