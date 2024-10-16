/**
 *
 * 动态规划
 */
function climbingStairsDP(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
    // dp[i] = dp[i - 1] + dp[i - 2];
  }
  return b;
}
const res = climbingStairsDP(3);
console.log(res);
