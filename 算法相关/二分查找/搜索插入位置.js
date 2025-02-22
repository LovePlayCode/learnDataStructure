/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!Array.isArray(nums)) {
    throw new TypeError("类型错误~");
  }
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
