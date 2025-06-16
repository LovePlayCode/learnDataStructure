function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let curIndex = 0; curIndex < len - 2; curIndex++) {
    if (nums[curIndex] > 0) {
      return res;
    }
    // 先对当前元素去重
    while (nums[curIndex] === nums[curIndex + 1]) {
      curIndex = curIndex + 1;
    }
    let left = curIndex + 1;
    let right = len - 1;
    while (left < right) {
      const target = nums[left] + nums[right] + nums[curIndex];
      if (target === 0) {
        res.push([nums[left] + nums[right] + nums[curIndex]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (target < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

export {};
