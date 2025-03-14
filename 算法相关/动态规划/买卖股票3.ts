function maxProfit(prices: number[]): number {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }

  // dp表示在i天，第二维的 1 表示交易了一次，2 表示交易了两次。 第三维0 表示当前不持股，1 表示当前持股
  const dp = new Array(len).fill(0).map((item) => {
    return new Array(3).fill(0).map((item) => {
      return Array(2).fill(0);
    });
  });
  console.log(dp);
  return 1;
}
maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
export {};
