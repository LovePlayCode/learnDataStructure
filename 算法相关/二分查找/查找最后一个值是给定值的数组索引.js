function bsearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < val) {
      left = mid + 1;
    }
    if (arr[mid] > val) {
      right = mid - 1;
    }
    if (nums[mid] === val) {
      if (mid === arr.length - 1) {
        return mid;
      }
      if (nums[mid + 1] !== val) {
        return mid;
      }
      left = mid + 1;
    }
  }
}
