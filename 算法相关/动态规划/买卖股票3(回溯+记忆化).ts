function maxProfit(prices: number[]): number {
  const len = prices.length;
  const memo = new Map(); // 记忆化搜索
  const dfs = (index: number, transactions: number, holding: number) => {
    if (index >= len || transactions >= 2) {
      return 0;
    }
    const key = `${index}-${transactions}-${holding}`;
    if (memo.has(key)) return memo.get(key);
    // 什么都不干，直接往下走
    let maxPrice = dfs(index + 1, transactions, holding) || 0;
    // 如果当前持有股票
    if (holding) {
      // 可以卖掉，然后交易数+1，且改变持股的状态
      maxPrice = Math.max(
        maxPrice,
        prices[index] + dfs(index + 1, transactions + 1, 0)
      );
    } else {
      // 当前没持有股票
      maxPrice = Math.max(
        maxPrice,
        -prices[index] + dfs(index + 1, transactions, 1)
      );
    }
    memo.set(key, maxPrice);
    return maxPrice;
  };
  return dfs(0, 0, 0);
}

export {};
