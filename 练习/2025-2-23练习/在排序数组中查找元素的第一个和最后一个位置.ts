/**
 *
 * 在排序数组中查找元素的第一个和最后一个位置
 * leetcode: https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */

function searchRange(nums: number[], target: number): number[] {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  const first = FirstIndex(nums, target, left, right);
  const second = LastIndex(nums, target, left, right);
  return [first, second];
}

// 找到第一个出现的位置
function FirstIndex(
  nums: number[],
  target: number,
  left: number,
  right: number
) {
  if (left > right) {
    return -1;
  }
  const mid = (left + right) >> 1;
  if (nums[mid] === target) {
    if (mid === 0 || (mid > 0 && nums[mid] !== nums[mid - 1])) {
      return mid;
    } else {
      right = mid - 1;
    }
  } else if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  return FirstIndex(nums, target, left, right);
}
function LastIndex(
  nums: number[],
  target: number,
  left: number,
  right: number
) {
  if (left > right) {
    return -1;
  }
  const mid = (left + right) >> 1;
  if (nums[mid] === target) {
    if (
      mid === nums.length - 1 ||
      (mid < nums.length - 1 && nums[mid] !== nums[mid + 1])
    ) {
      return mid;
    } else {
      left = mid + 1;
    }
  } else if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  return LastIndex(nums, target, left, right);
}

export {};
