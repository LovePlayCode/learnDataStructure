/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!Array.isArray(nums)) {
    throw new TypeError("类型错误~");
  }
  const first = FirstIndex(nums, target, 0, nums.length - 1);
  const last = GetNumberOfLast(nums, target, 0, nums.length - 1);
  return [first, last];
};

function FirstIndex(nums, target, left, right) {
  if (left > right) {
    return -1;
  }
  const mid = (left + right) >> 1;
  console.log(mid);
  if (nums[mid] === target) {
    if ((mid > 0 && nums[mid - 1] !== target) || mid === 0) {
      return mid;
    } else {
      right = mid - 1;
    }
  } else if (nums[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
  return FirstIndex(nums, target, left, right);
}

function GetNumberOfLast(nums, k, left, right) {
  if (left > right) {
    return -1;
  }
  const mid = (left + right) >> 1;
  const curVal = nums[mid];
  if (curVal === k) {
    if (
      (mid < nums.length - 1 && nums[mid + 1] !== k) ||
      mid === nums.length - 1
    ) {
      return mid;
    } else {
      left = mid + 1;
    }
  } else if (curVal > k) {
    right = mid - 1;
  } else {
    left = left + 1;
  }
  return GetNumberOfLast(nums, k, left, right);
}

console.log(searchRange([1, 4], 4));
