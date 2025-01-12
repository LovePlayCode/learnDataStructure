let count = 0;

function mergeNumber(nums, left, right) {
  if (left >= right - 1) {
    return; // 左闭右开，当区间只有一个元素时直接返回
  }
  const mid = (left + right) >> 1;
  mergeNumber(nums, left, mid); // 递归处理左半部分
  mergeNumber(nums, mid, right); // 递归处理右半部分
  merge(nums, left, mid, right); // 合并两个部分
}

function merge(nums, left, mid, right) {
  let i = left;
  let j = mid;
  const temp = new Array(right - left);
  let curTempIndex = 0;

  // 合并两个有序区间 [left, mid) 和 [mid, right)
  while (i < mid && j < right) {
    if (nums[i] <= nums[j]) {
      temp[curTempIndex++] = nums[i++];
    } else {
      count += mid - i;
      temp[curTempIndex++] = nums[j++];
    }
  }
  while (i < mid) {
    temp[curTempIndex++] = nums[i++];
  }
  while (j < right) {
    temp[curTempIndex++] = nums[j++];
  }

  // 将临时数组中的元素拷贝回原数组
  for (let index = 0; index < temp.length; index++) {
    nums[left + index] = temp[index];
  }
}

function main(nums) {
  mergeNumber(nums, 0, nums.length);
  return nums;
}

const res = main([7, 5, 6, 4]);
console.log("res===", res, count); // 输出 [4, 5, 6, 7]
