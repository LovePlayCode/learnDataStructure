function threeSumClosest(nums: number[], target: number): number {
  const len = nums.length;
  // 排序原数组
  nums.sort((a, b) => a - b);
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const targetNum = nums[left] + nums[right] + nums[i];
      res =
        Math.abs(targetNum - target) < Math.abs(res - target) ? targetNum : res;
      if (targetNum > target) {
        right--;
      } else if (targetNum < target) {
        left++;
      } else {
        return targetNum;
      }
    }
  }
  return res;
}

export {};
