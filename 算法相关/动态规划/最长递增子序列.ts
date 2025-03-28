/**
 * @param nums 数组
 * 最长递增子序列
 * https://leetcode.cn/problems/longest-increasing-subsequence/
 */
function lengthOfLIS(nums: number[]): number {
  const len = nums.length;
  // 以 nums[i] 结尾 的「上升子序列」的长度
  // 周五水
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}

export {};
