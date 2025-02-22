/* 零钱兑换 II：动态规划 */

/**
 *
 * @param {number[]} coins
 * @param {number} amt
 */
function coinChangeIIDP(coins, amt) {
  const n = coins.length;
  // 初始化 dp 表
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: amt + 1 }, () => 0)
  );
  // 每个硬币组成和为0的方案都有1种
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= amt; a++) {
      // 当前硬币的价值大于当前处理amt本身的值
      if (coins[i - 1] > a) {
        dp[i][a] = dp[i - 1][a];
      } else {
        // 当前选择的方案 + 上一次选择的方案
        dp[i][a] = dp[i - 1][a] + dp[i][a - coins[i - 1]];
      }
    }
  }
  return dp[n][amt];
}

const res = coinChangeIIDP([1, 2, 3], 5);
console.log("结果为::", res);
