function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  // 结果数组
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) {
      return res;
    }
    // 重复元素，不用处理，直接跳过即可。
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const target = nums[left] + nums[right] + nums[i];
      if (target > 0) {
        right--;
      } else if (target < 0) {
        left++;
      } else {
        res.push([nums[left], nums[right], nums[i]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
}

export {};
