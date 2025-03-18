/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
   子数组是数组中的一个连续部分。
 * @param nums 
 * https://leetcode.cn/problems/maximum-subarray/description/ 
 */
function maxSubArray(nums: number[]): number {
  const len = nums.length;
  // 用于保存上一次的结果，结果只跟上一次结果有关
  let pre = nums[0];
  let maxVal = pre;
  for (let i = 1; i < len; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    maxVal = Math.max(maxVal, pre);
  }
  return maxVal;
}
export {};
