function coinChange(coins, amount) {
  // 设dp[i]表示凑齐总价值 i 所需要的最小硬币的个数. 初始化的时候给一个不可能的值
  const dp = new Array(amount + 1).fill(amount + 1);

  // 硬币凑成 0的价值的硬币数为 0，所以这个是符合预期的。
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

export {};
