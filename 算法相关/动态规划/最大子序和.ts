/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
   子数组是数组中的一个连续部分。
 * @param nums 
 * https://leetcode.cn/problems/maximum-subarray/description/ 
 */
function maxSubArray(nums: number[]): number {
  const len = nums.length;
  // dp[i] 表示：以 nums[i] 结尾的连续子数组的最大和
  const dp = new Array(len).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    // 考虑nums[i]单独成为一段还是加入f(i-1)对应的那一段。 下面是一个动态转移的方程
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
}
export {};
