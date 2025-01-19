/**
 * “：统计一个数字在排序数组中出现的次数。例如输入排序数组｛1,2,3,3,3,4,5｝和数字3，
 * 由于3在这个数组中出现了4次，因此输出4。”
 * @param {number[]} nums
 * @param {number} k
 */
function GetNumberOfK(nums, k) {
  const first = GetNumberOfFirst(nums, k, 0, nums.length - 1);
  const last = GetNumberOfLast(nums, k, 0, nums.length - 1);
  return last - first + 1;
}

// 1. 找到中间的元素
// 2. 如果当前元素是第一个元素(索引为 0)，
// 或者当前元素的前一个元素不是要找的元素，那么是符合条件的，直接返回即可。反之right-1
// 3. 如果中间元素大于 K，那么需要 midIndex-1,反之需要 midIndex+1
function GetNumberOfFirst(nums, k, left, right) {
  if (left > right) {
    return -1;
  }
  const mid = (left + right) >> 1;
  const curVal = nums[mid];
  if (curVal === k) {
    if ((mid > 1 && nums[mid - 1] !== k) || mid === 0) {
      return mid;
    } else {
      right = mid - 1;
    }
  } else if (curVal > k) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
  return GetNumberOfFirst(nums, k, left, right);
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

const nums = GetNumberOfK([1, 2, 3, 3, 3, 3, 4, 5], 1);
console.log(nums);
