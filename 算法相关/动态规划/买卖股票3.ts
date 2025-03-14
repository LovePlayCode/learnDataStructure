function maxProfit(prices: number[]): number {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }

  // dp表示在i天，第二维的 1 表示买入了股票一次，2 表示买入了股票两次。 第三维0 表示当前不持股，1 表示当前持股
  const dp = new Array(len).fill(0).map((item) => {
    return new Array(3).fill(0).map((item) => {
      return Array(2).fill(0);
    });
  });
  dp[0][0][0] = 0;
  // 表示买入一次股票，持股状态
  dp[0][1][1] = -prices[0];
  // 表示买入两次股票，持股状态 负无穷
  dp[0][2][1] = -Infinity;
  for (let i = 1; i < len; i++) {
    dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);
    // 当前买入一次并且持股，只能是持当前股
    dp[i][1][1] = Math.max(dp[i - 1][1][1], -prices[i]);
    // 当前买入两次，没持股 之前就没持股, 之前持股，现在卖了
    dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i]);
    // 之前买入两次，现在是持股状态, 有一种情况是，第一次不持股，买入第二次
    dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i]);
  }

  // 两个都是不持股状态的最终值。
  return Math.max(dp[len - 1][1][0], dp[len - 1][2][0]);
}

export {};
