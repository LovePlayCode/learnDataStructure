function bsearch(nums, val) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 如果 left 超过了 right，说明找到第一个大于等于 val 的位置
  return left < n && nums[left] >= val ? left : -1;
}

const arr = [1, 3, 4, 5, 6, 8, 8, 8, 11, 18];
const resData = bsearch(arr, 3);
const arr2 = [3, 3, 3, 3, 3, 3, 3];
const resData2 = bsearch(arr2, 3);
console.log(resData, resData2); // 输出 1，因为 3 第一个大于等于 3 的位置是索引 1
