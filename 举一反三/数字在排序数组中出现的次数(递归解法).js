// 找到第一个数的索引
function GetFirstK(nums, target, start, end) {
  if (start > end) {
    return -1;
  }
  const mid = (start + end) >> 1;

  const midData = nums[mid];
  if (midData === target) {
    if ((mid > 0 && nums[mid - 1] !== target) || mid === 0) {
      return mid;
    } else {
      end = mid - 1;
    }
  } else if (midData > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
  return GetFirstK(nums, target, start, end);
}

// 找到最后的索引
function GetEndK(nums, target, start, end) {
  if (start > end) {
    return -1;
  }
  const mid = (start + end) >> 1;
  const midData = nums[mid];
  if (midData === target) {
    if (
      (mid < nums.length - 1 && nums[mid + 1] !== target) ||
      mid === nums.length - 1
    ) {
      return mid;
    } else {
      start = mid + 1;
    }
  } else if (midData > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
  return GetEndK(nums, target, start, end);
}

/**
 *
 * @param {number[]} nums
 */
function GetNumberOfK(nums, target) {
  const first = GetFirstK(nums, target, 0, nums.length - 1);
  const end = GetEndK(nums, target, 0, nums.length - 1);
  return end - first + 1;
}

const nums = GetNumberOfK([1, 2, 3, 3, 3, 3, 4, 5], 3);
console.log(nums);
