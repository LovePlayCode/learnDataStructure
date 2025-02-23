/**
 *
 * 搜索插入指定位置(二分查找)
 * leetcode:  https://leetcode.cn/problems/search-insert-position/
 */
function searchInsert(nums: number[], target: number): number {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left++;
    } else {
      right--;
    }
  }
  return left;
}

export {};
