function coinChange(coins, amount) {
  const len = coins.length;
  // 设置一个 dp[i][j] 表示第 i 个物品组成第 j 的价值的最小值
  const dp = new Array(len + 1).fill(0).map((item) => {
    return new Array(amount + 1).fill(amount + 1);
  });

  for (let i = 0; i <= len; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i <= len; i++) {
    const coin = coins[i - 1];
    for (let j = 1; j <= amount; j++) {
      if (j >= coin) {
        // 不选当前元素 选当前元素的最小值
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coin] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[len][amount] === amount + 1 ? -1 : dp[len][amount];
}

export {};
