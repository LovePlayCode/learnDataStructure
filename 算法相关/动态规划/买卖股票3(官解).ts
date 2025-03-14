function maxProfit(prices: number[]): number {
  const len = prices.length;
  // 只执行了一次买操作的最大利润
  let buy1 = -prices[0];
  // 执行了一次买操作和一次卖操作的最大利润
  let sell1 = 0;
  // 完成了一次买操作的前提下，进行第二次买操作
  let buy2 = -prices[0];
  // 完成了全部两笔交易
  let sell2 = 0;
  for (let i = 1; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
}

export {};
