/**
 *
 * @param nums
 * @param m
 * @param k
 * 1. 判断几乎唯一子数组
 */
function maxSum(nums: number[], m: number, k: number): number {
  const len = nums.length;
  let sum = 0;
  let count = 0;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(nums[i], map.get(nums[i]) || 0 + 1);
    count += nums[i];
    let left = i - k + 1;
    if (left < 0) {
      // 窗口大小不足 k
      continue;
    }
    if (map.size >= m) {
      sum = Math.max(sum, count);
    }
    const out = nums[left];
    count -= out;
    const c = map.get(out);
    if (c > 1) {
      map.set(out, c - 1);
    } else {
      map.delete(out);
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
      k--;
    } else {
      set.add(item);
    }
  }
  return k >= 0;
}

export {};
