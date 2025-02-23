/**
 * 搜索旋转排序数组
 * leetcode: https://leetcode.cn/problems/search-in-rotated-sorted-array/
 */
function search(nums: number[], target: number): number {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    }

    // 右边区间有序 这里主要是分成两个区间进行处理，单独在区间内进行小型的二分查找
    if (nums[mid] <= nums[right]) {
      if (nums[right] === target) {
        return right;
      }
      if (nums[right] > target && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[left] === target) {
        return left;
      }
      if (nums[left] < target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}
export {};
