/**
 *
 * @param nums
 * @param m
 * @param k
 * 1. 判断几乎唯一子数组
 */
function maxSum(nums: number[], m: number, k: number): number {
  const len = nums.length;
  const set = new Set();
  const arr: number[] = [];
  let sum = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    arr.push(nums[i]);
    count += nums[i];
    console.log(arr, count);
    if (i >= k - 1 && isJihuArr(arr, m)) {
      sum = Math.max(sum, count);
      console.log("count====", count, sum, arr);
    }
    if (i >= k - 1) {
      count -= nums[i - k + 1];

      arr.shift();
    }
  }
  return sum;
}

function isJihuArr(arr, k) {
  const set = new Set();
  if (arr.length < k) {
    return false;
  }
  for (let item of arr) {
    if (set.has(item)) {
    } else {
      set.add(item);
      k--;
    }
  }
  return k <= 0;
}

export {};
