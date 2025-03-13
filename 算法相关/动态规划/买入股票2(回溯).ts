function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let n = prices.length;

  // 通过回溯来解决股票问题。
  const backtrack = (index, hasStock, currentProfit) => {
    if (index === n) {
      maxProfit = Math.max(maxProfit, currentProfit);
      return;
    }
    // 不进行任何操作
    backtrack(index + 1, hasStock, currentProfit);
    if (hasStock) {
      backtrack(index + 1, false, currentProfit + prices[index]);
    } else {
      backtrack(index + 1, true, currentProfit - prices[index]);
    }
  };
  backtrack(0, false, 0);
  return maxProfit;
}

export {};
