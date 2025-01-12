function merge_arr(nums, left, mid, right) {
  let i = left;
  let j = mid + 1;
  const temp = [];
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp.push(nums[i++]);
    } else {
      count += mid - i + 1;
      temp.push(nums[j++]);
    }
  }
  while (i <= mid) {
    temp.push(nums[i++]);
  }
  while (j <= right) {
    temp.push(nums[j++]);
  }
  for (let i = left, t = 0; i <= right; i++, t++) {
    nums[i] = temp[t];
  }
}

function merge_sort(nums, left, right) {
  if (left >= right) {
    return;
  }
  const mid = (right + left) >> 1;
  merge_sort(nums, left, mid);
  merge_sort(nums, mid + 1, right);
  merge_arr(nums, left, mid, right);
}

function merge(nums, len) {
  merge_sort(nums, 0, len - 1);
  console.log(nums);
}
let count = 0;
const arr = [7, 5, 6, 4];
const res = merge(arr, arr.length);
console.log(count);
