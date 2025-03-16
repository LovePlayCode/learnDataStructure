/**
 *
 * @param prices
 * @returns
 * 做动态规划还是要想明白状态转移方程，这样才可以事半功倍。
 */
function maxProfit(prices: number[]): number {
  const len = prices.length;

  // 第一维表示第几天，第二维0,1,2 分别表示持有股票，不持有股票，处于冷冻期，不持股，不处于冷冻期
  // dp[i][j] 表示满足条件的最大利润
  const dp = new Array(len).fill(0).map((item) => {
    return new Array(3).fill(0);
  });

  dp[0][0] = -prices[0];

  for (let i = 1; i < len; i++) {
    // 当前持股 前一天持股 | 前一天不持股且不是冷静期可以买
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    // 当前不持股处于冷冻期，说明卖股票了，只能是前一天
    dp[i][1] = dp[i - 1][0] + prices[i];
    // 当前不持股且不是冷静期,i-1也必须是不持股的，如果是持股的状态卖了，那么i天就是冷冻期了
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
  console.log(dp);
  return Math.max(dp[len - 1][1], dp[len - 1][2]);
}

export {};
