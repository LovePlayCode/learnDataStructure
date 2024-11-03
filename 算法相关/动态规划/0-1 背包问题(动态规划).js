/**
 * 
 * 给定n个物品，第 i个物品的重量为 wgt[i-1]、价值为 val[i-1]，和一个容量为 
cap的背包。每个物品只能选择一次，问在限定背包容量下能放入物品的最大价值。
 */
/* 0-1 背包：记忆化搜索 */

/**
 *
 * @param {number[]} wgt
 * @param {number[]} val
 * @param {number} cap
 */
function knapsackDP(wgt, val, cap) {
  const n = wgt.length;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(cap + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      if (wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      } else {
        dp[i][c] = Math.max(
          dp[i - 1][c], 
          dp[i - 1][c - wgt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  return dp[n][cap];
}
let wgt = [10, 20, 30, 40, 50]
let val = [50, 120, 150, 210, 240]
let cap = 50
const res = knapsackDP(wgt,val,cap)
console.log('res==',res)