/**
 * 搜索旋转数组 2
 * 二段性: 一段满足，另一段不满足。
 * leetcode: https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/
 */
function search(nums: number[], target: number): boolean {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return true;
    }
    if (nums[right] === nums[mid]) {
      right--;
      continue;
    }
    // 右边区间有序 这里主要是分成两个区间进行处理，单独在区间内进行小型的二分查找
    if (nums[mid] <= nums[right]) {
      if (nums[right] === target) {
        return true;
      }
      if (nums[right] > target && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[left] === target) {
        return true;
      }
      if (nums[left] < target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
}
const num = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1];
const res = search(num, 2);
console.log(res);
export {};
