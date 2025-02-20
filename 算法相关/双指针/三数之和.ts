/**
 * 三数之和
 * leetcode: https://leetcode.cn/problems/3sum/
 */
function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  // 结果数组
  const res: number[][] = [];
  // 排序原数组
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) {
      return res;
    }
    // 如果有重复的元素，直接跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const target = nums[left] + nums[right] + nums[i];
      if (target > 0) {
        right--;
      } else if (target < 0) {
        left++;
      } else {
        res.push([nums[left], nums[right], nums[i]]);
        // 进行去重 结束的时候 left 正好是最后一个重复元素的位置
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // right 同理
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
}
export {};
