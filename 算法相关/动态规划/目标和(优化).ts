/**
 *
 * @param nums
 * @param target
 * @returns
 * leetcode 题解: https://leetcode.cn/problems/target-sum/
 */
function findTargetSumWays(nums: number[], target: number): number {
  let sum =
    nums.reduce((pre, cur) => {
      return pre + cur;
    }, 0) || 0;
  if (Math.abs(target) > sum) {
    return 0;
  }
  // 必须要整除
  if ((sum - target) % 2 !== 0) {
    return 0;
  }
  const len = nums.length;
  const m = (sum - target) / 2;
  // 表示从 nums 中凑出为 j 的方案数， 这个 j 是比较特殊的，具体可以看看题解
  const dp = new Array(len + 1).fill(0).map((item) => {
    return new Array(m + 1).fill(0);
  });
  dp[0][0] = 1;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= m; j++) {
      // 选和不选两种方案
      dp[i][j] += dp[i - 1][j];
      if (j >= nums[i - 1]) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[len][m];
}
export {};
