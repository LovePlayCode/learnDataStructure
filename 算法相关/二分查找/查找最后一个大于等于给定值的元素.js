function bsearch(nums, val) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // console.log(mid);
    if (nums[mid] <= val) {
      left = mid + 1;
      if (mid === nums.length) {
        return mid;
      }
      if (nums[mid + 1] > val) {
        return mid;
      }
      left = mid + 1;
    }
    if (nums[mid] > val) {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 4, 5, 6, 8, 8, 8, 11, 18];
const resData = bsearch(arr, 3);
console.log(resData);
