function findTargetSumWays(nums: number[], target: number): number {
  let sum =
    nums.reduce((pre, cur) => {
      return pre + cur;
    }, 0) || 0;
  if (Math.abs(target) > sum) {
    return 0;
  }
  const len = nums.length;
  // 表示前 i个数可以组成 j 的方案
  const dp = new Array(len + 1).fill(0).map((item) => {
    return new Array(2 * sum + 1).fill(0);
  });

  // 代表前 i 凑出 0 的方案为 1
  dp[0][0 + sum] = 1;
  console.log("sum==", sum, dp);
  for (let i = 1; i <= len; i++) {
    let x = nums[i - 1];
    for (let j = -sum; j <= sum; j++) {
      if (j - x + sum >= 0) {
        dp[i][j + sum] += dp[i - 1][j - x + sum];
      }
      if (j + x + sum <= 2 * sum) {
        dp[i][j + sum] += dp[i - 1][j + x + sum];
      }
    }
  }
  console.log("sum==", sum, dp);
  return dp[len][target + sum];
}
export {};
