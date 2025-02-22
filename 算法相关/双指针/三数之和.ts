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
    // 如果有重复的元素，直接跳过。 其实第一个元素已经被使用过了，所以可以直接跳过后面的元素
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
        // 在这里处理的时候，元素正好是重复元素后一位的元素，所以整个逻辑是没问题的。
        left++;
        right--;
      }
    }
  }
  return res;
}
export {};
